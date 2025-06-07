import React from 'react';
import PlaceholderImage from '@/components/ui/placeholder-image';
import ReservationForm from '@/components/reservation/ReservationForm';
import { getImagePath } from '@/lib/image-utils';

export default function ReservationsPage() {
  return (
    <div className="bg-walnut text-charcoal min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-pepper-800 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${getImagePath("images/reservation-hero-placeholder.jpg")}')` 
          }}
        >
          <PlaceholderImage text="Reservation Header Image" height="100%" bgColor="#1F1C1A" textColor="#D4AF37" />
        </div>
        
        {/* Decorative pattern overlay */}
        <div 
          className="absolute inset-0 bg-repeat opacity-5"
          style={{ 
            backgroundImage: `url('${getImagePath("images/indian-pattern.png")}')` 
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
          <div className="flex justify-center items-center mb-4">
            <span className="h-px w-12 bg-gold-500"></span>
            <span className="mx-4 text-gold-500 font-serif tracking-widest text-sm">BOOK A TABLE</span>
            <span className="h-px w-12 bg-gold-500"></span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold-500 mb-6">
            Make a Reservation
          </h1>
          
          <p className="text-xl text-basmati-200 max-w-2xl font-light">
            Reserve your table and experience the authentic flavors of North India in an elegant setting.
          </p>
        </div>
      </div>
      
      {/* Reservation Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div className="bg-pepper-800 rounded-lg p-8 border border-gold-500/20">
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-gold-500 mb-4">Reserve Your Table</h2>
                <div className="w-16 h-0.5 bg-gold-500/50"></div>
              </div>
              <ReservationForm />
            </div>
            
            {/* Information */}
            <div>
              <div className="bg-pepper-800 rounded-lg p-8 mb-8 border border-gold-500/20">
                <div className="mb-6">
                  <h2 className="text-2xl font-serif font-bold text-gold-500 mb-4">Reservation Information</h2>
                  <div className="w-16 h-0.5 bg-gold-500/50"></div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">Opening Hours</h3>
                    <p className="mb-1 text-basmati-300 font-light"><span className="text-gold-400 font-medium">Monday - Friday:</span> 11:30 AM - 10:00 PM</p>
                    <p className="text-basmati-300 font-light"><span className="text-gold-400 font-medium">Saturday - Sunday:</span> 12:00 PM - 11:00 PM</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">Reservation Policy</h3>
                    <ul className="list-disc list-inside space-y-2 text-basmati-300 font-light">
                      <li>Reservations are recommended, especially for weekends and holidays.</li>
                      <li>For parties of 8 or more, please call us directly.</li>
                      <li>We hold reservations for 15 minutes past the reserved time.</li>
                      <li>Special requests are accommodated based on availability.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">Contact Us</h3>
                    <p className="mb-1 text-basmati-300 font-light"><span className="text-gold-400 font-medium">Phone:</span> (123) 456-7890</p>
                    <p className="text-basmati-300 font-light"><span className="text-gold-400 font-medium">Email:</span> reservations@spicefusion.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-pepper-800 rounded-lg p-8 border border-gold-500/20">
                <h3 className="text-xl font-serif font-bold text-gold-500 mb-4">Restaurant Location</h3>
                <div className="h-64 bg-pepper-900 rounded-lg mb-4 border border-gold-500/10">
                  <PlaceholderImage text="Map Location" height="100%" bgColor="#262220" textColor="#D4AF37" />
                </div>
                <p className="text-basmati-300 font-light">
                  <span className="text-gold-400 font-medium">Address:</span> 123 Spice Avenue, Culinary District, City, 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Private Dining Section */}
      <section className="py-16 bg-pepper-800 border-t border-gold-500/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <span className="h-px w-12 bg-gold-500"></span>
              <span className="mx-4 text-gold-500 font-serif tracking-widest text-sm">SPECIAL EVENTS</span>
              <span className="h-px w-12 bg-gold-500"></span>
            </div>
            
            <h2 className="text-3xl font-serif font-bold text-gold-500 mb-6">
              Private Dining & Events
            </h2>
            
            <p className="text-xl text-basmati-200 max-w-3xl mx-auto font-light">
              Host your special occasion in our elegant private dining space
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-pepper-900 rounded-lg overflow-hidden border border-gold-500/20">
              <div className="h-64 bg-pepper-700 flex items-center justify-center">
                <p className="text-gold-500 text-lg font-medium">Private Dining Room Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">Private Dining Room</h3>
                <p className="text-basmati-300 font-light mb-4">
                  Our elegant private dining room can accommodate up to 20 guests and offers a sophisticated 
                  setting for business dinners, family celebrations, or intimate gatherings.
                </p>
                <ul className="list-disc list-inside text-basmati-300 font-light space-y-1 mb-4">
                  <li>Customizable menu options</li>
                  <li>Audio-visual equipment available</li>
                  <li>Dedicated service staff</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-pepper-900 rounded-lg overflow-hidden border border-gold-500/20">
              <div className="h-64 bg-pepper-700 flex items-center justify-center">
                <p className="text-gold-500 text-lg font-medium">Banquet Hall Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gold-400 mb-3">Banquet Hall</h3>
                <p className="text-basmati-300 font-light mb-4">
                  Our spacious banquet hall is perfect for larger events such as wedding receptions, 
                  corporate events, and milestone celebrations for up to 80 guests.
                </p>
                <ul className="list-disc list-inside text-basmati-300 font-light space-y-1 mb-4">
                  <li>Flexible seating arrangements</li>
                  <li>Custom catering packages</li>
                  <li>Event planning assistance</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-basmati-200 font-light mb-6">
              For more information about private dining and events, please contact our events team:
            </p>
            <p className="text-gold-400 font-medium">events@spicefusion.com | (123) 456-7892</p>
          </div>
        </div>
      </section>
    </div>
  );
}