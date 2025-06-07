"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star, MapPin, Flame, Leaf, ArrowRight } from 'lucide-react';
import { getFeaturedDishes, MenuItem } from '@/lib/menu-utils';
import { Card } from '@/components/ui/card';

const FeaturedDishesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const featuredDishes = getFeaturedDishes();

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredDishes.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, featuredDishes.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredDishes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredDishes.length) % featuredDishes.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get visible dishes (center + sides)
  const getVisibleDishes = () => {
    const dishes = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + featuredDishes.length) % featuredDishes.length;
      dishes.push({
        dish: featuredDishes[index],
        position: i,
        index: index
      });
    }
    return dishes;
  };

  const renderSpiceLevel = (level: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(3)].map((_, i) => (
          <Flame 
            key={i} 
            size={12} 
            className={`${i < level ? 'text-amber-400 fill-current' : 'text-stone-400/50'}`} 
          />
        ))}
      </div>
    );
  };

  if (featuredDishes.length === 0) return null;

  return (
    <section className="py-20 bg-stone-900 overflow-hidden">
      <div className="w-full max-w-none px-0">
        {/* Section Header */}
        <div className="text-center mb-16 px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#c4b597' }}>
              Chef's <span style={{ color: '#e6c07a' }}>Featured</span> Creations
            </h2>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
              Discover our most celebrated dishes, each telling a unique story of India's rich culinary heritage
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Elegant Decorative Shapes */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large Golden Circles */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-amber-400/12 to-amber-600/4 rounded-full" style={{ filter: 'blur(150px)' }}></div>
            <div className="absolute top-1/3 right-16 w-32 h-32 bg-gradient-to-bl from-amber-500/15 to-transparent rounded-full" style={{ filter: 'blur(120px)' }}></div>
            <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-tr from-amber-400/10 to-amber-600/3 rounded-full" style={{ filter: 'blur(140px)' }}></div>
            <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-tl from-amber-300/12 to-transparent rounded-full" style={{ filter: 'blur(130px)' }}></div>
            
            {/* Small Floating Elements */}
            <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-amber-300/8 to-transparent rounded-full" style={{ filter: 'blur(100px)' }}></div>
            <div className="absolute top-2/3 right-1/4 w-16 h-16 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-full" style={{ filter: 'blur(90px)' }}></div>
            <div className="absolute top-1/2 left-16 w-24 h-24 bg-gradient-to-tr from-amber-500/6 to-transparent rounded-full" style={{ filter: 'blur(110px)' }}></div>
            <div className="absolute bottom-1/3 right-1/3 w-18 h-18 bg-gradient-to-tl from-amber-400/8 to-transparent rounded-full" style={{ filter: 'blur(80px)' }}></div>
            <div className="absolute top-16 right-1/2 w-14 h-14 bg-gradient-to-br from-amber-300/9 to-transparent rounded-full" style={{ filter: 'blur(70px)' }}></div>
            <div className="absolute bottom-1/4 left-1/2 w-22 h-22 bg-gradient-to-bl from-amber-500/7 to-transparent rounded-full" style={{ filter: 'blur(100px)' }}></div>
          </div>
          {/* Main Carousel */}
          <div className="relative h-[80vh] flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              {getVisibleDishes().map(({ dish, position, index }) => (
                <motion.div
                  key={`${dish.id}-${index}`}
                  initial={{ 
                    opacity: 0, 
                    scale: position === 0 ? 1 : 0.6,
                    x: position * 600,
                    z: position === 0 ? 0 : -100
                  }}
                  animate={{ 
                    opacity: position === 0 ? 1 : 0.3,
                    scale: position === 0 ? 1 : 0.6,
                    x: position === 0 ? 0 : position * 500,
                    z: position === 0 ? 0 : -100
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.5,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                  className={`absolute cursor-pointer ${position === 0 ? 'z-20' : 'z-10'}`}
                  onClick={() => position !== 0 && goToSlide(index)}
                  style={{
                    filter: position !== 0 ? 'blur(2px)' : 'none',
                  }}
                >
                  <Card className={`${position === 0 ? 'w-[90vw] max-w-[800px] h-[70vh]' : 'w-[400px] h-[500px]'} relative overflow-hidden shadow-2xl transition-all duration-700 border-0 group`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.1) 100%)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Full Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes={position === 0 ? "800px" : "400px"}
                        priority={position === 0}
                      />
                    </div>
                    
                    {/* Elegant Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
                    
                    {/* Subtle Shine Effect - Only for Center Card */}
                    {position === 0 && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div 
                          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                          style={{
                            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                          }}
                        />
                      </div>
                    )}
                    
                    {/* Card Border Glow - Only for Center Card */}
                    {position === 0 && (
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          boxShadow: 'inset 0 0 20px rgba(230, 192, 122, 0.1), 0 0 20px rgba(230, 192, 122, 0.05)',
                        }}
                      />
                    )}
                    
                    {/* Elegant Corner Indicators */}
                    <div className="absolute top-6 right-6 flex flex-col gap-2 z-10">
                      {dish.isVegetarian && (
                        <div className="w-8 h-8 bg-stone-900/60 backdrop-blur-md border border-green-400/30 rounded-full flex items-center justify-center shadow-lg">
                          <Leaf className="w-4 h-4 text-green-400/80" />
                        </div>
                      )}
                      {dish.isSignature && (
                        <div className="w-8 h-8 bg-stone-900/60 backdrop-blur-md border border-amber-400/30 rounded-full flex items-center justify-center shadow-lg">
                          <Star className="w-4 h-4 text-amber-400/80" />
                        </div>
                      )}
                    </div>

                    {/* Overlaid Content */}
                    <div className={`absolute inset-0 flex flex-col justify-end ${position === 0 ? 'p-8' : 'p-6'} z-10`}>
                      {/* Region */}
                      {dish.region && (
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="w-4 h-4 text-amber-400" />
                          <span className="text-amber-300 text-sm font-semibold uppercase tracking-wider">
                            {dish.region}
                          </span>
                        </div>
                      )}
                      
                      {/* Title */}
                      <h3 className={`font-bold ${position === 0 ? 'text-4xl' : 'text-2xl'} text-white mb-3 leading-tight drop-shadow-lg`}>
                        {dish.name}
                      </h3>
                      
                      {/* Description */}
                      <p className={`text-stone-200 ${position === 0 ? 'text-lg' : 'text-sm'} leading-relaxed mb-4 ${position === 0 ? 'line-clamp-3' : 'line-clamp-2'} drop-shadow-md`}>
                        {dish.description}
                      </p>
                      
                      {/* Bottom Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-stone-300 font-medium">Spice Level:</span>
                          {renderSpiceLevel(dish.spiceLevel)}
                        </div>
                        
                        {position === 0 && (
                          <Link href="/menu">
                            <button className="group/btn flex items-center gap-2 bg-stone-900/40 hover:bg-stone-800/60 backdrop-blur-md border border-amber-400/20 hover:border-amber-400/40 text-amber-200 hover:text-amber-100 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl">
                              <span className="tracking-wide">View Menu</span>
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 group/arrow bg-black/20 hover:bg-black/40 backdrop-blur-xl border border-white/20 hover:border-amber-400/50 rounded-full p-2 md:p-3 lg:p-4 transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-amber-500/20"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/80 group-hover/arrow:text-amber-300 transition-colors duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 group/arrow bg-black/20 hover:bg-black/40 backdrop-blur-xl border border-white/20 hover:border-amber-400/50 rounded-full p-2 md:p-3 lg:p-4 transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-amber-500/20"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/80 group-hover/arrow:text-amber-300 transition-colors duration-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 gap-3">
            {featuredDishes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: index === currentIndex ? '32px' : '12px',
                  height: '12px',
                  backgroundColor: index === currentIndex ? '#e6c07a' : 'rgba(196, 181, 151, 0.3)',
                  boxShadow: index === currentIndex ? '0 2px 8px rgba(230, 192, 122, 0.4)' : 'none'
                }}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 px-8"
        >
          <Link href="/menu">
            <button 
              className="group px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-amber-600/30"
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
                <span>Explore Full Menu</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishesCarousel;