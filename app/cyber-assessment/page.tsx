"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, MousePointerClick, User, ChevronLeft, ChevronRight, ArrowRight,
  Shield,
  Lock,
  Server,
  Globe,
  Users,
  CheckCircle,
  RefreshCcw,
  OctagonAlert,
  AlertTriangle,
  FileCheck, } from "lucide-react"
import durodoye from "@/components/images/kazeem.png"
import cyberhealth from "@/components/images/cyber-health.png"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import ServiceCard from "@/components/home/service-card";


export default function CyberAssessmentPage() {
  const BeginnerService = [
    {
      title: "Risk Management",
      description:
        "Comprehensive risk assessment and management services to identify, evaluate, and mitigate security risks.",
      icon: <AlertTriangle className="h-12 w-12 text-electric-blue" />,
      href: "/services/risk-management",
    },
    {
      title: "Cybersecurity Resilience",
      description:
        "Our team of cybersecurity experts provides tailored consulting services to help you identify and address your security challenges.",
      icon: <Shield className="h-12 w-12 text-electric-blue" />,
      href: "/services/professional-services",
    },
  ];

  const IntermediateService = [
    {
      title: "Risk Management",
      description:
        "Comprehensive risk assessment and management services to identify, evaluate, and mitigate security risks.",
      icon: <AlertTriangle className="h-12 w-12 text-electric-blue" />,
      href: "/services/risk-management",
    },
    {
      title: "GRC",
      description:
        "Governance, Risk, and Compliance services to help you meet regulatory requirements and industry standards.",
      icon: <FileCheck className="h-12 w-12 text-electric-blue" />,
      href: "/services/grc",
    },
  ];

  const AdvancedService = [
    {
      title: "NovrGRC",
      description:
        "An effective GRC framework ensures that cybersecurity strategies are aligned with business objectives.",
      icon: <Server className="h-10 w-10 text-cybernovr-red" />,
      href: "/products/novrgrc",
    },
    {
      title: "NovrPRISM",
      description:
        "Processes and sophisticated tools employed to assess and distribute cyber threat intelligence.",
      icon: <Globe className="h-10 w-10 text-cybernovr-red" />,
      href: "/products/novrprism",
    },
  ];

  const [assessmentStarted, setAssessmentStarted] = useState(false)
  const [sectorSelected, setSectorSelected] = useState(false)
  const [selectedSector, setSelectedSector] = useState("")
  const [currentGroup, setCurrentGroup] = useState(1)
  const [group1Completed, setGroup1Completed] = useState(false)
  const [group2Completed, setGroup2Completed] = useState(false)
  const [group3Completed, setGroup3Completed] = useState(false)
  const [group4Completed, setGroup4Completed] = useState(false)
  const [group5Completed, setGroup5Completed] = useState(false)
  const [showValidationError, setShowValidationError] = useState(false);
  const [email, setEmail] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const resetAssessment = () => {
    setAssessmentStarted(false);
    setSectorSelected(false);
    setSelectedSector("");
    setCurrentGroup(1);
    setGroup1Completed(false);
    setGroup2Completed(false);
    setGroup3Completed(false);
    setGroup4Completed(false);
    setGroup5Completed(false);
    setScore(0);
    setShowResults(false);
    setFormData({
      selectedSector: "",
      hasPolicy: "",
      securityMeasures: [],
      hasImprove: "",
      cybersecurityMeasures: [],
      supplyChain: "",
      assetMeasures: [],
      riskMeasures: [],
      incidentMeasures: [],
      initiatives: "",
      consent: false
    });
  };
  
  // Form state
  const [formData, setFormData] = useState({
    selectedSector: "",
    hasPolicy: "",
    securityMeasures: [] as string[],
    hasImprove: "",
    cybersecurityMeasures: [] as string[],
    supplyChain: "",
    assetMeasures: [] as string[],
    riskMeasures: [] as string[],
    incidentMeasures: [] as string[],
    initiatives: "",
    consent: false
  })

  const handleBeginAssessment = () => {
    setAssessmentStarted(true)
  }

  const handleSectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSector(e.target.value)
    setSectorSelected(!!e.target.value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentValue = prev[name as keyof typeof formData];
      
      if (Array.isArray(currentValue)) {
        if (checked) {
          return {
            ...prev,
            [name]: [...currentValue, value]
          };
        } else {
          return {
            ...prev,
            [name]: currentValue.filter(v => v !== value)
          };
        }
      }
      return prev;
    });
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }))
  }

  const calculateScore = () => {
    let newScore = 0
  
    if (selectedSector === "Others") {
      newScore += 0;
    } else if (selectedSector) {
      newScore += 10;
    }
    
    // Question 1
    if (formData.hasPolicy === "yes") newScore += 5
  
    // Question 2
    if (formData.securityMeasures.includes("none")) {
      newScore += 0
    } else {
      formData.securityMeasures.forEach(() => newScore += 5)
    }
  
    // Question 3
    if (formData.hasImprove === "yes") newScore += 2.5
  
    // Question 4
    if (formData.cybersecurityMeasures.includes("none")) {
      newScore += 0
    } else {
      formData.cybersecurityMeasures.forEach(() => newScore += 2.5)
    }
  
    // Question 5
    if (formData.supplyChain === "yes") newScore += 10
  
    // Question 6
    if (formData.assetMeasures.includes("none")) {
      newScore += 0
    } else {
      formData.assetMeasures.forEach(() => newScore += 2.5)
    }
  
    // Question 7
    if (formData.riskMeasures.includes("none")) {
      newScore += 0
    } else {
      formData.riskMeasures.forEach(() => newScore += 5)
    }
  
    // Question 8
    if (formData.incidentMeasures.includes("none")) {
      newScore += 0
    } else {
      formData.incidentMeasures.forEach(() => newScore += 2)
    }
  
    // Question 9
    if (formData.initiatives === "yes") newScore += 5
  
    return Math.min(newScore, 100)
  }

  const checkGroup1Completion = () => {
    const isCompleted = Boolean(formData.hasPolicy && formData.securityMeasures.length > 0)
    setGroup1Completed(isCompleted)
    return isCompleted
  }

  const checkGroup2Completion = () => {
    const isCompleted = Boolean ( formData.hasImprove && formData.cybersecurityMeasures.length > 0)
    setGroup2Completed(isCompleted)
    return isCompleted
  }

  const checkGroup3Completion = () => {
    const isCompleted = Boolean( formData.supplyChain && formData.assetMeasures.length > 0)
    setGroup3Completed(isCompleted)
    return isCompleted
  }

  const checkGroup4Completion = () => {
    const isCompleted = Boolean(
      formData.riskMeasures.length > 0 && 
      formData.incidentMeasures.length > 0 
    )
    setGroup4Completed(isCompleted)
    return isCompleted
  }

  const checkGroup5Completion = () => {
    const isCompleted = Boolean(
      formData.initiatives &&
      formData.consent
    )
    setGroup5Completed(isCompleted)
    return isCompleted
  }

  const handleGroupSubmit = (groupNumber: number) => {
    switch(groupNumber) {
      case 1: 
        if (checkGroup1Completion()) {
          setCurrentGroup(2)
          return true
        }
        break
      case 2:
        if (checkGroup2Completion()) {
          setCurrentGroup(3)
          return true
        }
        break
      case 3:
        if (checkGroup3Completion()) {
          setCurrentGroup(4)
          return true
        }
        break
      case 4:
        if (checkGroup4Completion()) {
          setCurrentGroup(5)
          return true
        }
        break
        case 5:
          if (checkGroup5Completion()) {
            const calculatedScore = calculateScore()
            setScore(calculatedScore)
            setCurrentGroup(6)
            return true
          }
          break
    }
    return false
  }

  const sendEmailWithResults = async () => {
    if (!email) {
      setEmailError("Please enter your email address");
      return;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
  
    setIsSendingEmail(true);
    setEmailError("");
  
    try {
      console.log('Sending request to our API endpoint');
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          score,
          selectedSector
        })
      });
  
      const data = await response.json();
      console.log('API response:', data);
  
      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }
  
      setEmailSent(true);
      setShowResults(true);
    } catch (error) {
      console.error("Full email sending error:", error);
      setEmailError(
        error instanceof Error 
          ? error.message 
          : "Failed to send email. Please try again later."
      );
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cyber Health Check</h1>  
            <p className="text-xl mb-8">  
              Know your vulnerabilities. Fix them fast.  
            </p>  
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Always show the intro content */}
          <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="relative h-[370px] w-full rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={cyberhealth}
                    alt="Cyber Health Assessment"
                    fill
                    className=""
                  />
                </div>
              </div>
              <div className="lg:col-span-2 p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Your Cybersecurity Barometer</h2>
                <p className="text-lg text-gray-600 mb-6">
                  This cybsersecurity self-check will help you assess your understanding of online threats and risks, effectiveness of your security measures, and your overall maturity in handling cybersecurity risks.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="text-primary"/>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Quick 10-minute assessment
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <User className="text-primary"/>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Personalized recommendations
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MousePointerClick className="text-primary"/>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Actionable insights to improve your cybersecurity posture
                    </p>
                  </div>
                </div>
                {!assessmentStarted && (
                  <Button
                    size="lg"
                    className="mt-8 bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
                    onClick={handleBeginAssessment}
                  >
                    Begin Your Assessment
                  </Button>
                )}
                {assessmentStarted && (
                  <span
                    className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-cybernovr-purple bg-background text-cybernovr-purple hover:bg-cybernovr-purple/10 h-11 rounded-md px-8"
                  >
                    Your time starts now !!
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Show sector selection or question groups based on state */}
          {assessmentStarted && (
            !sectorSelected ? (
              <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100 mt-14">
                <form id="sector">
                  <div>
                    <Label htmlFor="sector" className="block text-lg font-medium text-charcoal mb-3">
                      Which of the following sector does your organisation belong to? : 
                    </Label>
                    <select
                      id="sector"
                      name="sector"
                      value={selectedSector}
                      onChange={handleSectorChange}
                      required
                      className="w-full md:w-[75%] lg:w-[50%] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white text-charcoal appearance-none"
                    >
                      <option value="">Select a sector</option>
                      <option value="Power and energy">Power and energy</option>
                      <option value="Water">Water</option>
                      <option value="Information communication science and technology">
                        Information communication science and technology
                      </option>
                      <option value="Banking/Finance and insurance">
                        Banking/Finance and insurance
                      </option>
                      <option value="Health">Health</option>
                      <option value="Public administration">Public administration</option>
                      <option value="Defense and security">Defense and security</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Food and culture">Food and culture</option>
                      <option value="Safety and emergency services">
                        Safety and emergency services
                      </option>
                      <option value="Industrial and manufacturing">
                        Industrial and manufacturing
                      </option>
                      <option value="Mines and steel">Mines and steel</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </form>   
              </div>
            ) : (
              <>
                {/* Question Group 1 */}
                {currentGroup === 1 && (
                  <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100 mt-10">
                    <div className="flex justify-between text-primary mb-5">
                      <div>
                        <span className="text-black">Sector:</span> {selectedSector}
                      </div>
                      <div className="">1/5</div>
                    </div>
                    <form id="group1">
                      {/* Q1 */}
                      <div>
                        <Label htmlFor="hasPolicy" className="block text-lg font-medium text-charcoal mb-3">
                          1. Has your organisation developed a cybersecurity/information security strategy or policy?
                        </Label>
                        <div className="flex gap-6 mt-4">
                          <div className="flex items-center space-x-2">
                            <Input
                              type="radio"
                              id="hasPolicyYes"
                              name="hasPolicy"
                              value="yes"
                              checked={formData.hasPolicy === "yes"}
                              onChange={handleChange}
                              className="h-5 w-5 text-primary focus:ring-primary"
                              required
                            />
                            <Label htmlFor="hasPolicyYes" className="md:text-lg">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Input
                              type="radio"
                              id="hasPolicyNo"
                              name="hasPolicy"
                              value="no"
                              checked={formData.hasPolicy === "no"}
                              onChange={handleChange}
                              className="h-5 w-5 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="hasPolicyNo" className="md:text-lg">No</Label>
                          </div>
                        </div>
                      </div>
                      
                      {/* Q2 */}
                      <div className="mt-10">
                        <Label className="block text-lg md:text-xl font-medium text-charcoal mb-3">
                          2. Has your organisation implemented the following measures to equip your employees to be the first line of defence?
                        </Label>
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center space-x-2">
                              <Checkbox
                              id="awarenessTraining"
                              checked={formData.securityMeasures.includes("awarenessTraining")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('securityMeasures', 'awarenessTraining', checked as boolean)
                              }
                            />
                            <Label htmlFor="awarenessTraining" className="text-sm md:text-lg font-medium">
                              Cybersecurity awareness and training for all employees (either during onboarding or routine training)
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="practicesGuidelines"
                              checked={formData.securityMeasures.includes("practicesGuidelines")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('securityMeasures', 'practicesGuidelines', checked as boolean)
                              }
                            />
                            <Label htmlFor="practicesGuidelines" className="text-sm md:text-lg font-medium">
                              Cybersecurity practices and guidelines for daily operations
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="securityNone"
                              checked={formData.securityMeasures.includes("none")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setFormData(prev => ({
                                    ...prev,
                                    securityMeasures: ["none"]
                                  }))
                                }
                              }}
                            />
                            <Label htmlFor="securityNone" className="text-sm font-medium md:text-lg">
                              None of the above
                            </Label>
                          </div>
                        </div>
                      </div>
                      
                      {showValidationError && (
                        <div className="text-red-600 mb-4 text-sm md:text-lg mt-5 flex gap-3">
                          <OctagonAlert className="mt-1"/>
                          Please complete all required questions before proceeding!
                        </div>
                      )}
                      
                      <div className="mt-10 flex gap-5">
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          className="flex items-center gap-2"
                          onClick={() => setSectorSelected(false)}
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Edit Sector
                        </Button>
                        <Button
                          type="button"
                          size="lg"
                          className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white flex items-center gap-2"
                          onClick={() => {
                            if (checkGroup1Completion()) {
                              setShowValidationError(false);
                              handleGroupSubmit(1);
                            } else {
                              setShowValidationError(true);
                            }
                          }}
                        >
                          Next
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Question Group 2 */}
                {currentGroup === 2 && (
                    <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100 mt-10">
                      <div className="flex justify-between text-primary mb-5">
                        <div>
                          <span className="text-black">Sector:</span> {selectedSector}
                        </div>
                        <div className="">2/5</div>
                      </div>
                    <form id="group2">
                      {/* Q3 */}
                      <div>
                        <Label htmlFor="hasImprove" className="block text-lg md:text-xl font-medium text-charcoal mb-3">
                          3. Has there been continuous improvement as a result of implementation of your cybersecurity strategy? 
                        </Label>
                        <div className="flex gap-6 mt-4">
                          <div className="flex items-center space-x-2">
                            <Input
                              type="radio"
                              id="hasImproveYes"
                              name="hasImprove"
                              value="yes"
                              checked={formData.hasImprove === "yes"}
                              onChange={handleChange}
                              className="h-5 w-5 text-primary focus:ring-primary"
                              required
                            />
                            <Label htmlFor="hasImproveYes" className="md:text-lg">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Input
                              type="radio"
                              id="hasImproveNo"
                              name="hasImprove"
                              value="no"
                              checked={formData.hasImprove === "no"}
                              onChange={handleChange}
                              className="h-5 w-5 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="hasImproveNo" className="md:text-lg">No</Label>
                          </div>
                        </div>
                      </div>
                      
                      {/* Q4 */}
                      <div className="mt-10">
                        <Label className="block text-lg font-medium text-charcoal md:text-xl mb-3">
                          4. Has your organisation defined: 
                        </Label>
                        
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="rolesResponsibilities"
                              checked={formData.cybersecurityMeasures.includes("rolesResponsibilities")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('cybersecurityMeasures', 'rolesResponsibilities', checked as boolean)
                              }
                            />
                            <Label htmlFor="rolesResponsibilities" className="text-sm font-medium md:text-lg">
                              Cybersecurity roles, responsibilities, and authorities to foster accountability
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="performanceAssessment"
                              checked={formData.cybersecurityMeasures.includes("performanceAssessment")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('cybersecurityMeasures', 'performanceAssessment', checked as boolean)
                              }
                            />
                            <Label htmlFor="performanceAssessment" className="text-sm font-medium md:text-lg">
                              Performance assessment of cybersecurity initiatives
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="budgetResources"
                              checked={formData.cybersecurityMeasures.includes("budgetResources")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('cybersecurityMeasures', 'budgetResources', checked as boolean)
                              }
                            />
                            <Label htmlFor="budgetResources" className="text-sm font-medium md:text-lg">
                              Budget and resources for cybersecurity
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="cyberNone"
                              checked={formData.cybersecurityMeasures.includes("none")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setFormData(prev => ({
                                    ...prev,
                                    cybersecurityMeasures: ["none"]
                                  }))
                                }
                              }}
                            />
                            <Label htmlFor="cyberNone" className="text-sm font-medium md:text-lg">
                              None of the above
                            </Label>
                          </div>
                        </div>
                      </div>
                      
                      {showValidationError && (
                        <div className="text-red-600 mb-4 text-sm md:text-lg mt-5 flex gap-3">
                          <OctagonAlert className="mt-1"/>
                          Please complete all required questions before proceeding!
                        </div>
                      )}
                      
                      <div className="mt-10 flex gap-5">
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          className="flex items-center gap-2"
                          onClick={() => setCurrentGroup(1)}
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Previous
                        </Button>
                        <Button
                          type="button"
                          size="lg"
                          className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white flex items-center gap-2"
                          onClick={() => {
                            if (checkGroup2Completion()) {
                              setShowValidationError(false);
                              handleGroupSubmit(2);
                            } else {
                              setShowValidationError(true);
                            }
                          }}
                        > 
                          Next
                          <ChevronRight className="h-4 w-4"/>
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Question Group 3 */}
                {currentGroup === 3 && (
                  <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100 mt-10">
                      <div className="flex justify-between text-primary mb-5">
                        <div>
                          <span className="text-black">Sector:</span> {selectedSector}
                        </div>
                        <div className="">3/5</div>
                      </div>
                    <form id="group3">
                      {/* Q5 */}
                      <div>
                        <Label htmlFor="supplyChain" className="block text-lg md:text-xl font-medium text-charcoal mb-3">
                          5. Has your organisation defined cybersecurity supply chain risk management strategy?  
                        </Label>
                        <div className="flex gap-6 mt-4">
                          <div className="flex items-center space-x-2">
                            <Input
                              type="radio"
                              id="supplyChainYes"
                              name="supplyChain"
                              value="yes"
                              checked={formData.supplyChain === "yes"}
                              onChange={handleChange}
                              className="h-5 w-5 text-primary focus:ring-primary"
                              required
                            />
                            <Label htmlFor="supplyChainYes" className="md:text-lg">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Input
                              type="radio"
                              id="supplyChainNo"
                              name="supplyChain"
                              value="no"
                              checked={formData.supplyChain === "no"}
                              onChange={handleChange}
                              className="h-5 w-5 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="supplyChainNo" className="md:text-lg">No</Label>
                          </div>
                        </div>
                      </div>
                      
                      {/* Q6 */}
                      <div className="mt-10">
                        <Label className="block text-lg md:text-xl font-medium text-charcoal mb-3">
                          6. Has your organisation implemented the following measures to manage cybersecurity risks to your assets? 
                        </Label>
                        
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="awareness"
                              checked={formData.assetMeasures.includes("awareness")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('assetMeasures', 'awareness', checked as boolean)
                              }
                            />
                            <Label htmlFor="awareness" className="text-sm md:text-lg font-medium">
                              Awareness of their assets, especially the most critical ones, and their status.
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="inventoried"
                              checked={formData.assetMeasures.includes("inventoried")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('assetMeasures', 'inventoried', checked as boolean)
                              }
                            />
                            <Label htmlFor="inventoried" className="text-sm md:text-lg font-medium ">
                              Inventoried IT assets and data are managed throughout their lifecycles
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="evaluate"
                              checked={formData.assetMeasures.includes("evaluate")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('assetMeasures', 'evaluate', checked as boolean)
                              }
                            />
                            <Label htmlFor="evaluate" className="text-sm md:text-lg font-medium">
                              Evaluate and comprehend cybersecurity risks affecting the organization, its assets, and individuals
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="developed"
                              checked={formData.assetMeasures.includes("developed")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('assetMeasures', 'developed', checked as boolean)
                              }
                            />
                            <Label htmlFor="developed" className="text-sm md:text-lg font-medium">
                              Developed a risk management plan/strategy to mitigate cybersecurity risks
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="assetNone"
                              checked={formData.assetMeasures.includes("none")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setFormData(prev => ({
                                    ...prev,
                                    assetMeasures: ["none"]
                                  }))
                                }
                              }}
                            />
                            <Label htmlFor="assetNone" className="text-sm font-medium md:text-lg">
                              None of the above
                            </Label>
                          </div>
                        </div>
                      </div>
                      
                      {showValidationError && (
                        <div className="text-red-600 mb-4 text-sm md:text-lg mt-5 flex gap-3">
                          <OctagonAlert className="mt-1"/>
                          Please complete all required questions before proceeding!
                        </div>
                      )} 
                      
                      <div className="mt-10 flex gap-5">
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          className="flex items-center gap-2"
                          onClick={() => setCurrentGroup(2)}
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Previous
                        </Button>
                        <Button
                          type="button"
                          size="lg"
                          className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white flex items-center gap-2"
                          onClick={() => {
                            if (checkGroup3Completion()) {
                              setShowValidationError(false);
                              handleGroupSubmit(3);
                            } else {
                              setShowValidationError(true);
                            }
                          }}
                        > 
                          Next
                          <ChevronRight className="h-4 w-4"/>
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Question Group 4 */}
                {currentGroup === 4 && (
                    <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100 mt-10">
                      <div className="flex justify-between text-primary mb-5">
                        <div>
                          <span className="text-black">Sector:</span> {selectedSector}
                        </div>
                        <div className="">4/5</div>
                      </div>
                    <form id="group4">
                      {/* Q7 */}
                      <div>
                        <Label className="block text-lg md:text-xl font-medium text-charcoal mb-3">
                          7. Has your organisation implemented the following measures to address cybersecurity risks? 
                        </Label>
                        
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="dataProtection"
                              checked={formData.riskMeasures.includes("dataProtection")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('riskMeasures', 'dataProtection', checked as boolean)
                              }
                            />
                            <Label htmlFor="dataProtection" className="text-sm font-medium md:text-lg">
                              Data Protection
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="accessManagement"
                              checked={formData.riskMeasures.includes("accessManagement")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('riskMeasures', 'accessManagement', checked as boolean)
                              }
                            />
                            <Label htmlFor="accessManagement" className="text-sm font-medium md:text-lg">
                              ID and Access Management
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="networkSecurity"
                              checked={formData.riskMeasures.includes("networkSecurity")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('riskMeasures', 'networkSecurity', checked as boolean)
                              }
                            />
                            <Label htmlFor="networkSecurity" className="text-sm font-medium md:text-lg">
                              Network Security
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="personnelSecurity"
                              checked={formData.riskMeasures.includes("personnelSecurity")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('riskMeasures', 'personnelSecurity', checked as boolean)
                              }
                            />
                            <Label htmlFor="personnelSecurity" className="text-sm font-medium md:text-lg">
                              Personnel Security
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="endpointSecurity"
                              checked={formData.riskMeasures.includes("endpointSecurity")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('riskMeasures', 'endpointSecurity', checked as boolean)
                              }
                            />
                            <Label htmlFor="endpointSecurity" className="text-sm font-medium md:text-lg">
                              Endpoint Security
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="cyberHygiene"
                              checked={formData.riskMeasures.includes("cyberHygiene")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('riskMeasures', 'cyberHygiene', checked as boolean)
                              }
                            />
                            <Label htmlFor="cyberHygiene" className="text-sm font-medium md:text-lg">
                              Cyber-hygiene
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="riskNone"
                              checked={formData.riskMeasures.includes("none")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setFormData(prev => ({
                                    ...prev,
                                    riskMeasures: ["none"]
                                  }))
                                }
                              }}
                            />
                            <Label htmlFor="riskNone" className="text-sm font-medium md:text-lg">
                              None of the above
                            </Label>
                          </div>
                        </div>
                      </div>
                      
                      {/* Q8 */}
                      <div className="mt-10">
                        <Label className="block md:text-xl text-lg font-medium text-charcoal mb-3">
                          8. Which of the following measures has your organisation put in place to detect, respond to, and recover from cybersecurity incidents? 
                        </Label>
                        
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="incidentResponsePlan"
                              checked={formData.incidentMeasures.includes("incidentResponsePlan")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('incidentMeasures', 'incidentResponsePlan', checked as boolean)
                              }
                            />
                            <Label htmlFor="incidentResponsePlan" className="text-sm font-medium md:text-lg">
                              Incident Response Plan
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="continuousSecurity"
                              checked={formData.incidentMeasures.includes("continuousSecurity")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('incidentMeasures', 'continuousSecurity', checked as boolean)
                              }
                            />
                            <Label htmlFor="continuousSecurity" className="text-sm font-medium md:text-lg">
                              Continuous Security Monitoring to identify cybersecurity events
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="detectionProcess"
                              checked={formData.incidentMeasures.includes("detectionProcess")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('incidentMeasures', 'detectionProcess', checked as boolean)
                              }
                            />
                            <Label htmlFor="detectionProcess" className="text-sm font-medium md:text-lg">
                              Established a detection process with routine test of effectiveness
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="incidentManagement"
                              checked={formData.incidentMeasures.includes("incidentManagement")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('incidentMeasures', 'incidentManagement', checked as boolean)
                              }
                            />
                            <Label htmlFor="incidentManagement" className="text-sm font-medium md:text-lg">
                              Incident Management (Cyber Crisis Management Plan)
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="incidentRecoveryPlan"
                              checked={formData.incidentMeasures.includes("incidentRecoveryPlan")}
                              onCheckedChange={(checked) => 
                                handleCheckboxChange('incidentMeasures', 'incidentRecoveryPlan', checked as boolean)
                              }
                            />
                            <Label htmlFor="incidentRecoveryPlan" className="text-sm font-medium md:text-lg">
                              Incident Recovery Plan
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="incidentNone"
                              checked={formData.incidentMeasures.includes("none")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setFormData(prev => ({
                                    ...prev,
                                    incidentMeasures: ["none"]
                                  }))
                                }
                              }}
                            />
                            <Label htmlFor="incidentNone" className="text-sm font-medium md:text-lg">
                              None of the above
                            </Label>
                          </div>
                        </div>
                      </div>
                      
                      {/* Q9
                      <div className="mt-10">
                        <Label htmlFor="initiatives" className="block text-lg md:text-xl font-medium text-charcoal mb-3">
                          9. Does your organisation take part in initiatives on cybersecurity or collaboration at the national- or sectoral-level to implement/adopt cybersecurity standards and good practices?
                        </Label>
                        <div className="flex gap-6 mt-4">
                          <div className="flex items-center space-x-2">
                            <Input
                              type="radio"
                              id="initiativesYes"
                              name="initiatives"
                              value="yes"
                              checked={formData.initiatives === "yes"}
                              onChange={handleChange}
                              className="h-5 w-5 text-primary focus:ring-primary"
                              required
                            />
                            <Label htmlFor="initiativesYes" className="md:text-lg">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Input
                              type="radio"
                              id="initiativesNo"
                              name="initiatives"
                              value="no"
                              checked={formData.initiatives === "no"}
                              onChange={handleChange}
                              className="h-5 w-5 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="initiativesNo" className="md:text-lg">No</Label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-10 flex items-center space-x-2">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={handleConsentChange}
                        />
                        <Label htmlFor="consent" className="text-sm">
                          We consent to the collection, use, and disclosure by <strong>CYBERNOVR</strong> of all information provided in this Form or in support of this Form for the purposes of public policy analysis or formulation, public data analytics, assessing our suitability for any grant or assistance schemes, advising us on digitalisation, and/or where necessary in the public interest.
                        </Label>
                      </div>
                      */}
                      
                      {showValidationError && (
                        <div className="text-red-600 mb-4 text-sm md:text-lg mt-5 flex gap-3">
                          <OctagonAlert className="mt-1"/>
                          Please complete all required questions before proceeding!
                        </div>
                      )}
                      
                      <div className="mt-10 flex gap-5">
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          className="flex items-center gap-2"
                          onClick={() => setCurrentGroup(3)}
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Previous
                        </Button>
                        <Button
                          type="button"
                          size="lg"
                          className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white flex items-center gap-2"
                          onClick={() => {
                            if (checkGroup4Completion()) {
                              setShowValidationError(false);
                              handleGroupSubmit(4);
                            } else {
                              setShowValidationError(true);
                            }
                          }}
                        > 
                          Next
                          <ChevronRight className="h-4 w-4"/>
                        </Button>
                      </div> 
                    </form>
                  </div>
                )}
                
                {currentGroup === 5 && (
                  <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100 mt-10">
                      <div className="flex justify-between text-primary mb-5">
                        <div>
                          <span className="text-black">Sector:</span> {selectedSector}
                        </div>
                        <div className="">5/5</div>
                      </div>
                    <form id="group5">                   
                      {/* Q9 */}
                      <div className="mt-10">
                        <Label htmlFor="initiatives" className="block text-lg md:text-xl font-medium text-charcoal mb-3">
                          9. Does your organisation take part in initiatives on cybersecurity or collaboration at the national- or sectoral-level to implement/adopt cybersecurity standards and good practices?
                        </Label>
                        <div className="flex gap-6 mt-4">
                          <div className="flex items-center space-x-2">
                            <Input
                              type="radio"
                              id="initiativesYes"
                              name="initiatives"
                              value="yes"
                              checked={formData.initiatives === "yes"}
                              onChange={handleChange}
                              className="h-5 w-5 text-primary focus:ring-primary"
                              required
                            />
                            <Label htmlFor="initiativesYes" className="md:text-lg">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Input
                              type="radio"
                              id="initiativesNo"
                              name="initiatives"
                              value="no"
                              checked={formData.initiatives === "no"}
                              onChange={handleChange}
                              className="h-5 w-5 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="initiativesNo" className="md:text-lg">No</Label>
                          </div>
                        </div>
                      </div>
                      
                      {/* Consent Checkbox */}
                      <div className="mt-10 flex items-center space-x-2">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={handleConsentChange}
                        />
                        <Label htmlFor="consent" className="text-sm">
                          We consent to the collection, use, and disclosure by <strong>CYBERNOVR</strong> of all information provided in this Form or in support of this Form for the purposes of public policy analysis or formulation, public data analytics, assessing our suitability for any grant or assistance schemes, advising us on digitalisation, and/or where necessary in the public interest.
                        </Label>
                      </div>
                      
                      {showValidationError && (
                        <div className="text-red-600 mb-4 text-sm md:text-lg mt-5 flex gap-3">
                          <OctagonAlert className="mt-1"/>
                          Please complete all required questions and consent before proceeding!
                        </div>
                      )}
                      
                      <div className="mt-10 flex gap-5">
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          className="flex items-center gap-2"
                          onClick={() => setCurrentGroup(4)}
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Previous
                        </Button>
                        <Button
                          type="button"
                          size="lg"
                          className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
                          onClick={() => {
                            if (checkGroup5Completion()) {
                              setShowValidationError(false);
                              handleGroupSubmit(5);
                            } else {
                              setShowValidationError(true);
                            }
                          }}
                        >
                          Finish
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Results Section */}
                {currentGroup === 6 && (
                  <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100 mt-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Assessment completed!</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      You've completed all sections of the cyber health assessment, your vulnerabilities are identified. Let's turn insights into action. 
                    </p>
                    
                    {!showResults && ( 
                      <div>
                        <p className="text-lg text-gray-600 mb-6">
                          Enter your email address below if you would like to also receive your results via mail.
                        </p>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email </label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full md:w-[75%] lg:w-[50%] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white text-charcoal appearance-none"
                            placeholder="your@email.com"
                          />
                          {emailError && <p className="text-red-600 mt-2">{emailError}</p>}
                        </div>
                      </div>
                    )}
                    
                    {!showResults && ( 
                      <div className="gap-5 flex md:float-right mt-5">
                        {/* <Button
                          size="default"
                          variant="outline"
                          className=""
                          onClick={sendEmailWithResults}
                          disabled={isSendingEmail}
                        >
                          {isSendingEmail ? "Sending..." : "Receive mail"}
                        </Button> */}
                        
                        <Button
                          size="default"
                          className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
                          onClick={() => setShowResults(true)}
                        >
                          View score
                        </Button>
                      </div>
                    )}
                    
                    {emailSent && (
                      <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
                        <CheckCircle className="inline mr-2" />
                        Your results have been sent to your email!
                      </div>
                    )}
                    
                    {showResults && ( 
                      <Button
                        size="lg"
                        className="mt-5 bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white md:float-right"
                        onClick={resetAssessment}
                      >
                        <RefreshCcw className="mr-3"/>
                        Retake test
                      </Button>
                    )}
                    
                    {showResults && (
                      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Your Cyber Health Score</h3>
                        
                        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                          <div 
                            className="mt-10 bg-cybernovr-purple h-4 rounded-full transition-all duration-500" 
                            style={{ width: `${score}%` }}
                          ></div>
                        </div>
                        
                        <p className="text-lg font-medium mb-2">
                          Score: <span className="text-cybernovr-purple">{score.toFixed(1)}%</span>
                        </p>
                        
                          {score < 30 && (
                            <><h2 className="mt-5">Urgent attention needed!</h2><p className="mt-3 mb-3 text-red-600">
                              Your organization has significant cybersecurity gaps that need immediate attention.
                              Consider browsing what our product offers or reach out to us for a more comprehensive breakdown.
                            </p></>
                        )}
                        {score >= 30 && score < 60 && (
                          <><h2 className="mt-5">Improvement needed!</h2><p className="mt-3 mb-3 text-yellow-500">
                              Your organization has some cybersecurity measures in place but needs improvement.
                              Focus on strengthening your security policies, incident response plans, and continuous monitoring.
                              We offer all these comprehensive services required to take you to the next level.
                            </p></>
                         )}
                         {score >= 60 && (
                          <><h2 className="mt-5">Keep up the good work!</h2><p className="mt-3 mb-3 text-green-600">
                             Your organization has good cybersecurity practices. Continue to monitor and improve 
                             your security posture, especially in areas like supply chain risk management and 
                             continuous improvement. Check out our products for more efficient ways to further secure your business.
                          </p></>
                         )}
                        
                        <div className="mt-6 space-y-4">
                          <div className="flex justify-between">
                            <span>0% - 49%</span>
                            <span className="text-red-600">High Risk</span>
                          </div>
                          <div className="flex justify-between">
                            <span>50% - 75%</span>
                            <span className="text-yellow-500">Medium Risk</span>
                          </div>
                          <div className="flex justify-between">
                            <span>76% - 100%</span>
                            <span className="text-green-600">Low Risk</span>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="font-medium mb-5">We recommend exploring our solutions:</h4>
                          {score < 70 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {BeginnerService.map((service, index) => (
                                <ServiceCard
                                  key={index}
                                  title={service.title}
                                  description={service.description}
                                  icon={service.icon}
                                  href={service.href}
                                />
                              ))}
                            </div>
                          )}
                          {score >= 70 && score < 90 && (
                            <><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                  {IntermediateService.map((service, index) => (
                                    <ServiceCard
                                      key={index}
                                      title={service.title}
                                      description={service.description}
                                      icon={service.icon}
                                      href={service.href} />
                                  ))}
                                </div></>
                          )}
                          {score >= 90 && (
                            <><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                  {AdvancedService.map((service, index) => (
                                    <ServiceCard
                                      key={index}
                                      title={service.title}
                                      description={service.description}
                                      icon={service.icon}
                                      href={service.href} />
                                  ))}
                                </div></> 
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">How Resilient is Your Organization ?</h2>
            <p className="text-xl mb-8 text-gray-600">
              Analyse your areas of weaknesses - before attackers do.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}