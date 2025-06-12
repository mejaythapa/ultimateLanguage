import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, CalendarDays, ArrowRight } from 'lucide-react';


const videos = [
  {
    id: 1,
    title: 'PTE Introduction & Tips',
    youtubeId: 'vWBnPv4YG-M',
  },
  {
    id: 2,
    title: 'NAATI CCL: How to Prepare',
    youtubeId: 'r9xZ5JbPH7A',
  },
  {
    id: 3,
    title: 'Scoring High in PTE Speaking',
    youtubeId: 'NyzWzV7EcuM',
  },
];

export function VideoGallery() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <Container>
        <SectionHeading
          title="Student Video Gallery"
          subtitle="Watch tips, tricks and success stories from our coaching sessions"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {videos.map((video) => (
            <div key={video.id} className="rounded-lg overflow-hidden shadow-sm border border-border bg-card">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-primary">{video.title}</h3>
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
