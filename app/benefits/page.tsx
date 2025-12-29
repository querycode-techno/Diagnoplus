"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import PartnerForm from "@/components/partner-form"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function BenefitsPage() {
  const [activeTab, setActiveTab] = useState("partner")

  const partnerBenefits = [
    {
      icon: "🔍",
      title: "Enhanced Visibility",
      description: "Get discovered easily by patients through Diagnoplus' digital platform, increasing your online presence without additional effort.",
    },
    {
      icon: "🏆",
      title: "Trust & Credibility",
      description: "Association with Diagnoplus strengthens your reputation through platform-backed credibility and patient trust.",
    },
    {
      icon: "📈",
      title: "Higher Patient Footfall",
      description: "Access a growing base of active patients, leading to increased bookings, repeat visits, and long-term patient relationships.",
    },
    {
      icon: "⚙️",
      title: "Operational Efficiency",
      description: "Use smart technology tools to manage appointments, patient records, and reports smoothly, saving time and resources.",
    },
    {
      icon: "📢",
      title: "Zero-Cost Marketing Support",
      description: "Receive promotion through Diagnoplus' campaigns and platform listings—no marketing spend required to acquire new patients.",
    },
    {
      icon: "💸",
      title: "Your Discounts, Your Control",
      description: "Partners have full flexibility to offer exclusive discounts ranging from 10% to 30% on OPD and IPD services to attract more patients and improve conversion rates.",
    },
  ]

  const patientBenefits = [
    {
      title: "Affordable Healthcare",
      description: "Access quality healthcare services at competitive prices that fit your budget",
    },
    {
      title: "Comprehensive Services",
      description: "One platform for all your healthcare needs—diagnostics, consultations, surgeries, and more",
    },
    {
      title: "Trusted Network",
      description: "Access to verified doctors, hospitals, and diagnostic centers across Central India",
    },
    {
      title: "Digital Health Records",
      description: "Lifetime secure storage of your health records, accessible anytime, anywhere",
    },
    {
      title: "Home Healthcare",
      description: "Convenient home-based services including diagnostics, nursing, and doctor consultations",
    },
    {
      title: "Emergency Support",
      description: "24/7 assistance for emergency situations including ambulance and critical care coordination",
    },
    {
      title: "Preventive Care",
      description: "Health awareness programs and lifestyle disease management to prevent health issues",
    },
    {
      title: "Wellness Benefits",
      description: "Exclusive discounts on gym memberships, fitness programs, and wellness services",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Benefits & Value Proposition</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Discover the advantages of joining Diagnoplus Health Services as a partner or patient
          </p>
        </div>
      </section>

      <section className="sticky top-16 z-40 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 py-6">
            <span className="font-semibold text-foreground">View Benefits:</span>

            {/* Dropdown Menu for Benefits Selection */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  {activeTab === "partner" ? "Partner Benefits" : "Patient Benefits"}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem
                  onClick={() => setActiveTab("partner")}
                  className={activeTab === "partner" ? "bg-primary/10 text-primary font-semibold" : ""}
                >
                  Partner Benefits
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setActiveTab("patient")}
                  className={activeTab === "patient" ? "bg-primary/10 text-primary font-semibold" : ""}
                >
                  Patient Benefits
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>

      {/* Content Section */}
      {activeTab === "partner" ? (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
                Why Partner with Diagnoplus Health Services
              </h2>
              <p className="text-2xl font-semibold text-secondary mb-2">More Visibility. More Patients. Zero Marketing Cost.</p>
              <p className="text-xl text-foreground/70">Your Expertise, Our Platform—Growing Together</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {partnerBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-muted/20 rounded-xl border border-border hover:border-primary/30 transition"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary text-white p-12 rounded-xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">A Strong Patient Base from Day One</h3>
              <p className="mb-6 text-lg opacity-90 max-w-3xl mx-auto">
                Diagnoplus brings over 1 million active patients across Chhattisgarh, Madhya Pradesh, and the entire
                Vidarbha region. Our partners benefit from immediate access to a trusted, established, and continuously
                growing patient network—ensuring faster growth and sustained demand.
              </p>
              <Link href="#partner-form">
                <Button className="bg-white text-primary hover:bg-white/90 font-semibold py-3 px-8">
                  Start Your Partnership Journey
                </Button>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-balance text-center">
              Quality Healthcare for Everyone
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {patientBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-muted/20 rounded-xl border border-border hover:border-secondary/30 transition"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Join Our Growing Network</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you're looking to partner with us or access quality healthcare, Diagnoplus Health Services is here to
            serve you
          </p>
          <Link href="#partner-form">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Partner Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <PartnerForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-foreground-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Diagnoplus Health Services</h3>
            <p className="text-gray-300">Central India's Trusted All-in-One Healthcare Platform</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Partnership</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/benefits" className="hover:text-white">
                  Benefits
                </Link>
              </li>
              <li>
                <a href="#partner-form" className="hover:text-white">
                  Apply Now
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <p className="text-gray-300 mb-2">Email: hello@diagoplus.com</p>
            <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Diagnoplus Health Services. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
