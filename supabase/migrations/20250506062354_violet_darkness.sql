/*
  # Insert sample data for Ula PTE & NAATI website
  
  1. Sample Data
    - Courses
    - Testimonials
    - Blog posts
  
  This migration seeds the database with initial content.
*/

-- Sample Courses
INSERT INTO courses (title, slug, description, course_type, price, duration, image_url, features)
VALUES
  (
    'PTE Academic Complete Preparation',
    'pte-complete-preparation',
    'Comprehensive coaching covering all four communicative skills: speaking, writing, reading and listening.',
    'pte',
    499.00,
    '8 weeks',
    'https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    '["Full-length mock tests", "One-on-one feedback sessions", "Small batch sizes (max 10 students)", "Exam strategies and tips", "Extended access to online resources"]'
  ),
  (
    'PTE Express Course',
    'pte-express-course',
    'Fast-track PTE preparation designed for busy professionals with focused strategies and practice.',
    'pte',
    299.00,
    '4 weeks',
    'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    '["Weekend intensive sessions", "Score improvement techniques", "Section-specific strategies", "Practice tests with analysis", "Exam day preparation"]'
  ),
  (
    'NAATI CCL Intensive Course',
    'naati-ccl-intensive',
    'Focused preparation for the NAATI Credentialed Community Language (CCL) test with expert instructors.',
    'naati',
    599.00,
    '6 weeks',
    'https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    '["Dialog practice sessions", "NAATI format familiarity training", "Vocabulary and ethics modules", "Weekly mock tests with feedback", "Cultural context guidance"]'
  ),
  (
    'Weekend NAATI Workshop',
    'weekend-naati-workshop',
    'Intensive weekend workshops focusing on NAATI CCL dialog practice and exam techniques.',
    'naati',
    399.00,
    '4 weekends',
    'https://images.pexels.com/photos/7942915/pexels-photo-7942915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    '["Intensive practice sessions", "Focused dialog exercises", "Personalized feedback", "Exam strategies", "Practice test simulations"]'
  ),
  (
    'PTE & NAATI Combined Package',
    'pte-naati-combined',
    'Comprehensive preparation for both PTE Academic and NAATI CCL tests with a discounted combined package.',
    'combined',
    899.00,
    '12 weeks',
    'https://images.pexels.com/photos/4225233/pexels-photo-4225233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    '["Preparation for both exams", "Cost savings over individual courses", "Flexible scheduling", "Complete study materials", "Priority access to instructors"]'
  );

-- Sample Testimonials
INSERT INTO testimonials (name, image_url, message, rating, course_type)
VALUES
  (
    'Sarah Johnson',
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'The PTE coaching at Ultimate Laguage Academy helped me achieve a score of 79+ in just 3 weeks! The strategies and mock tests were incredibly helpful.',
    5,
    'pte'
  ),
  (
    'Rajesh Patel',
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'I passed my NAATI CCL exam on the first attempt thanks to Ultimate Laguage Academy''s comprehensive preparation. The dialog practice sessions were excellent.',
    5,
    'naati'
  ),
  (
    'Lin Zhang',
    'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'After struggling with PTE for months, Ultimate Laguage Academy''s coaching made all the difference. Their tips for speaking and writing sections were invaluable.',
    4,
    'pte'
  ),
  (
    'Ahmed Hassan',
    'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'The NAATI preparation was outstanding. The instructors provided detailed feedback and the practice materials were spot on.',
    5,
    'naati'
  ),
  (
    'Maria Rodriguez',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'I improved my PTE score from 65 to 82 after just one month of coaching at Ultimate Laguage Academy. The personalized attention made all the difference.',
    5,
    'pte'
  );

-- Sample Blog Posts
INSERT INTO blog_posts (title, slug, excerpt, content, image_url, author, published)
VALUES
  (
    '5 Essential Tips to Ace the PTE Speaking Section',
    '5-essential-tips-pte-speaking',
    'Master the PTE speaking section with these proven strategies from our expert instructors.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta magna. Nullam ac elit in eros laoreet euismod. Cras aliquet metus at nulla tempus, eu gravida neque dapibus. Maecenas eget ligula ultricies, finibus mi at, scelerisque est. Etiam condimentum pharetra lacus, id vulputate justo. Integer sed nulla sit amet lectus imperdiet luctus. Phasellus laoreet est eget ex tempor, a tincidunt nibh volutpat. Nulla sit amet aliquam purus. Sed non sem in enim sodales facilisis. Proin eu velit facilisis, aliquam metus ac, suscipit lacus. Quisque id metus vitae arcu gravida malesuada. Proin eget enim vel tortor elementum dictum. Cras sit amet convallis dui, ut efficitur elit. Nulla facilisi. Cras non ligula hendrerit, vehicula sem sit amet, facilisis magna. Nulla mollis justo nec faucibus porttitor.',
    'https://images.pexels.com/photos/6457515/pexels-photo-6457515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'Dr. Emily Chen',
    true
  ),
  (
    'NAATI CCL Preparation: Common Mistakes to Avoid',
    'naati-ccl-common-mistakes',
    'Learn about the frequent errors candidates make in the NAATI CCL test and how to avoid them.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta magna. Nullam ac elit in eros laoreet euismod. Cras aliquet metus at nulla tempus, eu gravida neque dapibus. Maecenas eget ligula ultricies, finibus mi at, scelerisque est. Etiam condimentum pharetra lacus, id vulputate justo. Integer sed nulla sit amet lectus imperdiet luctus. Phasellus laoreet est eget ex tempor, a tincidunt nibh volutpat. Nulla sit amet aliquam purus. Sed non sem in enim sodales facilisis. Proin eu velit facilisis, aliquam metus ac, suscipit lacus. Quisque id metus vitae arcu gravida malesuada. Proin eget enim vel tortor elementum dictum. Cras sit amet convallis dui, ut efficitur elit. Nulla facilisi. Cras non ligula hendrerit, vehicula sem sit amet, facilisis magna. Nulla mollis justo nec faucibus porttitor.',
    'https://images.pexels.com/photos/7516390/pexels-photo-7516390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'Michael Rodriguez',
    true
  ),
  (
    'How to Balance PTE Preparation with a Full-Time Job',
    'balance-pte-prep-with-job',
    'Effective strategies for working professionals preparing for the PTE Academic exam.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget porta magna. Nullam ac elit in eros laoreet euismod. Cras aliquet metus at nulla tempus, eu gravida neque dapibus. Maecenas eget ligula ultricies, finibus mi at, scelerisque est. Etiam condimentum pharetra lacus, id vulputate justo. Integer sed nulla sit amet lectus imperdiet luctus. Phasellus laoreet est eget ex tempor, a tincidunt nibh volutpat. Nulla sit amet aliquam purus. Sed non sem in enim sodales facilisis. Proin eu velit facilisis, aliquam metus ac, suscipit lacus. Quisque id metus vitae arcu gravida malesuada. Proin eget enim vel tortor elementum dictum. Cras sit amet convallis dui, ut efficitur elit. Nulla facilisi. Cras non ligula hendrerit, vehicula sem sit amet, facilisis magna. Nulla mollis justo nec faucibus porttitor.',
    'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'Sarah Johnson',
    true
  );