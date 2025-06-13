import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Award, Users, Mail, Briefcase, ArrowRight, Download } from "lucide-react"
import durodoye from "@/components/images/kazeem.png"

export default function WhitepaperPage() {

//   const pdfUrl = "https://www.cisco.com/c/dam/en/us/products/collateral/security/cyber-threat-trends-report.pdf";
  const pdfUrl = "/whitepapers/cyber-threat-trends-report.pdf";

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-r from-deep-blue to-electric-blue text-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">White Papers</h1>
            <p className="text-xl mb-8">
                Download our latest reports to stay ahead of emerging threats and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 ">
                <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg md:text-xl font-bold">Cyber Threat Trends Report</h2>
                    <a 
                        href={pdfUrl} 
                        download="cyber-threat-trends-report.pdf" 
                        
                        >
                        <Button
                            size="sm"
                            className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
                        >
                            <Download size={18} className="mr-2"/>
                            Download PDF
                        </Button>
                    </a>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                <iframe 
                    src={`${pdfUrl}#view=fitH`}
                    className="w-full h-[600px]"
                    frameBorder="0"
                    title="PDF Preview"
                    ></iframe>
                </div>
                
                <div className="mt-6 text-sm text-gray-600">
                <p>This report provides insights into the latest cyber threat trends and security recommendations.</p>
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