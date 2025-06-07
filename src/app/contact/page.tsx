"use client";

import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-heritage-light">
      <div className="container-heritage py-16">
        <h1 className="heading-display text-center mb-8">Contact Us</h1>
        <p className="text-body-large text-center">
          This is a minimal contact page to test the heritage design system.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card-heritage hover-heritage-lift">
            <div className="card-heritage-content">
              <h3 className="heading-tertiary mb-4">Phone</h3>
              <p className="text-body">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="card-heritage hover-heritage-lift">
            <div className="card-heritage-content">
              <h3 className="heading-tertiary mb-4">Email</h3>
              <p className="text-body">hello@banjararestaurant.com</p>
            </div>
          </div>
          
          <div className="card-heritage hover-heritage-lift">
            <div className="card-heritage-content">
              <h3 className="heading-tertiary mb-4">Address</h3>
              <p className="text-body">123 Heritage Lane<br />Cultural District, NY 10001</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn-heritage-primary">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}