"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const [activeTab, setActiveTab] = useState<'pte' | 'naati'>('pte');
  
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                {activeTab === 'pte' ? 'PTE Academic' : 'NAATI CCL'}
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-serif mb-4">
                {activeTab === 'pte' ? (
                  <>Unlock Your <span className="text-primary">PTE Success</span> Journey</>
                ) : (
                  <>Master <span className="text-primary">NAATI CCL</span> with Experts</>
                )}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                {activeTab === 'pte' 
                  ? 'Expert coaching, proven strategies, and personalized guidance to help you achieve your target PTE score.'
                  : 'Professional NAATI CCL preparation with experienced instructors to help you navigate your certification with confidence.'}
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg">
                  <Link href={`/courses/${activeTab}`}>
                    Explore Courses
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/booking" className="flex items-center">
                    Book a Free Demo
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 inline-flex bg-background p-1 rounded-lg border border-border">
                <button
                  className={`px-4 py-2 rounded text-sm font-medium ${
                    activeTab === 'pte' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setActiveTab('pte')}
                >
                  PTE Academic
                </button>
                <button
                  className={`px-4 py-2 rounded text-sm font-medium ${
                    activeTab === 'naati' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setActiveTab('naati')}
                >
                  NAATI CCL
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={activeTab === 'pte' 
                  ? "https://images.pexels.com/photos/5088179/pexels-photo-5088179.jpeg"
                  : "https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg"
                } 
                alt={activeTab === 'pte' ? "PTE Academic Coaching" : "NAATI CCL Preparation"}
                className="w-full h-auto rounded-lg object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent">
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <div className="flex items-center bg-white/90 backdrop-blur rounded-full py-1 px-3 text-sm font-medium">
                    {activeTab === 'pte' ? '95% Success Rate' : 'Certified Instructors'}
                  </div>
                  <div className="flex items-center bg-white/90 backdrop-blur rounded-full py-1 px-3 text-sm font-medium">
                    {activeTab === 'pte' ? '7+ Years Experience' : 'Mock Dialog Practice'}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 md:bottom-auto md:right-auto md:-top-6 md:-left-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-3 px-4 min-w-[140px]">
              <div className="flex items-center">
                <div className="bg-primary/10 rounded-full p-2 mr-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    {activeTab === 'pte' ? 'PTE Success' : 'NAATI Pass'}
                  </p>
                  <p className="text-lg font-bold">
                    {activeTab === 'pte' ? '95%' : '91%'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}