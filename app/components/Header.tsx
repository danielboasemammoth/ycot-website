import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">🏠</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-gray-900 text-sm tracking-tight">YOUR CHOICE</p>
            <p className="text-xs text-gray-500">Occupational Therapy</p>
          </div>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><Link href="/" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition">Home</Link></li>
          <li><Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition">About</Link></li>
          <li><Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition">Services</Link></li>
          <li><Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition">Gallery</Link></li>
          <li><Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition">Contact</Link></li>
        </ul>

        {/* CTA Button */}
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-blue-700 transition hidden sm:inline-block shadow-md">
          Get Started
        </Link>

        {/* Mobile Menu */}
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
