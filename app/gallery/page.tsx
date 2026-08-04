import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function Gallery() {
  return (
    <>
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-teal-600 mb-4">Project Gallery</h1>
        <p className="text-gray-600 mb-12">Explore some of our completed home modifications and transformations.</p>

        <div className="mb-12">
          <p className="text-center text-gray-700 mb-6">
            For more project updates and inspiration, follow us on{' '}
            <a href="https://facebook.com/yourchoiceot" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold hover:underline">
              Facebook
            </a>
          </p>
        </div>

        {/* Gallery Sections */}
        <div className="space-y-16">
          {/* Home Access & Ramps */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Home Access & Ramps</h2>
            <div className="gallery-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="gallery-item">
                  📷
                </div>
              ))}
            </div>
          </section>

          {/* Bathrooms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bathroom Modifications</h2>
            <div className="gallery-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="gallery-item">
                  📷
                </div>
              ))}
            </div>
          </section>

          {/* Grab Rails */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Grab Rails & Supports</h2>
            <div className="gallery-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="gallery-item">
                  📷
                </div>
              ))}
            </div>
          </section>

          {/* Lifts & Hoists */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Lifts & Hoists</h2>
            <div className="gallery-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="gallery-item">
                  📷
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="mt-16 pt-12 border-t">
          <div className="bg-teal-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-white mb-4">Interested in Learning More?</h2>
            <p className="mb-6">Contact us to discuss how we can help transform your home.</p>
            <Link href="/contact" className="btn btn-primary" style={{backgroundColor: 'white', color: '#0d9488'}}>
              Get in Touch
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
