import { Container } from '@/components/ui/container';
import { CheckCircle2 } from 'lucide-react';

export function Mission() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Our Mission" 
              className="rounded-xl shadow-xl object-cover w-full aspect-[4/3]"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Our Mission and Values</h2>
            
            <p className="text-muted-foreground mb-8">
              At Alpha PTE and NAATI, we are committed to providing exceptional language coaching services that empower individuals to achieve their academic and professional goals. Our approach is centered around personalized attention, proven methodologies, and continuous improvement.
            </p>
            
            <div className="space-y-4">
              <div className="flex">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Excellence in Education</h3>
                  <p className="text-muted-foreground">We strive for excellence in everything we do, from curriculum development to individual coaching sessions.</p>
                </div>
              </div>
              
              <div className="flex">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Student-Centered Approach</h3>
                  <p className="text-muted-foreground">We tailor our coaching to meet the unique needs and learning styles of each student.</p>
                </div>
              </div>
              
              <div className="flex">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Integrity and Transparency</h3>
                  <p className="text-muted-foreground">We operate with honesty, providing clear information about our services and expected outcomes.</p>
                </div>
              </div>
              
              <div className="flex">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Innovation in Teaching</h3>
                  <p className="text-muted-foreground">We continuously update our methods and materials to incorporate the latest educational research and exam patterns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}