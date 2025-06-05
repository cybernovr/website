import Image from "next/image"
import { Button } from "@/components/ui/button"
// import ProductCard from "@/components/products/product-card"
import NewsCard from "@/components/news/news-card"
import Newsroom from "@/components/images/newsroom.jpg"
import Thisdaylive from "@/components/images/thisdaylive.jpg"

export default function NewsPage() {
  const news = [
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
    }
  ]

  return (
    <>
      {/* Hero Section */}
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
    </>
  )
}
