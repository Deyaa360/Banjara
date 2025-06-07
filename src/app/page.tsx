"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  ArrowRight
} from 'lucide-react';
import { getImagePath } from '@/lib/image-utils';
import FeaturedDishesCarousel from '@/components/FeaturedDishesCarousel';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [targetSlideIndex, setTargetSlideIndex] = useState(0);
  const [transitionPhase, setTransitionPhase] = useState('idle'); // 'idle', 'fadeOut', 'fadeIn'

  const bannerImages = [
    {
      src: getImagePath('banner1.png'),
      title: 'Where Heritage Meets Flavor',
      subtitle: 'Embark on a culinary journey through the royal kitchens of India, where every spice tells a story and every dish is a masterpiece crafted with generations of wisdom.',
      accent: 'Heritage'
    },
    {
      src: getImagePath('banner2.png'), 
      title: 'Artistry in Every Bite',
      subtitle: 'Our master chefs transform the finest ingredients into symphonies of taste, creating an extraordinary dining experience that awakens all your senses.',
      accent: 'Artistry'
    },
    {
      src: getImagePath('banner3.png'),
      title: 'Moments Worth Savoring',
      subtitle: 'Step into an atmosphere of warmth and elegance, where exceptional cuisine meets heartfelt hospitality to create memories that last a lifetime.',
      accent: 'Moments'
    }
  ];



  // Auto-advance slides with unified rhythm
  useEffect(() => {
    const timer = setInterval(() => {
      if (transitionPhase === 'idle') {
        const target = (currentSlide + 1) % bannerImages.length;
        initiateTransition(target);
      }
    }, 6000); // Elegant 6 second timing
    return () => clearInterval(timer);
  }, [currentSlide, transitionPhase, bannerImages.length]);

  // Simple transition orchestrator
  const initiateTransition = (targetSlide: number) => {
    if (transitionPhase === 'idle' && targetSlide !== currentSlide) {
      setTargetSlideIndex(targetSlide);
      
      // Phase 1: Quick fade out (0.4s)
      setTransitionPhase('fadeOut');
      
      setTimeout(() => {
        // Phase 2: Switch content and fade in (0.6s)
        setCurrentSlide(targetSlide);
        setTransitionPhase('fadeIn');
        
        setTimeout(() => {
          // Phase 3: Return to idle
          setTransitionPhase('idle');
        }, 600);
      }, 400);
    }
  };

  const nextSlide = () => {
    const target = (currentSlide + 1) % bannerImages.length;
    initiateTransition(target);
  };

  const prevSlide = () => {
    const target = (currentSlide - 1 + bannerImages.length) % bannerImages.length;
    initiateTransition(target);
  };

  return (
    <div className="bg-heritage-light">
      {/* Hero Banner Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Smooth Crossfade Images with Continuous Zoom */}
        <AnimatePresence mode="wait">
          {bannerImages.map((image, index) => {
            const isActive = index === currentSlide;
            const isNext = index === targetSlideIndex && transitionPhase !== 'idle';
            
            return (
              <motion.div
                key={`image-${index}`}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ 
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1.15 : 1,
                  transition: {
                    opacity: { 
                      duration: isActive ? 0.6 : 0.4,
                      ease: "easeInOut"
                    },
                    scale: { 
                      duration: isActive ? 6 : 0.4,
                      ease: isActive ? "linear" : "easeOut"
                    }
                  }
                }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: `url(${image.src})`,
                  zIndex: isActive ? 2 : 0
                }}
              />
            );
          })}
        </AnimatePresence>
        
        {/* Much Darker Heritage Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(135deg, 
              rgba(28, 28, 28, 0.85) 0%, 
              rgba(28, 28, 28, 0.75) 25%, 
              rgba(196, 181, 151, 0.1) 50%, 
              rgba(28, 28, 28, 0.75) 75%, 
              rgba(28, 28, 28, 0.85) 100%)`
          }}
        ></div>
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to top, 
              rgba(28, 28, 28, 0.85) 0%, 
              rgba(28, 28, 28, 0.75) 50%, 
              rgba(28, 28, 28, 0.85) 100%)`
          }}
        ></div>
        {/* Heavy Edge Darkening */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `radial-gradient(ellipse at center, 
              transparent 25%, 
              rgba(28, 28, 28, 0.3) 60%, 
              rgba(28, 28, 28, 0.6) 90%, 
              rgba(28, 28, 28, 0.8) 100%)`
          }}
        ></div>
        
        {/* Content with Beautiful Text Effects */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container-heritage text-center text-white">
            <div className="max-w-5xl mx-auto">
              {/* Title */}
              <h1 
                key={`title-${currentSlide}`}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-wide"
                style={{ 
                  color: '#c4b597',
                  textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                  transform: transitionPhase === 'fadeOut' ? 'translateY(-20px)' : 
                            transitionPhase === 'fadeIn' ? 'translateY(30px)' : 
                            'translateY(0px)',
                  opacity: transitionPhase === 'idle' ? 1 : 0,
                  transition: transitionPhase === 'fadeOut' 
                    ? 'all 0.4s cubic-bezier(0.4, 0, 0.6, 1)' 
                    : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  letterSpacing: '0.05em',
                  wordSpacing: '0.2em'
                }}
              >
                {bannerImages[currentSlide].title.split(' ').map((word, index) => (
                  <span 
                    key={`${currentSlide}-${index}`}
                    className="inline-block"
                    style={{
                      transform: transitionPhase === 'fadeOut' ? 'translateY(-15px)' : 
                                transitionPhase === 'fadeIn' ? 'translateY(20px)' : 
                                'translateY(0px)',
                      opacity: transitionPhase === 'idle' ? 1 : 0,
                      transition: transitionPhase === 'fadeOut' 
                        ? `all 0.4s cubic-bezier(0.4, 0, 0.6, 1) ${index * 0.05}s`
                        : `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + (index * 0.1)}s`,
                      marginRight: '0.2em'
                    }}
                  >
                    {word === bannerImages[currentSlide].accent ? (
                      <span 
                        style={{ 
                          color: '#e6c07a',
                          textShadow: '0 2px 12px rgba(0,0,0,0.8)'
                        }}
                      >
                        {word}
                      </span>
                    ) : (
                      <span>{word}</span>
                    )}
                  </span>
                ))}
              </h1>
              
              {/* Beautiful Subtitle Animation */}
              <div className="overflow-hidden">
                <p 
                  key={`subtitle-${currentSlide}`}
                  className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light"
                  style={{ 
                    color: '#c4b597',
                    textShadow: '0 1px 6px rgba(0,0,0,0.6)',
                    transform: transitionPhase === 'fadeOut' ? 'translateY(-20px)' : 
                              transitionPhase === 'fadeIn' ? 'translateY(30px)' : 
                              'translateY(0px)',
                    opacity: transitionPhase === 'idle' ? 1 : 0,
                    transition: transitionPhase === 'fadeOut' 
                      ? 'all 0.4s cubic-bezier(0.4, 0, 0.6, 1)' 
                      : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {bannerImages[currentSlide].subtitle}
                </p>
              </div>
              
              {/* Beautiful Button Animation */}
              <div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                style={{
                  transform: transitionPhase === 'fadeOut' ? 'translateY(-30px)' : 
                            transitionPhase === 'fadeIn' ? 'translateY(40px)' : 
                            'translateY(0px)',
                  opacity: transitionPhase === 'idle' ? 1 : 0,
                  transition: transitionPhase === 'fadeOut' 
                    ? 'all 0.4s cubic-bezier(0.4, 0, 0.6, 1)' 
                    : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <Link href="/contact">
                  <button 
                    className="group relative px-8 py-4 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: '#795939',
                      color: '#c4b597',
                      boxShadow: '0 4px 15px rgba(121, 89, 57, 0.3)',
                      transform: 'translateY(0px)',
                      opacity: 1,
                      transition: 'all 0.3s ease, transform 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.7s, opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.7s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e6c07a';
                      e.currentTarget.style.color = '#795939';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#795939';
                      e.currentTarget.style.color = '#c4b597';
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" />
                      <span>Reserve Your Table</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </button>
                </Link>
                
                <Link href="/menu">
                  <button 
                    className="group px-8 py-4 font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    style={{
                      border: '2px solid rgba(196, 181, 151, 0.4)',
                      color: '#c4b597',
                      transform: 'translateY(0px)',
                      opacity: 1,
                      transition: 'all 0.3s ease, transform 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s, opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(196, 181, 151, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(230, 192, 122, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(196, 181, 151, 0.4)';
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span>Explore Menu</span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Side Navigation Hints */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-16 md:w-20 cursor-pointer z-30 group"
          onClick={prevSlide}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ChevronLeft 
              className="w-6 h-6 md:w-8 md:h-8" 
              style={{ color: '#c4b597', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
            />
          </div>
        </div>
        
        <div 
          className="absolute right-0 top-0 bottom-0 w-16 md:w-20 cursor-pointer z-30 group"
          onClick={nextSlide}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ChevronRight 
              className="w-6 h-6 md:w-8 md:h-8" 
              style={{ color: '#c4b597', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
            />
          </div>
        </div>

        {/* Heritage Slide Indicators */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => initiateTransition(index)}
              className="transition-all duration-400 rounded-full"
              style={{
                width: index === currentSlide ? '32px' : '12px',
                height: '12px',
                backgroundColor: index === currentSlide ? '#e6c07a' : 'rgba(196, 181, 151, 0.5)',
                boxShadow: index === currentSlide ? '0 2px 8px rgba(230, 192, 122, 0.4)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (index !== currentSlide) {
                  e.currentTarget.style.backgroundColor = 'rgba(196, 181, 151, 0.8)';
                  e.currentTarget.style.width = '20px';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentSlide) {
                  e.currentTarget.style.backgroundColor = 'rgba(196, 181, 151, 0.5)';
                  e.currentTarget.style.width = '12px';
                }
              }}
            />
          ))}
        </div>


      </section>

      {/* Featured Dishes Carousel Section */}
      <FeaturedDishesCarousel />

      {/* Heritage Story Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-stone-950 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex justify-center sm:justify-start items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-12">
                <div className="h-px w-12 sm:w-16 lg:w-24 bg-gradient-to-r from-transparent to-amber-400" />
                <span className="text-amber-400 text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase whitespace-nowrap">
                  Our Heritage
                </span>
                <div className="h-px w-12 sm:w-16 lg:w-24 bg-gradient-to-l from-transparent to-amber-400" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12 leading-tight tracking-tight text-center sm:text-left" style={{ color: '#c4b597' }}>
                Where Ancient
                <br />
                <span style={{ color: '#e6c07a' }} className="font-light tracking-wide">
                  Recipes Live
                </span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-stone-300 leading-relaxed">
                <p>
                  In the bustling streets of India, where spices dance in the air and every meal tells a story, 
                  Banjara was born from a passion to preserve the authentic flavors that have been passed down 
                  through generations.
                </p>
                <p>
                  Our kitchen is a sanctuary where traditional techniques meet contemporary presentation, 
                  creating an experience that honors the past while embracing the future of Indian cuisine.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 sm:mt-10 flex justify-center sm:justify-start"
              >
                <Link href="/about">
                  <button 
                    className="group px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-amber-600/30"
                    style={{
                      backgroundColor: '#795939',
                      color: '#c4b597',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e6c07a';
                      e.currentTarget.style.color = '#795939';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#795939';
                      e.currentTarget.style.color = '#c4b597';
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span>Discover Our Story</span>
                      <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              {/* Heritage Image with Elegant Shapes */}
              <div className="relative max-w-sm mx-auto">
                {/* Decorative Background Shapes */}
                <div className="absolute -inset-4 sm:-inset-8">
                  {/* Large Golden Circle */}
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-amber-400/15 to-amber-600/5 rounded-full blur-2xl"></div>
                  
                  {/* Medium Accent Circle */}
                  <div className="absolute bottom-4 sm:bottom-8 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-full blur-xl"></div>
                  
                  {/* Small Floating Elements */}
                  <div className="absolute top-1/4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-300/10 to-transparent rounded-full blur-lg"></div>
                  <div className="absolute bottom-1/4 -right-6 w-20 h-20 bg-gradient-to-bl from-amber-400/8 to-transparent rounded-full blur-xl"></div>
                </div>

                {/* Geometric Frame Elements */}
                <div className="absolute -inset-2 sm:-inset-4 border border-amber-600/20 rounded-2xl sm:rounded-[2rem] transform rotate-1"></div>
                <div className="absolute -inset-1 sm:-inset-2 border border-amber-500/10 rounded-xl sm:rounded-[1.5rem] transform -rotate-1"></div>

                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                  <div 
                    className="w-full aspect-[4/5] bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-700"
                    style={{ 
                      backgroundImage: `url(${getImagePath('heritage.png')})`,
                    }}
                  >
                    {/* Subtle Image Overlay for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-stone-900/10"></div>
                    
                    {/* Corner Accent Elements */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-t-2 border-amber-400/40 rounded-tl-lg"></div>
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-b-2 border-amber-400/40 rounded-br-lg"></div>
                  </div>
                </div>

                {/* Floating Decorative Lines */}
                <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>
                <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}