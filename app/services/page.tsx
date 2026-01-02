import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PartnerForm from "@/components/partner-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
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

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185]/5 via-[#7AB735]/5 to-[#A92881]/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#A92881] mb-6 text-balance">Our Services</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Comprehensive healthcare services designed to meet all your medical needs across Central India
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#A92881] mb-4 text-balance">
            Service Categories
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            We offer a comprehensive range of healthcare services designed to meet the needs of individuals and families
            across the spectrum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-muted/20 p-6 rounded-xl border border-border hover:border-[#393185]/30 transition shadow-sm"
              >
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#A92881] mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-foreground/70">
                      <CheckCircle2 className="w-5 h-5 text-[#7AB735] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#A92881] mb-16 text-balance">
            How Our Services Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { num: "1", title: "Book Service", desc: "Choose your required healthcare service" },
              { num: "2", title: "Get Connected", desc: "We connect you with trusted providers" },
              { num: "3", title: "Receive Care", desc: "Get quality healthcare at affordable prices" },
              { num: "4", title: "Track Records", desc: "Access your health records digitally" },
              { num: "5", title: "Ongoing Support", desc: "Continuous care and follow-up" },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-[#393185] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                  {step.num}
                </div>
                <h3 className="font-semibold text-center text-[#A92881] mb-2">{step.title}</h3>
                <p className="text-center text-sm text-foreground/70">{step.desc}</p>
                {idx < 4 && <div className="hidden md:block absolute top-6 -right-4 text-2xl text-[#393185]/30">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185] to-[#7AB735] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Access Our Services?</h2>
          <p className="text-lg opacity-90 mb-8">Get started with Diagnoplus Health Services today</p>
          <Link href="/contact">
            <Button className="bg-white text-[#393185] hover:bg-white/90 font-semibold py-3 px-8 text-lg">
              Contact Us
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
