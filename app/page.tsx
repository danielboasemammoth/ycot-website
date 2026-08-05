import Header from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { IconHome, IconClipboardCheck, IconSettings, IconUser, IconWrench, IconDoctor } from './components/Icons';

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
            <div className="hidden md:block relative rounded-2xl overflow-hidden shadow-2xl" style={{aspectRatio: '2/3', maxHeight: '420px'}}>
              <Image
                src="/images/hero-image.jpg"
                alt="Independence at home"
                fill
                className="object-cover"
                priority
              />
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
            <div className="feature-box primary">
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
              <div className="mb-4" style={{color: '#0f766e'}}><IconHome className="w-12 h-12" /></div>
              <h3>Home Modifications</h3>
              <p>Professional assessment and design of modifications to improve accessibility, safety and independence in your own home.</p>
              <Link href="/services#home-modifications" className="font-semibold text-teal-600 hover:text-teal-700">Learn more →</Link>
            </div>

            <div className="card">
              <div className="mb-4" style={{color: '#0f766e'}}><IconClipboardCheck className="w-12 h-12" /></div>
              <h3>NDIS Services</h3>
              <p>Specialized complex home modification services approved under the National Disability Insurance Scheme with expert guidance throughout the process.</p>
              <Link href="/services#ndis" className="font-semibold text-teal-600 hover:text-teal-700">Learn more →</Link>
            </div>

            <div className="card">
              <div className="mb-4" style={{color: '#0f766e'}}><IconSettings className="w-12 h-12" /></div>
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
              <div className="text-center mb-4" style={{color: '#0f766e'}}>
                <IconUser className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-teal-600">You</h3>
              <p>You know yourself and your needs best. You understand where your home design is failing and can give insight into your requirements for improved independence and safety.</p>
            </div>

            <div className="card">
              <div className="text-center mb-4" style={{color: '#0f766e'}}>
                <IconWrench className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-teal-600">The Builder</h3>
              <p>The builder understands the built environment, building codes, and regulatory requirements. Our builders have extensive experience in quality home modifications.</p>
            </div>

            <div className="card">
              <div className="text-center mb-4" style={{color: '#0f766e'}}>
                <IconDoctor className="w-10 h-10 mx-auto" />
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
        <Link href="/contact" className="btn" style={{backgroundColor: 'white', color: '#0f766e'}}>
          Start Your Journey
        </Link>
      </section>

      {/* Credentials */}
      <section className="bg-teal-600">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-white text-center mb-12">Certified & Approved</h2>
          <div className="credentials-grid items-center">
            <div className="credential-item">
              <div className="relative w-24 h-16 mx-auto mb-4 bg-white rounded-lg p-2">
                <Image src="/images/logos/ota-member.jpg" alt="Occupational Therapy Australia Member" fill className="object-contain rounded" />
              </div>
              <h4>Occupational Therapy Australia</h4>
              <p>Certified Member</p>
            </div>
            <div className="credential-item">
              <div className="relative w-24 h-16 mx-auto mb-4 bg-white rounded-lg p-2">
                <Image src="/images/logos/ndis-badge.jpg" alt="NDIS Provider" fill className="object-contain rounded" />
              </div>
              <h4>NDIS Provider</h4>
              <p>Complex Modifications</p>
            </div>
            <div className="credential-item">
              <div className="text-4xl mb-4">✓</div>
              <h4>MAC Provider</h4>
              <p>My Aged Care Services</p>
            </div>
            <div className="credential-item">
              <div className="text-4xl mb-4">✓</div>
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
