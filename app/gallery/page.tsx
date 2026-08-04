import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

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
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
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
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
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
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
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
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
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
            <a href="/contact" className="btn btn-primary" style={{backgroundColor: 'white', color: '#0d9488'}}>
              Get in Touch
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
