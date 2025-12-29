import Navbar from "@/components/navbar"
import PartnerForm from "@/components/partner-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">About Diagnoplus Health Services</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Making quality healthcare simple, affordable, and accessible for every family
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 text-balance">About Us</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Diagnoplus Health Services is a patient-centric healthcare platform committed to making quality medical
              services simpler, faster, and more affordable across Central India. By combining technology with a trusted
              healthcare network, we provide end-to-end support for patients and families.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our services include diagnostic laboratories, pathology tests, advanced scans, doctor consultations, OPD
              and IPD coordination, planned surgeries, ambulance services, home healthcare support, patient assistance
              services, and secure digital storage of lifelong health records. We focus on reducing healthcare complexity
              and costs while maintaining high standards of care, ensuring reliable and timely medical support for all
              sections of society.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              In India, we have seen a painful reality—good health insurance and quality healthcare are still too
              expensive for many people. For countless middle-class families, falling sick does not only affect health,
              it also creates fear of heavy medical expenses. Healthcare, which should be a basic right, often turns into
              a financial struggle.
            </p>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              This reality gave birth to Diagnoplus Health Services. Our vision is clear and heartfelt—to make healthcare
              easy, affordable, and accessible for every middle-class Indian family. We want people to focus on recovery
              and well-being, not on bills and stress.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We believe no family should compromise their future because of medical costs. Through simple processes,
              trusted services, and fair pricing, Diagnoplus Health Services aims to protect both health and peace of
              mind—today and for years to come.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Our mission is to make healthcare simple, affordable, and stress-free for Every families. We want to stand
              with patients and their loved ones during difficult times, guiding them at every step—from diagnosis to
              treatment and recovery.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              By bringing trusted doctors, hospitals, diagnostics, and support services onto one platform, we help families
              save time, money, and worry. At Diagnoplus Health Services, our goal is to ensure that no one feels alone or
              helpless when it comes to their health, and that quality care is always within reach.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Our Core Values</h2>
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
              <div key={idx} className="text-center p-8 bg-muted/20 rounded-xl border border-border">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-balance">Our Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-secondary mb-4">Diagnostic Excellence</h3>
              <p className="text-foreground/70">
                State-of-the-art laboratory facilities with certified professionals ensuring accurate and reliable test
                results.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Preventive Healthcare</h3>
              <p className="text-foreground/70">
                Comprehensive health packages designed for early disease detection and prevention, promoting wellness.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-secondary mb-4">Partner Success</h3>
              <p className="text-foreground/70">
                Dedicated support and resources to ensure our partners thrive and grow their healthcare business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Committed to Quality & Compliance</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Diagnoplus Health Services adheres to the highest quality standards and regulatory compliance requirements,
            ensuring patient safety and data security at every step.
          </p>
          <p className="text-base opacity-80">
            Our facilities are accredited and our processes are certified to meet international healthcare standards
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
            Interested in Partnering with Diagnoplus Health Services?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">Join our network and be part of the healthcare revolution</p>
          <Link href="#partner-form">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 text-lg">
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
