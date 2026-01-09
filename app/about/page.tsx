"use client"

import React, { useRef, useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PartnerForm from "@/components/partner-form"
import { Button } from "@/components/ui/button"
import { Stethoscope, Building2, TestTube, Users, Heart, Activity, Award, TrendingUp, CheckCircle2, MapPin, Calendar, Phone, Briefcase, ArrowRight, Plus, Pill, Syringe, BriefcaseMedical, Droplet, Bandage, ChevronLeft, ChevronRight, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

function ScrollableContainer({
  children,
  onScrollRef,
  onActiveIndexChange
}: {
  children: React.ReactNode
  onScrollRef?: (scrollLeft: () => void, scrollRight: () => void, scrollToIndex: (index: number) => void) => void
  onActiveIndexChange?: (index: number) => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const totalCards = Array.isArray(children) ? children.length : React.Children.count(children)

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return
    const cards = scrollRef.current.querySelectorAll('div[data-card-index]')
    const targetCard = cards[index] as HTMLElement
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  const scrollLeftFn = () => {
    if (!scrollRef.current) return
    const newIndex = Math.max(0, activeIndex - 1)
    scrollToIndex(newIndex)
  }

  const scrollRightFn = () => {
    if (!scrollRef.current) return
    const newIndex = Math.min(totalCards - 1, activeIndex + 1)
    scrollToIndex(newIndex)
  }

  useEffect(() => {
    if (onScrollRef) {
      onScrollRef(scrollLeftFn, scrollRightFn, scrollToIndex)
    }
  }, [activeIndex, totalCards, onScrollRef])

  useEffect(() => {
    if (onActiveIndexChange) {
      onActiveIndexChange(activeIndex)
    }
  }, [activeIndex, onActiveIndexChange])

  const handleScroll = () => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cards = container.querySelectorAll('div[data-card-index]')

    let closestIndex = 0
    let closestDistance = Infinity

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const distance = Math.abs(rect.left - containerRect.left)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    // Only start dragging on left mouse button
    if (e.button !== 0) return

    setIsDragging(true)
    const rect = scrollRef.current.getBoundingClientRect()
    setStartX(e.clientX - rect.left)
    setScrollLeft(scrollRef.current.scrollLeft)
    scrollRef.current.style.cursor = 'grabbing'
    scrollRef.current.style.userSelect = 'none'
    e.preventDefault()
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab'
      scrollRef.current.style.userSelect = 'auto'
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab'
      scrollRef.current.style.userSelect = 'auto'
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const rect = scrollRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const walk = (x - startX) * 2 // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <div
      ref={scrollRef}
      className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory cursor-grab select-none"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onScroll={handleScroll}
      style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            'data-card-index': index
          })
        }
        return child
      })}
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

function Gallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {images.map((image, idx) => (
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

function VisionMissionCarousel() {
  const scrollFunctionsRef = useRef<{
    scrollLeft: () => void
    scrollRight: () => void
    scrollToIndex: (index: number) => void
  } | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const totalCards = 2 // Vision and Mission

  return (
    <>
      <div className="relative">
        <ScrollableContainer
          onScrollRef={(scrollLeft, scrollRight, scrollToIndex) => {
            scrollFunctionsRef.current = { scrollLeft, scrollRight, scrollToIndex }
          }}
          onActiveIndexChange={(index) => setActiveIndex(index)}
        >
          {/* Vision Card */}
          <div className="shrink-0 w-full min-w-[90vw] sm:min-w-[500px] md:min-w-[600px] lg:min-w-[700px] group relative h-[800px] sm:h-[700px] md:h-[700px] rounded-2xl overflow-hidden snap-center pointer-events-auto">
            <div className="absolute inset-0">
              <Image
                src="/about/Vision.png"
                alt="Our Vision"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/70 md:bg-black/0 md:group-hover:bg-black/70 transition-all duration-500"></div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-start md:justify-center p-6 sm:p-8 md:p-12 text-white z-10 overflow-y-auto">
              <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 space-y-5 pt-4 md:pt-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#A92881] mb-3 sm:mb-4">Our Vision</h2>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-6">
                  To make quality healthcare accessible to every Indian.
                </p>
                <p className="text-lg sm:text-base md:text-lg text-white/90 leading-relaxed mb-3 sm:mb-4">
                  In India, we have seen a painful reality—good health insurance and quality healthcare are still too
                  expensive for many people. For countless middle-class families, falling sick does not only affect health,
                  it also creates fear of heavy medical expenses. Healthcare, which should be a basic right, often turns into
                  a financial struggle.
                </p>
                <p className="text-lg sm:text-base md:text-lg text-white/90 leading-relaxed pb-4 md:pb-0">
                  This reality gave birth to Diagnoplus Health Services. Our vision is clear and heartfelt—to make healthcare
                  easy, affordable, and accessible for every middle-class Indian family. We want people to focus on recovery
                  and well-being, not on bills and stress.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="shrink-0 w-full min-w-[90vw] sm:min-w-[500px] md:min-w-[600px] lg:min-w-[700px] group relative h-[800px] sm:h-[700px] md:h-[700px] rounded-2xl overflow-hidden snap-center pointer-events-auto">
            <div className="absolute inset-0">
              <Image
                src="/about/missionn.webp"
                alt="Our Mission"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/70 md:bg-black/0 md:group-hover:bg-black/70 transition-all duration-500"></div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-start md:justify-center p-6 sm:p-8 md:p-12 text-white z-10 overflow-y-auto">
              <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 space-y-5 pt-4 md:pt-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#A92881] mb-3 sm:mb-4">Our Mission</h2>
                <p className="text-lg sm:text-base md:text-lg text-white/90 leading-relaxed mb-3 sm:mb-4">
                  Our mission is to make healthcare simple, affordable, and stress-free for every family. We want to stand
                  with patients and their loved ones during difficult times, guiding them at every step—from diagnosis to
                  treatment and recovery.
                </p>
                <p className="text-lg sm:text-base md:text-lg text-white/90 leading-relaxed pb-4 md:pb-0">
                  By bringing trusted doctors, hospitals, diagnostics, and support services onto one platform, we help families
                  save time, money, and worry. At Diagnoplus Health Services, our goal is to ensure that no one feels alone or
                  helpless when it comes to their health, and that quality care is always within reach.
                </p>
              </div>
            </div>
          </div>
        </ScrollableContainer>

        {/* Navigation Buttons - Positioned on sides (Desktop & Tablet) */}
        <button
          onClick={() => scrollFunctionsRef.current?.scrollLeft()}
          disabled={activeIndex === 0}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-[#393185] hover:bg-[#393185]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scrollFunctionsRef.current?.scrollRight()}
          disabled={activeIndex === totalCards - 1}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-[#393185] hover:bg-[#393185]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Controls for Mobile */}
        <div className="mt-6 flex flex-col items-center gap-3 md:hidden">
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollFunctionsRef.current?.scrollLeft()}
              disabled={activeIndex === 0}
              className="px-4 py-2 rounded-full border border-[#393185]/40 text-xs font-semibold text-[#393185] bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Prev
            </button>
            <button
              onClick={() => scrollFunctionsRef.current?.scrollRight()}
              disabled={activeIndex === totalCards - 1}
              className="px-4 py-2 rounded-full bg-[#393185] text-white text-xs font-semibold shadow-md disabled:bg-[#393185]/60 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2">
            {Array.from({ length: totalCards }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollFunctionsRef.current?.scrollToIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                    ? 'bg-[#7AB735] w-6'
                    : 'bg-[#393185]/30 hover:bg-[#393185]/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Dots Indicator (Desktop & Tablet) */}
        <div className="hidden md:flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: totalCards }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollFunctionsRef.current?.scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index
                  ? 'bg-[#7AB735] w-8'
                  : 'bg-[#393185]/30 hover:bg-[#393185]/50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default function AboutPage() {
  const poweredStats = [
    { icon: Activity, title: "Health Camps", value: 4000 },
    { icon: Users, title: "Doctor Healthpreneurs", value: 500 },
    { icon: MapPin, title: "Pickup Point Centers", value: 150 },
    { icon: Heart, title: "Support Teams", value: 100 },
  ]

  const [poweredCounts, setPoweredCounts] = useState<number[]>(poweredStats.map(() => 0))
  const [poweredStarted, setPoweredStarted] = useState(false)
  const poweredRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !poweredStarted) {
            setPoweredStarted(true)
            poweredStats.forEach((stat, idx) => {
              const duration = 1500
              const steps = 60
              const increment = stat.value / steps
              let current = 0
              const timer = setInterval(() => {
                current += increment
                if (current >= stat.value) {
                  current = stat.value
                  clearInterval(timer)
                }
                setPoweredCounts((prev) => {
                  const next = [...prev]
                  next[idx] = Math.floor(current)
                  return next
                })
              }, duration / steps)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (poweredRef.current) {
      observer.observe(poweredRef.current)
    }

    return () => {
      if (poweredRef.current) {
        observer.unobserve(poweredRef.current)
      }
    }
  }, [poweredStarted])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner Section - Cloned Design */}
      {/* Hero Banner Section - Cloned Design */}
      <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/about/dgp3.webp)",
            backgroundPosition: "right center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-[600px] md:min-h-[700px] px-4 sm:px-6 lg:px-8 md:px-16">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex items-center">
              {/* Left Side - Gradient Text Box (Stretchable) */}
              <div className="flex-1 max-w-2xl lg:max-w-3xl relative z-20">
                <div className="bg-linear-to-r from-blue-500 via-purple-500 to-red-500 rounded-3xl p-8 md:p-10 lg:p-12 xl:p-16 shadow-2xl text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
                    India's Largest Digital Healthcare Platform
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl opacity-95 leading-relaxed">
                    Giving customers 24x7 access to high-quality healthcare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* We Are Diagnoplus Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#393185]/5 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#7AB735]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#A92881]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Title - Left Side */}
            <div className="flex-1 text-center lg:text-right order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-[#A92881]">WE ARE</span>
                <br />
                <span className="text-[#393185]">DIAGNOPLUS</span>
              </h2>
              <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-[#393185] to-[#7AB735] rounded-full mx-auto lg:ml-auto lg:mr-0"></div>
            </div>

            {/* Floating Mobile Phone - Center */}
            <div className="relative order-1 lg:order-2">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                {/* Glow Effect Behind Phone */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-[#393185]/30 to-[#7AB735]/30 rounded-full blur-3xl"></div>
                </div>
                <div
                  className="relative w-52 h-[380px] md:w-64 md:h-[480px] lg:w-72 lg:h-[540px]"
                  style={{
                    animation: 'float 3s ease-in-out infinite'
                  }}
                >
                  <Image
                    src="/about/mobile.png"
                    alt="Diagnoplus Mobile App"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Subtitle - Right Side */}
            <div className="flex-1 text-center lg:text-left order-3">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                <span className="text-[#393185]">AN END-TO-END</span>
                <br />
                <span className="text-[#A92881]">DIGITAL HEALTHCARE</span>
                <br />
                <span className="text-[#7AB735]">PLATFORM</span>
              </h3>
              <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-[#7AB735] to-[#A92881] rounded-full mx-auto lg:mr-auto lg:ml-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* We Put The Care In Healthcare Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185]/5 via-white to-[#7AB735]/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#A92881] mb-16">
            WE PUT THE CARE IN HEALTHCARE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {[
              { image: "/about/online.webp", title: "Online Consultation" },
              { image: "/about/offline.webp", title: "Offline Consultation" },
              { image: "/about/inpatients.webp", title: "In-patient Services" },
              { image: "/about/homecare.webp", title: "Homecare" },
              { image: "/about/labtest.webp", title: "Lab Tests" },
              { image: "/about/surgery.webp", title: "Surgery Care" },
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-4 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#A92881] leading-tight">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#A92881] mb-12 text-balance">About Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about/dgp1.webp"
                  alt="Diagnoplus Healthcare Services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                Diagnoplus Health Services is a{" "}
                <span className="font-semibold text-[#A92881]">patient-centric digital healthcare platform</span>{" "}
                committed to making quality medical services{" "}
                <span className="font-semibold text-[#393185]">simpler, faster, and more affordable</span> across{" "}
                <span className="font-semibold text-[#A92881]">Central India</span>. By combining technology with a{" "}
                <span className="font-semibold text-[#393185]">trusted healthcare network</span>, we provide{" "}
                <span className="font-semibold text-[#A92881]">end-to-end support</span> for patients and families.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Our comprehensive services include{" "}
                <span className="font-semibold text-[#393185]">
                  diagnostic laboratories, pathology tests, advanced scans, doctor consultations, OPD &amp; IPD coordination,
                  planned surgeries, ambulance services, home healthcare support, patient assistance services,
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#A92881]">secure digital storage of lifelong health records</span>.
                We focus on{" "}
                <span className="font-semibold text-[#393185]">reducing healthcare complexity and costs</span> while maintaining{" "}
                <span className="font-semibold text-[#A92881]">high standards of care</span>, ensuring{" "}
                <span className="font-semibold text-[#393185]">reliable and timely medical support</span> for all sections of society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipped With A Plan And A Purpose - Vision Section */}
      {/* Vision & Mission Section with Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#393185]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7AB735]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <VisionMissionCarousel />
        </div>
      </section>

      {/* Powered By Partnerships Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#A92881] mb-16">
            POWERED BY PARTNERSHIPS
          </h2>
          <div ref={poweredRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {poweredStats.map((stat, idx) => {
              const IconComponent = stat.icon
              const value = poweredStarted ? poweredCounts[idx] : 0
              const display = value > 0 ? `${value.toLocaleString()}+` : "0+"
              return (
                <div key={idx} className="text-center p-6 bg-linear-to-br from-[#393185]/5 to-[#7AB735]/5 rounded-2xl border border-[#393185]/10 hover:border-[#7AB735] transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-[#393185] to-[#7AB735] rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#A92881] mb-2">{display}</div>
                  <h3 className="text-lg font-semibold text-[#393185] mb-2">{stat.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Making An Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185]/10 via-[#7AB735]/5 to-[#A92881]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#A92881] mb-16">
            MAKING AN IMPACT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Lives Served", count: "70,00,000+", },
              { icon: TestTube, title: "Lab Tests", count: "30,00,000+", },
              { icon: Activity, title: "Other Health Services Delivered", count: "2,00,000+", },
              { icon: Heart, title: "Monthly Reach", count: "10,00,000+", },
            ].map((impact, idx) => {
              const IconComponent = impact.icon
              return (
                <div key={idx} className="text-center p-8 bg-white rounded-2xl border-2 border-[#393185]/20 hover:border-[#7AB735] transition-all duration-300 shadow-md hover:shadow-xl">
                  <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-[#A92881] to-[#393185] rounded-full flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#A92881] mb-3">{impact.count}</div>
                  <h3 className="text-xl font-semibold text-[#393185] mb-2">{impact.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#A92881] mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Trust",
                icon: "🤝",
                desc: "Building lasting relationships through transparency and reliability",
              },
              { title: "Excellence", icon: "⭐", desc: "Delivering highest quality diagnostics and services" },
              { title: "Accessibility", icon: "🚀", desc: "Making quality healthcare affordable for everyone" },
              { title: "Innovation", icon: "💡", desc: "Continuously improving our services and technology" },
            ].map((value, idx) => (
              <div key={idx} className="text-center p-8 bg-linear-to-br from-[#393185]/5 to-[#7AB735]/5 rounded-xl border border-[#393185]/10 hover:border-[#7AB735] transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#393185] mb-3">{value.title}</h3>
                <p className="text-black">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#A92881] mb-16">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-linear-to-br from-[#393185]/5 to-[#7AB735]/5 rounded-xl border border-[#393185]/10 hover:border-[#7AB735] transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#393185] mb-3">Diagnostic Excellence</h3>
              <p className="text-black">
                State-of-the-art laboratory facilities with certified professionals ensuring accurate and reliable test
                results.
              </p>
            </div>
            <div className="text-center p-8 bg-linear-to-br from-[#393185]/5 to-[#7AB735]/5 rounded-xl border border-[#393185]/10 hover:border-[#7AB735] transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#393185] mb-3">Preventive Healthcare</h3>
              <p className="text-black">
                Comprehensive health packages designed for early disease detection and prevention, promoting wellness.
              </p>
            </div>
            <div className="text-center p-8 bg-linear-to-br from-[#393185]/5 to-[#7AB735]/5 rounded-xl border border-[#393185]/10 hover:border-[#7AB735] transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#393185] mb-3">Partner Success</h3>
              <p className="text-black">
                Dedicated support and resources to ensure our partners thrive and grow their healthcare business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Compliance with Awards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185] via-[#393185]/90 to-[#7AB735] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Committed to Quality & Compliance</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Diagnoplus Health Services adheres to the highest quality standards and regulatory compliance requirements,
              ensuring patient safety and data security at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "50+ Healthcare Awards", desc: "Recognized for excellence in healthcare services" },
              { title: "4,000+ Health Camps", desc: "Conducted across Central India" },
              { title: "10+ Years Experience", desc: "Trusted diagnostic excellence" },
            ].map((award, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-sm opacity-90">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#A92881] mb-4 text-balance">
            Interested in Partnering with Diagnoplus Health Services?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">Join our network and be part of the healthcare revolution</p>
          <Link href="#partner-form">
            <Button className="bg-[#7AB735] hover:bg-[#7AB735]/90 text-white font-semibold py-3 px-8 text-lg">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Partner Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <PartnerForm />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#393185]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7AB735]/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-[#393185]/10 border border-[#393185]/20 rounded-full text-[#393185] font-semibold text-sm mb-4">
              Our Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A92881] mb-4 text-balance">
              Complete Gallery
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
              Explore all our healthcare moments and services
            </p>
            <div className="w-24 h-1 bg-linear-to-r from-[#393185] to-[#7AB735] mx-auto rounded-full"></div>
          </div>
          <Gallery images={[
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
          ]} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
