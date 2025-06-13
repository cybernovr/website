import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, BookOpen, Award } from "lucide-react"
import InitiativeCard from "@/components/initiatives/initiative-card"

export default function EventsPage() {
    
  return (
    <>
      
      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Protection against Election Interference",
                date: "May 21, 2025",
                location: "Cybernovr Training Center",
                description: "Discover how to identify and counter digital election interference tactics.",
              },
              {
                title: "Cybersecurity and Data Privacy",
                date: "June 18, 2025",
                location: "Virtual Event",
                description:
                  "Learn about the latest trends in cybersecurity and data privacy protection strategies.",
              },
              {
                title: "Pandemic-induced Cyberthreats Awareness",
                date: "July 23, 2025",
                location: "Virtual Event",
                description: "Understanding the evolving cyberthreats that emerged during global health crises.",
              },
              {
                title: "Prevention of Online Gender Exploitation",
                date: "August 20, 2025",
                location: "Cybernovr Training Center",
                description: "Learn strategies to identify and prevent online gender-based exploitation.",
              },
              {
                title: "Understanding and Countering Cyber Terrorism",
                date: "September 24, 2025",
                location: "Cyber City Campus",
                description: "Comprehensive overview of cyber terrorism threats and countermeasures.",
              },
              {
                title: "Safe Social Media Practices",
                date: "October 22, 2025",
                location: "Virtual Event",
                description: "Best practices for maintaining security and privacy while using social media platforms.",
              },
              {
                title: "Online Child Protection and Safety",
                date: "November 19, 2025",
                location: "Cybernovr Training Center",
                description: "Essential knowledge for parents and educators to protect children in digital environments.",
              },
              {
                title: "Secure Online Banking and Financial Transactions",
                date: "December 17, 2025",
                location: "Virtual Event",
                description: "Learn how to secure your financial activities online and prevent fraud.",
              },
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <div className="text-electric-blue font-medium mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="text-charcoal/70 mb-4">{event.location}</div>
                  <p className="text-charcoal/80 mb-6">{event.description}</p>
                  <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Register Now
                  </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      
    </>
  )
}
