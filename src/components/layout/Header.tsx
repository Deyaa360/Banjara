"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getImagePath } from '@/lib/image-utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll effect with smoother transition
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = pathname === '/';
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-luxury border-b border-stone-200/50' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-32 lg:h-14 lg:w-36">
              <Image
                src={getImagePath("LOGO.png")}
                alt="Banjara Restaurant"
                fill
                className="object-contain transition-all duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/menu', label: 'Menu' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 group ${
                  scrolled || !isHomePage 
                    ? 'text-charcoal-700 hover:text-warm-500' 
                    : 'text-white/90 hover:text-warm-300'
                } ${pathname === link.href ? 'text-warm-500' : ''}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-warm-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  pathname === link.href ? 'scale-x-100' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Right Section - Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Phone Number */}
            <a 
              href="tel:+1234567890" 
              className="flex items-center space-x-2 text-sm font-medium transition-all duration-300 hover:scale-105 group"
            >
              <Phone size={16} className={`${scrolled || !isHomePage ? 'text-warm-500' : 'text-warm-300'}`} />
              <span className={`${scrolled || !isHomePage ? 'text-charcoal-700 group-hover:text-warm-500' : 'text-white/90 group-hover:text-warm-300'}`}>
                (555) 123-4567
              </span>
            </a>

            {/* CTA Button */}
            <Button 
              asChild 
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/reservations">Reserve Table</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              scrolled || !isHomePage ? 'text-charcoal-700' : 'text-white'
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-xl"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/menu', label: 'Menu' },
                  { href: '/about', label: 'About' },
                  { href: '/contact', label: 'Contact' },
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      className={`text-charcoal-700 hover:text-warm-500 transition-all duration-300 py-3 border-b border-stone-200/50 font-medium transform hover:translate-x-2 ${
                        pathname === link.href ? 'text-warm-500 translate-x-2' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 space-y-4">
                  {/* Mobile Phone Number */}
                  <a 
                    href="tel:+1234567890" 
                    className="flex items-center space-x-2 text-charcoal-700 hover:text-warm-500 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone size={16} className="text-warm-500" />
                    <span>(555) 123-4567</span>
                  </a>
                  {/* Mobile CTA Button */}
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium py-3 rounded-full transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/reservations">Reserve Table</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;