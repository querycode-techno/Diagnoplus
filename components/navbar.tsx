"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Diagoplus Logo" width={40} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition">
              Services
            </Link>
            <Link href="/benefits" className="text-foreground hover:text-primary transition">
              Benefits
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#partner-form"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition font-semibold"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block py-2 text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-foreground hover:text-primary">
              About
            </Link>
            <Link href="/services" className="block py-2 text-foreground hover:text-primary">
              Services
            </Link>
            <Link href="/benefits" className="block py-2 text-foreground hover:text-primary">
              Benefits
            </Link>
            <Link href="/contact" className="block py-2 text-foreground hover:text-primary">
              Contact
            </Link>
            <Link
              href="#partner-form"
              className="block mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-center font-semibold"
            >
              Partner With Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
