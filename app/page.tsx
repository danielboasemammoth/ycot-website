import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal to-teal-light text-white py-20">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-4 text-white">Independence in your home.</h1>
            <p className="text-xl mb-8 text-teal-light">Professional home modifications and occupational therapy services for Brisbane, Gold Coast & surrounding areas.</p>
            <div className="flex gap-4">
              <Link href="/contact" className="btn bg-white text-teal hover:bg-gray-100">
                Book a Consultation
              </Link>
              <Link href="/services" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden lg:block flex-1 text-right">
            <div className="text-7xl">🏠</div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-teal mb-2">25+ Years</h3>
            <p className="text-gray-700">Experience in Occupational Therapy & home modifications</p>
          </div>
          <div className="bg-purple text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">100+ Projects</h3>
            <p>Complex home modifications successfully completed</p>
          </div>
          <div className="bg-teal text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">NDIS Approved</h3>
            <p>Certified provider for complex home modifications</p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-teal mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">Through choice, we aim to create living environments that provide independence, promote safety, and create opportunity to participate in the greater community.</p>
        </div>

        {/* Services Preview */}
        <div>
          <h2 className="text-teal text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="font-bold text-lg mb-3">Home Modifications</h3>
              <p className="text-gray-700 mb-4">Professional assessment and design of modifications to improve accessibility, safety and independence.</p>
              <Link href="/services#home-modifications" className="text-teal font-semibold hover:underline">Learn more →</Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold text-lg mb-3">NDIS Services</h3>
              <p className="text-gray-700 mb-4">Specialized complex home modification services approved under the National Disability Insurance Scheme.</p>
              <Link href="/services#ndis" className="text-teal font-semibold hover:underline">Learn more →</Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-bold text-lg mb-3">Assistive Technology</h3>
              <p className="text-gray-700 mb-4">Assessment and prescription of equipment solutions that enhance independence and safety.</p>
              <Link href="/services#assistive-tech" className="text-teal font-semibold hover:underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal text-white py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Ready to Make Your Home Work for You?</h2>
          <p className="text-teal-light mb-8 text-lg">Contact us today for a free initial assessment.</p>
          <Link href="/contact" className="btn bg-white text-teal hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
