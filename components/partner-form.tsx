"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

const specializationOptions = [
  "Acupuncturist",
  "Anaesthetist",
  "Andrologist",
  "Archaeologist",
  "Audiologist",
  "Ayurveda",
  "Ayurvedacharya",
  "Cardiologist",
  "Chest Physician",
  "Child Neurology",
  "Chiropractor",
  "Cosmetic/Aesthetic Dentist",
  "Cosmetologist",
  "Dental radiologist",
  "Dental Surgeon",
  "Dermatologist",
  "Diabetologist",
  "Dietician",
  "Ear-Nose-Throat (ENT)",
  "Electro Homeopathy",
  "Endocrinology",
  "Endodontist",
  "ENT Specialist",
  "Family Physician & Surgeon",
  "Forensic dentist",
  "Gastroenterologist",
  "Gastroenterology",
  "General Dentist",
  "General Physician",
  "General Practitioner",
  "General Practitioners",
  "General Surgeon",
  "General Surgery",
  "Geriatric",
  "Gynae and Infertility",
  "Gynaecologist",
  "Gynecologist",
  "Holistic Healer",
  "Homoeopath",
  "Homoeopaths",
  "Implantologist",
  "Infectologist",
  "Interventional Pulmonologist",
  "MD MEDICINE",
  "Multispeciality",
  "Naturopathy",
  "Neonatologist",
  "Nephrologist",
  "Nephrology",
  "Neurologist",
  "Neuropsychiatrist",
  "Neurosurgeon",
  "Nutritionists",
  "Obesity consultant",
  "Obesity Expert",
  "Obstetrician",
  "Oncologist",
  "Ophthalmollogist",
  "Ophthalmologist",
  "Optometrist",
  "Oral and maxillofacial surgeon",
  "Oral medicine specialist",
  "Oral pathologist",
  "Oral surgeon",
  "Oral Surgery",
  "Orthodontist",
  "Orthopedic",
  "Paediatric dentist",
  "Paedodontics",
  "Pathologist",
  "Pediatric Dentist",
  "Pediatric Hematologic-Oncologist",
  "Pediatrician",
  "Pediatrics",
  "Periodontist",
  "Physicians",
  "Physiologists",
  "Physiotherapist",
  "Physiotherapy",
  "Plastic-surgeon",
  "Prosthodontist",
  "Psychiatrist",
  "Psychologist",
  "Psychotherapist",
  "Pulmonologist",
  "Pulmonologists",
  "Radiologist",
  "Rheumatologist",
  "Sexologist",
  "Skin Specialist",
  "Speech Therapy",
  "Surgeon",
  "Surgery",
  "Teeth Surgery",
  "Trichologist",
  "Urologist",
  "Urology",
  "Vascular Surgeon",
  "Yoga & Naturopathy",
]

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    address: "",
    pincode: "",
    partnerType: "",
    specialization: "",
    mobileNumber: "",
    // whatsappNumber: "",
    email: "",
    // message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([])
  const [isSpecOpen, setIsSpecOpen] = useState(false)
  const specDropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isSpecOpen) return
      if (specDropdownRef.current && !specDropdownRef.current.contains(event.target as Node)) {
        setIsSpecOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isSpecOpen])

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Start timer for minimum loading duration (2 seconds)
    const minLoadingTime = new Promise(resolve => setTimeout(resolve, 2000))

    try {
      const [response] = await Promise.all([
        fetch("/api/partner-submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }),
        minLoadingTime, // Wait for at least 2 seconds
      ])

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setSubmitted(true)
      setFormData({
        fullName: "",
        businessName: "",
        address: "",
        pincode: "",
        partnerType: "",
        specialization: "",
        mobileNumber: "",
        email: "",
      })
      setSelectedSpecializations([])
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      console.error("Form submission error:", err)
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div id="partner-form" className="w-full max-w-2xl mx-auto bg-white p-6 lg:p-8 rounded-xl shadow-lg border border-primary/10">
      <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4 lg:mb-6 text-balance">Partner Registration Form</h2>

      {submitted && (
        <div className="mb-6 p-6 bg-gradient-to-br from-[#7AB735]/10 via-white to-[#393185]/5 border-2 border-[#7AB735] rounded-2xl shadow-lg animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-[#7AB735] rounded-full flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-black mb-1">Application Submitted Successfully!</h3>
              <p className="text-black/80 text-sm leading-relaxed">
                Thank you for your interest in partnering with Diagnoplus. Our team will review your application and contact you within 24-48 hours to discuss the next steps.
              </p>
            </div>
          </div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
          <div className="sm:col-span-1">
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

          <div className="sm:col-span-1">
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
            <option value="clinic">Clinic</option>
            <option value="doctor">Doctor</option>
            <option value="laboratory">Laboratory</option>
            <option value="collection-center">Collection Center</option>
            <option value="healthcare-entrepreneur">Healthcare Entrepreneur</option>
            <option value="nursing">Nursing</option>
            <option value="radiology">Radiology</option>
            <option value="multispeciality-hospital">Multispeciality Hospital</option>
            <option value="ayurveda-panchkarma">Ayurveda & Panchkarma</option>
          </select>
        </div>

        <div className="relative" ref={specDropdownRef}>
          <label className="block text-xs lg:text-sm font-semibold text-foreground mb-1.5 lg:mb-2">
            Specialization (select all that apply)
          </label>

          {/* Fake select box */}
          <button
            type="button"
            onClick={() => setIsSpecOpen((o) => !o)}
            className="w-full flex items-center justify-between px-3 lg:px-4 py-2 text-sm lg:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-left"
          >
            <span className={formData.specialization ? "text-foreground" : "text-foreground/50"}>
              {formData.specialization || "Select specialization(s)"}
            </span>
            <span className="ml-2 text-xs text-foreground/60">▼</span>
          </button>

          {/* Dropdown with checkboxes */}
          {isSpecOpen && (
            <div className="absolute z-20 mt-1 w-full max-h-64 overflow-y-auto bg-white border border-border rounded-lg shadow-lg px-3 py-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {specializationOptions.map((option) => {
                  const id = `spec-${option.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`
                  const checked = selectedSpecializations.includes(option)
                  return (
                    <label
                      key={option}
                      htmlFor={id}
                      className="flex items-center gap-2 text-xs lg:text-sm text-foreground cursor-pointer"
                    >
                      <input
                        id={id}
                        type="checkbox"
                        className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                        checked={checked}
                        onChange={() => {
                          setSelectedSpecializations((prev) => {
                            const exists = prev.includes(option)
                            const next = exists ? prev.filter((o) => o !== option) : [...prev, option]
                            setFormData((prevForm) => ({
                              ...prevForm,
                              specialization: next.join(", "),
                            }))
                            return next
                          })
                        }}
                      />
                      <span>{option}</span>
                    </label>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
          <div>
            <label className="block text-xs lg:text-sm font-semibold text-foreground mb-1.5 lg:mb-2">Mobile Number *</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="w-full px-3 lg:px-4 py-2 text-sm lg:text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
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
        </div>

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

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
            ✕ {error}
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 lg:py-3 rounded-lg text-sm lg:text-base transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </span>
          ) : (
            "Submit Partnership Application"
          )}
        </Button>
      </form>
    </div>
  )
}
