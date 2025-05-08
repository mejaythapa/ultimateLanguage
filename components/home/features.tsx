import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { MoveRight, BookOpen, Trophy, Calendar, Users2, Headphones, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: 'Expert Coaching',
    description: 'Our experienced instructors provide personalized guidance tailored to your needs.',
    badge: 'Popular',
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: 'Proven Results',
    description: '95% of our students achieve their target scores in PTE and NAATI examinations.',
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: 'Flexible Scheduling',
    description: 'Choose from online, weekend, or evening classes that fit your busy schedule.',
  },
  {
    icon: <Users2 className="h-10 w-10 text-primary" />,
    title: 'Small Batch Sizes',
    description: 'Limited students per batch ensures personalized attention and better learning.',
  },
  {
    icon: <Headphones className="h-10 w-10 text-primary" />,
    title: 'Mock Tests',
    description: 'Practice with full-length mock tests that simulate the actual exam environment.',
  },
  {
    icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
    title: 'Study Materials',
    description: 'Get access to comprehensive study materials, practice questions, and resources.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionHeading
          title="Why Choose Alpha PTE & NAATI"
          subtitle="We offer comprehensive coaching and resources to help you succeed in your language certification journey"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card shadow-sm rounded-xl p-6 border border-border flex flex-col h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-5 flex justify-between items-start">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {feature.icon}
                </div>
                {feature.badge && (
                  <Badge variant="secondary" className="bg-orange-500 text-white hover:bg-orange-600">
                    {feature.badge}
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/about" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Learn more about our teaching methodology
            <MoveRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}