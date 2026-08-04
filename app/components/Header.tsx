import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🏠</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-teal">YOUR CHOICE</p>
            <p className="text-xs text-gray-600">Occupational Therapy</p>
          </div>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8">
          <li><Link href="/" className="text-gray-700 hover:text-teal font-medium">Home</Link></li>
          <li><Link href="/about" className="text-gray-700 hover:text-teal font-medium">About</Link></li>
          <li><Link href="/services" className="text-gray-700 hover:text-teal font-medium">Services</Link></li>
          <li><Link href="/gallery" className="text-gray-700 hover:text-teal font-medium">Gallery</Link></li>
          <li><Link href="/contact" className="text-gray-700 hover:text-teal font-medium">Contact</Link></li>
        </ul>

        {/* CTA Button */}
        <Link href="/contact" className="btn btn-primary hidden sm:inline-block">
          Get Started
        </Link>

        {/* Mobile Menu */}
        <button className="md:hidden text-teal">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
