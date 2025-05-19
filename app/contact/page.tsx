import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl text-black md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-black">Get in touch with our team to discuss your cybersecurity needs.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1776119991766!2d7.4912863!3d9.0428683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba5c5112e8d%3A0x4c3a9ab8f12b4d1a!2sFebson%20Mall%2C%20Wuse%20Zone%204%2C%20Abuja!5e0!3m2!1sen!2sng!4v1652345678901!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="cybernovr Office Location"
                aria-label="Map showing cybernovr office location at Febson Mall, Wuse Zone 4, Abuja"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Find answers to common questions about our services and how we can help your organization.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What services does cybernovr offer?",
                answer:
                  "cybernovr offers a comprehensive range of cybersecurity services, including professional consulting, risk management, penetration testing, incident response, compliance, and virtual CISO services. We tailor our solutions to meet the specific needs of your organization.",
              },
              {
                question: "How can I request a security assessment?",
                answer:
                  "You can request a security assessment by filling out our contact form, calling our office, or sending us an email. One of our security experts will get in touch with you to discuss your requirements and schedule the assessment.",
              },
              {
                question: "Do you offer services for small businesses?",
                answer:
                  "Yes, we offer cybersecurity solutions for businesses of all sizes. We understand that small businesses have unique security challenges and budget constraints, and we provide tailored solutions that address these specific needs.",
              },
              {
                question: "What industries do you serve?",
                answer:
                  "We serve a wide range of industries, including finance, healthcare, retail, manufacturing, education, and government. Our team has experience working with organizations across various sectors and understands the specific security requirements of each industry.",
              },
              {
                question: "How quickly can you respond to a security incident?",
                answer:
                  "Our incident response team is available 24/7 and can respond rapidly to security incidents. The exact response time depends on the nature and severity of the incident, but we prioritize immediate containment and mitigation to minimize potential damage.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-charcoal/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
