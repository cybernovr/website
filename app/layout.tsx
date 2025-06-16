import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import CookiesConsent from "@/components/cookies/page"
import { StructuredData } from "@/components/seo/structured-data"
import { Analytics } from "@vercel/analytics/next"


const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Cybernovr - Cybersecurity Solutions",
    template: "%s | CYBERNOVR"
  },
  description: "Professional cybersecurity services and solutions for businesses of all sizes. Protect your data with our expert security assessments, penetration testing, and compliance solutions.",
  keywords: ["cybersecurity", "cybersecurity course", "youth league", "kazeem durodoye", "kazeem kolawole durodoye", "cybernova", "cybernovr", "cybernover", "hacker", "hacked", "data protection", "penetration testing", "security audit", "cybernovr", "network security"],
  generator: 'Next.js',
  applicationName: 'Cybernovr',
  referrer: 'origin-when-cross-origin',
  icons: "https://anpimagehosting.s3.eu-west-1.amazonaws.com/57580_Cybernovrlogo.png",
  openGraph: {
    title: "Cybernovr - Cybersecurity Solutions",
    description: "Professional cybersecurity services and solutions for businesses of all sizes.",
    url: "https://cybernovr.com",
    siteName: "Cybernovr",
    images: [
      {
        url: "https://anpimagehosting.s3.eu-west-1.amazonaws.com/57580_Cybernovrlogo.png",
        width: 1200,
        height: 630,
        alt: "Cybernovr - Cybersecurity Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cybernovr - Cybersecurity Solutions",
    description: "Professional cybersecurity services and solutions for businesses of all sizes.",
    images: ['https://anpimagehosting.s3.eu-west-1.amazonaws.com/57580_Cybernovrlogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '2XU3pjEh6eUcedQjN1TWqK1_EqvcNMPAFLGqGPaBlfA',
  },
  alternates: {
    canonical: 'https://cybernovr.com',
    languages: {
      'en-US': 'https://cybernovr.com',
      'en-NG': 'https://cybernovr.ng',
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <CookiesConsent />
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
