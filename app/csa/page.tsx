"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Clock, 
  MousePointerClick, 
  User, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Shield,
  CheckCircle,
  RefreshCcw,
  X,
  Check,
  BarChart2,
  AlertTriangle,
  GraduationCap,
  Laptop,
  BookOpen
} from "lucide-react"
import staffAssess from "@/components/images/staff-assessment.png"
import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import QRCode from 'react-qr-code';
import AnimatedBackground from "@/components/animations/animated-background"
import FadeIn from "@/components/animations/fade-in"

export default function CsaPage() {
  const questions = [
    {
      id: 1,
      question: "Which protocol is considered secure for web communication?",
      options: [
        { id: "http", text: "HTTP", correct: false },
        { id: "ftp", text: "FTP", correct: false },
        { id: "https", text: "HTTPS", correct: true },
        { id: "telnet", text: "Telnet", correct: false }
      ],
      explanation: "HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP that uses encryption (SSL/TLS) to protect data in transit."
    },

    {
      id: 2,
      question: "What is the most common form of cyberattack on networks?",
      options: [
        { id: "brute", text: "Brute force attack", correct: false },
        { id: "mitm", text: "Man-in-the-middle attack", correct: false },
        { id: "phishing", text: "Phishing", correct: true },
        { id: "sql", text: "SQL injection", correct: false }
      ],
      explanation: "Phishing accounts for over 90% of cyberattacks, targeting human vulnerabilities rather than technical vulnerabilities."
    },

    {
      id: 3,
      question: "Which of these is a sign of malware infection?",
      options: [
        { id: "faster", text: "Faster performance", correct: false },
        { id: "crashes", text: "Frequent crashes", correct: true },
        { id: "features", text: "New features", correct: false },
        { id: "storage", text: "More storage", correct: false }
      ],
      explanation: "Frequent crashes or unusual system behavior are common indicators of malware infection."
    },

    {
      id: 4,
      question: "Why does port 443 matter for SSL/TLS secure web traffic?",
      options: [
        { id: "encrypted", text: "Encrypted connection", correct: true },
        { id: "cert", text: "Cert validation", correct: false },
        { id: "fallback", text: "No fallback", correct: false },
        { id: "firewall", text: "Bypass firewall", correct: false }
      ],
      explanation: "Port 443 is the standard port for HTTPS traffic, providing encrypted communication between web browsers and servers."
    },

    {
      id: 5,
      question: "Which of these is used to encrypt emails?",
      options: [
        { id: "ssl", text: "SSL", correct: false },
        { id: "tls", text: "TLS", correct: false },
        { id: "pgp", text: "PGP", correct: true },
        { id: "http", text: "HTTP", correct: false }
      ],
      explanation: "PGP (Pretty Good Privacy) is specifically designed for encrypting email communications."
    },

    {
      id: 6,
      question: "The act of disguising as someone else online is called:",
      options: [
        { id: "encryption", text: "Encryption", correct: false },
        { id: "impersonation", text: "Impersonation", correct: false },
        { id: "spoofing", text: "Spoofing", correct: true },
        { id: "harvesting", text: "Harvesting", correct: false }
      ],
      explanation: "Spoofing involves falsifying data to disguise as another user, device, or system."
    },

    {
      id: 7,
      question: "What do you think is the most damaging impact of a cyberattack on a school/college?",
      options: [
        { id: "data", text: "Student data leakage", correct: true },
        { id: "ransom", text: "Financial extortion (ransom)", correct: false },
        { id: "records", text: "Loss of academic records", correct: false },
        { id: "reputation", text: "Reputation damage", correct: false }
      ],
      explanation: "While all are serious, student data leakage can have long-term consequences including identity theft and privacy violations."
    },

    {
      id: 8,
      question: "Which of the following is not an email related hacking tool?",
      options: [
        { id: "mailpass", text: "Mail Password", correct: false },
        { id: "mailview", text: "Mail PassView", correct: false },
        { id: "sendinc", text: "Sendinc", correct: true },
        { id: "finder", text: "Email Finder Pro", correct: false }
      ],
      explanation: "'Sendinc' is a normal email function, not a hacking tool like the others which are used to extract email credentials."
    },

    {
      id: 9,
      question: "Which one of these is a symmetric encryption algorithm?",
      options: [
        { id: "dsa", text: "DSA", correct: false },
        { id: "ecc", text: "ECC", correct: false },
        { id: "des", text: "DES", correct: true },
        { id: "rsa", text: "RSA", correct: false }
      ],
      explanation: "DES (Data Encryption Standard) is a symmetric-key algorithm, meaning the same key is used for both encryption and decryption."
    },

    {
      id: 10,
      question: "Which of the following encryption methods is considered the most secure for data-at-rest?",
      options: [
        { id: "aes128", text: "AES-128", correct: false },
        { id: "rsa", text: "RSA", correct: false },
        { id: "aes256", text: "AES-256", correct: true },
        { id: "tripledes", text: "Triple DES", correct: false }
      ],
      explanation: "AES-256 is currently considered the most secure encryption standard for data-at-rest, providing 256-bit encryption."
    },

    {
      id: 11,
      question: "What script/command in MSF console is used to find vulnerabilities and gain access to a system by exploiting weak points?",
      options: [
        { id: "db_nmap", text: "db_nmap", correct: false },
        { id: "search", text: "search", correct: false },
        { id: "db_autopwn", text: "db_autopwn", correct: true },
        { id: "exploit", text: "exploit", correct: false }
      ],
      explanation: "db_autopwn is a Metasploit console command that automatically exploits vulnerabilities found during scanning."
    },

    {
      id: 12,
      question: "What is the best approach to apply patching??",
      options: [
        { id: "manual", text: "Manual Patching", correct: false },
        { id: "auto", text: "Automatic Patching", correct: false },
        { id: "mixed", text: "Mixture", correct: true },
        { id: "other", text: "Other", correct: false }
      ],
      explanation: "A mixture of manual and automatic patching is considered best practice, allowing for both control and efficiency."
    },

    {
      id: 13,
      question: "A system was infected with ransomware and left powered on. What's the best tool to begin memory analysis in live forensics?",
      options: [
        { id: "autopsy", text: "Autopsy", correct: false },
        { id: "ftk", text: "FTK Imager", correct: false },
        { id: "redline", text: "Redline", correct: true },
        { id: "wireshark", text: "Wireshark", correct: false }
      ],
      explanation: "Redline is specifically designed for memory analysis in live forensics situations."
    },

    {
      id: 14,
      question: "RAID 6 uses what to provide fault tolerance?",
      options: [
        { id: "parity", text: "Parity and striping", correct: false },
        { id: "dual", text: "Dual parity", correct: true },
        { id: "mirror", text: "Mirroring", correct: false },
        { id: "encrypt", text: "Encryption", correct: false }
      ],
      explanation: "RAID 6 uses dual parity to provide fault tolerance against two simultaneous drive failures."
    },

    {
      id: 15,
      question: "Where should AI be prioritized most in network security?",
      options: [
        { id: "traffic", text: "Network traffic analysis", correct: false },
        { id: "threat", text: "Threat detection & response", correct: true },
        { id: "policy", text: "Policy enforcement", correct: false },
        { id: "access", text: "Identity & access control", correct: false }
      ],
      explanation: "AI is most effective in threat detection and response, where it can analyze patterns and respond in real-time."
    },

    {
      id: 16,
      question: "Where did the term 'hacker' originate?",
      options: [
        { id: "mit", text: "MIT", correct: true },
        { id: "nyu", text: "New York University", correct: false },
        { id: "harvard", text: "Harvard University", correct: false },
        { id: "bell", text: "Bell's Lab", correct: false }
      ],
      explanation: "The term originated at MIT in the 1960s among members of the Tech Model Railroad Club."
    },

    {
      id: 17,
      question: "Would you allow your staff to use AI tools like ChatGPT, Gemini, Claude or Google Veo in your organisation?",
      options: [
        { id: "yes", text: "Yes", correct: false },
        { id: "no", text: "No", correct: false },
        { id: "maybe", text: "Maybe", correct: true }
      ],
      explanation: "A cautious 'maybe' with proper guidelines is often the best approach for AI tool usage in organizations."
    },

    {
      id: 18,
      question: "Which layer of the OSI model is responsible for logical addressing?",
      options: [
        { id: "network", text: "Network Layer", correct: true },
        { id: "data", text: "Data Link", correct: false },
        { id: "transport", text: "Transport Layer", correct: false },
        { id: "app", text: "Application Layer", correct: false }
      ],
      explanation: "The Network Layer (Layer 3) handles logical addressing and routing."
    },

    // {
    //   id: 19,
    //   question: "Which Cyber Security certification are you looking for?",
    //   options: [
    //     { id: "secplus", text: "CompTIA Security+", correct: false },
    //     { id: "netplus", text: "CompTIA Network+", correct: false },
    //     { id: "ceh", text: "CEH", correct: false },
    //     { id: "cisa", text: "CISA", correct: true }
    //   ],
    //   explanation: "CISA (Certified Information Systems Auditor) is highly regarded for security professionals."
    // },

    {
      id: 19,
      question: "What is the biggest concern for an organisation after the mega-breach??",
      options: [
        { id: "email", text: "Business email compromise", correct: false },
        { id: "personal", text: "Personal account hacks", correct: false },
        { id: "darkweb", text: "Dark web exposure", correct: true },
        { id: "phishing", text: "Credential phishing", correct: false }
      ],
      explanation: "Dark web exposure of sensitive data often has the longest-lasting consequences."
    },

    // {
    //   id: 20,
    //   question: "Where do you think AI will make the biggest impact in network security?",
    //   options: [
    //     { id: "detection", text: "Threat detection & response", correct: true },
    //     { id: "analytics", text: "Predictive analytics", correct: false },
    //     { id: "access", text: "Access control", correct: false },
    //     { id: "remediation", text: "Automated remediation", correct: false }
    //   ],
    //   explanation: "AI excels at real-time threat detection and response through pattern recognition."
    // },

    {
      id: 20,
      question: "After reading about the 16B password leak, what's your next step?",
      options: [
        { id: "change", text: "Change all my passwords", correct: false },
        { id: "mfa", text: "Enable MFA everywhere", correct: true },
        { id: "check", text: "Check if I'm affected", correct: false },
        { id: "unsure", text: "I'm not sure what to do", correct: false }
      ],
      explanation: "Enabling Multi-Factor Authentication (MFA) provides the most immediate security improvement after a breach."
    }
  ];

  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, {selected: string, isCorrect: boolean}>>({});
  const [showResults, setShowResults] = useState(false);
  const [showVotingResults, setShowVotingResults] = useState(false);
  const [votingStats, setVotingStats] = useState<Record<number, Record<string, number>>>({});
  
  // const mockVotingStats = {
  //   0: { "http": 2, "ftp": 1, "https": 98, "telnet": 0 },
  //   1: { "brute": 12, "mitm": 21, "phishing": 63, "sql": 4 },
  //   2: { "faster": 5, "crashes": 86, "features": 3, "storage": 6 },
  //   3: { "encrypted": 87, "cert": 7, "fallback": 2, "firewall": 3 },
  //   4: { "ssl": 10, "tls": 20, "pgp": 65, "http": 5 },
  //   5: { "encryption": 15, "impersonation": 25, "spoofing": 55, "harvesting": 5 },
  //   6: { "data": 41, "ransom": 15, "records": 29, "reputation": 15 },
  //   7: { "mailpass": 16, "mailview": 8, "sendinc": 48, "finder": 28 },
  //   8: { "dsa": 7, "ecc": 3, "des": 58, "rsa": 33 },
  //   9: { "aes128": 3, "rsa": 9, "aes256": 81, "tripledes": 7 },
  //   10: { "db_nmap": 60, "search": 10, "db_autopwn": 0, "exploit": 30 },
  //   11: { "manual": 17, "auto": 37, "mixed": 46, "other": 0 },
  //   12: { "autopsy": 43, "ftk": 16, "redline": 13, "wireshark": 27 },
  //   13: { "parity": 50, "dual": 27, "mirror": 15, "encrypt": 8 },
  //   14: { "traffic": 23, "threat": 54, "policy": 12, "access": 12 },
  //   15: { "mit": 45, "nyu": 4, "harvard": 13, "bell": 38 },
  //   16: { "yes": 93, "no": 4, "maybe": 4 },
  //   17: { "network": 65, "data": 15, "transport": 10, "app": 10 },
  //   18: { "secplus": 30, "netplus": 20, "ceh": 25, "cisa": 25 },
  //   19: { "email": 30, "personal": 20, "darkweb": 40, "phishing": 10 },
  //   20: { "detection": 60, "analytics": 20, "access": 10, "remediation": 10 },
  //   21: { "change": 31, "mfa": 50, "check": 18, "unsure": 2 }
  // };

  const handleBeginAssessment = () => {
    setAssessmentStarted(true);
    // setVotingStats(mockVotingStats);
  };

  const handleAnswerSelect = (questionId: number, optionId: string) => {
    const isCorrect = questions[questionId].options.find(opt => opt.id === optionId)?.correct || false;
    
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        selected: optionId,
        isCorrect
      }
    }));
    
    setShowVotingResults(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowVotingResults(false);
    } else {
      const correctAnswers = Object.values(answers).filter(a => a.isCorrect).length;
      setScore(Math.round((correctAnswers / questions.length) * 100));
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowVotingResults(false);
    }
  };

  const resetAssessment = () => {
    setAssessmentStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setShowVotingResults(false);
  };

  const [score, setScore] = useState(0);

  const trainingLevels = [
    {
      range: [0, 40],
      level: "Beginner",
      title: "Basic Cybersecurity Awareness Training Needed",
      description: "Your staff would benefit from foundational cybersecurity awareness training covering essential concepts and best practices.",
      icon: <BookOpen className="h-10 w-10 text-cybernovr-purple" />,
      modules: [
        "Understanding cyber threats",
        "Password security basics",
        "Recognizing phishing attempts",
        "Safe web browsing practices",
        "Social engineering awareness"
      ]
    },
    {
      range: [41, 70],
      level: "Intermediate",
      title: "Enhanced Security Training Recommended",
      description: "Your staff shows some cybersecurity knowledge but would benefit from more in-depth non-technical security training.",
      icon: <GraduationCap className="h-10 w-10 text-cybernovr-purple" />,
      modules: [
        "Advanced phishing identification",
        "Data protection principles",
        "Secure remote working",
        "Incident reporting procedures",
        "Mobile device security"
      ]
    },
    {
      range: [71, 100],
      level: "Advanced",
      title: "Technical Security Training Recommended",
      description: "Your staff demonstrates strong cybersecurity awareness and is ready for more technical security training.",
      icon: <Laptop className="h-10 w-10 text-cybernovr-purple" />,
      modules: [
        "Network security fundamentals",
        "Encryption technologies",
        "Malware analysis basics",
        "Security tool overview",
        "Incident response procedures"
      ]
    }
  ];

  const currentTraining = trainingLevels.find(t => score >= t.range[0] && score <= t.range[1]) || trainingLevels[0];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Staff Cybersecurity <br /> Knowledge Check</h1>  
            <p className="text-xl mb-8">  
              Assess your team's cybersecurity awareness. <br /> Get personalized training recommendations.
            </p>  
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Content */}
          <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="relative h-[370px] w-full rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={staffAssess}
                    alt="Cyber Health Assessment"
                    fill
                    className=""
                  />
                </div>
              </div>
              <div className="lg:col-span-2 p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Staff Knowledge Assessment</h2>
                <p className="text-lg text-gray-600 mb-6">
                  This interactive assessment evaluates your staff's cybersecurity awareness and provides tailored training recommendations based on their knowledge level.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <BarChart2 className="text-primary"/>
                    </div>
                    <p className="ml-3 text-gray-600">
                      See how your team's knowledge compares to industry averages
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <GraduationCap className="text-primary"/>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Get personalized training recommendations
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Shield className="text-primary"/>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Identify knowledge gaps in your organization
                    </p>
                  </div>
                </div>
                {!assessmentStarted && (
                  <Button
                    size="lg"
                    className="mt-8 bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
                    onClick={handleBeginAssessment}
                  >
                    Begin Assessment
                  </Button>
                )}
                {assessmentStarted && !showResults && (
                  <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    Question {currentQuestion + 1} of {questions.length}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Assessment Questions */}
          {assessmentStarted && !showResults && (
            <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100 mt-10">
              <div className="mb-8 md:flex md:justify-between ">
                <div>
                  <h3 className="text-xl font-semibold mb-2 max-w-[600px]">
                    {questions[currentQuestion].question}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Select your answer and view explanation of correct response.
                  </p>
                </div>
                <div className="mb-8 mt-2 ">
                  <div className="flex p-2  max-w-[100px] rounded-lg gap-2 bg-primary text-white font-bold">
                    <span className="mt-1"><Clock className="h-4 w-4 font-bold" /></span>
                    <span>{currentQuestion + 1} / {questions.length}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option) => {
                  const isSelected = answers[currentQuestion]?.selected === option.id;
                  const isCorrect = option.correct;
                  const showFeedback = showVotingResults && (isSelected || isCorrect);
                  
                  return (
                    <div 
                      key={option.id}
                      className={`p-4 rounded-lg border transition-all cursor-pointer
                        ${showFeedback ? 
                          (isCorrect ? 'bg-green-50 border-green-200' : 
                           (isSelected ? 'bg-red-50 border-red-200' : 'border-gray-200')) : 
                          'border-gray-200 hover:border-cybernovr-purple hover:bg-purple-50'}
                        ${isSelected ? 'ring-2 ring-cybernovr-purple' : ''}
                      `}
                      onClick={() => !showVotingResults && handleAnswerSelect(currentQuestion, option.id)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option.text}</span>
                        {showFeedback && (
                          <div className="ml-4">
                            {isCorrect ? (
                              <Check className="h-5 w-5 text-green-500" />
                            ) : isSelected ? (
                              <X className="h-5 w-5 text-red-500" />
                            ) : null}
                          </div>
                        )}
                      </div>

                      {showVotingResults && (
                        <div className="mt-3">
                          <div className="flex items-center text-sm mb-1">
                            {/* <span className="text-gray-500">
                              {votingStats[currentQuestion][option.id]}% of staff chose this
                            </span> */}
                            {isCorrect && (
                              <span className="text-green-600 font-medium">Correct answer</span>
                            )}
                          </div>
                          {/* <Progress 
                            value={votingStats[currentQuestion][option.id]} 
                            className={`h-2 ${isCorrect ? 'bg-green-200' : 'bg-gray-200'}`}
                          /> */}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {showVotingResults && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">Explanation:</h4>
                  <p className="text-blue-700">{questions[currentQuestion].explanation}</p>
                </div>
              )}

              <div className="mt-10 flex gap-5">
                {currentQuestion > 0 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="default"
                    className="flex items-center gap-2"
                    onClick={handlePreviousQuestion}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                )}

                {answers[currentQuestion] ? (
                  <Button
                    type="button"
                    size="default"
                    className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white flex items-center gap-2"
                    onClick={handleNextQuestion}
                  >
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    size="default"
                    variant="outline"
                    disabled
                    className="flex items-center gap-2"
                  >
                    Select an answer
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Results Section */}
          {showResults && (
            <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-gray-100 mt-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Assessment Results</h2>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                  <div className="w-full md:w-1/2">
                    <div className="flex gap-3">
                      <h3 className="text-xl font-semibold mb-4">Your Cybersecurity Knowledge Score:</h3>
                      <span className="text-primary font-bold mt-0.5">{score}%</span>
                    </div>
                    <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-cybernovr-purple transition-all duration-1000 ease-out"
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      You answered {Object.values(answers).filter(a => a.isCorrect).length} out of {questions.length} correctly
                    </p>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <h4 className="text-lg font-medium mb-2">Training Level:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">0% - 40%</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          score <= 40 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          Beginner
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">41% - 70%</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          score > 40 && score <= 70 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          Intermediate
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">71% - 100%</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          score > 70 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          Advanced
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 mt-1">
                      {currentTraining.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{currentTraining.title}</h3>
                      <p>{currentTraining.description}</p>
                    </div>
                  </div>
                  
                  <h4 className="font-medium mb-4">Recommended Training Level:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {currentTraining.modules.map((module, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white border rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{module}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="font-medium mb-4">Visit our available courses:</h4>
                  <div className="mt-4 p-4 bg-white border rounded-lg flex flex-col items-center">
                    <p className="mb-4 text-center">Scan this QR code to view all available courses</p>
                    <div className="p-2 bg-white rounded border">
                      <QRCode 
                        value={`${window.location.origin}/courses`}
                        size={128}
                        level="H"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">or visit: {window.location.origin}/courses</p>
                  </div>

                  {score <= 70 && (
                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">Important Note:</h4>
                      <p className="text-yellow-700">
                        {score <= 40 ? 
                          "Your staff would benefit from mandatory basic cybersecurity training to establish foundational knowledge." : 
                          "Consider implementing regular security awareness refreshers to maintain and improve your staff's cybersecurity knowledge."}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Button
                    size="lg"
                    className="bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white"
                    onClick={resetAssessment}
                  >
                    <RefreshCcw className="mr-2 h-4 w-4"/>
                    Retake Assessment
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-cybernovr-purple to-cybernovr-purple/80 text-white relative overflow-hidden">
        <AnimatedBackground className="opacity-20" />
        <div className="container-custom relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
              <p className="text-xl mb-8">
                Invest in your future with our industry-leading cybersecurity courses. Enroll today and take the first
                step toward becoming a cybersecurity expert.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/courses/enroll">
                  <Button size="lg" className="bg-cybernovr-purple text-white hover:bg-cybernovr-purple/90">
                    Enroll Now
                  </Button>
                </Link>
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 transition-all"
                >
                  View Course Catalog
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}