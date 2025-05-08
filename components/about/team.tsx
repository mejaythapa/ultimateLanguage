import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const team = [
  {
    name: 'Dr. Emily Chen',
    role: 'PTE Program Director',
    image: 'https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'PhD in Applied Linguistics with over 10 years of experience in language education. Emily has helped hundreds of students achieve their target PTE scores.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'NAATI Lead Instructor',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'NAATI Certified Translator with expertise in community language testing. Michael has been teaching NAATI CCL preparation for over 6 years.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Speaking Skills Coach',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Specialized in pronunciation and fluency training. Sarah focuses on helping students overcome speaking challenges in both PTE and NAATI exams.',
  },
  {
    name: 'David Kumar',
    role: 'Writing Instructor',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Master\'s in English Literature with specific expertise in academic writing. David helps students master the writing sections of language exams.',
  },
];

export function Team() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionHeading
          title="Meet Our Expert Instructors"
          subtitle="Our team of experienced educators is dedicated to helping you achieve your language goals"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}