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

export default function QuizBankPage() {
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
    },
    
    {
    id: 21,
    question: "What is the difference between a virus and a worm?",
    options: [
        { id: "virus_attach", text: "Viruses attach to files, worms spread independently", correct: true },
        { id: "worm_attach", text: "Worms attach to files, viruses spread independently", correct: false },
        { id: "no_difference", text: "They are the same thing", correct: false },
        { id: "virus_faster", text: "Viruses spread faster than worms", correct: false }
    ],
    explanation: "Viruses require human action to spread (like opening a file), while worms can spread automatically through networks without user interaction."
    },

    {
    id: 22,
    question: "How does ransomware work?",
    options: [
        { id: "steals_data", text: "It steals your data silently", correct: false },
        { id: "encrypts_data", text: "It encrypts your data and demands payment", correct: true },
        { id: "deletes_data", text: "It permanently deletes your files", correct: false },
        { id: "slows_computer", text: "It slows down your computer", correct: false }
    ],
    explanation: "Ransomware encrypts files on the victim's system and demands payment (usually in cryptocurrency) for the decryption key."
    },

    {
    id: 23,
    question: "What are some common signs that your computer may be infected with malware?",
    options: [
        { id: "faster_performance", text: "Faster performance", correct: false },
        { id: "unusual_activity", text: "Unusual activity like pop-ups or crashes", correct: true },
        { id: "more_storage", text: "Suddenly more storage space", correct: false },
        { id: "no_signs", text: "There are usually no signs", correct: false }
    ],
    explanation: "Common signs include slow performance, frequent crashes, unusual pop-ups, unknown processes running, and unexpected network activity."
    },

    {
    id: 24,
    question: "What are some red flags to look out for in emails to identify potential phishing attempts?",
    options: [
        { id: "urgent_language", text: "Urgent or threatening language", correct: false },
        { id: "suspicious_links", text: "Suspicious links or attachments", correct: false },
        { id: "spoofed_address", text: "Slightly altered email addresses", correct: false },
        { id: "all_above", text: "All of the above", correct: true }
    ],
    explanation: "Phishing emails often use urgency, contain suspicious links/attachments, have spoofed sender addresses, and may contain poor grammar or unusual requests."
    },

    {
    id: 25,
    question: "What are some best practices for creating strong passwords?",
    options: [
        { id: "long_complex", text: "Use long, complex combinations", correct: false },
        { id: "unique_passwords", text: "Use unique passwords for each account", correct: false },
        { id: "password_manager", text: "Consider using a password manager", correct: false },
        { id: "all_above", text: "All of the above", correct: true }
    ],
    explanation: "Strong passwords should be long (12+ characters), complex (mix of character types), unique for each account, and consider using a password manager to keep track of them."
    },

    {
    id: 26,
    question: "Why is it important to keep your software up to date?",
    options: [
        { id: "new_features", text: "To get new features", correct: false },
        { id: "security_patches", text: "To get critical security patches", correct: true },
        { id: "better_performance", text: "For better performance", correct: false },
        { id: "all_above", text: "All of the above", correct: false }
    ],
    explanation: "Software updates often include patches for security vulnerabilities that attackers could otherwise exploit."
    },

    {
    id: 27,
    question: "What should you do if you think your computer has been infected with malware?",
    options: [
        { id: "ignore_it", text: "Ignore it and hope it goes away", correct: false },
        { id: "disconnect_scan", text: "Disconnect from network and run antivirus", correct: true },
        { id: "continue_working", text: "Continue working as normal", correct: false },
        { id: "share_files", text: "Share files with coworkers", correct: false }
    ],
    explanation: "Immediately disconnect from networks to prevent spread, run antivirus scans, and contact IT support if available."
    },

    {
    id: 28,
    question: "What are the potential consequences of a ransomware attack?",
    options: [
        { id: "data_loss", text: "Permanent data loss", correct: false },
        { id: "financial_loss", text: "Financial losses", correct: false },
        { id: "downtime", text: "Operational downtime", correct: false },
        { id: "all_above", text: "All of the above", correct: true }
    ],
    explanation: "Ransomware can lead to data loss (if backups aren't available), financial costs (ransom or recovery), and significant operational disruption."
    },

    {
    id: 29,
    question: "What are some examples of social engineering tactics that attackers may use?",
    options: [
        { id: "phishing", text: "Phishing emails", correct: false },
        { id: "pretexting", text: "Pretexting (fake scenarios)", correct: false },
        { id: "baiting", text: "Baiting with fake offers", correct: false },
        { id: "all_above", text: "All of the above", correct: true }
    ],
    explanation: "Social engineering includes phishing, pretexting, baiting, quid pro quo offers, and tailgating - all designed to manipulate people into breaking security protocols."
    },

    {
    id: 30,
    question: "What is a botnet, and how is it used?",
    options: [
        { id: "good_bots", text: "A network of helpful bots", correct: false },
        { id: "hacked_devices", text: "Network of compromised devices controlled by attackers", correct: true },
        { id: "cloud_servers", text: "A group of cloud servers", correct: false },
        { id: "ai_system", text: "An artificial intelligence system", correct: false }
    ],
    explanation: "A botnet is a network of infected devices (bots) controlled by attackers to conduct DDoS attacks, send spam, or spread malware."
    },

    {
    id: 31,
    question: "What are some ways that malware can spread?",
    options: [
        { id: "email_attachments", text: "Email attachments", correct: false },
        { id: "infected_sites", text: "Compromised websites", correct: false },
        { id: "removable_media", text: "USB drives", correct: false },
        { id: "all_above", text: "All of the above", correct: true }
    ],
    explanation: "Malware spreads through email attachments, malicious websites, infected USB drives, software vulnerabilities, and network shares."
    },

    {
    id: 32,
    question: "What are some steps you can take to protect your personal information online?",
    options: [
        { id: "strong_passwords", text: "Use strong, unique passwords", correct: false },
        { id: "enable_2fa", text: "Enable two-factor authentication", correct: false },
        { id: "privacy_settings", text: "Adjust privacy settings", correct: false },
        { id: "all_above", text: "All of the above", correct: true }
    ],
    explanation: "Protect personal information by using strong authentication methods, being cautious with what you share, adjusting privacy settings, and being wary of phishing attempts."
    },

    {
    id: 33,
    question: "Why is it important to be cautious about downloading files from the internet?",
    options: [
        { id: "bandwidth", text: "To save bandwidth", correct: false },
        { id: "malware_risk", text: "Files may contain malware", correct: true },
        { id: "storage_space", text: "To save storage space", correct: false },
        { id: "copyright", text: "Copyright issues", correct: false }
    ],
    explanation: "Downloaded files may contain malware, especially from untrusted sources. Even legitimate-looking files can be malicious."
    },

    {
    id: 34,
    question: "Explain the importance of using strong passwords and two-factor authentication.",
    options: [
        { id: "prevents_all_attacks", text: "Prevents all cyber attacks", correct: false },
        { id: "multiple_defenses", text: "Provides multiple layers of security", correct: true },
        { id: "makes_login_faster", text: "Makes logging in faster", correct: false },
        { id: "not_important", text: "It's not actually important", correct: false }
    ],
    explanation: "Strong passwords provide the first defense, while 2FA adds an additional layer that remains secure even if the password is compromised."
    },

    {
    id: 35,
    question: "How can you educate others about the risks of malicious software?",
    options: [
        { id: "security_training", text: "Provide security awareness training", correct: false },
        { id: "share_examples", text: "Share real-world examples", correct: false },
        { id: "promote_best_practices", text: "Promote security best practices", correct: false },
        { id: "all_above", text: "All of the above", correct: true }
    ],
    explanation: "Education should include formal training, real-world examples to demonstrate risks, and clear guidance on security best practices."
    },
    
    {
        id: 36,
        question: "What is a data broker?",
        options: [
          { id: "individual_seller", text: "An individual who sells personal information without consent", correct: false },
          { id: "company_collects", text: "A company that collects and sells personal information", correct: true },
          { id: "government_agency", text: "A government agency that tracks personal information", correct: false },
          { id: "software_program", text: "A software program that collects personal information", correct: false }
        ],
        explanation: "Data brokers are companies that collect personal information from various sources, analyze it, and sell it to other organizations, often without the individual's knowledge."
      },
      
      {
        id: 37,
        question: "Why is it important to limit the amount of PII you share online?",
        options: [
          { id: "privacy_protection", text: "To protect your privacy and reduce the risk of identity theft", correct: true },
          { id: "social_media", text: "To increase your social media following", correct: false },
          { id: "seo", text: "To improve your search engine rankings", correct: false },
          { id: "targeted_ads", text: "To get more targeted advertising", correct: false }
        ],
        explanation: "Limiting Personally Identifiable Information (PII) shared online helps protect against identity theft, stalking, scams, and unwanted data collection by companies."
      },
      
      {
        id: 38,
        question: "What are some examples of user data tracking?",
        options: [
          { id: "cookies_history", text: "Cookies, browser history, and location data", correct: true },
          { id: "encryption_tools", text: "Data encryption, VPNs, and privacy-focused browsers", correct: false },
          { id: "security_threats", text: "Data breaches, identity theft, and phishing scams", correct: false },
          { id: "online_content", text: "Social media profiles, online reviews, and blog posts", correct: false }
        ],
        explanation: "Common tracking methods include cookies that remember your activity, browser history logging, GPS location tracking, device fingerprinting, and pixel tags in emails."
      },
      
      {
        id: 39,
        question: "What is data encryption, and why is it important?",
        options: [
          { id: "scrambling_data", text: "The process of scrambling data to make it unreadable without a key, important for protecting sensitive information", correct: true },
          { id: "sharing_data", text: "The act of sharing personal data online, important for building trust with companies", correct: false },
          { id: "tracking_behaviour", text: "The practice of tracking user behaviour, important for targeted advertising", correct: false },
          { id: "data_brokers", text: "The collection and sale of personal data, important for data brokers", correct: false }
        ],
        explanation: "Encryption converts data into a coded form that can only be read with a decryption key, protecting confidentiality during storage and transmission."
      },
      
      {
        id: 40,
        question: "What are some privacy risks associated with the internet?",
        options: [
          { id: "breaches_theft", text: "Data breaches, identity theft, and online scams", correct: true },
          { id: "protection_tools", text: "Data encryption, VPNs, and privacy-focused browsers", correct: false },
          { id: "user_content", text: "Social media profiles, online reviews, and blog posts", correct: false },
          { id: "tracking_methods", text: "Cookies, browser history, and location data", correct: false }
        ],
        explanation: "Major risks include unauthorized data collection, surveillance, identity theft, financial fraud, reputation damage, and personal safety threats from exposed information."
      },
      
      {
        id: 41,
        question: "How can data about a user be gathered?",
        options: [
          { id: "multiple_sources", text: "Through online forms, social media, and website tracking", correct: true },
          { id: "only_breaches", text: "Only through data breaches and identity theft", correct: false },
          { id: "government_only", text: "Exclusively by government agencies", correct: false },
          { id: "consent_only", text: "Solely through user consent", correct: false }
        ],
        explanation: "Data is collected through your direct inputs (forms, posts), observed behavior (clicks, location), purchased from brokers, inferred through analytics, and sometimes stolen in breaches."
      },
      
      {
        id: 42,
        question: "What are some best practices for protecting your personal information on social media?",
        options: [
          { id: "privacy_settings", text: "Adjust privacy settings, be selective about friend requests, and think before posting", correct: true },
          { id: "trust_all", text: "Trust all profiles with professional-looking photos", correct: false },
          { id: "followers_equal_trust", text: "Assume all profiles with many followers are genuine", correct: false },
          { id: "ignore_suspicious", text: "Ignore any suspicious activity and accept all friend requests", correct: false }
        ],
        explanation: "Protect yourself by using strict privacy settings, being selective about connections, avoiding oversharing, disabling location tags, and being wary of quizzes/surveys."
      },
      
      {
        id: 43,
        question: "How can you recognise fake profiles on social media?",
        options: [
          { id: "inconsistencies", text: "Look for inconsistencies, few posts or friends, and stolen photos", correct: true },
          { id: "trust_professional", text: "Trust all profiles with professional-looking photos", correct: false },
          { id: "many_followers", text: "Assume all profiles with many followers are genuine", correct: false },
          { id: "accept_all", text: "Ignore any suspicious activity and accept all friend requests", correct: false }
        ],
        explanation: "Fake profiles often have recently created accounts, few posts, stolen/profile stock photos, inconsistent details, and may send suspicious messages or requests."
      },
      
      {
        id: 44,
        question: "What are some tips for avoiding oversharing on social media?",
        options: [
          { id: "think_before_post", text: "Think before you post, avoid sharing sensitive information, and use privacy settings", correct: true },
          { id: "post_everything", text: "Post everything you do and think in real-time", correct: false },
          { id: "share_location", text: "Share your location constantly and tag everyone in every photo", correct: false },
          { id: "ignore_settings", text: "Ignore privacy settings and accept all friend requests", correct: false }
        ],
        explanation: "Avoid oversharing by not posting sensitive details (addresses, schedules), using privacy settings, limiting location sharing, and being mindful of photos/document backgrounds."
      },
      
      {
        id: 45,
        question: "What are some consequences of a data breach?",
        options: [
          { id: "theft_loss_damage", text: "Identity theft, financial loss, and reputational damage", correct: true },
          { id: "increased_privacy", text: "Increased online privacy and security", correct: false },
          { id: "better_encryption", text: "Improved data encryption and protection", correct: false },
          { id: "stronger_auth", text: "Stronger passwords and two-factor authentication", correct: false }
        ],
        explanation: "Breaches can lead to financial fraud, identity theft, blackmail, reputational harm, loss of sensitive data, and significant recovery costs for individuals and organizations."
      },
      
      {
        id: 46,
        question: "How can you protect yourself from identity theft?",
        options: [
          { id: "monitor_shred_passwords", text: "Monitor accounts, shred documents, and use strong passwords", correct: true },
          { id: "share_freely", text: "Share your personal information freely online", correct: false },
          { id: "same_password", text: "Use the same password for all accounts", correct: false },
          { id: "click_all_links", text: "Click on all links in emails and texts", correct: false }
        ],
        explanation: "Prevent identity theft by freezing credit, using unique passwords, enabling 2FA, monitoring statements, securely destroying documents, and being wary of phishing."
      },
      
      {
        id: 47,
        question: "What should you do if you believe or suspect your personal information has been compromised?",
        options: [
          { id: "change_monitor_report", text: "Change passwords, monitor accounts, and report to authorities", correct: true },
          { id: "ignore", text: "Ignore it and hope it goes away", correct: false },
          { id: "continue_using", text: "Continue using the same passwords and accounts", correct: false },
          { id: "share_with_others", text: "Share the information with friends and family", correct: false }
        ],
        explanation: "If compromised: immediately change passwords, contact financial institutions, place fraud alerts, monitor credit reports, and report to FTC/appropriate authorities."
      },
      
      {
        id: 48,
        question: "What are some privacy-focused browsers or search engines?",
        options: [
          { id: "privacy_tools", text: "Brave, DuckDuckGo, and Tor", correct: true },
          { id: "mainstream_options", text: "Chrome, Google, and Bing", correct: false },
          { id: "legacy_options", text: "Internet Explorer, Yahoo, and AOL", correct: false },
          { id: "other_browsers", text: "Safari, Edge, and Firefox", correct: false }
        ],
        explanation: "Privacy-focused options include DuckDuckGo (no tracking), Brave (blocks trackers), Tor (anonymous browsing), Startpage, and Searx - unlike mainstream browsers that collect user data."
      },
      
      {
        id: 49,
        question: "What is a Virtual Private Network (VPN)?",
        options: [
          { id: "encrypt_traffic", text: "A service that encrypts internet traffic and masks your IP address", correct: true },
          { id: "social_media", text: "A social media platform that tracks user behaviour", correct: false },
          { id: "data_broker", text: "A data broker that collects and sells personal data", correct: false },
          { id: "government_agency", text: "A government agency that regulates data privacy", correct: false }
        ],
        explanation: "A VPN creates an encrypted tunnel for your internet traffic, hiding your IP address and online activities from ISPs, hackers, and surveillance on public networks."
      },
      
      {
        id: 50,
        question: "How can you request that companies delete your data?",
        options: [
          { id: "submit_request", text: "Submit a data deletion request, often found in privacy policies", correct: true },
          { id: "assume_deletion", text: "Assume companies will delete your data automatically", correct: false },
          { id: "no_action", text: "Continue using the same services without taking action", correct: false },
          { id: "wait_breach", text: "Wait for a data breach to occur before requesting deletion", correct: false }
        ],
        explanation: "Under laws like GDPR and CCPA, you can submit formal requests (often via privacy policy instructions) for companies to delete your personal data they've collected."
      },

      {
        id: 51,
        question: "Which of the following is NOT a sign that a website might not be secure?",
        options: [
          { id: "http_url", text: "The website's URL begins with 'http://' instead of 'https://'", correct: false },
          { id: "no_ssl", text: "The website lacks a valid SSL certificate", correct: false },
          { id: "padlock", text: "The website has a padlock icon in the address bar", correct: true },
          { id: "popups", text: "The website has frequent pop-up advertisements", correct: false }
        ],
        explanation: "A padlock icon indicates the site uses HTTPS encryption, a sign of security. 'http://' URLs, missing SSL certificates, and excessive pop-ups are red flags."
      },
      
      {
        id: 52,
        question: "When shopping online, which of the following actions offers the LEAST protection for your personal information?",
        options: [
          { id: "credit_card", text: "Using a credit card instead of a debit card", correct: false },
          { id: "strong_passwords", text: "Creating strong and unique passwords for each online store", correct: false },
          { id: "save_payment", text: "Saving your payment information on the retailer's website for future purchases", correct: true },
          { id: "check_privacy", text: "Checking the website's privacy policy before making a purchase", correct: false }
        ],
        explanation: "Saving payment info increases risk if the retailer is breached. Credit cards offer better fraud protection than debit cards, and unique passwords limit damage from breaches."
      },
      
      {
        id: 53,
        question: "Which of the following online shopping scams is characterized by the seller disappearing after receiving payment, without delivering the promised goods?",
        options: [
          { id: "phishing", text: "Phishing scam", correct: false },
          { id: "advance_fee", text: "Advance fee fraud", correct: false },
          { id: "ghost_website", text: "Ghost website scam", correct: true },
          { id: "counterfeit", text: "Counterfeit product scam", correct: false }
        ],
        explanation: "Ghost websites take payments but never ship items, then vanish. Phishing steals info, advance fee fraud demands upfront payments, and counterfeit scams sell fake goods."
      },
      
      {
        id: 54,
        question: "If you believe you've been scammed online, which of the following actions should be your FIRST priority?",
        options: [
          { id: "change_passwords", text: "Change all of your passwords", correct: false },
          { id: "report_authorities", text: "Report the incident to the relevant authorities", correct: false },
          { id: "contact_bank", text: "Contact your bank or credit card company to dispute the charges", correct: true },
          { id: "leave_reviews", text: "Leave negative reviews on the seller's website and social media pages", correct: false }
        ],
        explanation: "Immediately contact your financial institution to limit losses - time is critical for chargebacks. Then change passwords and report to authorities like the FTC."
      },
      
      {
        id: 55,
        question: "Which of the following statements about strong passwords is FALSE?",
        options: [
          { id: "length_complexity", text: "Strong passwords should be at least 12 characters long and include a mix of uppercase and lowercase letters, numbers, and symbols", correct: false },
          { id: "no_personal_info", text: "A strong password should not include any personal information, such as your name, birthdate, or pet's name", correct: false },
          { id: "reuse_passwords", text: "It's a good practice to reuse the same strong password across multiple online shopping accounts to avoid forgetting them", correct: true },
          { id: "password_manager", text: "A password manager can be a helpful tool for creating and storing strong passwords", correct: false }
        ],
        explanation: "Never reuse passwords - if one account is breached, all accounts with that password are vulnerable. Use a password manager to handle unique, complex passwords."
      },
      
      {
        id: 56,
        question: "Which of the following payment methods is generally considered the MOST secure for online shopping, due to its strong buyer protection policies?",
        options: [
          { id: "credit_card", text: "Credit card", correct: true },
          { id: "debit_card", text: "Debit card", correct: false },
          { id: "paypal", text: "PayPal", correct: false },
          { id: "bank_transfer", text: "Bank transfer", correct: false }
        ],
        explanation: "Credit cards offer the strongest fraud protection, with $0 liability policies. Debit cards and bank transfers provide less recourse, while PayPal offers good but not equal protection."
      },
      
      {
        id: 57,
        question: "Which of the following is the LEAST reliable way to verify the legitimacy of an online seller?",
        options: [
          { id: "independent_reviews", text: "Checking for customer reviews and ratings on independent review websites", correct: false },
          { id: "contact_info", text: "Searching for the seller's contact information and physical address", correct: false },
          { id: "seller_testimonials", text: "Relying solely on positive testimonials displayed on the seller's own website", correct: true },
          { id: "trust_seals", text: "Looking for trust seals and certifications from reputable organisations", correct: false }
        ],
        explanation: "Testimonials on a seller's site can be fabricated. Verify through third-party reviews, check contact info validity, and confirm trust seals are clickable/authentic."
      },
      
      {
        id: 58,
        question: "Which of the following is NOT typically considered a red flag when shopping online?",
        options: [
          { id: "professional_design", text: "The website has a professional design and clear navigation", correct: true },
          { id: "too_good_deals", text: "The website offers deals that seem too good to be true", correct: false },
          { id: "excessive_data", text: "The website requests unnecessary personal information", correct: false },
          { id: "poor_grammar", text: "The website has poor grammar and spelling errors", correct: false }
        ],
        explanation: "Professional design is normal for legitimate sites. Warning signs include unbelievable discounts, requests for excess personal data, and sloppy content."
      },
      
      {
        id: 59,
        question: "Why is it particularly risky to use public Wi-Fi for online shopping?",
        options: [
          { id: "unsecured", text: "Public Wi-Fi networks are often unsecured, making it easier for hackers to intercept your data", correct: true },
          { id: "slow_speeds", text: "Public Wi-Fi networks tend to be slower than private networks, which can lead to frustration and abandoned purchases", correct: false },
          { id: "crowded", text: "Public Wi-Fi networks are often crowded, which can make it difficult to complete your transaction", correct: false },
          { id: "distracting", text: "Public Wi-Fi networks are typically located in busy areas, which can be distracting and make it harder to focus on your shopping", correct: false }
        ],
        explanation: "Public Wi-Fi lacks encryption, allowing hackers to steal login credentials, payment info, and personal data. Always use a VPN or cellular data for sensitive transactions."
      },
      
      {
        id: 60,
        question: "Which of the following is NOT an effective way to protect yourself from identity theft?",
        options: [
          { id: "shredding", text: "Shredding sensitive documents before discarding them", correct: false },
          { id: "oversharing", text: "Sharing your personal information freely on social media", correct: true },
          { id: "credit_monitoring", text: "Monitoring your credit reports regularly for any suspicious activity", correct: false },
          { id: "two_factor", text: "Using a two-factor authentication system for your online accounts", correct: false }
        ],
        explanation: "Oversharing personal details (birthdates, addresses, etc.) on social media gives identity thieves valuable information. The other options are key protective measures."
      },
      
      {
        id: 61,
        question: "Which of the following characteristics is the MOST indicative of a phishing email?",
        options: [
          { id: "trusted_sender", text: "The email comes from a recognisable and trusted sender", correct: false },
          { id: "urgency", text: "The email contains a sense of urgency or threat, pressuring you to act quickly", correct: true },
          { id: "genuine_offer", text: "The email offers a genuine discount or promotion from a legitimate company", correct: false },
          { id: "well_written", text: "The email is well-written and free of grammatical errors", correct: false }
        ],
        explanation: "Phishing often uses urgency/threats ('Your account will be closed!') to bypass rational thinking. Some phishing is now grammatically correct and mimics trusted brands."
      },
      
      {
        id: 62,
        question: "What is the BEST course of action if you receive an unsolicited offer online that seems too good to be true?",
        options: [
          { id: "click_links", text: "Click on any links in the offer to learn more about it", correct: false },
          { id: "respond_info", text: "Respond to the offer with your personal information to see if it's legitimate", correct: false },
          { id: "ignore_delete", text: "Ignore the offer and delete it", correct: true },
          { id: "forward_warn", text: "Forward the offer to your friends and family to warn them about it", correct: false }
        ],
        explanation: "Never engage with suspicious offers - clicking links or replying can confirm your email is active. Delete immediately and warn others through safer channels if needed."
      },
      
      {
        id: 63,
        question: "Why is it essential to read a website's privacy policy before making a purchase?",
        options: [
          { id: "data_usage", text: "The privacy policy explains how the website collects, uses, and shares your personal information", correct: true },
          { id: "return_policy", text: "The privacy policy details the website's return and refund policies", correct: false },
          { id: "terms", text: "The privacy policy outlines the website's terms and conditions of use", correct: false },
          { id: "security_info", text: "The privacy policy provides information about the website's security measures", correct: false }
        ],
        explanation: "Privacy policies disclose if your data is sold to third parties, used for marketing, or stored securely - critical for informed decisions about sharing information."
      },
      
      {
        id: 64,
        question: "Which of the following is NOT a recommended tip for shopping safely on mobile devices?",
        options: [
          { id: "mobile_auth", text: "Use strong passwords and two-factor authentication for your mobile shopping apps", correct: false },
          { id: "avoid_saving", text: "Avoid saving your payment information on your mobile device", correct: false },
          { id: "official_apps", text: "Only download shopping apps from official app stores", correct: false },
          { id: "any_wifi", text: "Connect to any available Wi-Fi network to complete your mobile shopping transactions", correct: true }
        ],
        explanation: "Never shop on public Wi-Fi without a VPN. Use cellular data or trusted networks only. The other options are essential mobile security practices."
      },
      
      {
        id: 65,
        question: "Which of the following is the LEAST effective way to stay informed about the latest online shopping scams?",
        options: [
          { id: "experts", text: "Following reputable consumer protection organisations and cybersecurity experts on social media", correct: false },
          { id: "bank_alerts", text: "Subscribing to email alerts from your bank and credit card company about potential fraud", correct: false },
          { id: "friend_info", text: "Relying solely on information shared by friends and family on social media", correct: true },
          { id: "news", text: "Reading news articles and blog posts about current online shopping trends and threats", correct: false }
        ],
        explanation: "While friends may share useful warnings, they're not comprehensive sources. Official alerts, expert analysis, and verified news provide more reliable, timely scam information."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybernovr Question Bank</h1>  
            <p className="text-xl mb-8">  
             Get personalized training recommendations.
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Quiz Assessment</h2>
                <p className="text-lg text-gray-600 mb-6">
                  This interactive assessment evaluates your awareness and provides tailored training recommendations based on their knowledge level.
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