"use client";

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Example testimonials data
// In a real application, this would come from Supabase
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    message: 'The PTE coaching at Alpha helped me achieve a score of 79+ in just 3 weeks! The strategies and mock tests were incredibly helpful.',
    rating: 5,
    courseType: 'pte',
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    message: 'I passed my NAATI CCL exam on the first attempt thanks to Alpha\'s comprehensive preparation. The dialog practice sessions were excellent.',
    rating: 5,
    courseType: 'naati',
  },
  {
    id: 3,
    name: 'Lin Zhang',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    message: 'After struggling with PTE for months, Alpha\'s coaching made all the difference. Their tips for speaking and writing sections were invaluable.',
    rating: 4,
    courseType: 'pte',
  },
  {
    id: 4,
    name: 'Ahmed Hassan',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    message: 'The NAATI preparation was outstanding. The instructors provided detailed feedback and the practice materials were spot on.',
    rating: 5,
    courseType: 'naati',
  },
  {
    id: 5,
    name: 'Maria Rodriguez',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    message: 'I improved my PTE score from 65 to 82 after just one month of coaching at Alpha. The personalized attention made all the difference.',
    rating: 5,
    courseType: 'pte',
  },
];

export function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pte' | 'naati'>('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredTestimonials, setFilteredTestimonials] = useState(testimonials);
  const itemsPerPage = 3;
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTestimonials(testimonials);
    } else {
      setFilteredTestimonials(testimonials.filter(t => t.courseType === activeFilter));
    }
    setCurrentPage(0);
  }, [activeFilter]);
  
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const currentItems = filteredTestimonials.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );
  
  const nextPage = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  };
  
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Student Success Stories"
          subtitle="Hear from our students who have achieved their language goals with our coaching"
          centered
        />
        
        <div className="flex justify-center space-x-2 mb-10">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
            className="rounded-full"
          >
            All Testimonials
          </Button>
          <Button
            variant={activeFilter === 'pte' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('pte')}
            className="rounded-full"
          >
            PTE Academic
          </Button>
          <Button
            variant={activeFilter === 'naati' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('naati')}
            className="rounded-full"
          >
            NAATI CCL
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "h-4 w-4", 
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        )} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground flex-grow">"{testimonial.message}"</p>
              
              <div className="mt-4">
                <span className={cn(
                  "py-1 px-3 rounded-full text-xs font-medium",
                  testimonial.courseType === 'pte' 
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" 
                    : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                )}>
                  {testimonial.courseType === 'pte' ? 'PTE Academic' : 'NAATI CCL'}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 space-x-2">
            <Button variant="outline" size="icon" onClick={prevPage}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <span className="text-sm text-muted-foreground">
              Page {currentPage + 1} of {totalPages}
            </span>
            
            <Button variant="outline" size="icon" onClick={nextPage}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}