import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PartnerForm from "@/components/partner-form"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#393185]/5 via-[#7AB735]/5 to-[#A92881]/5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#A92881] mb-6 text-balance">Get in Touch</h1>
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
              <h2 className="text-3xl font-bold text-[#A92881] mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#393185]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-[#393185]" size={24} />
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
                    <div className="w-12 h-12 bg-[#393185]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-[#393185]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Phone</h3>
                    <p className="text-foreground/70">
                      <a href="tel:+15551234567" className="hover:text-[#393185]">
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#393185]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-[#393185]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Email</h3>
                    <p className="text-foreground/70">
                      <a href="mailto:hello@diagoplus.com" className="hover:text-[#393185]">
                        hello@diagoplus.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#7AB735]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle className="text-[#7AB735]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">WhatsApp</h3>
                    <p className="text-foreground/70">
                      <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-[#393185]">
                        Chat with us
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-muted/30 rounded-xl border border-border">
                <h3 className="font-semibold text-lg text-[#A92881] mb-2">Business Hours</h3>
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
              <h2 className="text-3xl font-bold text-[#A92881] mb-8">Send us a Message</h2>
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-96 bg-linear-to-br from-[#393185]/10 via-[#7AB735]/10 to-[#A92881]/10 rounded-xl flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-[#393185]" size={48} />
              <p className="text-foreground/70">Google Map Integration Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#A92881] mb-4 text-balance">Ready to Partner?</h2>
          <p className="text-lg text-foreground/70 mb-8">Start your healthcare business journey with Diagoplus today</p>
          <Link href="#partner-form">
            <button className="inline-block bg-[#7AB735] hover:bg-[#7AB735]/90 text-white font-semibold py-3 px-8 rounded-lg transition">
              Begin Partnership
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
