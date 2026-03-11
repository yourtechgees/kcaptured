'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 text-white font-semibold py-3 rounded-lg hover:bg-gray-800 disabled:bg-gray-600 transition-colors flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitted && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
        </form>

        {/* Note about Formspree */}
        <p className="text-center text-gray-600 text-sm mt-8">
          Replace 'YOUR_FORM_ID' in the form code with your actual Formspree Form ID
        </p>
      </div>
    </section>
  );
}
