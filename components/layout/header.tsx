"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import logo from "@/components/images/Cybernovrlogosmall.png"

const mainNavItems = [
  {
    title: "Services",
    href: "",
    submenu: [
      { title: "Cybersecurity Resilience Program", href: "/services/professional-services" },
      { title: "GRC", href: "/services/grc" },
      { title: "Risk Management", href: "/services/risk-management" },
      // { title: "Due Diligence", href: "/services/due-diligence" },
      { title: "Data Privacy Protection", href: "/services/compliance" },
      { title: "Penetration Testing", href: "/services/penetration-testing" },
      { title: "Managed Security", href: "/services/incident-response" },
      // { title: "CISO/vCISO", href: "/services/ciso" },
      { title: "DNS Security", href: "/services/dns-security" },
    ],
  },
  {
    title: "Solutions",
    href: "",
    submenu: [
      { title: "NovrGRC", href: "/products/darktrace" },
      { title: "NovrPRISM", href: "/products/proofpoint" },
  
    ],
  },
  {
    title: "Initiatives",
    href: "/initiatives",
    submenu: [
      { title: "Cybersecurity Youth League", href: "/initiatives/youth-league" },
      { title: "Cybersecurity Training", href: "/courses" },
      { title: "Awareness & Campaigns", href: "/initiatives/awareness" },
      { title: "Education & Training", href: "/initiatives/education" },
    ],
  },
  { title: "Company", href: "/about" },
  { title: "Contact", href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      setActiveSubmenu(null)
    }
  }

  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4",
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src={logo}
              alt="Cybernovr Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className="text-charcoal hover:text-cybernovr-purple font-medium flex items-center transition-colors duration-200"
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />}
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-light-gray hover:text-cybernovr-purple"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            
            <Button className="bg-cybernovr-purple text-white hover:bg-cybernovr-purple/90">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-charcoal z-20" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-10 lg:hidden overflow-y-auto transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container-custom pt-24 pb-8">
          <nav className="flex flex-col space-y-4">
            {mainNavItems.map((item) => (
              <div key={item.title} className="border-b border-gray-200 pb-4">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className="flex items-center justify-between w-full text-lg font-medium text-charcoal"
                    >
                      {item.title}
                      <ChevronDown
                        className={cn("h-5 w-5 transition-transform", activeSubmenu === item.title ? "rotate-180" : "")}
                      />
                    </button>
                    {activeSubmenu === item.title && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block py-2 text-charcoal/80 hover:text-cybernovr-purple"
                            onClick={toggleMenu}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-lg font-medium text-charcoal hover:text-cybernovr-purple"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8 flex flex-col space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-3 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cybernovr-purple bg-light-gray text-charcoal"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Button className="bg-cybernovr-purple text-white hover:bg-cybernovr-purple/90 w-full">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
