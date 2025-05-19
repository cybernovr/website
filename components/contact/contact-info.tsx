import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <p className="text-lg text-charcoal/80 mb-8">
          Have questions or need assistance? Our team is here to help. Contact us using the information below.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-electric-blue rounded-full p-3 mr-4">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Our Location</h3>
            <p className="text-charcoal/80">
            454 Evanston Dr NW,
              
              Calgary AB T3P 0H1, Ontario, Canada & 6A 
            </p>
            <br />
            <p className="text-charcoal/80">
            Fatai Anjorin Street, Gbagada Phase 2, Lagos. 
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-electric-blue rounded-full p-3 mr-4">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Phone</h3>
            <p className="text-charcoal/80">
              <a href="tel:+1234567890" className="hover:text-electric-blue transition-colors">
                +14439853735, +234 806-120-0000, +234 813 300 0419
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-electric-blue rounded-full p-3 mr-4">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Email</h3>
            <p className="text-charcoal/80">
              <a href="mailto:kazeem@cybernovr.com" className="hover:text-electric-blue transition-colors">
                kazeem@cybernovr.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-electric-blue rounded-full p-3 mr-4">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Business Hours</h3>
            <p className="text-charcoal/80">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold mb-4">Emergency Support</h3>
        <p className="text-charcoal/80">
          For urgent security incidents requiring immediate assistance, please call our 24/7 emergency response line:
        </p>
        <a href="tel:+234 813 300 0419" className="block mt-2 text-xl font-bold text-electric-blue hover:underline">
        +234 813 300 0419
        </a>
      </div>
    </div>
  )
}
