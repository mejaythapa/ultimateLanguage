"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Container } from '../ui/container';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Courses', 
    href: '#',
    dropdown: true,
    items: [
      { name: 'PTE Coaching', href: '/courses/pte' },
      { name: 'NAATI CCL', href: '/courses/naati' },
    ]
  },
  { name: 'Book Now', href: '/booking' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary z-10 font-serif">
            Ultimate<span className="text-secondary">Language</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button 
                    onClick={() => toggleDropdown(link.name)}
                    className="px-4 py-2 rounded-md text-foreground hover:text-primary flex items-center"
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    href={link.href}
                    className="px-4 py-2 rounded-md text-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-background border border-border hidden group-hover:block">
                    {link.items?.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild>
              <Link href="/booking">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground z-10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-background pt-20 px-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="w-full flex justify-between items-center py-2 border-b border-border"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform", 
                          activeDropdown === link.name ? "rotate-180" : ""
                        )} />
                      </button>
                      {activeDropdown === link.name && (
                        <div className="pl-4 mt-2 space-y-2">
                          {link.items?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block py-2"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-2 border-b border-border"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="mt-4 w-full">
                <Link 
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}