import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-[#393185] via-[#4a3fa0] to-[#393185] text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AB735]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A92881]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-xl lg:text-2xl mb-4 text-white">Diagnoplus Health Services</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Central India's Trusted All-in-One Healthcare Platform
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#7AB735] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#7AB735] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#7AB735] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#7AB735] flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#7AB735]"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white relative">
              Partnership
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#7AB735]"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/benefits" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                  Benefits
                </Link>
              </li>
              <li>
                <a href="#partner-form" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                  Apply Now
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white relative">
              Contact
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#7AB735]"></div>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#7AB735] shrink-0 mt-0.5" />
                <a href="mailto:hello@diagoplus.com" className="text-white/80 hover:text-white transition-colors duration-300">
                  hello@diagoplus.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#7AB735] shrink-0 mt-0.5" />
                <a href="tel:+15551234567" className="text-white/80 hover:text-white transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              &copy; 2025 Diagnoplus Health Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
