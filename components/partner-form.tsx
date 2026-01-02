"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    address: "",
    pincode: "",
    partnerType: "",
    specialization: "",
    // mobileNumber: "",
    // whatsappNumber: "",
    // email: "",
    // message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Create Google Form submission URL
    const formUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"

    const data = new FormData()
    data.append("entry.FIELD_ID_1", formData.fullName)
    data.append("entry.FIELD_ID_2", formData.businessName)
    data.append("entry.FIELD_ID_3", formData.address)
    data.append("entry.FIELD_ID_4", formData.pincode)
    data.append("entry.FIELD_ID_5", formData.partnerType)
    data.append("entry.FIELD_ID_6", formData.specialization)
    // data.append("entry.FIELD_ID_7", formData.mobileNumber)
    // data.append("entry.FIELD_ID_8", formData.whatsappNumber)
    // data.append("entry.FIELD_ID_9", formData.email)
    // data.append("entry.FIELD_ID_10", formData.message)

    try {
      await fetch(formUrl, {
        method: "POST",
        body: data,
        mode: "no-cors",
      })
      setSubmitted(true)
      setFormData({
        fullName: "",
        businessName: "",
        address: "",
        pincode: "",
        partnerType: "",
        specialization: "",
        // mobileNumber: "",
        // whatsappNumber: "",
        // email: "",
        // message: "",
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <div id="partner-form" className="w-full max-w-2xl mx-auto bg-white p-6 lg:p-8 rounded-xl shadow-lg border border-primary/10">
      <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4 lg:mb-6 text-balance">Partner Registration Form</h2>

      {submitted && (
        <div className="mb-4 p-4 bg-secondary/10 border border-secondary text-secondary-foreground rounded-lg">
          ✓ Thank you! We'll contact you soon to discuss partnership opportunities.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
        <div>
          <label className="block text-xs lg:text-sm font-semibold text-foreground mb-1.5 lg:mb-2">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-3 lg:px-4 py-2 text-sm lg:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-xs lg:text-sm font-semibold text-foreground mb-1.5 lg:mb-2">Clinic / Business Name *</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
            className="w-full px-3 lg:px-4 py-2 text-sm lg:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Your clinic or business name"
          />
        </div>

        <div>
          <label className="block text-xs lg:text-sm font-semibold text-foreground mb-1.5 lg:mb-2">Address *</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-3 lg:px-4 py-2 text-sm lg:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
            rows={2}
            placeholder="Enter your complete address"
          />
        </div>

        <div>
          <label className="block text-xs lg:text-sm font-semibold text-foreground mb-1.5 lg:mb-2">Pincode *</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
            pattern="[0-9]{6}"
            maxLength={6}
            className="w-full px-3 lg:px-4 py-2 text-sm lg:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Enter 6-digit pincode"
          />
        </div>

        <div>
          <label className="block text-xs lg:text-sm font-semibold text-foreground mb-1.5 lg:mb-2">Partner Type *</label>
          <select
            name="partnerType"
            value={formData.partnerType}
            onChange={handleChange}
            required
            className="w-full px-3 lg:px-4 py-2 text-sm lg:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Select partner type</option>
            <option value="nursing">Nursing</option>
            <option value="radiology">Radiology</option>
            <option value="multispeciality-hospital">Multispeciality Hospital</option>
            <option value="ayurveda-panchkarma">Ayurveda & Panchkarma</option>
          </select>
        </div>

        <div>
          <label className="block text-xs lg:text-sm font-semibold text-foreground mb-1.5 lg:mb-2">Specialization</label>
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="w-full px-3 lg:px-4 py-2 text-sm lg:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Enter your specialization (e.g., Cardiology, Orthopedics, etc.)"
          />
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">

          <div>
            <label className="block text-xs lg:text-sm font-semibold text-foreground mb-1.5 lg:mb-2">Mobile Number *</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="w-full px-3 lg:px-4 py-2 text-sm lg:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div> */}

        {/* <div>
          <label className="block text-xs lg:text-sm font-semibold text-foreground mb-1.5 lg:mb-2">WhatsApp Number</label>
          <input
            type="tel"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            className="w-full px-3 lg:px-4 py-2 text-sm lg:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="+1 (555) 000-0000"
          />
        </div> */}

        {/* <div>
          <label className="block text-xs lg:text-sm font-semibold text-foreground mb-1.5 lg:mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 lg:px-4 py-2 text-sm lg:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-xs lg:text-sm font-semibold text-foreground mb-1.5 lg:mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 lg:px-4 py-2 text-sm lg:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
            rows={3}
            placeholder="Tell us about your business and partnership goals"
          />
        </div> */}

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 lg:py-3 rounded-lg text-sm lg:text-base transition-all shadow-md hover:shadow-lg"
        >
          Submit Partnership Application
        </Button>
      </form>
    </div>
  )
}
