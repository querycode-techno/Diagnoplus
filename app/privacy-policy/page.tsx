import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, FileText, Database, Lock, UserX, AlertTriangle, Scale, Gavel, CheckCircle, RefreshCw } from "lucide-react"

export default function PrivacyPolicyPage() {
    const sections = [
        {
            id: 1,
            title: "Applicable Laws",
            icon: Scale,
            content: [
                "This Privacy Policy is governed by:"
            ],
            list: [
                "Digital Personal Data Protection Act, 2023",
                "Information Technology Act, 2000",
                "IT (Reasonable Security Practices and SPDI) Rules, 2011"
            ]
        },
        {
            id: 2,
            title: "Information Shared With Partners",
            icon: Database,
            content: [
                "Partners may receive access to:"
            ],
            list: [
                "Patient name and contact details",
                "Medical records, diagnostic reports, and health data",
                "Appointment and service-related information"
            ],
            note: "Such information constitutes Personal Data / Sensitive Personal Data under Indian law."
        },
        {
            id: 3,
            title: "Purpose of Data Use",
            icon: FileText,
            content: [
                "Partners shall:"
            ],
            list: [
                "Use patient data only for authorized medical consultation, diagnosis, and treatment",
                "Not use data for marketing, solicitation, resale, or any unrelated purpose"
            ]
        },
        {
            id: 4,
            title: "Confidentiality Obligations",
            icon: Lock,
            content: [
                "Partners must:"
            ],
            list: [
                "Maintain strict confidentiality of all patient and Diagnoplus data",
                "Prevent unauthorized access, disclosure, or misuse",
                "Implement reasonable technical and administrative security safeguards"
            ],
            note: "Confidentiality obligations shall continue even after termination of the partnership."
        },
        {
            id: 5,
            title: "Prohibition on Data Sharing",
            icon: UserX,
            content: [
                "Partners shall not:"
            ],
            list: [
                "Share patient data with third parties",
                "Download, store, sell, or transfer patient data without authorization",
                "Retain patient data beyond the legally required period"
            ]
        },
        {
            id: 6,
            title: "Data Breach Reporting",
            icon: AlertTriangle,
            content: [
                "Any actual or suspected data breach must be immediately reported to Diagnoplus for corrective and legal action."
            ]
        },
        {
            id: 7,
            title: "Consequences of Violation",
            icon: Shield,
            content: [
                "Violation of this Privacy Policy may result in:"
            ],
            list: [
                "Immediate termination",
                "Legal action under applicable laws",
                "Claims for damages and penalties"
            ]
        },
        {
            id: 8,
            title: "Amendments",
            icon: RefreshCw,
            content: [
                "Diagnoplus reserves the right to update this Privacy Policy at any time.",
                "Changes shall take effect upon website publication."
            ]
        },
        {
            id: 9,
            title: "Governing Law & Jurisdiction",
            icon: Gavel,
            content: [
                "This Privacy Policy shall be governed by the laws of India, with jurisdiction in Maharashtra, India."
            ]
        },
        {
            id: 10,
            title: "Acceptance",
            icon: CheckCircle,
            content: [
                "By accessing patient data through Diagnoplus, the Partner agrees to this Privacy Policy."
            ]
        }
    ]

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[400px] md:min-h-[500px] overflow-hidden bg-gradient-to-br from-[#393185] via-[#4a3fa0] to-[#393185]">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AB735]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A92881]/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex items-center justify-center min-h-[400px] md:min-h-[500px] px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 font-medium text-sm mb-6">
                            <Shield className="w-4 h-4" />
                            Data Protection
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            This Privacy Policy explains how patient and partner data is handled by Partners associated with Diagnoplus, in compliance with Indian data protection laws.
                        </p>
                    </div>
                </div>

                {/* Wave Bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Terms Sections */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto space-y-12">
                    {sections.map((section) => {
                        const IconComponent = section.icon
                        return (
                            <div
                                key={section.id}
                                className="group relative bg-white rounded-2xl p-8 border border-[#393185]/10 hover:border-[#7AB735]/50 transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Section Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-[#393185] to-[#7AB735] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-[#A92881]">
                                            {section.id}. {section.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Section Content */}
                                <div className="pl-0 md:pl-16 space-y-4">
                                    {section.content?.map((paragraph, idx) => (
                                        <p key={idx} className="text-foreground/80 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}

                                    {section.list && (
                                        <ul className="space-y-3">
                                            {section.list.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="shrink-0 w-2 h-2 bg-[#7AB735] rounded-full mt-2"></div>
                                                    <span className="text-foreground/80">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.note && (
                                        <div className="mt-4 p-4 bg-[#A92881]/5 border-l-4 border-[#A92881] rounded-r-lg">
                                            <p className="text-sm text-[#A92881] font-medium">
                                                {section.note}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#393185]/5 via-white to-[#7AB735]/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#A92881] mb-4">
                        Have Questions About Our Privacy Policy?
                    </h2>
                    <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                        If you have any questions or need clarification regarding our data protection practices, please don&apos;t hesitate to reach out to our team.
                    </p>
                    <a
                        href="mailto:healthservicesdiagnoplus@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#7AB735] hover:bg-[#7AB735]/90 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    )
}
