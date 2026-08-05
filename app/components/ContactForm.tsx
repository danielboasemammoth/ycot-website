'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // In production, this would send to an API endpoint
    const formData = new FormData(e.currentTarget);
    console.log('Form submitted:', Object.fromEntries(formData));
    
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-700 font-semibold mb-2">✓ Thank you!</p>
        <p className="text-green-600">We've received your inquiry and will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      <textarea
        name="message"
        placeholder="Tell us about your inquiry..."
        rows={5}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full btn btn-primary disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}
