import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import CookiesConsent from "@/components/cookies/page"


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
  title: "Cybernovr- Cybersecurity Solutions",
  description: "Professional cybersecurity services and solutions for businesses of all sizes.",
  generator: 'v0.dev',
  icons: "https://anpimagehosting.s3.eu-west-1.amazonaws.com/57580_Cybernovrlogo.png",
  openGraph: {
    title: "Cybernovr - Cybersecurity Solutions",
    description: "Professional cybersecurity services and solutions for businesses of all sizes.",
    url: "https://cybernovr.com",
    siteName: "Cybernovr",
    images: [
      {
        url: "https://anpimagehosting.s3.eu-west-1.amazonaws.com/80831_cyber-security.png",
        width: 1200,
        height: 630,
        alt: "Cybernovr - Cybersecurity Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <CookiesConsent />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
