import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Users, Calendar, Globe, Shield } from "lucide-react"
import Partner1 from "@/components/images/Proofpoint.jpg"
import Partner2 from "@/components/images/darktracelogo.png"
import Partner3 from "@/components/images/whalebonelogo.png"

export default function AwarenessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Awareness Campaign</h1>
            <p className="text-xl mb-8">
              Educating and engaging the public on key cybersecurity practices for a safer digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Cybersecurity Awareness Campaign (CAC)</h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  We plan to hold public events, cybersecurity education symposia, Cybersecurity Boot Camps (GenerationCyber Camps), 
                  Cybersecurity Awareness week, etc., to educate and engage the public on key cybersecurity practices like online 
                  child protection, election interference, pandemic-induced cyberthreats, online gender exploitation, cyber terrorism, etc.
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
                  Working in partnership with government and development institutions, our goal is to raise awareness and consciousness toward a safe and secure cyberspace.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <BookOpen className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Key Focus Areas</h3>
                <div className="space-y-4 mt-6">
                  {[
                    "Online child protection and safety",
                    "Protection against election interference",
                    "Pandemic-induced cyberthreats awareness",
                    "Prevention of online gender exploitation",
                    "Understanding and countering cyber terrorism",
                    "Safe social media practices",
                    "Secure online banking and financial transactions",
                    "Protection against phishing and social engineering",
                    "Mobile device security best practices",
                    "Data privacy and protection"
                  ].map((area, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-charcoal/80">{area}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Calendar className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Awareness Programs</h3>
                <div className="space-y-6 mt-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="font-bold text-xl mb-2">Public Events</h4>
                    <p className="text-charcoal/80">
                      We organize public events in communities, schools, and organizations to raise awareness about 
                      cybersecurity threats and best practices for staying safe online.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="font-bold text-xl mb-2">Cybersecurity Education Symposia</h4>
                    <p className="text-charcoal/80">
                      Our symposia bring together experts from various fields to discuss emerging cybersecurity threats 
                      and strategies for protection, providing valuable insights for individuals and organizations.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="font-bold text-xl mb-2">GenerationCyber Camps</h4>
                    <p className="text-charcoal/80">
                      These boot camps provide hands-on training for students and young professionals interested in 
                      cybersecurity, helping to build the next generation of cybersecurity experts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Cybersecurity Awareness Week</h4>
                    <p className="text-charcoal/80">
                      An annual event featuring workshops, seminars, and activities designed to promote cybersecurity 
                      awareness and education across different sectors and communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-deep-blue">Get Involved</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-charcoal mb-1">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="Your Organization"
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-charcoal mb-1">Area of Interest</label>
                      <select
                        id="interest"
                        name="interest"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                      >
                        <option value="">Select an area</option>
                        <option value="sponsor">Sponsor an Event</option>
                        <option value="speaker">Become a Speaker</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="attend">Attend an Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="How would you like to get involved?"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white">
                      Submit
                    </Button>
                  </form>
                </div>
                <div className="bg-light-gray rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-electric-blue mr-2" />
                        <span className="text-sm text-charcoal/70">June 15, 2025</span>
                      </div>
                      <h4 className="font-bold mb-1">Cybersecurity Awareness Workshop</h4>
                      <p className="text-sm text-charcoal/80">Virtual Event</p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-electric-blue mr-2" />
                        <span className="text-sm text-charcoal/70">July 10-14, 2025</span>
                      </div>
                      <h4 className="font-bold mb-1">GenerationCyber Summer Camp</h4>
                      <p className="text-sm text-charcoal/80">Cyber City Campus</p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-electric-blue mr-2" />
                        <span className="text-sm text-charcoal/70">October 1-7, 2025</span>
                      </div>
                      <h4 className="font-bold mb-1">Cybersecurity Awareness Week</h4>
                      <p className="text-sm text-charcoal/80">Multiple Locations</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full">
                        View All Events
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              We work with leading organizations to deliver impactful cybersecurity awareness programs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-32">
              <Image src={Partner1} alt="Partner 1" width={150} height={80} className="max-h-full w-auto" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-32">
              <Image src={Partner2} alt="Partner 2" width={150} height={80} className="max-h-full w-auto" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-32">
              <Image src={Partner3} alt="Partner 3" width={150} height={80} className="max-h-full w-auto" />
            </div>
            {/* <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-32">
              <Image src="/placeholder.svg?height=80&width=150" alt="Partner 4" width={150} height={80} className="max-h-full w-auto" />
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-blue text-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Cybersecurity Awareness Mission</h2>
            <p className="text-xl mb-8">
              Together, we can create a safer digital world through education and awareness.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
              >
                Get Involved Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}