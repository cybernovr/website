import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Award, Users, Mail, Briefcase } from "lucide-react"

export default function YouthLeaguePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Youth League</h1>
            <p className="text-xl  mb-8">
              Empowering tomorrow's cyber defenders through hands-on training, mentorship, and real-world challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {/* <div>
                <h2 className="text-3xl font-bold mb-6">Cybersecurity Education & Training (CET)</h2>
                <p className="text-lg text-charcoal/80 mb-6">
                  Our partnership covers curriculum development, coaching, and mentoring cybersecurity professionals. The 
                  Cybersecurity Education & Training (CET) also offers internships and apprenticeships through a network of 
                  partner government and private organisations to provide a platform for young cybersecurity professionals.
                </p>
                <p className="text-lg text-charcoal/80 mb-6">
                  We use this platform for generating and developing a pipeline of trained and qualified cybersecurity 
                  professionals across Africa. Interested in partnering with us, contact Dr. Kazeem Durodoye at 
                  <a href="mailto:kazeem@cybernovr.com" className="text-electric-blue hover:underline"> kazeem@cybernovr.com</a>
                </p>
              </div> */}

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Users className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cybersecurity Youth League (CYL)</h3>
                <p className="text-charcoal/80 mb-6">
                  We partner with Government and private Primary and Secondary schools nationwide to form Cybersecurity Youth 
                  League (CYL) in their school. This Club is a group of interested students under our supervision and guidance 
                  to inculcate basic cyber hygiene in these youths. An instructor in the school is identified as a League Leader 
                  who is the primary point of contact for all our engagements with the school.
                </p>
                <p className="text-charcoal/80 mb-6">
                  To enrol your school in CYL, please email 
                  <a href="mailto:kazeem@cybernovr.com" className="text-electric-blue hover:underline"> kazeem@cybernovr.com</a>
                </p>
                
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <div className="mb-6">
                  <Award className="h-12 w-12 text-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Training Programs</h3>
                <div className="space-y-6 mt-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="font-bold text-xl mb-2">Curriculum Development</h4>
                    <p className="text-charcoal/80">
                      We work with educational institutions to develop comprehensive cybersecurity curricula that align with 
                      industry standards and prepare students for real-world challenges.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="font-bold text-xl mb-2">Coaching and Mentoring</h4>
                    <p className="text-charcoal/80">
                      Our experienced professionals provide coaching and mentoring to aspiring cybersecurity professionals, 
                      helping them develop the skills and knowledge needed to succeed in the field.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="font-bold text-xl mb-2">Internships and Apprenticeships</h4>
                    <p className="text-charcoal/80">
                      We offer internships and apprenticeships through our network of partner organizations, providing 
                      hands-on experience and practical training for young cybersecurity professionals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Professional Development</h4>
                    <p className="text-charcoal/80">
                      We provide ongoing professional development opportunities for cybersecurity professionals, helping 
                      them stay current with the latest trends, technologies, and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-deep-blue">Enroll Your School</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">Your Name *</label>
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
                      <label htmlFor="school" className="block text-sm font-medium text-charcoal mb-1">School Name *</label>
                      <input
                        type="text"
                        id="school"
                        name="school"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="School Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-charcoal mb-1">Your Position</label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="e.g., Principal, Teacher, IT Coordinator"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="Tell us about your school and interest in the Cybersecurity Youth League"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white">
                      Submit Enrollment Request
                    </Button>
                  </form>
                </div>
                <div className="bg-light-gray rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">Partner With Us</h3>
                  <p className="text-charcoal/80 mb-4">
                    We're always looking for organizations to partner with us in our mission to develop the next generation 
                    of cybersecurity professionals.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Sponsor a school's Cybersecurity Youth League</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Provide internship opportunities for students</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Contribute to curriculum development</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-charcoal/80">Volunteer as a mentor or guest speaker</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full">
                        Contact Us to Partner
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Successful Partnerships */}
      <section className="py-16 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Successful Partnerships</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Learn about our collaborative efforts with government, organizations, and educational institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-electric-blue text-4xl font-serif mb-4">"</div>
              <p className="text-charcoal/80 italic mb-6">
                We have a no objection from Ministry of Education, Osun state to train all secondary Students in the State.
              </p>
              <div>
                <h4 className="font-bold">Osun State Government</h4>
                <p className="text-charcoal/70">Permanent Secretary, Ministry of Education</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-electric-blue text-4xl font-serif mb-4">"</div>
              <p className="text-charcoal/80 italic mb-6">
                We are partnering with Rotary Club of Lagos to train secondary School students in selected schools in the Rotary Intervention Programme.
              </p>
              <div>
                <h4 className="font-bold">Rotary Club of Lagos</h4>
                <p className="text-charcoal/70">Community Education Initiative</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-electric-blue text-4xl font-serif mb-4">"</div>
              <p className="text-charcoal/80 italic mb-6">
                We partnered with AFSI to provide cybersecurity lectures to university students in Nigeria and Cameroon.
              </p>
              <div>
                <h4 className="font-bold">African Foundation for Systems Integration (AF4SI)</h4>
                <p className="text-charcoal/70">Aligned with Capitol Technology University, USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-blue text-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Invest in the Future of Cybersecurity</h2>
            <p className="text-xl mb-8">
              Join us in developing the next generation of cybersecurity professionals through education and training.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/courses">
                <Button
                  size="lg"
                  className="bg-cybernovr-red hover:bg-cybernovr-red/90 text-white"
                >
                  Enroll Your School
                </Button>
              </Link>
              <Link href="mailto:info@cybernovr.com">
                <Button
                  size="lg"
                  variant="outline"
                  // className="border-white text-black hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}