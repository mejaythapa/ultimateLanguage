"use client";

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase';

const courses = [
  { id: 1, name: 'PTE Academic Complete Preparation', type: 'pte' },
  { id: 2, name: 'PTE Express Course', type: 'pte' },
  { id: 3, name: 'NAATI CCL Intensive Course', type: 'naati' },
  { id: 4, name: 'Weekend NAATI Workshop', type: 'naati' },
  { id: 5, name: 'PTE & NAATI Combined Package', type: 'combined' },
];

export function BookingForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCourseType, setSelectedCourseType] = useState<string>('all');
  const [date, setDate] = useState<Date | undefined>();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseId: '',
    message: '',
  });

  const filteredCourses = selectedCourseType === 'all' 
    ? courses 
    : courses.filter(course => course.type === selectedCourseType);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        title: "Date required",
        description: "Please select your preferred date",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // In a real implementation, this would send data to Supabase
      // const { error } = await supabase.from('bookings').insert([
      //   {
      //     name: formData.name,
      //     email: formData.email,
      //     phone: formData.phone,
      //     course_id: parseInt(formData.courseId),
      //     preferred_date: date.toISOString(),
      //     message: formData.message,
      //     status: 'pending',
      //   }
      // ]);
      
      // if (error) throw error;
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you shortly to confirm your booking.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        courseId: '',
        message: '',
      });
      setDate(undefined);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Your booking could not be submitted. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <div className="max-w-3xl mx-auto">
        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-2 font-serif">Book a Session</h2>
          <p className="text-muted-foreground mb-8">
            Fill out the form below to book a consultation or coaching session with our experts.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Course Type</Label>
              <RadioGroup
                value={selectedCourseType}
                onValueChange={setSelectedCourseType}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all" className="cursor-pointer">All</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pte" id="pte" />
                  <Label htmlFor="pte" className="cursor-pointer">PTE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="naati" id="naati" />
                  <Label htmlFor="naati" className="cursor-pointer">NAATI</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="combined" id="combined" />
                  <Label htmlFor="combined" className="cursor-pointer">Combined</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="courseId">Select Course</Label>
              <select
                id="courseId"
                name="courseId"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={formData.courseId}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a course</option>
                {filteredCourses.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => {
                      // Disable dates in the past
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today;
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your goals and any specific requirements"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Book Session'}
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
}