import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#home-modifications" className="hover:text-teal-light">Home Modifications</Link></li>
              <li><Link href="/services#ndis" className="hover:text-teal-light">NDIS Complex Modifications</Link></li>
              <li><Link href="/services#assistive-tech" className="hover:text-teal-light">Assistive Technology</Link></li>
              <li><Link href="/contact" className="hover:text-teal-light">Contact Us</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <p className="mb-2">📞 0421 196 672</p>
            <p className="mb-4">📧 admin@yourchoiceot.com.au</p>
            <p className="text-sm text-teal-light">Brisbane, Gold Coast & surrounding areas</p>
          </div>

          {/* Acknowledgement */}
          <div>
            <h4 className="font-bold text-lg mb-4">Acknowledgement</h4>
            <p className="text-sm">We acknowledge the Aboriginal and Torres Strait Islander people as the traditional custodians of the land. We pay our respects to the Elders past, present and future.</p>
          </div>
        </div>

        <div className="border-t border-teal-light pt-8 text-center text-sm">
          <p>&copy; 2026 Your Choice OT Pty Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
