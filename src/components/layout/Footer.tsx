"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { getImagePath } from '@/lib/image-utils';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Logo and decorative line */}
        <div className="text-center mb-16">
          <div className="relative h-16 w-48 mx-auto mb-4">
            <Image
              src={getImagePath("LOGO.png")}
              alt="Banjara Restaurant"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-6">About Banjara</h3>
            <p className="mb-6 text-neutral-300 leading-relaxed">
              Inspired by the nomadic Banjara tribe, we bring you authentic regional Indian cuisine. 
              Every dish tells a story of tradition, movement, and soul.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-gold-400 hover:bg-gold-400 hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-gold-400 hover:bg-gold-400 hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-gold-400 hover:bg-gold-400 hover:text-white transition-all duration-300"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/menu', label: 'Menu' },
                { href: '/reservations', label: 'Reservations' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-300 hover:text-gold-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300">123 Culinary Boulevard<br />Downtown District<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-neutral-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-neutral-300">info@banjararestaurant.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold text-gold-400 mb-6">Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Monday - Thursday</p>
                  <p className="text-neutral-300">5:00 PM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Friday - Saturday</p>
                  <p className="text-neutral-300">5:00 PM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Sunday</p>
                  <p className="text-neutral-300">4:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              &copy; {new Date().getFullYear()} Banjara Restaurant. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-neutral-400 hover:text-gold-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-gold-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;