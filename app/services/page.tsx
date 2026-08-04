import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Services() {
  return (
    <>
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-teal-600 mb-12">Our Services</h1>

        {/* Home Modifications */}
        <section id="home-modifications" className="mb-16 pb-16 border-b">
          <div className="flex items-start gap-8">
            <div className="flex-shrink-0">
              <svg className="w-20 h-20 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-8H7v8M7 3v5h10" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-teal-600">Home Modifications</h2>
              <p className="text-lg text-gray-700 mb-4">When planning your home modification, it's important to involve an Occupational Therapist. We consider design aspects and personal requirements that go beyond what a builder alone can provide.</p>
              
              <h3 className="font-bold text-lg mt-6 mb-3">Benefits Include:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Future-proofing your home for long-term independence</li>
                <li>Making your home easier to access and move around in</li>
                <li>Improving safety for you and your visitors</li>
                <li>Creating aesthetically pleasing results that appeal to future buyers</li>
                <li>Opening up possibilities for family visits and participation</li>
              </ul>

              <h3 className="font-bold text-lg mb-3">What We Do:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Complete home assessments</li>
                <li>Design prescription and scope of works</li>
                <li>Source quotes from qualified builders</li>
                <li>Manage the building process</li>
                <li>Follow-up consultation post-completion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NDIS */}
        <section id="ndis" className="mb-16 pb-16 border-b">
          <div className="flex items-start gap-8">
            <div className="flex-shrink-0">
              <svg className="w-20 h-20 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7 20H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3l-4 4v-4z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-teal-600">NDIS Complex Home Modifications</h2>
              <p className="text-lg text-gray-700 mb-4">We have years of experience successfully gaining approval and funding for well-planned home modifications under the National Disability Insurance Scheme.</p>
              
              <h3 className="font-bold text-lg mt-6 mb-3">Our NDIS Process:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Initial home assessment and needs identification</li>
                <li>NDIS report completion using approved templates</li>
                <li>Comprehensive scope of works development</li>
                <li>Quotes sourcing from approved builders and suppliers</li>
                <li>Application submission to the NDIS</li>
                <li>Liaise with builders throughout the process</li>
                <li>Final certification and follow-up consultation</li>
              </ul>

              <p className="text-gray-700 text-sm bg-blue-50 p-4 rounded">
                <strong>Note:</strong> A qualified Occupational Therapist is required at every stage of the NDIS modification process. We ensure your application meets NDIS standards and maximizes your chances of approval.
              </p>
            </div>
          </div>
        </section>

        {/* Assistive Technology */}
        <section id="assistive-tech">
          <div className="flex items-start gap-8">
            <div className="flex-shrink-0">
              <svg className="w-20 h-20 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-teal-600">Assistive Technology & Equipment</h2>
              <p className="text-lg text-gray-700 mb-4">Assistive technology is equipment that makes life easier, safer and promotes independence. Sometimes AT is a simpler or faster solution than progressing to home modification.</p>
              
              <h3 className="font-bold text-lg mt-6 mb-3">Benefits of AT:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Lower cost than structural modifications</li>
                <li>Less invasive with minimal disruption</li>
                <li>Quickly organized and obtained</li>
                <li>Can be interim while awaiting longer-term solutions</li>
                <li>Portable for use in other environments</li>
              </ul>

              <p className="text-gray-700">We assess your needs, suggest possible AT solutions, trial equipment, and ensure proper setup and ongoing support.</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
