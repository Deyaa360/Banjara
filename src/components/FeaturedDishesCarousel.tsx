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
            className={`${i < level ? 'text-red-500 fill-current' : 'text-stone-300'}`} 
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
                  <Card className={`${position === 0 ? 'w-[90vw] max-w-[800px] h-[70vh]' : 'w-[400px] h-[500px]'} relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group`}>
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
                    
                    {/* Badges */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                      {dish.isVegetarian && (
                        <div className="bg-green-600/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                          <Leaf className="w-3 h-3" />
                          Vegetarian
                        </div>
                      )}
                      {dish.isSignature && (
                        <div className="bg-amber-600/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                          <Star className="w-3 h-3" />
                          Chef's Special
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
                            <button className="group/btn flex items-center gap-2 bg-amber-600/90 hover:bg-amber-500 backdrop-blur-md text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg">
                              View Menu
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