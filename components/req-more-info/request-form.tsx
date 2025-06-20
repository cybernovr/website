"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Swal from 'sweetalert2'

export default function RequestForm() {
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
          _subject: `New Conversation Initiated from ${formData.name}`,
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
    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-10">
      <h2 className="text-2xl font-bold mb-6 text-deep-blue">Request More Information</h2>
      
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
          
<form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-1">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue bg-white text-charcoal"
                        placeholder="Tell us about your security needs"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-cybernovr-purple hover:bg-cybernovr-purple/90 text-white">
                      Send Request
                    </Button>
                  </form>
      )}
  </div>
  )
}
