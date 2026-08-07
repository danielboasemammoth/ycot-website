import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { IconPhone, IconMail, IconMapPin, IconChat } from '@/app/components/Icons';

export default function Contact() {
  return (
    <>
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-teal-600 mb-4">Contact Us</h1>

        {/* NDIS-only notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
          <h2 className="text-amber-900 font-bold text-xl mb-2">NDIS Plan Managers & Referrers Only</h2>
          <p className="text-amber-800">
            Your Choice OT currently accepts referrals and inquiries exclusively from <strong>NDIS-approved plan managers and support coordinators</strong>. 
            We do not accept self-managed referrals or general public inquiries at this time.
          </p>
          <p className="text-amber-800 mt-2">
            If you are an NDIS plan manager or support coordinator looking to refer a participant for home modifications, please get in touch using the contact details below.
          </p>
        </div>

        {/* Contact Info - single column, plan manager focused */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-900">
                  <span className="text-teal-600"><IconPhone className="w-5 h-5" /></span> Phone
                </h3>
                <p className="text-gray-700 text-lg">
                  <a href="tel:0421196672" className="text-teal-600 hover:underline">0421 196 672</a>
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-900">
                  <span className="text-teal-600"><IconMail className="w-5 h-5" /></span> Email
                </h3>
                <p className="text-gray-700 text-lg">
                  <a href="mailto:admin@yourchoiceot.com.au" className="text-teal-600 hover:underline">admin@yourchoiceot.com.au</a>
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-900">
                  <span className="text-teal-600"><IconMapPin className="w-5 h-5" /></span> Service Area
                </h3>
                <p className="text-gray-700">
                  South East Queensland<br />
                  Brisbane, Gold Coast & surrounding areas
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-gray-900">
                  <span className="text-teal-600"><IconChat className="w-5 h-5" /></span> Follow Us
                </h3>
                <p className="text-gray-700 mb-3">Stay updated on our latest projects and tips:</p>
                <a href="https://facebook.com/yourchoiceot" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-semibold">
                  Follow us on Facebook →
                </a>
              </div>
            </div>
          </div>

          {/* Referral info panel */}
          <div>
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-8 h-full">
              <h3 className="text-teal-800 font-bold text-xl mb-4">Referring a Participant?</h3>
              <p className="text-gray-700 mb-4">
                To refer a participant for complex home modifications, please ensure you have the following information ready:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Participant NDIS number and plan details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Home modification requirements from OT assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Funding category and budget confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 mt-1">✓</span>
                  <span>Preferred timeline and builder preferences</span>
                </li>
              </ul>
              <p className="text-gray-700 text-sm">
                Initial assessments are typically available within 6 weeks of referral. Contact us directly to discuss your referral.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
