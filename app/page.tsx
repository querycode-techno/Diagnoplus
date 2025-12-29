import Navbar from "@/components/navbar"
import PartnerForm from "@/components/partner-form"
import { Button } from "@/components/ui/button"
import { MessageCircle, CheckCircle2, Search, Award, TrendingUp, Settings, Megaphone, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const serviceCategories = [
    {
      icon: "/icons/diagnostics.png",
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
    "No Age Limit – Anyone can enroll, regardless of age.",
    "Pre-Existing Conditions Covered – Patients with prior illnesses are welcome, with no exclusions.",
    "No Coverage Limit – Unlike traditional insurance, there's no maximum claim limit.",
    "Guaranteed Savings – Reduce healthcare expenses with a cost-effective plan.",
    "Unlimited Usage – Avail services any number of times without restriction.",
    "Instant Activation – Get your health plan active immediately.",
    "All-Inclusive Coverage – OPD, IPD, surgeries, dental, ophthalmology, cosmetology, and more—all included.",
    "Patient History Storage – Secure, lifelong digital storage of health records for easy access anytime.",
    "Surgery on EMI – Planned surgeries can be availed with flexible EMI options.",
    "Access to Experienced Specialists – Easily consult expert doctors and super-specialists across all medical fields.",
    "Family-Friendly – One plan can cover multiple family members.",
    "Preventive Care & Wellness – Regular health check-ups, lifestyle guidance, and wellness programs included.",
    "Home Healthcare Support – Diagnostics, nursing, and doctor-at-home services available.",
    "Nationwide Network – Access to trusted hospitals, labs, and specialists across India.",
    "Health Cashback Benefits – After purchasing the plan, receive health-focused gifts such as a BP machine or blood health check-up vouchers.",
  ]

  const partnerBenefits = [
    {
      icon: Search,
      iconColor: "from-blue-500 to-cyan-500",
      title: "Enhanced Visibility",
      description: "Get discovered easily by patients through Diagnoplus' digital platform, increasing your online presence without additional effort.",
    },
    {
      icon: Award,
      iconColor: "from-amber-500 to-yellow-500",
      title: "Trust & Credibility",
      description: "Association with Diagnoplus strengthens your reputation through platform-backed credibility and patient trust.",
    },
    {
      icon: TrendingUp,
      iconColor: "from-green-500 to-emerald-500",
      title: "Higher Patient Footfall",
      description: "Access a growing base of active patients, leading to increased bookings, repeat visits, and long-term patient relationships.",
    },
    {
      icon: Settings,
      iconColor: "from-purple-500 to-indigo-500",
      title: "Operational Efficiency",
      description: "Use smart technology tools to manage appointments, patient records, and reports smoothly, saving time and resources.",
    },
    {
      icon: Megaphone,
      iconColor: "from-pink-500 to-rose-500",
      title: "Zero-Cost Marketing Support",
      description: "Receive promotion through Diagnoplus' campaigns and platform listings—no marketing spend required to acquire new patients.",
    },
    {
      icon: DollarSign,
      iconColor: "from-teal-500 to-cyan-500",
      title: "Your Discounts, Your Control",
      description: "Partners have full flexibility to offer exclusive discounts ranging from 10% to 30% on OPD and IPD services to attract more patients and improve conversion rates.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/male-doctor-in-medical-coat-with-clipboard.jpg"
            alt="Healthcare background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        
        {/* Overlay - Combines blue overlay with gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/80 via-primary/70 to-primary/60"></div>
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 to-secondary/10"></div>
        
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
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold text-sm mb-4">
                Central India's Trusted Healthcare Platform
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Diagnoplus Health Services
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold leading-relaxed drop-shadow-md">
                Central India's Trusted All-in-One Healthcare Platform
              </p>
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed drop-shadow-md">
                Quality Healthcare | Accessible | Affordable | Reliable Every Time
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
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary bg-primary text-white hover:bg-primary/90 hover:text-white font-semibold py-6 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Side - Partner Form Overlay */}
            <div className="relative w-full lg:sticky lg:top-24">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-primary/20 p-6 lg:p-8 transform hover:scale-[1.01] transition-all duration-300">
                <div className="mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-2">Partner With Us</h2>
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
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-4">
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">About Us</h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-primary/10 space-y-6">
                <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                  Diagnoplus Health Services is a patient-centric healthcare platform committed to making quality medical
                  services simpler, faster, and more affordable across Central India. By combining technology with a trusted
                  healthcare network, we provide end-to-end support for patients and families.
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                  Our services include diagnostic laboratories, pathology tests, advanced scans, doctor consultations, OPD
                  and IPD coordination, planned surgeries, ambulance services, home healthcare support, patient assistance
                  services, and secure digital storage of lifelong health records. We focus on reducing healthcare complexity
                  and costs while maintaining high standards of care, ensuring reliable and timely medical support for all
                  sections of society.
                </p>
              </div>
            </div>
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20 group">
                <div className="aspect-4/5 relative">
                  <Image
                    src="/professional-female-doctor-in-white-coat-stethosco.jpg"
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
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary font-semibold text-sm mb-4">
              Our Purpose
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">Vision & Mission</h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision Box */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-xl border border-primary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary">Our Vision</h3>
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

            {/* Mission Box */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-xl border border-secondary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-secondary">Our Mission</h3>
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
      </section>

      {/* Service Categories Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
              Service Categories
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 mb-4 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to meet all your medical needs
            </p>
            <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceCategories.map((category, idx) => (
              <div
                key={idx}
                className="group bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative w-24 h-24 lg:w-32 lg:h-32 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-primary">{category.title}</h3>
                </div>
                <ul className="space-y-3 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[1000px] transition-all duration-500 ease-in-out">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-foreground/75 text-sm lg:text-base">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 px-8 lg:px-12 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Diagnoplus HealthEasy Plans Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-4">
              Our Health Plans
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
              Diagnoplus HealthEasy Plans
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg border border-primary/10 space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                With over 10+ years of diagnostic excellence, 5,000+ health camps conducted, lakhs of lives positively
                impacted, and 50+ healthcare awards and recognitions, Diagnoplus has built lasting trust through clinical
                accuracy, ethical practices, and patient-first care.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                Built on this proven legacy, the Diagnoplus HealthEasy Plans has been thoughtfully designed to make
                healthcare more accessible, affordable, and stress-free for families. The plan brings together diagnostics,
                doctor consultations, hospital coordination, and wellness support under one trusted platform.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                This health plans reflects our long-standing commitment to reliable care, transparent practices, and
                long-term patient well-being—ensuring continuous support and peace of mind for every member.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-8 lg:mb-12 text-center">Our Key Highlights & USPs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-12 lg:mb-16">
              {healthEasyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/90 backdrop-blur-sm p-5 lg:p-6 rounded-xl border border-primary/10 hover:border-primary/30 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground/75 text-sm lg:text-base leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="bg-linear-to-br from-primary via-primary to-secondary text-white p-8 lg:p-12 rounded-2xl text-center shadow-2xl border border-primary/20 transform hover:scale-[1.01] transition-all duration-300">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Proven Patient Value</h3>
              <p className="text-base sm:text-lg lg:text-xl opacity-95 mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                Delivers average savings of ₹80,000 to ₹1,00,000 per patient annually, while also ensuring peace of
                mind, reduced administrative burden, and significant time savings through a streamlined, patient-centric
                healthcare experience.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold py-6 px-8 lg:px-12 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More About HealthEasy Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with Diagnoplus Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/10 via-secondary/5 to-primary/10 relative overflow-hidden">
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
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary font-semibold text-sm mb-4">
              Partnership Opportunities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 lg:mb-6 text-balance">
              Why Partner with Diagnoplus Health Services
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary mb-2">More Visibility. More Patients. Zero Marketing Cost.</p>
            <p className="text-lg sm:text-xl text-foreground/80 mb-4">Your Expertise, Our Platform—Growing Together</p>
            <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {partnerBenefits.map((benefit, idx) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={idx}
                  className="group bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-linear-to-br ${benefit.iconColor} text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                  <p className="text-foreground/75 text-sm lg:text-base leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-linear-to-br from-primary via-primary to-secondary text-white p-8 lg:p-12 rounded-2xl text-center shadow-2xl border border-primary/20 transform hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">A Strong Patient Base from Day One</h3>
            <p className="text-base sm:text-lg lg:text-xl opacity-95 mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
              Diagnoplus brings over 1 million active patients across Chhattisgarh, Madhya Pradesh, and the entire
              Vidarbha region. Our partners benefit from immediate access to a trusted, established, and continuously
              growing patient network—ensuring faster growth and sustained demand.
            </p>
            <Link href="#partner-form">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold py-6 px-8 lg:px-12 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Become a Partner Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-4">
              Get Started
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">Partner Registration</h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <PartnerForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-br from-foreground via-foreground/95 to-foreground text-foreground-foreground py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
            <div>
              <h3 className="font-bold text-xl lg:text-2xl mb-4 lg:mb-6 text-white">Diagnoplus Health Services</h3>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed">Central India's Trusted All-in-One Healthcare Platform</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 lg:mb-6 text-white text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 lg:mb-6 text-white text-lg">Partnership</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/benefits" className="hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Benefits
                  </Link>
                </li>
                <li>
                  <a href="#partner-form" className="hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Apply Now
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors duration-200 text-sm lg:text-base">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 lg:mb-6 text-white text-lg">Contact</h4>
              <p className="text-gray-300 mb-3 text-sm lg:text-base">Email: hello@diagoplus.com</p>
              <p className="text-gray-300 text-sm lg:text-base">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-700/50 pt-8 text-center text-gray-300 text-sm lg:text-base">
            <p>&copy; 2025 Diagnoplus Health Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
