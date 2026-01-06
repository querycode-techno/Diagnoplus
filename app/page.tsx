"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PartnerForm from "@/components/partner-form"
import VideoTestimonials from "@/components/video-testimonials"
import { Button } from "@/components/ui/button"
import { MessageCircle, CheckCircle2, Search, Award, TrendingUp, Settings, Megaphone, DollarSign, Stethoscope, Pill, Calendar, Beaker, Scissors, MoreVertical, ArrowRight, Building2, TestTube, Users, Heart, Activity, X } from "lucide-react"
import { FaUser, FaHeartbeat, FaInfinity, FaRupeeSign, FaSync, FaBolt, FaHospital, FaDatabase, FaCreditCard, FaUserMd, FaUsers, FaAppleAlt, FaHome, FaGlobe, FaGift } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"

function HospitalCarousel({ hospitals }: { hospitals: Array<{ name: string; logo: string }> }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Define 4 different slides with different content
  const slides = [
    {
      type: "hospitals",
      title: "Top Hospitals, 100% Sponsored",
      description: "Book consultations at top hospitals near you",
      items: hospitals.map(h => ({ icon: Building2, title: h.name }))
    },
    {
      type: "services",
      title: "Lab Tests & Diagnostics",
      description: "Book lab tests from top trusted brands",
      items: [
        { icon: TestTube, title: "Blood Tests" },
        { icon: Beaker, title: "MRI/CT Scan" },
        { icon: Activity, title: "X-Ray & Ultrasound" },
        { icon: Heart, title: "Health Packages" }
      ]
    },
    {
      type: "partner",
      title: "Join Our Partner Network",
      description: "More Visibility. More Patients. Zero Marketing Cost.",
      items: [
        { icon: TrendingUp, title: "Higher Patient Footfall" },
        { icon: Award, title: "Trust & Credibility" },
        { icon: Search, title: "Enhanced Visibility" },
        { icon: DollarSign, title: "Your Discounts, Your Control" }
      ]
    },
    {
      type: "services",
      title: "Doctor Consultations",
      description: "Consult with top doctors online, 24x7",
      items: [
        { icon: Stethoscope, title: "Video Consultation" },
        { icon: Calendar, title: "Book Appointment" },
        { icon: Users, title: "Specialist Access" },
        { icon: Building2, title: "Home Visit" }
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="bg-linear-to-r from-[#393185]/10 via-[#A92881]/5 to-[#7AB735]/10 rounded-2xl p-6 sm:p-8 border border-[#393185]/20 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="relative z-10">
        {/* Carousel Container */}
        <div className="relative overflow-hidden max-w-4xl mx-auto">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, slideIdx) => (
              <div
                key={slideIdx}
                className="min-w-full"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#A92881] mb-3">
                    {slide.title}
                  </h3>
                  <p className="text-base sm:text-lg text-foreground/70">
                    {slide.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 px-2">
                  {slide.items.map((item, idx) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-4 flex flex-col items-center justify-center h-24 sm:h-28 border border-gray-200 hover:border-[#393185]/30 transition-all duration-300 hover:shadow-md"
                      >
                        <IconComponent className="w-8 h-8 text-[#393185] mb-2" />
                        <span className="text-xs sm:text-sm font-semibold text-[#393185] text-center">{item.title}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ImageModal({ image, isOpen, onClose }: { image: string | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !image) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close"
      >
        <X className="w-8 h-8" />
      </button>
      <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
        <Image
          src={image}
          alt="Gallery image"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}

function Gallery({ images, showAll = false }: { images: string[]; showAll?: boolean }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const displayImages = showAll ? images : images.slice(0, 6)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {displayImages.map((image, idx) => (
          <div
            key={idx}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Gallery image ${idx + 1}`}
              fill
              className="object-cover group-hover:brightness-110 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
          </div>
        ))}
      </div>
      <ImageModal image={selectedImage} isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  )
}

export default function Home() {
  const serviceCategories = [
    {
      icon: "/icons/Diagnostics.png",
      title: "Diagnostics",
      items: ["Pathology Lab Tests", "Preventive Health Check-up Packages"],
    },
    {
      icon: "/icons/imaging.png",
      title: "Imaging",
      items: ["Radiology, MRI & CT Scans", "ECG & X-Ray at Home"],
    },
    {
      icon: "/icons/doctor-consultations.png",
      title: "Doctor Consultations",
      items: [
        "OPD & IPD Consultation Assistance",
        "Video / Audio Doctor Consultation",
        "Doctor at Home Services",
        "Specialist & Super-Specialist Access",
      ],
    },
    {
      icon: "/icons/hospital-surgical-care.png",
      title: "Hospital & Surgical Care",
      items: ["Planned Surgeries", "IPD Coordination & Bed Management", "Surgical Equipment on Rent", "Surgeries on EMI"],
    },
    {
      icon: "/icons/emergency-critical-support.png",
      title: "Emergency & Critical Support",
      items: ["Ambulance Services", "Blood Bank Assistance", "Emergency Care Coordination"],
    },
    {
      icon: "/icons/healthcare.png",
      title: "Home Healthcare",
      items: ["Home Nursing Services", "Home Patient Care", "Elderly & Post-Surgery Care"],
    },
    {
      icon: "/icons/leaf.png",
      title: "Wellness & Alternative Care",
      items: ["Panchkarma Therapies", "Herbal Supplements & Treatments", "Preventive & Lifestyle Care Programs"],
    },
    {
      icon: "/icons/health-awareness.png",
      title: "Health Awareness & Lifestyle Disease Management",
      items: [
        "Health Awareness Programs",
        "Lifestyle Disease Management (Diabetes, BP, Thyroid, Obesity)",
        "Diabetes Care & Management Programs",
        "Diet & Nutrition Consultation",
        "Preventive Health Counseling",
      ],
    },
    {
      icon: "/icons/digital-health-records.png",
      title: "Digital Health Records",
      items: ["Lifetime Secure Digital Storage", "Access Reports Anytime, Anywhere", "Centralized Health History"],
    },
    {
      icon: "/icons/lifestyle-wellness-benefits.png",
      title: "Lifestyle & Wellness Benefits",
      items: ["Gym Membership Discounts", "Zumba & Fitness Subscriptions", "Wellness Programs & Exclusive Offers"],
    },
  ]

  const healthEasyHighlights = [
    { text: "No Age Limit – Anyone can enroll, regardless of age.", icon: FaUser, color: "from-blue-500 to-cyan-500" },
    { text: "Pre-Existing Conditions Covered – Patients with prior illnesses are welcome, with no exclusions.", icon: FaHeartbeat, color: "from-red-500 to-pink-500" },
    { text: "No Coverage Limit – Unlike traditional insurance, there's no maximum claim limit.", icon: FaInfinity, color: "from-purple-500 to-indigo-500" },
    { text: "Guaranteed Savings – Reduce healthcare expenses with a cost-effective plan.", icon: FaRupeeSign, color: "from-green-500 to-emerald-500" },
    { text: "Unlimited Usage – Avail services any number of times without restriction.", icon: FaSync, color: "from-orange-500 to-amber-500" },
    { text: "Instant Activation – Get your health plan active immediately.", icon: FaBolt, color: "from-yellow-500 to-orange-500" },
    { text: "All-Inclusive Coverage – OPD, IPD, surgeries, dental, ophthalmology, cosmetology, and more—all included.", icon: FaHospital, color: "from-teal-500 to-cyan-500" },
    { text: "Patient History Storage – Secure, lifelong digital storage of health records for easy access anytime.", icon: FaDatabase, color: "from-indigo-500 to-blue-500" },
    { text: "Surgery on EMI – Planned surgeries can be availed with flexible EMI options.", icon: FaCreditCard, color: "from-violet-500 to-purple-500" },
    { text: "Access to Experienced Specialists – Easily consult expert doctors and super-specialists across all medical fields.", icon: FaUserMd, color: "from-rose-500 to-pink-500" },
    { text: "Family-Friendly – One plan can cover multiple family members.", icon: FaUsers, color: "from-blue-600 to-indigo-600" },
    { text: "Preventive Care & Wellness – Regular health check-ups, lifestyle guidance, and wellness programs included.", icon: FaAppleAlt, color: "from-green-600 to-teal-600" },
    { text: "Home Healthcare Support – Diagnostics, nursing, and doctor-at-home services available.", icon: FaHome, color: "from-amber-500 to-yellow-500" },
    { text: "Nationwide Network – Access to trusted hospitals, labs, and specialists across India.", icon: FaGlobe, color: "from-cyan-500 to-blue-500" },
    { text: "Health Cashback Benefits – After purchasing the plan, receive health-focused gifts such as a BP machine or blood health check-up vouchers.", icon: FaGift, color: "from-pink-500 to-rose-500" },
  ]

  const partnerBenefits = [
    {
      icon: Search,
      iconColor: "from-[#393185] to-[#4a3fa0]",
      title: "Enhanced Visibility",
      description: "Get discovered easily by patients through Diagnoplus' digital platform, increasing your online presence without additional effort.",
    },
    {
      icon: Award,
      iconColor: "from-[#A92881] to-[#c93a9f]",
      title: "Trust & Credibility",
      description: "Association with Diagnoplus strengthens your reputation through platform-backed credibility and patient trust.",
    },
    {
      icon: TrendingUp,
      iconColor: "from-[#7AB735] to-[#8bc84a]",
      title: "Higher Patient Footfall",
      description: "Access a growing base of active patients, leading to increased bookings, repeat visits, and long-term patient relationships.",
    },
    {
      icon: Settings,
      iconColor: "from-[#393185] to-[#5a4fab]",
      title: "Operational Efficiency",
      description: "Use smart technology tools to manage appointments, patient records, and reports smoothly, saving time and resources.",
    },
    {
      icon: Megaphone,
      iconColor: "from-[#A92881] to-[#d94dbb]",
      title: "Zero-Cost Marketing Support",
      description: "Receive promotion through Diagnoplus' campaigns and platform listings—no marketing spend required to acquire new patients.",
    },
    {
      icon: DollarSign,
      iconColor: "from-[#7AB735] to-[#9cd85f]",
      title: "Your Discounts, Your Control",
      description: "Partners have full flexibility to offer exclusive discounts ranging from 10% to 30% on OPD and IPD services to attract more patients and improve conversion rates.",
    },
  ]

  const quickServices = [
    {
      icon: Stethoscope,
      title: "Talk to Doctor",
      description: "Consult with doctors",
    },
    {
      icon: Pill,
      title: "Nursing Care",
      description: "Nursing care",
    },
    {
      icon: Calendar,
      title: "Book Dr. Appointment",
      description: "Schedule appointments",
    },
    {
      icon: Beaker,
      title: "Lab Test & Packages",
      description: "Book lab tests",
    },
    {
      icon: Scissors,
      title: "Surgery",
      description: "Surgical care",
    },
    {
      icon: Award,
      title: "HealthEasy Plans",
      description: "Health plans",
    },
    {
      icon: MoreVertical,
      title: "More",
      description: "More services",
      href: "/services",
    },
  ]

  const hospitalPartners = [
    {
      name: "Fortis",
      logo: "/hospitals/fortis.png", // You'll need to add these logos
    },
    {
      name: "Apollo Clinic",
      logo: "/hospitals/apollo-clinic.png",
    },
    {
      name: "Manipal Hospitals",
      logo: "/hospitals/manipal.png",
    },
    {
      name: "Apollo Hospitals",
      logo: "/hospitals/apollo-hospitals.png",
    },
  ]

  const galleryImages = [
    "/gallery/1.jpeg",
    "/gallery/2.jpeg",
    "/gallery/3.jpeg",
    "/gallery/4.jpeg",
    "/gallery/5.jpeg",
    "/gallery/6.jpeg",
    "/gallery/7.jpeg",
    "/gallery/8.jpeg",
    "/gallery/9.jpeg",
    "/gallery/10.jpeg",
    "/gallery/11.jpeg",
    "/gallery/12.jpeg",
    "/gallery/13.jpeg",
    "/gallery/14.jpeg",
    "/gallery/15.jpeg",
    "/gallery/16.jpeg",
    "/gallery/17.jpeg",
    "/gallery/18.jpeg",
    "/gallery/19.jpeg",
    "/gallery/20.jpeg",
    "/gallery/21.jpeg",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Quick Services & Consultation Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Service Categories Row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8">
            {quickServices.map((service, idx) => {
              const IconComponent = service.icon
              const content = (
                <div className="flex flex-col items-center gap-2 cursor-pointer group hover:scale-105 transition-transform duration-200">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#393185]/10 flex items-center justify-center group-hover:bg-[#393185]/20 transition-colors">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-[#393185]" />
                  </div>
                  <span className="text-xs sm:text-sm text-center text-foreground/70 font-medium max-w-[80px] sm:max-w-none">
                    {service.title}
                  </span>
                </div>
              )
              
              return service.href ? (
                <Link key={idx} href={service.href}>
                  {content}
                </Link>
              ) : (
                <div key={idx}>
                  {content}
                </div>
              )
            })}
          </div>

          {/* Consultation Banner */}
          <div className="bg-linear-to-r from-[#393185]/10 via-[#A92881]/5 to-[#7AB735]/10 rounded-2xl p-6 sm:p-8 mb-8 border border-[#393185]/20 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#A92881] mb-2">
                  Consult with Top Doctors Online, 24x7
                </h3>
              </div>
              <a href="mailto:healthservicesdiagnoplus@gmail.com">
                <Button className="bg-[#7AB735] text-white hover:bg-[#7AB735]/90 font-semibold py-6 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                  Email Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Hospitals Section */}
          <HospitalCarousel hospitals={hospitalPartners} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about/inpatient.webp"
            alt="Healthcare background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        
        {/* Overlay - Combines blue overlay with gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-[#393185]/80 via-[#393185]/70 to-[#393185]/60"></div>
        <div className="absolute inset-0 bg-linear-to-br from-[#393185]/10 via-[#A92881]/5 to-[#7AB735]/10"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Decorative Blur Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 relative z-10">
              <div className="inline-block px-4 py-2 rounded-full font-semibold text-sm mb-4 animate-fadeInUp animate-duration-700 animate-ease-in-out relative overflow-hidden" style={{}}>
                <span className="absolute inset-0 bg-linear-to-r from-[#7AB735]/70 via-[#A92881]/80 to-[#393185]/80 blur-[2px] opacity-70 animate-gradientMove"></span>
                <span className="relative z-10 text-[#FFF7D6] drop-shadow-[0_1px_6px_rgba(41,0,66,0.23)]" style={{letterSpacing:"1px"}}>
                  <svg className="inline mr-2 -mb-1 animate-bounce" width={18} height={18} viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#7AB735"/>
                  </svg>
                  India's Trusted Healthcare Platform
                  <svg className="inline ml-2 -mb-1 animate-spin-slow" width={18} height={18} viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="#A92881" strokeWidth="2" />
                  </svg>
                </span>
              </div>
              <style jsx global>{`
                @keyframes gradientMove {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .animate-gradientMove {
                  background-size: 200% 200%;
                  animation: gradientMove 5s ease-in-out infinite;
                }
                .animate-spin-slow {
                  animation: spin 3s linear infinite;
                }
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translate3d(0, 16px, 0);
                  }
                  to {
                    opacity: 1;
                    transform: none;
                  }
                }
                .animate-fadeInUp {
                  animation: fadeInUp 0.8s both;
                }
              `}</style>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Diagnoplus Health Services
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold leading-relaxed drop-shadow-md">
                 India's Trusted All-in-One Healthcare Platform
              </p>
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed drop-shadow-md">
                Quality Healthcare | Accessible | Affordable 
              </p>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed drop-shadow-sm">
                Diagnoplus Health Services is a patient-centric healthcare platform committed to making quality medical
                services simpler, faster, and more affordable across Central India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                
                <a
                  href="https://wa.me/7004754899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#7AB735] bg-[#7AB735] text-white hover:bg-[#7AB735]/90 hover:border-[#7AB735]/90 font-semibold py-6 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Side - Partner Form Overlay */}
            <div className="relative w-full lg:sticky lg:top-24">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-[#393185]/20 p-6 lg:p-8 transform hover:scale-[1.01] transition-all duration-300">
                <div className="mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#A92881] mb-2">Partner With Us</h2>
                  <p className="text-foreground/70 text-sm lg:text-base">Join our growing network of healthcare providers</p>
                </div>
                <div className="[&_h2]:hidden">
                  <PartnerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-[#393185]/10 border border-[#393185]/20 rounded-full text-[#393185] font-semibold text-sm mb-4">
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A92881] mb-4 text-balance">About Us</h2>
            <div className="w-24 h-1 bg-linear-to-r from-[#393185] to-[#7AB735] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-[#393185]/10 space-y-6">
                <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                  Diagnoplus Health Services is a{" "}
                  <span className="font-semibold text-[#A92881]">patient-centric digital healthcare platform</span>{" "}
                  committed to making quality medical services{" "}
                  <span className="font-semibold text-[#393185]">simpler, faster, and more affordable</span> across{" "}
                  <span className="font-semibold text-[#A92881]">Central India</span>. By combining technology with a{" "}
                  <span className="font-semibold text-[#393185]">trusted healthcare network</span>, we provide{" "}
                  <span className="font-semibold text-[#A92881]">end-to-end support</span> for patients and families.
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                  Our services include{" "}
                  <span className="font-semibold text-[#393185]">
                    diagnostic laboratories, pathology tests, advanced scans, doctor consultations, OPD &amp; IPD coordination,
                    planned surgeries, ambulance services, home healthcare support, patient assistance services,
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-[#A92881]">secure digital storage of lifelong health records</span>.
                  We focus on{" "}
                  <span className="font-semibold text-[#393185]">reducing healthcare complexity and costs</span> while
                  maintaining{" "}
                  <span className="font-semibold text-[#A92881]">high standards of care</span>, ensuring{" "}
                  <span className="font-semibold text-[#393185]">reliable and timely medical support</span> for all sections
                  of society.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#393185]/20 group">
                <div className="aspect-4/5 relative">
                  <Image
                    src="/homeAbout.webp"
                    alt="Healthcare professional"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-primary/90 to-transparent">
                  <p className="text-white font-semibold text-lg">Expert Healthcare Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Flex Box Layout */}
      {/* <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185]/5 via-[#7AB735]/5 to-[#A92881]/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-[#393185]/20 border border-[#393185]/30 rounded-full text-[#393185] font-semibold text-sm mb-4">
              Our Purpose
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A92881] mb-4 text-balance">Vision & Mission</h2>
            <div className="w-24 h-1 bg-linear-to-r from-[#393185] to-[#7AB735] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-xl border border-[#393185]/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#393185]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#A92881]">Our Vision</h3>
              </div>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  In India, we have seen a painful reality—good health insurance and quality healthcare are still too
                  expensive for many people. For countless middle-class families, falling sick does not only affect health,
                  it also creates fear of heavy medical expenses. Healthcare, which should be a basic right, often turns into
                  a financial struggle.
                </p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  This reality gave birth to Diagnoplus Health Services. Our vision is clear and heartfelt—to make healthcare
                  easy, affordable, and accessible for every middle-class Indian family. We want people to focus on recovery
                  and well-being, not on bills and stress.
                </p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  We believe no family should compromise their future because of medical costs. Through simple processes,
                  trusted services, and fair pricing, Diagnoplus Health Services aims to protect both health and peace of
                  mind—today and for years to come.
                </p>
              </div>
            </div>

           
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-xl border border-secondary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#A92881]">Our Mission</h3>
              </div>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  Our mission is to make healthcare simple, affordable, and stress-free for Every families. We want to stand
                  with patients and their loved ones during difficult times, guiding them at every step—from diagnosis to
                  treatment and recovery.
                </p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  By bringing trusted doctors, hospitals, diagnostics, and support services onto one platform, we help families
                  save time, money, and worry. At Diagnoplus Health Services, our goal is to ensure that no one feels alone or
                  helpless when it comes to their health, and that quality care is always within reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Service Categories Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185]/5 via-white to-[#7AB735]/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A92881]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#393185]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-[#393185]/10 border border-[#393185]/20 rounded-full text-[#393185] font-semibold text-sm mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A92881] mb-4 text-balance">
            Complete Healthcare Under One Roof
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 mb-4 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to meet all your medical needs
            </p>
            <div className="w-24 h-1 bg-linear-to-r from-[#393185] to-[#7AB735] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {serviceCategories.map((category, idx) => (
              <Link
                key={idx}
                href="/services"
                className="group flex flex-col items-center justify-center p-4 sm:p-6 transition-colors duration-300 cursor-pointer"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-3">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                <h3 className="text-xs sm:text-sm font-semibold text-[#393185] text-center leading-tight group-hover:text-[#7AB735] transition-colors duration-300">
                  {category.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-[#7AB735] hover:bg-[#7AB735]/90 text-white font-semibold py-6 px-8 lg:px-12 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Diagnoplus HealthEasy Plans Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185]/5 via-white to-[#7AB735]/5 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A92881]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#393185]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7AB735]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-[#393185]/10 border border-[#393185]/20 rounded-full text-[#393185] font-semibold text-sm mb-4">
              Our Health Plans
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A92881] mb-4 text-balance">
              Diagnoplus HealthEasy Plans
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed for your family's well-being
            </p>
            <div className="w-24 h-1 bg-linear-to-r from-[#393185] to-[#7AB735] mx-auto rounded-full"></div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-[#393185]/10 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#393185] mb-2">10+</div>
              <div className="text-sm sm:text-base text-foreground/70 font-medium">Years of Excellence</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-[#393185]/10 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7AB735] mb-2">5,000+</div>
              <div className="text-sm sm:text-base text-foreground/70 font-medium">Health Camps</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-[#393185]/10 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A92881] mb-2">50+</div>
              <div className="text-sm sm:text-base text-foreground/70 font-medium">Awards & Recognition</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-[#393185]/10 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#393185] mb-2">Lakhs</div>
              <div className="text-sm sm:text-base text-foreground/70 font-medium">Lives Impacted</div>
            </div>
          </div>
          
          {/* Description Card */}
          <div className="max-w-5xl mx-auto mb-12 lg:mb-16">
            <div className="bg-linear-to-br from-white to-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-[#393185]/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#393185]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7AB735]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10 space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                  With over <span className="font-bold text-[#393185]">10+ years of diagnostic excellence</span>, <span className="font-bold text-[#7AB735]">5,000+ health camps</span> conducted, <span className="font-bold text-[#A92881]">lakhs of lives</span> positively
                  impacted, and <span className="font-bold text-[#393185]">50+ healthcare awards</span>, Diagnoplus has built lasting trust through clinical
                accuracy, ethical practices, and patient-first care.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                  Built on this proven legacy, the <span className="font-bold text-[#393185]">Diagnoplus HealthEasy Plans</span> has been thoughtfully designed to make
                healthcare more accessible, affordable, and stress-free for families. The plan brings together diagnostics,
                doctor consultations, hospital coordination, and wellness support under one trusted platform.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                  This health plan reflects our long-standing commitment to reliable care, transparent practices, and
                long-term patient well-being—ensuring continuous support and peace of mind for every member.
              </p>
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="max-w-6xl mx-auto mb-12 lg:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#A92881] mb-8 lg:mb-12 text-center">
              Our Key Highlights & USPs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {healthEasyHighlights.map((highlight, idx) => {
                const IconComponent = highlight.icon
                return (
                  <div 
                    key={idx} 
                    className="group relative bg-white/95 backdrop-blur-sm p-6 lg:p-7 rounded-2xl border-2 border-[#393185]/10 hover:border-[#7AB735] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#7AB735]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#7AB735]/10 transition-all duration-300"></div>
                    <div className="relative flex items-start gap-4">
                        <div className={`shrink-0 w-12 h-12 rounded-xl bg-linear-to-br ${highlight.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                        <IconComponent 
                          className="w-6 h-6 text-white opacity-70 group-hover:opacity-100 transition-all duration-300 relative z-10" 
                          style={{ 
                            fill: 'rgba(255, 255, 255, 0.4)',
                          }} 
                        />
                        <IconComponent 
                          className="w-6 h-6 text-white absolute opacity-0 group-hover:opacity-100 transition-all duration-300 z-20" 
                          style={{ 
                            fill: 'white'
                          }} 
                        />
                      </div>
                      <span className="text-foreground/80 text-sm lg:text-base leading-relaxed font-medium pt-1 flex-1">{highlight.text}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-linear-to-br from-[#393185] via-[#4a3fa0] to-[#7AB735] text-white p-8 lg:p-12 xl:p-16 rounded-3xl text-center shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                  Proven Results
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">
                  Average Savings of ₹60,000 - ₹80,000
                </h3>
              <p className="text-base sm:text-lg lg:text-xl opacity-95 mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                  Per family annually, while also ensuring peace of mind, reduced administrative burden, and significant time savings through a streamlined, patient-centric healthcare experience.
              </p>
                <Button className="bg-white text-[#393185] hover:bg-white/90 font-bold py-6 px-8 lg:px-12 text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Learn More About HealthEasy Plans
              </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with Diagnoplus Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185]/10 via-[#7AB735]/5 to-[#A92881]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-[#393185]/20 border border-[#393185]/30 rounded-full text-[#393185] font-semibold text-sm mb-4">
              Partnership Opportunities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A92881] mb-4 lg:mb-6 text-balance">
              Why Partner with Diagnoplus Health Services
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#7AB735] mb-2">More Visibility. More Patients. Zero Marketing Cost.</p>
            <p className="text-lg sm:text-xl text-foreground/80 mb-4">Your Expertise, Our Platform—Growing Together</p>
            <div className="w-24 h-1 bg-linear-to-r from-[#393185] to-[#7AB735] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {partnerBenefits.map((benefit, idx) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={idx}
                  className="group bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-[#393185]/10 hover:border-[#393185]/40 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-linear-to-br ${benefit.iconColor} text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-[#A92881] mb-4">{benefit.title}</h3>
                  <p className="text-foreground/75 text-sm lg:text-base leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-linear-to-br from-[#393185] via-[#393185] to-[#7AB735] text-white p-8 lg:p-12 rounded-2xl text-center shadow-2xl border border-[#393185]/20 transform hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">A Strong Patient Base from Day One</h3>
            <p className="text-base sm:text-lg lg:text-xl opacity-95 mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
              Diagnoplus brings over 1 million active patients across Chhattisgarh, Madhya Pradesh, and the entire
              Vidarbha region. Our partners benefit from immediate access to a trusted, established, and continuously
              growing patient network—ensuring faster growth and sustained demand.
            </p>
            <Link href="#partner-form">
              <Button className="bg-white text-[#393185] hover:bg-white/90 font-semibold py-6 px-8 lg:px-12 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Become a Partner Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section - Reels Style */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185]/5 via-white to-[#7AB735]/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A92881]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#393185]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-[#393185]/10 border border-[#393185]/20 rounded-full text-[#393185] font-semibold text-sm mb-4">
              Video Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A92881] mb-4 text-balance">
              What Our Patients Say
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              Real stories from real people - Watch how Diagnoplus is transforming healthcare
            </p>
            <div className="w-24 h-1 bg-linear-to-r from-[#393185] to-[#7AB735] mx-auto rounded-full"></div>
          </div>
          <VideoTestimonials />
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <div className="inline-block px-4 py-2 bg-[#393185]/5 border border-[#393185]/15 rounded-full text-[#393185] font-semibold text-xs sm:text-sm mb-3">
              Media Coverage
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#A92881]">
              Featured & Trusted By Leading Platforms
            </h3>
          </div>

          <div className="rounded-2xl border border-border/60 bg-linear-to-r from-white via-[#f9fafb] to-white shadow-sm px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10 lg:gap-x-12">
              {[
                { name: "Dailyhunt", src: "/media/dailyhunt.png" },
                { name: "Google News", src: "/media/googlenews.png" },
                { name: "Featuring Daily", src: "/media/featuringdaily.png" },
                { name: "The Indian Publisher", src: "/media/indianpublisher.webp" },
                { name: "Business Up2Date", src: "/media/businessup2date.webp" },
                { name: "Nation Times", src: "/media/nationtimes.webp" },
                { name: "Fox Story India", src: "/media/foxstory.webp" },
              ].map((logo, idx, arr) => (
                <div
                  key={logo.name}
                  className={`flex items-center justify-center px-3 sm:px-4 ${
                    idx !== 0 ? "sm:border-l sm:border-border/60" : ""
                  }`}
                >
                  <div className="relative h-16 sm:h-20 lg:h-24 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={240}
                      height={96}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#393185]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7AB735]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-[#393185]/10 border border-[#393185]/20 rounded-full text-[#393185] font-semibold text-sm mb-4">
              Our Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A92881] mb-4 text-balance">
              Moments & Memories
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              Explore our healthcare journey through images
            </p>
            <div className="w-24 h-1 bg-linear-to-r from-[#393185] to-[#7AB735] mx-auto rounded-full"></div>
          </div>
          <Gallery images={galleryImages} showAll={false} />
          <div className="text-center mt-12">
            <Link href="/about#gallery">
              <Button className="bg-[#7AB735] hover:bg-[#7AB735]/90 text-white font-semibold py-6 px-8 lg:px-12 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-[#393185]/10 border border-[#393185]/20 rounded-full text-[#393185] font-semibold text-sm mb-4">
              Get Started
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A92881] mb-4 text-balance">Partner Registration</h2>
            <div className="w-24 h-1 bg-linear-to-r from-[#393185] to-[#7AB735] mx-auto rounded-full"></div>
          </div>
          <PartnerForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
