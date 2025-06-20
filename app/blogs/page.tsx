import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import durodoye from "@/components/images/kazeem.png"

export default function BlogsPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blogs</h1>
            <p className="text-xl  mb-8">
                Read the latest cybersecurity trends, expert tips, and industry perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-10">
        <div className="container-custom">
          <div className="items-start">
            <div className="space-y-8">
                
                      {/* Featured Profile */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold"></h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 mt-7">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={durodoye}
                    alt="Dr. Kazeem Durodoye"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:text-center">Securing Our 5G Infrastructure As A Critical National Information Infrastructure</h3>
                <div className="text-primary font-medium mb-4 md:flex md:justify-between">
                    <p className="">
                        By Kazeem Durodoye, PhD | FNCS
                    </p>
                    <p>
                        Updated: 12th of June, 2025
                    </p>
                </div>
                <div className="prose max-w-none">
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
                  
                  <Link
                    href="/blogs/securing-our-5G"
                    className="inline-flex items-center text-electric-blue hover:text-deep-blue font-medium transition-colors"
                    >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                </div>
              </div>
            </div>
          </div>
            </div>
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

