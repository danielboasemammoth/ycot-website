import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContactForm from '@/app/components/ContactForm';
import { IconPhone, IconMail, IconMapPin, IconChat } from '@/app/components/Icons';

export default function Contact() {
  return (
    <>
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-teal-600 mb-2">Get In Touch</h1>
        <p className="text-xl text-gray-600 mb-12">Initial assessments available within 6 weeks of referral.</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
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

              <div className="bg-teal-50 p-6 rounded-lg mt-8">
                <h3 className="font-bold text-lg mb-3 text-teal-700">Your Inquiry</h3>
                <p className="text-gray-700 text-sm">We're here to answer your questions about home modifications, NDIS services, or assistive technology. Please fill out the form and we'll be in touch within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <section className="mt-16 pt-16 border-t">
          <h2 className="text-teal-600 text-center mb-8">Share Your Feedback</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            We value all types of feedback. Your input helps us continually improve our services. You can share compliments, suggestions, or concerns below.
          </p>
          
          <form className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <textarea
              placeholder="Your feedback..."
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <button type="submit" className="w-full btn btn-secondary">
              Submit Feedback
            </button>
          </form>
        </section>
      </div>

      <Footer />
    </>
  );
}
