import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const stats = [
  {
    value: '95%',
    label: 'Success Rate',
    description: 'of our students achieve their target scores',
  },
  {
    value: '7+',
    label: 'Years',
    description: 'of experience in language coaching',
  },
  {
    value: '10,000+',
    label: 'Students',
    description: 'successfully coached since our inception',
  },
  {
    value: '4.9/5',
    label: 'Rating',
    description: 'average student satisfaction score',
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <Container>
        <SectionHeading
          title="Our Success in Numbers"
          subtitle="We take pride in our track record of helping students achieve their language certification goals"
          centered
          className="text-primary-foreground"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-primary-foreground mb-1">{stat.label}</div>
              <p className="text-primary-foreground/80 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}