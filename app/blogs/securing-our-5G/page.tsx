import Image from "next/image"
import { Button } from "@/components/ui/button"
import NewsCard from "@/components/news/news-card"
import Newsroom from "@/components/images/newsroom.jpg"
import Thisdaylive from "@/components/images/thisdaylive.jpg"
import Theeconomictimes from "@/components/images/Aminu-Maida-1140x570-1068x534.jpg"
import securing5g from "@/components/images/securing5g.jpg"
import Link from "next/link"
// import { Share } from "lucide-react"
import Share from '@/components/share/page';

interface Post {
    slug: string;
    title: string;
    content?: string;
    date?: string;
    author?: string;
  }
  
  interface BlogPostProps {
    post: Post;
  }

export default function BlogOnePage({ post }: BlogPostProps) {
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
    },
    {
      name: "NCC announced the development of a comprehensive cybersecurity framework",
      description:
        "Adding depth to the conversation, Dr. Kazeem Durodoye, CEO of Cybernovr, stressed the need for the framework to account for evolving mobile technologies such as Open RAN and...",
      image: Theeconomictimes,
      href: "https://theeconomictimes.com.ng/2025/06/05/ncc-unveils-comprehensive-cybersecurity-framework-to-safeguard-nigerias-telecom-sector/",
      category: "The Economic Times",
    },
  ]

  return (
    <>
      <article>
        <section className="pt-32 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
            <div className="container-custom">
                <div className=" mx-auto">
                    <h1 className="text-xl md:text-3xl md:text-center font-bold mb-6">SECURING OUR 5G INFRASTRUCTURE AS A CRITICAL NATIONAL INFORMATION INFRASTRUCTURE</h1>
                        <div className="text-primary font-medium mb-4 md:flex md:justify-between lg:flex lg:justify-between">
                            <div>
                                <p>
                                    By Kazeem Durodoye, PhD | FNCS
                                </p>
                                <p>
                                    Updated: 12th of June, 2025
                                </p>
                            </div>
                            <div className="mt-3 mr-5">
                                <Share 
                                    url="https://cybernovr.com/blog/securing-our-5G" 
                                    title="SECURING OUR 5G INFRASTRUCTURE AS A CRITICAL NATIONAL INFORMATION INFRASTRUCTURE"
                                    slug="New blog post on cybernovr!"
                                />
                            </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-14">
            <div className="container-custom">
                <div className="text-lg md:text-xl lg:text-xl text-charcoal/90 leading-relaxed">
                    <p className="mb-4">
                            Nigeria auctioned the 3.5 gigahertz (GHz) spectrum on the 10th of December 2021,
                        which provided the regulatory platform to deploy the Fifth Generation (5G) 
                        mobile technology in September 2022. The launch and ubiquity of use cases of 5G, 
                        especially in powering critical services, are driving the need for resilience of 5G 
                        among industry, academia, and the government of Nigeria.
                    </p>
                    <p className="mb-4">
                        5G is an evolution from previous generations of mobile communication technologies. 
                        This evolution is usually referred to in a generation like first, second, third, fourth, etc. 
                        The key factor for the First Generation (1G) was mobility primarily used for analog voice 
                        services while the Second Generation (2G) was an improvement through the digitization of 
                        phone calls and enabling Short Message Services (SMS) as well as other basic data services. 
                        The Third Generation (3G) was launched in 1998 for a better internet experience (mobile and 
                        wireless internet connection). Broadband internet and internet-based applications were enabled 
                        on 3.5G while the Fourth Generation (4G), released around 2008 delivered high-speed internet 
                        and high-capacity multimedia for images and video.
                    </p>
                    <div className="flex justify-center my-8"> {/* Added my-8 for vertical spacing */}
                        <div className="relative rounded-lg overflow-hidden shadow-md max-w-2xl w-full bg-black">
                            <video 
                            autoPlay
                            muted // Required for autoplay in most browsers
                            controls // Shows play/pause/etc controls
                            loop // Optional: makes video loop
                            className="w-full h-auto"
                            >
                            <source 
                                src="/videos/NTAinterview.mp4"
                                type="video/mp4" 
                            />
                            Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <p className="mb-4">
                        Beyond being a radio access technology, 5G is a new architecture and standard with far greater
                        agility in all domains of human endeavor. Some of the benefits of 5G include improved capacity, 
                        latency, agility, reliability, and speeds, making it relevant to communication and 
                        infrastructure service providers and most industry verticals. 5G promises several critical use 
                        cases, from medical applications to delivering education to students in remote areas. Equally, 
                        industrial automation, public safety service, and support for public utilities or self-driving 
                        cars are also important applications of 5G. 
                    </p>
                    <div className="flex justify-center">
                        <div className="relative flex items-center rounded-lg overflow-hidden shadow-md max-w-2xl mx-auto"> 
                            <Image
                            src={securing5g}
                            alt="people using vision pro for virtual reality"
                            className="object-cover w-full h-auto"
                            />
                        </div>
                    </div>
                    <p className="mt-6">
                        The criticality of these use cases has put responsibilities on telecommunications operators and
                        the government to work together to safeguard the underlying technologies of 5G. This 
                        responsibility will ensure that appropriate safeguards are in place to prevent these 
                        infrastructures from malicious attacks from state and non-state actors. Some 5G high-level 
                        attack vectors include Denial of Service (DoS), exploiting backdoors, exploiting flaws in 
                        operational procedures, and other forms of attacks. Furthermore, 5G has multiple logical networks 
                        called network slices, and the increased number of devices connected invariably increases the 
                        attack surface and attack frequency, respectively. This means the 5G networks may be exposed to 
                        vulnerabilities with more serious consequences on the critical infrastructures it enables than the 
                        previous generations of mobile telecommunications. 
                    </p> 
                </div>

            </div>
        </section> 
        <section className="py-7 bg-deep-blue text-black">
            <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Reach out today!</h2>
                <p className="text-lg md:text-xl lg:text-xl text-charcoal/90 leading-relaxed mb-8">
                    At Cybernovr, we work with Government and private sector operators to protect Critical National Information Infrastructure (CNII) like 5G.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                    <Button
                    size="lg"
                    className="bg-cybernovr-red hover:bg-cybernovr-red/90 text-white"
                    // className="border-white text-black hover:bg-white/10"
                    >
                    Contact Us
                    </Button>
                </Link>
                </div>
            </div>
            </div>
        </section>
        
      </article>
    </>
  )
}
