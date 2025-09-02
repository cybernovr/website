import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import NewsCard from "@/components/news/news-card"
import Newsroom from "@/components/images/newsroom.jpg"
import Thisdaylive from "@/components/images/thisdaylive.jpg"
import Theeconomictimes from "@/components/images/Aminu-Maida-1140x570-1068x534.jpg"
import nairametrics from "@/components/images/nairametrics.jpg"


export default function NewsPage() {
  const nigeriacommunicationsweek = "https://www.nigeriacommunicationsweek.com.ng/wp-content/uploads/2025/08/NCC.jpg"
  const news = [
    {
      name: "TelecomNCC Unveils Cybersecurity Blueprint to Fortify Nigeria’s Telecom Backbone",
      description:
        "The presentation of the proposed framework by the Chief Executive Officer of CyberNovr, the consultants to the Commission on the project, Dr. Kazeem Durodoye, further provided details...",
      image: nigeriacommunicationsweek,
      href: "https://www.nigeriacommunicationsweek.com.ng/ncc-unveils-cybersecurity-blueprint-to-fortify-nigerias-telecom-backbone/",
      category: "Nigeria Communications Week",
    },
    {
      name: "NCC announced the development of a comprehensive cybersecurity framework",
      description:
        "Adding depth to the conversation, Dr. Kazeem Durodoye, CEO of Cybernovr, stressed the need for the framework to account for evolving mobile technologies such as Open RAN and...",
      image: Theeconomictimes,
      href: "https://theeconomictimes.com.ng/2025/06/05/ncc-unveils-comprehensive-cybersecurity-framework-to-safeguard-nigerias-telecom-sector/",
      category: "The Economic Times",
    },
    {
      name: "NDPC fines Multichoice Nigeria N766.2 million for violating NDP Act",
      description:
        "According to the Commission, the investigation of Multichoice, which commenced in the second quarter of 2024, was triggered by suspected breach of privacy rights of Multichoice subscribers and illegal cross-border transfer of personal data of Nigerians.",
      image: nairametrics,
      href: "https://nairametrics.com/2025/07/06/ndpc-fines-multichoice-nigeria-n766-2-million-for-violating-ndp-act/",
      category: "Nairametrics",
    },
    {
      name: "NCC unveils Cybersecurity Framework to safeguard Telecom Industry Expansion",
      description:
        "In his Presentation, Dr. Kazeem Durodoye, the Chief Executive Officer of Cybernovr, reiterated the necessity of securing Cyberspace amid rapid Digitisation and the emergence of new Risks. He noted...",
      image: Newsroom,
      href: "https://thenewsroom.ng/post?title=NCC-unveils-Cybersecurity-Framework-to-safeguard-Telecom-Industry-Expansion ",
      category: "The Newsroom NG",
    },
    {
      name: "NCC Moves to Develop Cybersecurity Regulatory Framework for Telecoms Sector",
      description:
        "In a lead paper presentation on the overview of the proposed cybersecurity framework for the telecoms sector, the CEO, Cybernovr and Consultant to NCC, Dr. Kazeem Durodoye, said...",
      image: Thisdaylive,
      href: "https://www.thisdaylive.com/2025/06/05/ncc-moves-to-develop-cybersecurity-regulatory-framework-for-telecoms-sector/ ",
      category: "This Day Live",
    },
  ]

  return (
    <>
      {/* Hero Sectio */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Company News & Updates</h1>
                <p className="text-xl">
                    Stay informed about our latest achievements, partnerships, and cybersecurity insights.
                </p>
            </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((news, index) => (
              <NewsCard
                key={index}
                name={news.name}
                description={news.description}
                image={news.image} 
                href={news.href}
                category={news.category}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-deep-blue text-black">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enjoying Our Resources?</h2>
            <p className="text-xl mb-8">
                Reach out to discover more cybersecurity insights, tools, and guides to help you stay protected.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
