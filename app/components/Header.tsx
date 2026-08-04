import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">YC</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-gray-900 text-sm tracking-tight leading-tight">YOUR CHOICE</p>
              <p className="text-xs text-gray-500 leading-tight">OT Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium text-sm transition rounded-lg hover:bg-gray-50">
              Home
            </Link>
            <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium text-sm transition rounded-lg hover:bg-gray-50">
              About
            </Link>
            <Link href="/services" className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium text-sm transition rounded-lg hover:bg-gray-50">
              Services
            </Link>
            <Link href="/gallery" className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium text-sm transition rounded-lg hover:bg-gray-50">
              Gallery
            </Link>
            <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium text-sm transition rounded-lg hover:bg-gray-50">
              Contact
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <Link href="/contact" className="hidden md:inline-block bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-teal-700 transition shadow-md flex-shrink-0">
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-btn"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition flex-shrink-0"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav 
          id="mobile-menu"
          className="hidden md:hidden bg-white border-t border-gray-200"
        >
          <div className="container mx-auto px-6 py-4 space-y-2">
            <Link href="/" className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium transition">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium transition">
              About
            </Link>
            <Link href="/services" className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium transition">
              Services
            </Link>
            <Link href="/gallery" className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium transition">
              Gallery
            </Link>
            <Link href="/contact" className="block px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg font-medium transition">
              Contact
            </Link>
            <div className="pt-2">
              <Link href="/contact" className="block w-full bg-teal-600 text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-teal-700 transition">
                Book Now
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <script dangerouslySetInnerHTML={{__html: `
        if (typeof window !== 'undefined') {
          const btn = document.getElementById('mobile-menu-btn');
          const menu = document.getElementById('mobile-menu');
          
          if (btn && menu) {
            btn.addEventListener('click', () => {
              menu.classList.toggle('hidden');
              const icon = btn.querySelector('svg');
              if (menu.classList.contains('hidden')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
              } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
              }
            });
            
            // Close menu when clicking a link
            const links = menu.querySelectorAll('a');
            links.forEach(link => {
              link.addEventListener('click', () => {
                menu.classList.add('hidden');
                const icon = btn.querySelector('svg');
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
              });
            });
          }
        }
      `}} />
    </>
  );
}
