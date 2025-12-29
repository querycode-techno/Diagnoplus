import Navbar from "@/components/navbar"
import PartnerForm from "@/components/partner-form"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Get in Touch</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Address</h3>
                    <p className="text-foreground/70">
                      123 Healthcare Plaza
                      <br />
                      Medical District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Phone</h3>
                    <p className="text-foreground/70">
                      <a href="tel:+15551234567" className="hover:text-primary">
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Email</h3>
                    <p className="text-foreground/70">
                      <a href="mailto:hello@diagoplus.com" className="hover:text-primary">
                        hello@diagoplus.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">WhatsApp</h3>
                    <p className="text-foreground/70">
                      <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        Chat with us
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-muted/30 rounded-xl border border-border">
                <h3 className="font-semibold text-lg text-primary mb-2">Business Hours</h3>
                <p className="text-foreground/70">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Partner Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-96 bg-linear-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-primary" size={48} />
              <p className="text-foreground/70">Google Map Integration Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">Ready to Partner?</h2>
          <p className="text-lg text-foreground/70 mb-8">Start your healthcare business journey with Diagoplus today</p>
          <Link href="#partner-form">
            <button className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition">
              Begin Partnership
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-foreground-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Diagoplus</h3>
            <p className="text-gray-300">Trusted diagnostic & preventive healthcare network</p>
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
          <p>&copy; 2025 Diagoplus. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
