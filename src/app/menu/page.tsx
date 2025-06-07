"use client";

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Search, Filter, Leaf, Flame, Star, MapPin, X } from 'lucide-react';
import { getImagePath } from '@/lib/image-utils';

// Optimized menu data structure
const menuData = {
  "Sharing Plates": {
    "Vegetarian": [
      {
        id: 1,
        name: "Mauryaji Basket Chaat",
        region: "Varanasi",
        description: "Green gram, black chickpeas, potato, tamarind, mint yogurt mousse, and pomegranate caviar",
        price: 16,
        isVegetarian: true,
        spiceLevel: 2,
        isSignature: true,
        image: getImagePath("images/menu/MauryaJi Basket Chaat.png")
      },
      {
        id: 2,
        name: "Gupchup",
        region: "Odisha", 
        description: "Wheat ball, potato, yellow peas, green chilli, black salt, roasted cumin, mint, and black plum",
        price: 14,
        isVegetarian: true,
        spiceLevel: 2,
        image: getImagePath("images/menu/GUPCHUP (ODISHA).png")
      },
      {
        id: 3,
        name: "Beet and Goat Cheese Chop",
        region: "Kolkata",
        description: "Red beets, goat cheese, carrot, peanut, potato, and red habanero sauce",
        price: 18,
        isVegetarian: true,
        spiceLevel: 1,
        image: getImagePath("images/menu/BEET AND GOAT CHEESE CHOP (KOLKATA).png")
      },
      {
        id: 4,
        name: "Dahi Ke Kebab",
        region: "Lucknow",
        description: "Hung yogurt, bell pepper, fried onion, cashew, Amul cheese, chilli, kataifi, and apricot chutney",
        price: 17,
        isVegetarian: true,
        spiceLevel: 2,
        image: getImagePath("images/menu/DAHI KE KEBAB (LUCKNOW).png")
      }
    ],
    "Non-Vegetarian": [
      {
        id: 5,
        name: "Jhol Momo",
        region: "Arunachal Pradesh",
        description: "Minced chicken, soy sauce, ginger, chilli oil curry, and crispy nori",
        price: 19,
        isVegetarian: false,
        spiceLevel: 3,
        image: getImagePath("images/menu/JHOL MOMO (ARUNANCHAL PRADESH).png")
      },
      {
        id: 6,
        name: "Guntur Chilli Chicken Bao",
        region: "Andhra Pradesh",
        description: "Bao bun, chicken, bell pepper, shallots, soy Guntur chilli, pickled red cabbage, scallion, and a rasam shot",
        price: 21,
        isVegetarian: false,
        spiceLevel: 3,
        image: getImagePath("images/menu/GUNTUR CHILLI CHICKEN BAO (ARUNANCHAL PRADESH).png")
      },
      {
        id: 7,
        name: "Galauti Kebab",
        region: "Lucknow",
        description: "Minced goat, vetiver, rosewater ghee, fried onion, cardamom, mint chutney, and warqi paratha",
        price: 24,
        isVegetarian: false,
        spiceLevel: 2,
        isSignature: true,
        image: getImagePath("images/menu/GALAUTI KEBAB (LUCKNOW).png")
      },
      {
        id: 8,
        name: "Aslam Tikka",
        region: "Delhi",
        description: "Chicken thigh, cream, butter, Amul cheese, and chaat masala",
        price: 22,
        isVegetarian: false,
        spiceLevel: 2,
        image: getImagePath("images/menu/ASLAM TIKKA (DELHI).png")
      },
      {
        id: 9,
        name: "Lamb Chop",
        region: "Kashmir",
        description: "New Zealand lamb, masala onion, and walnut chutney",
        price: 28,
        isVegetarian: false,
        spiceLevel: 2,
        isSignature: true,
        image: getImagePath("images/menu/LAMB CHOP (KASHMIR).jpg")
      },

    ]
  },
  "Large Plates": {
    "Vegetarian": [
      {
        id: 14,
        name: "Burata Haak",
        region: "Kashmir",
        description: "Spinach, dandelion green, garlic confit, and burrata",
        price: 22,
        isVegetarian: true,
        spiceLevel: 1,
        isSignature: true,
        image: getImagePath("images/menu/BURATA HAAK (KASHMIR).png")
      },
      {
        id: 15,
        name: "Litti Chokha",
        region: "Bihar",
        description: "Whole wheat, roasted Bengal gram, and eggplant",
        price: 18,
        isVegetarian: true,
        spiceLevel: 2,
        image: getImagePath("images/menu/LITTI CHOKHA (BIHAR).png")
      },
      {
        id: 16,
        name: "Dal Makhni",
        region: "Delhi",
        description: "Black urad, cream, and butter",
        price: 19,
        isVegetarian: true,
        spiceLevel: 1,
        image: getImagePath("images/menu/DAL MAKHNI (DELHI).png")
      },
      {
        id: 17,
        name: "Paneer Pinwheel Makhni",
        region: "Punjab",
        description: "Tomato gravy, butter powder, and nuts",
        price: 21,
        isVegetarian: true,
        spiceLevel: 1,
        image: getImagePath("images/menu/PANEER PINWHEEL MAKHNI (PUNJAB).png")
      }
    ],
    "Non-Vegetarian": [
      {
        id: 19,
        name: "Butter Chicken",
        region: "Punjab",
        description: "Tomato gravy, nuts, cream, and butter powder",
        price: 28,
        isVegetarian: false,
        spiceLevel: 1,
        isSignature: true,
        image: getImagePath("images/menu/BUTTER CHICKEN (PUNJAB).png")
      },
      {
        id: 20,
        name: "Goan Fish Curry",
        region: "Goa",
        description: "Seabass, kokum, and coconut milk",
        price: 26,
        isVegetarian: false,
        spiceLevel: 2,
        image: getImagePath("images/menu/GOAN FISH CURRY.png")
      },
      {
        id: 21,
        name: "Laal Maas",
        region: "Rajasthan",
        description: "Smoked goat, Mathania chilli, and yogurt",
        price: 29,
        isVegetarian: false,
        spiceLevel: 3,
        isSignature: true,
        image: getImagePath("images/menu/LAAL MAAS (RAJHJASTHAN).png")
      },
      {
        id: 23,
        name: "Nalli Biryani",
        region: "Hyderabad",
        description: "Lamb shank, saffron, mint, and yogurt",
        price: 34,
        isVegetarian: false,
        spiceLevel: 2,
        isSignature: true,
        image: getImagePath("images/menu/NALLI BIRYANI (HYDERABAD).png")
      }
    ]
  },
  "Breads": [
    {
      id: 24,
      name: "GARLIC NAAN",
      description: "Traditional garlic-infused bread",
      price: 6,
      isVegetarian: true,
      image: getImagePath("images/menu/GARLIC NAAN.png")
    },
    {
      id: 25,
      name: "LAAL NAAN",
      description: "Spiced red chilli naan",
      price: 7,
      isVegetarian: true,
      image: getImagePath("images/menu/LAAL NAAN.png")
    },
    {
      id: 26,
      name: "LACCHA PARATHA",
      description: "Layered flaky bread",
      price: 6,
      isVegetarian: true,
      image: getImagePath("images/menu/LACCHA PARATHA.png")
    },
    {
      id: 27,
      name: "TRUFFLE GOAT CHEESE KULCHA",
      description: "Truffle and goat cheese stuffed bread",
      price: 12,
      isVegetarian: true,
      image: getImagePath("images/menu/TRUFFLE GOAT CHEESE KULCHA.png")
    },
    {
      id: 28,
      name: "KEEMA KULCHA",
      description: "Minced meat stuffed bread",
      price: 10,
      isVegetarian: false,
      image: getImagePath("images/menu/KEEMA KULCHA.png")
    }
  ],
  "Sides": [
    {
      id: 29,
      name: "ASSORTED PAPAD",
      description: "Arbi chips, nadrukhakhra sabudana, smoked tomato chutney, pineapple chutney, and walnut chutney",
      price: 8,
      isVegetarian: true,
      image: getImagePath("images/menu/ASSORTED PAPAD.png")
    },
    {
      id: 30,
      name: "JEERA RICE",
      description: "Cumin-scented basmati rice",
      price: 7,
      isVegetarian: true,
      image: getImagePath("images/menu/JEERA RICE.png")
    }
  ]
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("View All");
  const [activeSubCategory, setActiveSubCategory] = useState("Vegetarian");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    spiceLevel: 0
  });

  const categories = ["View All", ...Object.keys(menuData)];

  // Get all menu items organized by category for "View All"
  const getAllMenuItems = useMemo(() => {
    const allItems: { category: string; items: any[] }[] = [];
    
    Object.entries(menuData).forEach(([category, data]) => {
      if (Array.isArray(data)) {
        allItems.push({ category, items: data });
      } else if (typeof data === 'object') {
        // For categories with subcategories, combine all items
        const combinedItems: any[] = [];
        Object.values(data as any).forEach((subItems: unknown) => {
          if (Array.isArray(subItems)) {
            combinedItems.push(...subItems);
          }
        });
        allItems.push({ category, items: combinedItems });
      }
    });
    
    return allItems;
  }, []);

  // Optimized search and filter logic
  const filteredItems = useMemo(() => {
    if (activeCategory === "View All") {
      // For "View All", return all items with search filtering
      const allItems = getAllMenuItems.flatMap(cat => cat.items);
      return allItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             (item.region && item.region.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesSpice = filters.spiceLevel === 0 || item.spiceLevel === filters.spiceLevel;

        return matchesSearch && matchesSpice;
      });
    }

    const currentData = menuData[activeCategory as keyof typeof menuData];
    let items: any[] = [];

    if (Array.isArray(currentData)) {
      items = currentData;
    } else if (typeof currentData === 'object') {
      items = (currentData as any)[activeSubCategory] || [];
    }

    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (item.region && item.region.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesSpice = filters.spiceLevel === 0 || item.spiceLevel === filters.spiceLevel;

      return matchesSearch && matchesSpice;
    });
  }, [activeCategory, activeSubCategory, searchTerm, filters, getAllMenuItems]);

  const renderSpiceLevel = useCallback((level: number) => {
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
  }, []);

  const MenuItem = React.memo(({ item }: { item: any }) => (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-charcoal-200 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {item.isVegetarian && (
            <div className="bg-green-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-xl">
              <Leaf className="w-3.5 h-3.5" />
              Vegetarian
            </div>
          )}
          {item.isSignature && (
            <div className="bg-amber-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-xl">
              <Star className="w-3.5 h-3.5" />
              Chef's Special
            </div>
          )}
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm text-charcoal-900 px-4 py-2 rounded-2xl font-bold text-xl shadow-xl border border-amber-200">
            £{item.price}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-3 group-hover:text-amber-700 transition-colors duration-300 leading-tight">
          {item.name}
        </h3>
        
        {/* Region */}
        {item.region && (
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span className="text-amber-700 text-sm font-semibold tracking-wide uppercase">{item.region}</span>
          </div>
        )}
        
        {/* Description */}
        <p className="text-charcoal-700 text-base leading-relaxed mb-6 line-clamp-3">
          {item.description}
        </p>
        
        {/* Spice Level */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-200">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-walnut-700 uppercase tracking-wide">Spice Level</span>
            <div className="flex items-center gap-1">
              {renderSpiceLevel(item.spiceLevel)}
            </div>
          </div>
          
          {/* Decorative Element */}
          <div className="w-8 h-px bg-gradient-to-r from-amber-300 to-transparent" />
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-charcoal-100 via-charcoal-50 to-walnut-100">
      {/* Elegant Header */}
      <section className="relative bg-gradient-to-br from-charcoal-900 via-walnut-900 to-charcoal-800 text-white overflow-hidden">
        {/* Sophisticated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.15),transparent_60%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(180,83,9,0.1),transparent_60%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Decorative Top */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-400/60" />
              <div className="mx-6 w-4 h-4 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-xl" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-400/60" />
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent">
                Our Menu
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed max-w-3xl mx-auto mb-10">
              A curated journey through authentic Indian cuisine, where heritage recipes meet contemporary presentation
            </p>
            
            {/* Decorative Bottom */}
            <div className="flex items-center justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-walnut-400/60 to-amber-400/60" />
              <div className="mx-8 flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full shadow-lg" />
                <div className="w-1 h-1 bg-walnut-400 rounded-full" />
                <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg" />
                <div className="w-1 h-1 bg-walnut-400 rounded-full" />
                <div className="w-2 h-2 bg-amber-400 rounded-full shadow-lg" />
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent via-walnut-400/60 to-amber-400/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Refined Navigation */}
      <section className="bg-white/95 backdrop-blur-lg border-b border-stone-200 sticky top-0 z-40 shadow-xl">
        <div className="container mx-auto px-4 py-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-walnut-600" />
              <input
                type="text"
                placeholder="Search our culinary collection..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-gradient-to-r from-stone-50 to-amber-50/50 border-2 border-stone-200 rounded-2xl focus:border-amber-400 focus:ring-4 focus:ring-amber-100 text-base text-charcoal-900 placeholder-walnut-500 transition-all duration-300 shadow-lg focus:shadow-xl"
              />
            </div>
          </div>

          {/* Category Navigation - Mobile Optimized */}
          <div className="mb-3">
            <div className="bg-stone-100 rounded-2xl p-1.5 shadow-inner">
              <div 
                className="flex gap-1 overflow-x-auto scrollbar-hide"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      if (category !== "View All" && 
                          typeof menuData[category as keyof typeof menuData] === 'object' && 
                          !Array.isArray(menuData[category as keyof typeof menuData])) {
                        setActiveSubCategory("Vegetarian");
                      }
                    }}
                    className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 min-w-max ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg transform scale-105'
                        : 'text-charcoal-700 hover:bg-white hover:shadow-md hover:text-amber-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Scroll Hint */}
            <div className="md:hidden text-center mt-1">
              <p className="text-xs text-walnut-600 flex items-center justify-center gap-2">
                <span>←</span>
                <span>Swipe to see more categories</span>
                <span>→</span>
              </p>
            </div>
          </div>

          {/* Sub-category Pills */}
          {activeCategory !== "View All" &&
           typeof menuData[activeCategory as keyof typeof menuData] === 'object' && 
           !Array.isArray(menuData[activeCategory as keyof typeof menuData]) && (
            <div className="flex justify-center">
              <div className="inline-flex bg-stone-50 rounded-xl p-1 shadow-inner">
                {["Vegetarian", "Non-Vegetarian"].map((subCat) => (
                  <button
                    key={subCat}
                    onClick={() => setActiveSubCategory(subCat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSubCategory === subCat
                        ? subCat === "Vegetarian" 
                          ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md'
                          : 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md'
                        : subCat === "Vegetarian"
                          ? 'text-green-700 hover:bg-green-50'
                          : 'text-red-700 hover:bg-red-50'
                    }`}
                  >
                    {subCat === "Vegetarian" ? "Vegetarian" : "Non-Vegetarian"}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {activeCategory === "View All" ? (
            // View All Layout with Category Dividers
            <div className="space-y-12">
              {getAllMenuItems.map((categoryData, index) => {
                const categoryItems = categoryData.items.filter(item => {
                  const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                       item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                       (item.region && item.region.toLowerCase().includes(searchTerm.toLowerCase()));
                  
                  const matchesSpice = filters.spiceLevel === 0 || item.spiceLevel === filters.spiceLevel;

                  return matchesSearch && matchesSpice;
                });

                if (categoryItems.length === 0) return null;

                return (
                  <div key={categoryData.category} className="space-y-6">
                    {/* Elegant Category Header */}
                    <div className="text-center mb-12">
                      <div className="relative inline-block">
                        {/* Background Decoration */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-amber-300/20 to-amber-400/20 rounded-3xl transform rotate-1 scale-105" />
                        
                        {/* Main Header */}
                        <div className="relative bg-white rounded-3xl px-12 py-6 shadow-2xl border border-amber-300">
                          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight">
                            {categoryData.category}
                          </h2>
                          
                          {/* Decorative Underline */}
                          <div className="flex items-center justify-center mt-4">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500" />
                            <div className="mx-3 w-2 h-2 bg-amber-600 rounded-full shadow-lg" />
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                      {categoryItems.map((item) => (
                        <MenuItem key={item.id} item={item} />
                      ))}
                    </div>

                    {/* Elegant Section Divider */}
                    {index < getAllMenuItems.length - 1 && (
                      <div className="py-16">
                        <div className="flex items-center justify-center">
                          <div className="h-px w-24 bg-gradient-to-r from-transparent via-stone-300 to-amber-300" />
                          <div className="mx-6 flex items-center gap-2">
                            <div className="w-1 h-1 bg-stone-400 rounded-full" />
                            <div className="w-2 h-2 bg-amber-400 rounded-full" />
                            <div className="w-1 h-1 bg-stone-400 rounded-full" />
                          </div>
                          <div className="h-px w-24 bg-gradient-to-l from-transparent via-stone-300 to-amber-300" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* No results for View All */}
              {getAllMenuItems.every(cat => 
                cat.items.filter(item => {
                  const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                       item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                       (item.region && item.region.toLowerCase().includes(searchTerm.toLowerCase()));
                  
                  const matchesSpice = filters.spiceLevel === 0 || item.spiceLevel === filters.spiceLevel;

                  return matchesSearch && matchesSpice;
                }).length === 0
              ) && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gradient-to-br from-walnut-300 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl ring-4 ring-amber-200/50">
                    <Search className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="font-display text-3xl text-charcoal-900 mb-4 font-bold">No dishes found</h3>
                  <p className="text-walnut-700 text-lg font-medium">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          ) : (
            // Regular Category View
            filteredItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-walnut-300 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl ring-4 ring-amber-200/50">
                  <Search className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
                <h3 className="font-display text-3xl text-charcoal-900 mb-4 font-bold">No dishes found</h3>
                <p className="text-walnut-700 text-lg font-medium">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {filteredItems.map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            )
          )}
        </div>
      </section>

      {/* Footer Info */}
      <section className="bg-gradient-to-br from-charcoal-900 via-walnut-800 to-charcoal-900 text-white py-12 mt-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 right-10 w-24 h-24 bg-warm-400 rounded-full blur-2xl" />
          <div className="absolute bottom-5 left-10 w-32 h-32 bg-amber-500 rounded-full blur-2xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <h3 className="font-display text-2xl font-semibold mb-4">Ready to Order?</h3>
          <p className="text-stone-300 text-base mb-6 max-w-md mx-auto">
            Scan the QR code on your table or ask your server for assistance
          </p>
          <div className="flex justify-center gap-6 text-sm text-stone-400">
            <span className="flex items-center gap-1">
              <div className="w-1 h-1 bg-warm-400 rounded-full" />
              Fresh ingredients daily
            </span>
            <span className="flex items-center gap-1">
              <div className="w-1 h-1 bg-warm-400 rounded-full" />
              Authentic recipes
            </span>
            <span className="flex items-center gap-1">
              <div className="w-1 h-1 bg-warm-400 rounded-full" />
              Made to order
            </span>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default MenuPage;
