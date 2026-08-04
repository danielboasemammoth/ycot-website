'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-11 h-11 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">YC</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-gray-900 text-xs tracking-tight leading-tight">YOUR CHOICE OT</p>
              <p className="text-xs text-gray-500 leading-tight">Home Modifications</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-teal-600 font-medium text-sm transition rounded-lg hover:bg-gray-50">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 text-gray-700 hover:text-teal-600 font-medium text-sm transition rounded-lg hover:bg-gray-50">
              About
            </Link>
            <Link href="/services" className="px-3 py-2 text-gray-700 hover:text-teal-600 font-medium text-sm transition rounded-lg hover:bg-gray-50">
              Services
            </Link>
            <Link href="/gallery" className="px-3 py-2 text-gray-700 hover:text-teal-600 font-medium text-sm transition rounded-lg hover:bg-gray-50">
              Gallery
            </Link>
            <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-teal-600 font-medium text-sm transition rounded-lg hover:bg-gray-50">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <Link href="/contact" className="hidden lg:inline-block bg-teal-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-teal-700 transition shadow-md flex-shrink-0">
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition flex-shrink-0"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <nav className="lg:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-6 py-3 space-y-1">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium text-sm transition">
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium text-sm transition">
                About
              </Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium text-sm transition">
                Services
              </Link>
              <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium text-sm transition">
                Gallery
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium text-sm transition">
                Contact
              </Link>
              <div className="pt-2">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-teal-600 text-white px-3 py-2 rounded-lg font-medium text-sm text-center hover:bg-teal-700 transition">
                  Book Now
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
