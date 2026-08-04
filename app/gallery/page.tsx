import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Gallery() {
  return (
    <>
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-teal mb-4">Project Gallery</h1>
        <p className="text-gray-600 mb-12">Explore some of our completed home modifications and transformations.</p>

        <div className="mb-12">
          <p className="text-center text-gray-700 mb-6">
            For more project updates and inspiration, follow us on{' '}
            <a href="https://facebook.com/yourchoiceot" target="_blank" rel="noopener noreferrer" className="text-teal font-semibold hover:underline">
              Facebook
            </a>
          </p>
        </div>

        {/* Gallery Sections */}
        <div className="space-y-16">
          {/* Home Access & Ramps */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Home Access & Ramps</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl mb-2">🏗️</p>
                    <p className="text-gray-600">[Image {i}]</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bathrooms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bathroom Modifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl mb-2">🚿</p>
                    <p className="text-gray-600">[Image {i}]</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Grab Rails */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Grab Rails & Supports</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl mb-2">🛡️</p>
                    <p className="text-gray-600">[Image {i}]</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lifts & Hoists */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Lifts & Hoists</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl mb-2">⬆️</p>
                    <p className="text-gray-600">[Image {i}]</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="mt-16 pt-12 border-t">
          <div className="bg-teal text-white p-8 rounded-lg text-center">
            <h2 className="text-white mb-4">Interested in Learning More?</h2>
            <p className="mb-6">Contact us to discuss how we can help transform your home.</p>
            <a href="/contact" className="btn bg-white text-teal hover:bg-gray-100 inline-block">
              Get in Touch
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
