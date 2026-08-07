import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-teal-600 mb-8">About Your Choice OT</h1>

        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-teal-600">Why We Do What We Do</h2>
          <p className="text-gray-700 leading-relaxed">
            As we move through different stages of life—whether living with a disability, growing older, or planning ahead—we often notice hidden barriers within our homes. What once felt comfortable can suddenly become challenging.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The good news? There's almost always a solution. With the right modifications, homes can become more accessible, more liveable, and far safer—without losing their comfort or character.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At its core, our goal is simple: to remove the barriers that prevent people from living full, independent lives. Because moving house shouldn't be the only option when your current home can be adapted to suit your needs.
          </p>
        </section>

        {/* Team */}
        <section className="mt-16">
          <h2 className="text-teal-600 mb-12">Meet Our Team</h2>
          
          <div className="team-grid">
            {/* Jamie */}
            <div className="team-card">
              <div className="relative w-full" style={{aspectRatio: '3/4'}}>
                <Image src="/images/team/jamie.jpg" alt="Jamie Matveyeff" fill className="object-cover object-top" />
              </div>
              <div className="team-card-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Jamie Matveyeff</h3>
                <p className="text-teal-600 font-semibold mb-4">Owner & Senior Occupational Therapist</p>
                
                <div className="space-y-4 text-gray-700">
                  <p>Jamie is the founder of Your Choice OT with a passion for integrating assistive technology and innovative design into the built environment.</p>
                  
                  <div>
                    <h4 className="font-bold mb-2">Experience</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>25+ years in occupational therapy</li>
                      <li>Acute and community health settings</li>
                      <li>Spinal cord injury, geriatrics, ABI</li>
                      <li>Australian and British healthcare systems</li>
                      <li>10 years managing NDIS Complex Home Modifications</li>
                    </ul>
                  </div>

                  <p className="text-sm italic">"I'm committed to designing future-focused, adaptable homes that support people to live safely and independently—both now and into the future."</p>
                </div>
              </div>
            </div>

            {/* Sarah */}
            <div className="team-card">
              <div className="relative w-full" style={{aspectRatio: '3/4'}}>
                <Image src="/images/team/sarah.jpg" alt="Sarah" fill className="object-cover object-top" />
              </div>
              <div className="team-card-content">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah</h3>
                <p className="text-teal-600 font-semibold mb-4">Office Manager & Administration</p>
                
                <div className="space-y-4 text-gray-700">
                  <p>Sarah has been integral to YCOT since the beginning, keeping operations running smoothly and ensuring Jamie can focus on what matters most: supporting clients.</p>
                  
                  <div>
                    <h4 className="font-bold mb-2">Role</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>First point of contact for NDIS plan manager referrals</li>
                      <li>Manages scheduling and operations</li>
                      <li>Guides clients through our process</li>
                      <li>Brings lived experience as mother of two children with disabilities</li>
                    </ul>
                  </div>

                  <p className="text-sm italic">"I connect with clients from a deeply personal perspective, ensuring they feel heard, supported, and understood every step of the way."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="bg-teal-600 text-white p-12 rounded-lg mt-16">
          <h2 className="text-white mb-8 text-center">Certified & Approved</h2>
          <div className="credentials-grid">
            <div className="credential-item">
              <p className="text-4xl mb-3">✓</p>
              <p className="font-semibold">Occupational Therapy Australia</p>
              <p className="text-sm text-teal-100">Certified Member</p>
            </div>
            <div className="credential-item">
              <p className="text-4xl mb-3">✓</p>
              <p className="font-semibold">NDIS Provider</p>
              <p className="text-sm text-teal-100">Complex Modifications</p>
            </div>
            <div className="credential-item">
              <p className="text-4xl mb-3">✓</p>
              <p className="font-semibold">MAC Provider</p>
              <p className="text-sm text-teal-100">My Aged Care Services</p>
            </div>
            <div className="credential-item">
              <p className="text-4xl mb-3">✓</p>
              <p className="font-semibold">Medicare Australia</p>
              <p className="text-sm text-teal-100">Approved Provider</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
