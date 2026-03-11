'use client';

import { testimonials } from '@/lib/testimonials-data';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            Hear from those who trust us with their special moments
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-md">
          {/* Video/Content Area */}
          {current.videoUrl && (
            <div className="mb-8 rounded-lg overflow-hidden bg-gray-200 h-96 flex items-center justify-center">
              <video
                src={current.videoUrl}
                controls
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Testimonial Text */}
          <div className="text-center mb-8">
            <p className="text-xl text-gray-700 italic mb-6">
              "{current.content}"
            </p>
            <div className="space-y-1">
              <p className="font-semibold text-lg text-gray-900">
                {current.clientName}
              </p>
              <p className="text-gray-600">
                {current.clientRole}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-gray-900" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
