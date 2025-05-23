import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Target } from "lucide-react";
import TeamMember from "@/components/about/team-member";
import FadeIn from "@/components/animations/fade-in";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Kazem from "@/components/images/kazeem.png";
import Tiyamiyu from "@/components/images/tiyamiyu.jpg"
import Tunde from "@/components/images/tundeali.jpg"
import Olisa from "@/components/images/olisaemeka.jpg"
import Ibrahim from "@/components/images/ibrahimnew.jpg"
import About1 from "@/components/images/abouttech1.jpeg";
import Akin from "@/components/images/drakin.jpg"

export default function AboutPage() {
  const boardMembers = [
    {
      name: "Prof. Mutawakilu Tiamiyu",
      title: "Chairman",
      bio: "Leading the board with extensive experience in governance and strategic direction.",
      image: Tiyamiyu,
    },
    {
      name: "Dr. Kazeem Durodoye",
      title: "CEO",
      bio: "Kazeem Durodoye has over 30 years of ICT experience in public, private, and development organizations. He holds a Ph.D in Information Systems and Business from the University of Ibadan.",
      image: Kazem,
      fullBio:
        "Kazeem Durodoye, has over 30 years of ICT experience in public, private, and development organizations. Kazeem is presently the Chief Executive Officer of cybernovr Nigeria Limited. From 2013 to 2016, Dr. Durodoye was the Group Executive Director in charge of Technology and New Media at LEADERSHIP Newspapers Limited. He holds a Ph.D in Information Systems and Business from the University of Ibadan. He is a fellow of the Nigeria Computing Society; Computer Professional Registration Council of Nigeria as well as the American Society of Information Science and Technology (ASIST). He holds the following professional certifications: Certified Information Systems Manager (CISM), Certified in the Governance of Enterprise IT (CGEIT), Microfinance Certified Professional (MCP), Project Management Professional (PMP).",
    },
    {
      name: "Dr. Tunde Ali",
      title: "Non-Executive Director",
      bio: "A first-class medical professional with over 17 years of medical practice across multiple countries.",
      image: Tunde,
      fullBio:
        "Dr. Tunde Alli is a first-class medical professional with over 17 years of medical practice in Nigeria, South Africa, Australia, and Canada. He is Consultant Anesthesia, Consultant Family Practice. His specialties include pain management, family practice, medical IT services, and internet marketing.",
    },
    // {
    //   name: "Eng. Gbolahan Oshonubi",
    //   title: "Non-Executive Director",
    //   bio: "Bringing engineering expertise to guide the strategic direction of cybernovr.",
    //   image: "/placeholder.svg?height=300&width=300",
    // },
    // {
    //   name: "Mrs.",
    //   title: "Board Member",
    //   bio: "Contributing valuable insights to the governance of cybernovr.",
    //   image: "/placeholder.svg?height=300&width=300",
    // },
  ];

  const managementTeam = [
    {
      name: "Dr. Kazeem Durodoye",
      title: "CEO",
      bio: "Leading cybernovr with over 30 years of ICT experience across various sectors.",
      image: Kazem,
      fullBio:
        "Kazeem Durodoye, has over 30 years of ICT experience in public, private, and development organizations. Kazeem is presently the Chief Executive Officer of cybernovr Nigeria Limited. From 2013 to 2016, Dr. Durodoye was the Group Executive Director in charge of Technology and New Media at LEADERSHIP Newspapers Limited. He holds a Ph.D in Information Systems and Business from the University of Ibadan. He is a fellow of the Nigeria Computing Society; Computer Professional Registration Council of Nigeria as well as the American Society of Information Science and Technology (ASIST). He holds the following professional certifications: Certified Information Systems Manager (CISM), Certified in the Governance of Enterprise IT (CGEIT), Microfinance Certified Professional (MCP), Project Management Professional (PMP).",
    },
    {
      name: "Mr. Ibrahim Oladeji",
      title: "CFO",
      bio: "An accomplished technology leader with almost 2 decades of experience in digital transformation.",
      image: Ibrahim,
      fullBio:
        "Oladeji Oluwaseyi Ibrahim is an accomplished technology leader with almost 2 decades of experience architecting and implementing enterprise-level digital transformation, ERP systems, and operational efficiency frameworks across public and private sectors in Nigeria. He brings hands-on experience in mission-critical digital infrastructure projects with a proven record of delivering results in complex environments. Core Competencies: Strategic IT Planning & Execution, Business Process Automation, ERP Design & Implementation, Lean & Data-Driven Digital Transformation, Multi-Stakeholder Systems Integration, Dashboard & Analytics Development. Certifications & Qualifications: 2 Bachelor's Degrees in Computer Science & Psychology, MBA, Master's in Information Science, PMP, CISA, COBIT5. Expert in aligning IT with strategic business goals for tangible, measurable impact.",
    },
    {
      name: "Akinwale Mayomi Aisida",
      title: "Non-Executive Director",
      bio: "Akinwale Mayomi Aisida,  is a Cybersecurity Researcher at the Canadian Institute of Cybersecurity, ",
      image: Akin,
      fullBio:
        "Akinwale Mayomi Aisida,  is a Cybersecurity Researcher at the Canadian Institute of Cybersecurity, University of New Brunswick, Canada. He  specializes in developing intelligent and adaptive solutions to emerging threats in networked systems. With a strong academic and practical foundation in machine learning, artificial intelligence (AI), and deep learning, Akinwale brings extensive research and professional background to CYBERNOVR focusing on applying data-driven techniques to intrusion detection, zero-day attack identification, and threat intelligence modeling.As Head of Threat Intelligence team, he possess robust hands-on expertise in building and deploying models using frameworks such as PyTorch, Keras, and TensorFlow, alongside proficiency in Python, NumPy, Pandas, scikit-learn, and Matplotlib. He is highly skilled in high-performance modeling, feature engineering, and real-time anomaly detection using both traditional ML classifiers (e.g., Random Forest, SVM, XGBoost) and advanced deep learning architectures (e.g., CNNs, RNNs, LSTMs, Autoencoders).",
    },
    {
      name: "Olisa Okafor",
      title: "Cybersecurity Analyst",
      bio: "Specializing in threat detection and security analysis to protect client assets.",
      image: Olisa,
      fullBio: 
        "Olisa Okafor is a cybersecurity analyst with extensive experience in threat detection and security analysis. He has a strong background in network security, incident response, and threat intelligence. Olisa is skilled in security information and event management (SIEM) systems, network security monitoring, and threat hunting. He is also knowledgeable in security frameworks and regulations such as NIST, ISO 27001, and HIPAA. Olisa is a certified CompTIA Security+ professional and is currently pursuing a degree in Computer Science.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-deep-blue to-electric-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl text-black md:text-5xl font-bold mb-6">
              About cybernovr
            </h1>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <p className="text-lg text-charcoal/90 leading-relaxed">
                Since 2008, CYBERNOVR has been a Cybersecurity organisation providing cybersecurity services in Governance, Risk and Compliance management. We have strong expertise in Critical Infrastructure (CI) protection, Digital Transformation and cybersecurity training. We have worked with Ministries, Departments, and Agencies of the Government of Nigeria in developing and implementing the National Cybersecurity Policy and Strategy as well developing cybersecurity frameworks for critical sectors. We also work with numerous private organisations in different verticals to secure and protect their information assets and thereby safeguarding their future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 w-full">
              <div className="mb-4 w-full">
                <div className="relative w-full h-65 rounded-lg overflow-hidden shadow-lg mb-4">
                  <Image src={About1} alt="cybernovr Mission" layout="responsive" width={600} height={256} className="object-cover w-full h-full rounded-lg" />
                </div>
                <div className="relative w-full h-50 rounded-lg overflow-hidden shadow-lg">
                  {/* <Image src={About2} alt="cybernovr Vision" layout="responsive" width={600} height={256} className="object-cover w-full h-full rounded-lg" /> */}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-charcoal/80">
                  To protect your critical information assets and services today
                  and always.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-charcoal/80">
                  To work with you to protect and safeguard your critical
                  information assets and services. We will achieve this through
                  our groundbreaking research in the theory and practice of
                  information assurance and security. We will share ideas with
                  you on your most important cybersecurity priorities. These, we
                  will deliver to the delight of our customers and other
                  stakeholders.
                </p>
              </div>
              <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">What drives us</h2>
                <p className="text-lg text-charcoal/80">
                  Our business philosophy is deeply rooted in our unflinching
                  belief that “Nothing's impossible”. We only need to “Keep
                  Thinking”! This has been the drive behind the innovations we
                  come up with at cybernovr Limited. Our employees have passed
                  through the special training module designed to engrain the
                  Philosophy of “nothing is impossible”. Come, and have a taste
                  of the possibility by challenging us.
                </p>
              </div>
              <div className="mt-10">
                <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                <div className="grid grid-cols-1 gap-6 mt-6">
                  {[
                    {
                      icon: <Target className="h-8 w-8 text-electric-blue" />, 
                      title: "Creativity",
                      description:
                        "We create innovations through our resolute belief that \"Nothing's Impossible\" To achieve the impossible in solving our customer's cybersecurity challenges, we simply keep thinking and utilize the best industry standards and tools.",
                    },
                    {
                      icon: <Users className="h-8 w-8 text-electric-blue" />,
                      title: "Customer Delight",
                      description:
                        "We will not stop until you are delighted. We pride ourselves in unparalleled customer delight principles for conducting our business. Our internal and external customers will have this to say about us: \"We are delighted.\"",
                    },
                    {
                      icon: <Award className="h-8 w-8 text-electric-blue" />,
                      title: "Innovation",
                      description:
                        "Innovation is at the heart of what we do. We keep striving for new ways of getting things done with dramatic improvements in cost, quality, time, and risk.",
                    },
                    {
                      icon: <Users className="h-8 w-8 text-electric-blue" />,
                      title: "People",
                      description:
                        "Our people are the brains behind our success. We have equipped our people with what it takes to provoke their intellectual curiosity.",
                    },
                    {
                      icon: <Shield className="h-8 w-8 text-electric-blue" />,
                      title: "Faith in God",
                      description:
                        "We believe in God to inspire us and bless the works of our hands",
                    },
                  ].map((value, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mt-1">{value.icon}</div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold">{value.title}</h3>
                        <p className="text-charcoal/80">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-light-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              Meet the experts behind cybernovr who are dedicated to protecting your
              organization from cyber threats.
            </p>
          </div>

          <Tabs defaultValue="board" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/50 backdrop-blur-sm">
                <TabsTrigger value="board" className="text-lg px-6 py-3">
                  Board
                </TabsTrigger>
                <TabsTrigger value="management" className="text-lg px-6 py-3">
                  Management
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="board" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {boardMembers.map((member, index) => (
                  <FadeIn key={index} direction="up" delay={index * 0.1}>
                    <TeamMember
                      name={member.name}
                      title={member.title}
                      bio={member.bio}
                      image={member.image}
                      fullBio={member.fullBio}
                    />
                  </FadeIn>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="management" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {managementTeam.map((member, index) => (
                  <FadeIn key={index} direction="up" delay={index * 0.1}>
                    <TeamMember
                      name={member.name}
                      title={member.title}
                      bio={member.bio}
                      image={member.image}
                      fullBio={member.fullBio}
                    />
                  </FadeIn>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Featured Profile */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold">Leadership Profile</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={Kazem}
                    alt="Dr. Kazeem Durodoye"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-2">Dr. Kazeem Durodoye</h3>
                <p className="text-electric-blue font-medium mb-4">
                  CEO & Founder
                </p>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    Kazeem Durodoye has over 30 years of ICT experience in
                    public, private, and development organizations. Kazeem is
                    presently the Chief Executive Officer of cybernovr Nigeria
                    Limited. From 2013 to 2016, Dr. Durodoye was the Group
                    Executive Director in charge of Technology and New Media at
                    LEADERSHIP Newspapers Limited.
                  </p>
                  <p className="mb-4">
                    He holds a Ph.D in Information Systems and Business from the
                    University of Ibadan. He is a fellow of the Nigeria
                    Computing Society; Computer Professional Registration
                    Council of Nigeria as well as the American Society of
                    Information Science and Technology (ASIST).
                  </p>
                  <p className="font-medium">Professional Certifications:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Certified Information Systems Manager (CISM)</li>
                    <li>
                      Certified in the Governance of Enterprise IT (CGEIT)
                    </li>
                    <li>Microfinance Certified Professional (MCP)</li>
                    <li>Project Management Professional (PMP)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
              From our founding to today, we've been committed to advancing
              cybersecurity for organizations of all sizes.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - visible on larger screens */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cybernovr-green/20 hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2008",
                  title: "First Cybersecurity Workshop",
                  description:
                    "Co-Organised the first Cybersecurity Workshop in Nigeria.",
                  isLeft: true,
                },
                {
                  year: "2013",
                  title: "National Cybersecurity Policy",
                  description:
                    "Developed the National Cybersecurity Policy and Strategy for the Office of National Security Adviser (ONSA).",
                  isLeft: false,
                },
                {
                  year: "2014",
                  title: "Presidential Approval",
                  description:
                    "The National Cybersecurity Policy and Strategy approved and signed by the President of Nigeria.",
                  isLeft: true,
                },
                {
                  year: "2018-2025",
                  title: "Corporate Cybersecurity",
                  description:
                    "Developed Cybersecurity Governance and Strategy for Payment Systems companies, Banks and other corporate organisations.",
                  isLeft: false,
                },
                {
                  year: "2020",
                  title: "Sectoral CSIRT",
                  description:
                    "Setup and operationalisation of the Sectoral CSIRT for the Communication Sector.",
                  isLeft: true,
                },
                {
                  year: "2021",
                  title: "eNaira Programme Management",
                  description:
                    "Developed the Programme Management framework for eNaira (incorporating Cybersecurity).",
                  isLeft: false,
                },
                {
                  year: "2022",
                  title: "ZIASS Limited Founded",
                  description:
                    "Incorporated ZIASS Limited. Rebranded as CYBERNOVR in May 2025.",
                  isLeft: true,
                },
                {
                  year: "2023",
                  title: "National CERT Collaboration",
                  description:
                    "Further cybersecurity works with the National CERT (ngCERT).",
                  isLeft: false,
                },
                {
                  year: "2024",
                  title: "Digital Public Infrastructure",
                  description:
                    "Developed Digital Public Infrastructure (incorporating Cybersecurity Requirements) for all Nigerian States (a project of Nigerian Governors Forum).",
                  isLeft: true,
                },
                {
                  year: "2025",
                  title: "Communication Sector Framework",
                  description:
                    "Developing Cybersecurity Framework for the Nigerian Communication Sector.",
                  isLeft: false,
                },
              ].map((event, index) => (
                <FadeIn
                  key={index}
                  direction={event.isLeft ? "right" : "left"}
                  delay={index * 0.1}
                  className="relative"
                >
                  <div
                    className={`flex flex-col md:flex-row ${
                      event.isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Timeline dot - visible on larger screens */}
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cybernovr-green border-4 border-white hidden md:block"></div>

                    {/* Mobile year indicator */}
                    <div className="bg-cybernovr-green text-white font-bold py-1 px-4 rounded-full inline-block mb-2 md:hidden">
                      {event.year}
                    </div>

                    <div
                      className={`w-full md:w-5/12 ${
                        event.isLeft
                          ? "md:text-right md:pr-8"
                          : "md:text-left md:pl-8"
                      }`}
                    >
                      <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                        {/* Desktop year indicator */}
                        <div className="text-cybernovr-green font-bold text-xl mb-2 hidden md:block">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {event.title}
                        </h3>
                        <p className="text-charcoal/80">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
