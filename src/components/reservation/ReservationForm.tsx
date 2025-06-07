'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

// Mock time slots
const timeSlots = [
  '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', 
  '2:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
  '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
];

// Mock party sizes
const partySizes = [1, 2, 3, 4, 5, 6, 7, 8];

const ReservationForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [partySize, setPartySize] = useState<string>("2");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setTimeSlot(null);
        setPartySize("2");
        setName('');
        setEmail('');
        setPhone('');
        setSpecialRequests('');
      }, 3000);
    }, 1500);
  };

  return (
    <div>
      {isSuccess ? (
        <Card className="border-gold-500/30 bg-pepper-800">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-gold-500">Reservation Confirmed!</CardTitle>
            <CardDescription className="text-basmati-200">
              Thank you for your reservation. We've sent a confirmation to your email.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-basmati-100 font-medium">
              {date && format(date, 'EEEE, MMMM d, yyyy')} at {timeSlot} for {partySize} {parseInt(partySize) === 1 ? 'person' : 'people'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Selection */}
          <div className="space-y-2">
            <Label htmlFor="date" className="text-gold-400">
              Select Date
            </Label>
            <div className="relative">
              <Button
                id="date"
                type="button"
                variant="outline"
                className="w-full justify-start text-left font-normal bg-pepper-800 border-gold-500/30 text-basmati-100 hover:bg-pepper-700 hover:text-gold-400"
                onClick={() => {
                  setShowDatePicker(!showDatePicker);
                  setShowTimePicker(false);
                }}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-gold-500" />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Button>
              
              {showDatePicker && (
                <div className="absolute z-50 mt-2 w-auto p-0 bg-pepper-800 border border-gold-500/30 rounded-md shadow-lg">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => {
                      setDate(newDate);
                      setShowDatePicker(false);
                    }}
                    initialFocus
                    disabled={(date) => {
                      // Disable dates in the past
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today;
                    }}
                    className="bg-pepper-800 text-basmati-100"
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Time Selection */}
          <div className="space-y-2">
            <Label htmlFor="time" className="text-gold-400">
              Select Time
            </Label>
            <div className="relative">
              <Button
                id="time"
                type="button"
                variant="outline"
                className="w-full justify-start text-left font-normal bg-pepper-800 border-gold-500/30 text-basmati-100 hover:bg-pepper-700 hover:text-gold-400"
                onClick={() => {
                  setShowTimePicker(!showTimePicker);
                  setShowDatePicker(false);
                }}
              >
                <Clock className="mr-2 h-4 w-4 text-gold-500" />
                {timeSlot ? timeSlot : <span>Select a time</span>}
              </Button>
              
              {showTimePicker && (
                <div className="absolute z-50 mt-2 w-48 bg-pepper-800 border border-gold-500/30 rounded-md shadow-lg">
                  <div className="grid grid-cols-2 gap-2 p-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={timeSlot === time ? "default" : "outline"}
                        className={timeSlot === time 
                          ? "text-sm bg-gold-500 text-pepper-900 hover:bg-gold-600" 
                          : "text-sm bg-pepper-800 border-gold-500/30 text-basmati-100 hover:bg-pepper-700 hover:text-gold-400"}
                        onClick={() => {
                          setTimeSlot(time);
                          setShowTimePicker(false);
                        }}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Party Size */}
          <div className="space-y-2">
            <label htmlFor="party-size" className="block text-sm font-medium text-gold-400">
              Party Size
            </label>
            <select
              id="party-size"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
              className="w-full p-2 bg-pepper-800 border border-gold-500/30 rounded-md text-basmati-100 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              {partySizes.map((size) => (
                <option key={size} value={size.toString()}>
                  {size} {size === 1 ? 'person' : 'people'}
                </option>
              ))}
              <option value="9">8+ (Please call us)</option>
            </select>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gold-400">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gold-500" />
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="pl-10 bg-pepper-800 border-gold-500/30 text-basmati-100 focus:ring-gold-500"
                  placeholder="John Doe"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gold-400">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gold-500" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-pepper-800 border-gold-500/30 text-basmati-100 focus:ring-gold-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gold-400">
                Phone Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gold-500" />
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="pl-10 bg-pepper-800 border-gold-500/30 text-basmati-100 focus:ring-gold-500"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>
          </div>
          
          {/* Special Requests */}
          <div className="space-y-2">
            <Label htmlFor="special-requests" className="text-gold-400">
              Special Requests (Optional)
            </Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gold-500" />
              <Textarea
                id="special-requests"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                rows={3}
                className="pl-10 bg-pepper-800 border-gold-500/30 text-basmati-100 focus:ring-gold-500"
                placeholder="Any special occasions or dietary requirements?"
              />
            </div>
          </div>
          
          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-gold-500 hover:bg-gold-600 text-pepper-900 font-medium"
            disabled={!date || !timeSlot || !name || !email || !phone || isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
          </Button>
          
          <p className="text-sm text-basmati-300 text-center">
            By making a reservation, you agree to our reservation policy.
          </p>
        </form>
      )}
    </div>
  );
};

export default ReservationForm;