import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 gap-12 mb-12">
          {/* Services */}
          <div>
            <h4 className="text-white mb-6 font-bold">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services#home-modifications" className="text-gray-400 hover:text-white transition">Home Modifications</Link></li>
              <li><Link href="/services#ndis" className="text-gray-400 hover:text-white transition">NDIS Complex Modifications</Link></li>
              <li><Link href="/services#assistive-tech" className="text-gray-400 hover:text-white transition">Assistive Technology</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-6 font-bold">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p>
                <span className="font-semibold">Phone:</span><br />
                <a href="tel:0421196672" className="hover:text-white transition">0421 196 672</a>
              </p>
              <p>
                <span className="font-semibold">Email:</span><br />
                <a href="mailto:admin@yourchoiceot.com.au" className="hover:text-white transition">admin@yourchoiceot.com.au</a>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Service Area:</span><br />
                Brisbane, Gold Coast & surrounding areas
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-6 font-bold">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition">Gallery</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          {/* Acknowledgement */}
          <p className="text-gray-400 text-sm mb-6">
            We acknowledge the Aboriginal and Torres Strait Islander people as the traditional custodians of the land. We pay our respects to the Elders past, present and future.
          </p>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; 2026 Your Choice OT Pty Ltd. All rights reserved. | 
            <a href="https://facebook.com/yourchoiceot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-2">Follow us on Facebook</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
