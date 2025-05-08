import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, CalendarDays, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Example courses data
// In a real application, this would come from Supabase
const courses = [
  {
    id: 1,
    title: 'PTE Academic Complete Preparation',
    description: 'Comprehensive coaching covering all four communicative skills: speaking, writing, reading and listening.',
    image: 'https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 499,
    duration: '8 weeks',
    badge: 'Most Popular',
    slug: 'pte-complete-preparation',
    features: [
      'Full-length mock tests',
      'One-on-one feedback sessions',
      'Small batch sizes (max 10 students)',
      'Exam strategies and tips',
      'Extended access to online resources',
    ],
  },
  {
    id: 2,
    title: 'NAATI CCL Intensive Course',
    description: 'Focused preparation for the NAATI Credentialed Community Language (CCL) test with expert instructors.',
    image: 'https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 599,
    duration: '6 weeks',
    slug: 'naati-ccl-intensive',
    features: [
      'Dialog practice sessions',
      'NAATI format familiarity training',
      'Vocabulary and ethics modules',
      'Weekly mock tests with feedback',
      'Cultural context guidance',
    ],
  },
  {
    id: 3,
    title: 'PTE Express Course',
    description: 'Fast-track PTE preparation designed for busy professionals with focused strategies and practice.',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 299,
    duration: '4 weeks',
    badge: 'Fast-Track',
    slug: 'pte-express-course',
    features: [
      'Weekend intensive sessions',
      'Score improvement techniques',
      'Section-specific strategies',
      'Practice tests with analysis',
      'Exam day preparation',
    ],
  },
];

export function Courses() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <Container>
        <SectionHeading
          title="Our Coaching Programs"
          subtitle="Tailored preparation programs designed to help you achieve your language certification goals"
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-card border border-border rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {course.badge && (
                  <Badge variant="secondary" className="absolute top-4 left-4 bg-orange-500 text-white hover:bg-orange-600">
                    {course.badge}
                  </Badge>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{course.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="text-lg font-bold">${course.price}</div>
                </div>
                
                <div className="border-t border-border pt-4 mb-4">
                  <h4 className="font-medium mb-2">What's included:</h4>
                  <ul className="space-y-2">
                    {course.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {course.features.length > 3 && (
                      <li className="text-sm text-muted-foreground">
                        +{course.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Button asChild className="w-full">
                    <Link href={`/courses/${course.slug}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/courses">
            <Button variant="outline" size="lg">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}