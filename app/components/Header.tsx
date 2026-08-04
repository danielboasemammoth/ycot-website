'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">YC</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-bold text-gray-900">YOUR CHOICE OT</span>
              <span className="text-xs text-gray-500">Home Modifications</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 font-medium text-sm hover:text-teal-600 transition">Home</Link>
            <Link href="/about" className="text-gray-700 font-medium text-sm hover:text-teal-600 transition">About</Link>
            <Link href="/services" className="text-gray-700 font-medium text-sm hover:text-teal-600 transition">Services</Link>
            <Link href="/gallery" className="text-gray-700 font-medium text-sm hover:text-teal-600 transition">Gallery</Link>
            <Link href="/contact" className="text-gray-700 font-medium text-sm hover:text-teal-600 transition">Contact</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact" className="bg-teal-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-teal-700 transition">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-2">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/gallery" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm" onClick={() => setMobileMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="px-3 pt-2">
              <Link href="/contact" className="block w-full bg-teal-600 text-white px-4 py-2 rounded-lg font-medium text-sm text-center hover:bg-teal-700 transition" onClick={() => setMobileMenuOpen(false)}>
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
