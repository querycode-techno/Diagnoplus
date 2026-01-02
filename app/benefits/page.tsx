"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PartnerForm from "@/components/partner-form"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { ChevronDown, Users, Handshake } from "lucide-react"
import Image from "next/image"

export default function BenefitsPage() {
  const [activeTab, setActiveTab] = useState("partner")

  const partnerBenefits = [
    {
      image: "/benefits/1.jpg",
      title: "Grow your visibility",
      description: "Get discovered by high-intent patients, including corporate users with insured benefits. Increase your online presence and reach more patients through Diagnoplus' digital platform.",
    },
    {
      image: "/benefits/2.webp",
      title: "Start in minutes",
      description: "Quick form filling, no complex onboarding or software required. Get started with Diagnoplus in minutes and start receiving patients immediately.",
    },
    {
      image: "/benefits/3.jpg",
      title: "Offer multiple services, unlock new income",
      description: "Consult, refer for surgery, fulfill prescriptions, or enable lab tests through one platform. Diversify your revenue streams with multiple service offerings.",
    },
    {
      image: "/benefits/4.jpg",
      title: "Build patient base",
      description: "Smart bookings, digital records, reminders, and follow-ups. Build a strong patient base with our technology tools that help you manage relationships effectively.",
    },
    {
      image: "/benefits/5.webp",
      title: "No setup fees or hidden charges",
      description: "No joining fee and 100% consultation earnings in the first month. Transparent pricing with no hidden costs—your earnings are yours to keep.",
    },
    {
      image: "/benefits/6.jpg",
      title: "Get real support from real people",
      description: "Support with onboarding, visibility, coordination, and performance improvements. Our dedicated team is here to help you succeed every step of the way.",
    },
  ]

  const stats = [
    { number: "1Cr+", label: "Active Patients", value: 10000000, suffix: "+", prefix: "" },
    { number: "10k+", label: "Healthcare Partners", value: 10000, suffix: "+", prefix: "" },
    { number: "50k+", label: "Daily Consultations", value: 50000, suffix: "+", prefix: "" },
    { number: "25k+", label: "Successful Surgeries", value: 25000, suffix: "+", prefix: "" },
    
    { number: "7.5k+", label: "Hospitals", value: 7500, suffix: "+", prefix: "" },
  ]

  const statsRef = useRef<HTMLDivElement>(null)
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            stats.forEach((stat, index) => {
              const duration = 2000 // 2 seconds
              const steps = 60
              const increment = stat.value / steps
              let current = 0
              const timer = setInterval(() => {
                current += increment
                if (current >= stat.value) {
                  current = stat.value
                  clearInterval(timer)
                }
                setAnimatedStats((prev) => {
                  const newStats = [...prev]
                  newStats[index] = Math.floor(current)
                  return newStats
                })
              }, duration / steps)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [hasAnimated])

  const formatNumber = (value: number, stat: typeof stats[0]) => {
    if (value === 0) return stat.number
    if (stat.value >= 10000000) {
      const cr = value / 10000000
      return `${cr >= 1 ? Math.floor(cr) : cr.toFixed(1)}Cr${stat.suffix}`
    } else if (stat.value >= 100000) {
      const lakh = value / 100000
      return `${lakh >= 1 ? Math.floor(lakh) : lakh.toFixed(1)}L${stat.suffix}`
    } else if (stat.value >= 1000) {
      const k = value / 1000
      // Handle 7.5k case
      if (stat.value === 7500) {
        return k === 7.5 ? "7.5k+" : `${k.toFixed(1)}k${stat.suffix}`
      }
      return `${k >= 1 ? Math.floor(k) : k.toFixed(1)}k${stat.suffix}`
    } else {
      return `${Math.floor(value)}${stat.suffix}`
    }
  }

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
      <section className="relative py-0 px-0 overflow-hidden">
        <div className="relative h-[400px] sm:h-[500px] lg:h-[800px] w-full">
          <Image
            src="/banner.webp"
            alt="Benefits Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-[#393185]/60 via-[#393185]/50 to-[#7AB735]/40"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance drop-shadow-lg">
                Benefits & Value Proposition
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl drop-shadow-md">
                Discover the advantages of joining Diagnoplus Health Services as a partner or patient
              </p>
            </div>
          </div>
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
                  className="flex items-center gap-2 border-[#393185] text-[#393185] hover:bg-[#393185]/5 bg-transparent"
                >
                  {activeTab === "partner" ? "Partner Benefits" : "Patient Benefits"}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem
                  onClick={() => setActiveTab("partner")}
                  className={activeTab === "partner" ? "bg-[#393185]/10 text-[#393185] font-semibold" : ""}
                >
                  Partner Benefits
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setActiveTab("patient")}
                  className={activeTab === "patient" ? "bg-[#393185]/10 text-[#393185] font-semibold" : ""}
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
        <>
          {/* Hero Section */}
          <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#393185] mb-6 leading-tight">
                    Power your practice with Diagnoplus!
                  </h2>
                  <p className="text-xl sm:text-2xl text-foreground/70 mb-8 leading-relaxed">
                    India's Leading Digital Healthcare Company. Join and help us serve 1 crore+ Indians.
                  </p>
                  <Link href="#partner-form">
                    <Button className="bg-[#393185] hover:bg-[#393185]/90 text-white font-semibold py-6 px-8 lg:px-12 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Join Diagnoplus Network
                    </Button>
                  </Link>
                </div>
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src="/benefits1.webp"
                    alt="Diagnoplus Benefits"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Be where healthcare happens */}
          <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#A92881] mb-12 lg:mb-16">
                Be where healthcare happens
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src="/benefits2.webp"
                    alt="Diagnoplus Benefits"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
                <div>
                  <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-6">
                    Our vision is to make high-quality healthcare accessible to a billion Indians. We connect providers to a growing network of patients for various services like doctor consultations, lab tests, medicine orders, and surgical care.
                  </p>
                  <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
                    By joining Diagnoplus, you become part of India's largest digital healthcare ecosystem, reaching millions of patients who need your expertise and services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 justify-items-center">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[200px]">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#393185] mb-2">
                      {formatNumber(animatedStats[idx], stat)}
                    </div>
                    <div className="text-sm sm:text-base text-foreground/70 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Join Section */}
          <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#A92881] mb-12 lg:mb-16">
                Why join Diagnoplus?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {partnerBenefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#393185] mb-4 capitalize">{benefit.title}</h3>
                      <p className="text-foreground/70 mb-6 flex-1 leading-relaxed">{benefit.description}</p>
                      <Link href="#partner-form" className="mt-auto">
                        <Button className="w-full bg-[#393185] hover:bg-[#393185]/90 text-white font-semibold py-3">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Strong Patient Base CTA */}
          <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185] to-[#7AB735] text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">A Strong Patient Base from Day One</h3>
              <p className="text-lg sm:text-xl opacity-95 mb-8 max-w-4xl mx-auto leading-relaxed">
                Diagnoplus brings over 1 million active patients across Chhattisgarh, Madhya Pradesh, and the entire
                Vidarbha region. Our partners benefit from immediate access to a trusted, established, and continuously
                growing patient network—ensuring faster growth and sustained demand.
              </p>
              <Link href="#partner-form">
                <Button className="bg-white text-[#393185] hover:bg-white/90 font-semibold py-6 px-8 lg:px-12 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Partnership Journey
                </Button>
              </Link>
            </div>
          </section>
        </>
      ) : (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#A92881] mb-12 text-balance text-center">
              Quality Healthcare for Everyone
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {patientBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-muted/20 rounded-xl border border-border hover:border-[#7AB735]/30 transition"
                >
                  <div className="w-12 h-12 bg-[#7AB735]/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#A92881] mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185]/5 via-[#7AB735]/5 to-[#A92881]/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#A92881] mb-4 text-balance">Join Our Growing Network</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you're looking to partner with us or access quality healthcare, Diagnoplus Health Services is here to
            serve you
          </p>
          <Link href="#partner-form">
            <Button className="bg-[#7AB735] hover:bg-[#7AB735]/90 text-white font-semibold py-3 px-8 text-lg">
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

      <Footer />
    </main>
  )
}
