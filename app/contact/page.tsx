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
                      1st floor, Jagat Tower, 101, Amravati Rd,
                      <br />
                      beside HDFC bank, Tilak Nagar, Gokulpeth,
                      <br />
                      Nagpur, Maharashtra 440010
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#393185]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-[#393185]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">Phone / WhatsApp</h3>
                    <p className="text-foreground/70 space-y-1">
                      <a href="tel:9579432665" className="block hover:text-[#393185]">
                        +91 95794 32665
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
                      <a href="mailto:healthservicesdiagnoplus@gmail.com" className="hover:text-[#393185]">
                        healthservicesdiagnoplus@gmail.com
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
                      <a href="https://wa.me/919579432665" target="_blank" rel="noopener noreferrer" className="hover:text-[#393185]">
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
          <div className="w-full rounded-xl overflow-hidden border border-border">
            <div className="relative w-full h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.140635638825!2d79.05906949999999!3d21.146800799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c05fe0094211%3A0xc164507e690274cd!2sDiagno%20Plus%20Pathology%20laboratory%20and%20Health%20Services!5e0!3m2!1sen!2sin!4v1767685809861!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
