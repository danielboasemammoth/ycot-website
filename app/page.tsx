import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="hero-content">
              <h1>Independence in your home.</h1>
              <p>Professional home modifications and occupational therapy services designed to enhance safety, accessibility, and quality of life for Brisbane, Gold Coast and surrounding areas.</p>
              <div className="hero-buttons">
                <Link href="/contact" className="btn btn-primary">
                  Book a Consultation
                </Link>
                <Link href="/services" className="btn btn-outline">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="text-center hidden md:block">
              <div className="w-64 h-64 mx-auto bg-white bg-opacity-20 rounded-2xl flex items-center justify-center border-2 border-white border-opacity-30">
                <svg className="w-40 h-40 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9h4V5H3v4zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zm-5 5h4v-4H8v4zm-5 0h4v-4H3v4zm10-5h4v-4h-4v4zm5-9v2h5V5h-5zm0 7h5v-2h-5v2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-number">25+</div>
              <h3>Years Experience</h3>
              <p>In occupational therapy and home modifications</p>
            </div>
            <div className="feature-box primary">
              <div className="feature-number">100+</div>
              <h3>Projects Completed</h3>
              <p>Complex modifications successfully delivered</p>
            </div>
            <div className="feature-box secondary">
              <div className="feature-number">✓</div>
              <h3>NDIS Approved</h3>
              <p>Provider for complex home modifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section>
        <div className="container mx-auto px-6 py-20 max-w-4xl">
          <div className="mission-box">
            <h2>Our Mission</h2>
            <p>Through choice, we aim to create living environments that provide independence, promote safety, and create opportunity to participate in the greater community.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2>What We Offer</h2>
            <p>Comprehensive solutions tailored to your needs and goals</p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">
                <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-8H7v8M7 3v5h10" />
                </svg>
              </div>
              <h3>Home Modifications</h3>
              <p>Professional assessment and design of modifications to improve accessibility, safety and independence in your own home.</p>
              <Link href="/services#home-modifications" className="font-semibold text-teal-600 hover:text-teal-700">Learn more →</Link>
            </div>

            <div className="card">
              <div className="card-icon">
                <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7 20H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3l-4 4v-4z" />
                </svg>
              </div>
              <h3>NDIS Services</h3>
              <p>Specialized complex home modification services approved under the National Disability Insurance Scheme with expert guidance throughout the process.</p>
              <Link href="/services#ndis" className="font-semibold text-teal-600 hover:text-teal-700">Learn more →</Link>
            </div>

            <div className="card">
              <div className="card-icon">
                <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3>Assistive Technology</h3>
              <p>Assessment and prescription of equipment solutions that enhance independence, safety and participation in daily activities.</p>
              <Link href="/services#assistive-tech" className="font-semibold text-teal-600 hover:text-teal-700">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section>
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2>How We Work Together</h2>
            <p>Our collaborative approach ensures the best outcomes for your home</p>
          </div>

          <div className="grid grid-3">
            <div className="card">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 text-teal-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-teal-600">You</h3>
              <p>You know yourself and your needs best. You understand where your home design is failing and can give insight into your requirements for improved independence and safety.</p>
            </div>

            <div className="card">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 text-teal-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-teal-600">The Builder</h3>
              <p>The builder understands the built environment, building codes, and regulatory requirements. Our builders have extensive experience in quality home modifications.</p>
            </div>

            <div className="card">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 text-teal-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="text-teal-600">The OT</h3>
              <p>With professional expertise in aging, disability and illness, we proactively research solutions and understand how needs change over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section container mx-auto px-6 max-w-4xl">
        <h2>Ready to Transform Your Home?</h2>
        <p>Get in touch with us today for a free initial assessment and consultation.</p>
        <Link href="/contact" className="btn btn-primary">
          Start Your Journey
        </Link>
      </section>

      {/* Credentials */}
      <section className="bg-teal-600">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-white text-center mb-12">Certified & Approved</h2>
          <div className="credentials-grid">
            <div className="credential-item">
              <div className="credential-icon">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h4>Occupational Therapy Australia</h4>
              <p>Certified Member</p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h4>NDIS Provider</h4>
              <p>Complex Modifications</p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h4>MAC Provider</h4>
              <p>My Aged Care Services</p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h4>Medicare Australia</h4>
              <p>Approved Provider</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
