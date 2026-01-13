import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diagoplus - Healthcare Partnership Platform",
  description:
    "Partner with Diagoplus to grow your healthcare business. Trusted diagnostic & preventive healthcare network.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/fav.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/fav.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/fav.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/fav.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
