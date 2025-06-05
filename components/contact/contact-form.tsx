"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Swal from 'sweetalert2'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@cybernovr.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact Form Submission from ${formData.name}`,
          _replyto: formData.email,
          _autoresponse: `Hi ${formData.name},\n\nThank you for contacting us. We've received your message and will get back to you soon.\n\nBest regards,\nCybernovr Team`,
          _template: "table",
          _captcha: "false"
        })
      })

      const data = await response.json()
      
      if (data.success === "true") {
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      await Swal.fire({
        title: 'Error!',
        text: 'There was an error submitting the form. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#662f8e'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-deep-blue">Send Us a Message</h2>
      
      {submitSuccess ? (
        <div className="text-center py-8 bg-primary/40 rounded-xl p-8 shadow-md border border-gray-100 mt-24">
          <h3 className="text-xl font-bold text-black mb-2">Thank You!</h3>
          <p className="text-black">Your message has been sent successfully.</p>
          <p className="text-black"> We'll get back to you soon.</p>
          <div className="mt-10">
            <Button 
              onClick={() => setSubmitSuccess(false)}
              className="bg-cybernovr-purple/80 text-white hover:bg-cybernovr-purple/60"
            >
              Send another message
            </Button>
          </div>
        </div>
      ) : (
          
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
              placeholder="Your Company"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
              placeholder="Your Phone Number"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal appearance-none"
          >
            <option value="">Select a Service</option>
            <option value="Professional Services">Cybersecurity Resilience</option>
            <option value="Data Privacy Protection">Data Privacy Protection</option>
            <option value="GRC">GRC</option>
            <option value="Risk Management">Risk Management</option>
            <option value="Due Diligence">Managed Security</option>
            {/* <option value="Compliance">Compliance</option> */}
            {/* <option value="Penetration Testing">Penetration Testing</option>
            <option value="Incident Response">Incident Response</option>
            <option value="CISO/vCISO">CISO/vCISO</option> */}
            <option value="DNS Security">DNS Security</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
            placeholder="Tell us about your security needs"
          ></textarea>
        </div>

        <Button 
            type="submit" 
            className="w-full border-black hover:bg-deep-blue text-white py-3 font-bold transition-colors duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        </form>
      )}
  </div>
  )
}
