import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, FileText, UserCheck, DollarSign, MessageSquare, Lock, Scale, AlertTriangle, Award, Briefcase, Gavel, CheckCircle, Handshake } from "lucide-react"

export default function TermsAndConditionsPage() {
    const sections = [
        {
            id: 1,
            title: "Scope of Partnership",
            icon: Handshake,
            content: [
                "Diagnoplus operates as a healthcare facilitation platform connecting patients with Partners. The relationship is non-exclusive and does not constitute employment, agency, or joint venture.",
                "Partners shall deliver healthcare services independently, in compliance with professional standards and applicable laws."
            ]
        },
        {
            id: 2,
            title: "Professional Conduct & Patient Care",
            icon: UserCheck,
            content: [
                "Partners agree to:",
            ],
            list: [
                "Provide proper, ethical, and professional consultation to all patients",
                "Act in the best interest of patients at all times",
                "Refrain from misguiding, misleading, or providing false or exaggerated medical information",
                "Follow established medical ethics, standard treatment protocols, and lawful practices"
            ],
            note: "Any unethical or misleading conduct shall be treated as a serious breach."
        },
        {
            id: 3,
            title: "Pricing, Discounts & Transparency",
            icon: DollarSign,
            content: [],
            list: [
                "Partners shall honor all discounts, offers, or pricing commitments communicated or approved by Diagnoplus",
                "No hidden, unauthorized, or additional charges shall be imposed on Diagnoplus patients",
                "Pricing must remain fair, transparent, and consistent"
            ]
        },
        {
            id: 4,
            title: "Communication & Coordination Obligations",
            icon: MessageSquare,
            content: [
                "Partners must:"
            ],
            list: [
                "Respond promptly and professionally to calls, messages, emails, or notifications from Diagnoplus",
                "Maintain operational coordination to ensure a seamless patient experience"
            ],
            note: "Repeated non-responsiveness or negligence may result in corrective action or termination."
        },
        {
            id: 5,
            title: "Privacy Policy & Data Protection",
            icon: Lock,
            content: [],
            subsections: [
                {
                    subtitle: "5.1 Collection of Information",
                    text: "Partners may receive access to limited patient information such as:",
                    list: [
                        "Name, contact details",
                        "Medical reports and health-related data",
                        "Appointment and service details"
                    ],
                    note: "This information is shared strictly for healthcare service delivery."
                },
                {
                    subtitle: "5.2 Use of Information",
                    text: "Partners agree that patient data shall:",
                    list: [
                        "Be used only for authorized medical and operational purposes",
                        "Not be used for marketing, solicitation, resale, or any unauthorized activity"
                    ]
                },
                {
                    subtitle: "5.3 Confidentiality Obligations",
                    list: [
                        "Partners shall maintain strict confidentiality of all patient and Diagnoplus data",
                        "Data shall not be shared, disclosed, sold, transferred, or misused under any circumstances",
                        "Adequate safeguards must be maintained to prevent unauthorized access or data breaches"
                    ],
                    note: "These obligations survive termination of the partnership."
                }
            ]
        },
        {
            id: 6,
            title: "Legal & Regulatory Compliance",
            icon: Scale,
            content: [
                "Partners must comply with:",
            ],
            list: [
                "All applicable Indian laws, including healthcare regulations, professional council norms, IT Act, and data protection requirements"
            ],
            note: "Any violation, illegal activity, fraud, or misconduct shall invite immediate action."
        },
        {
            id: 7,
            title: "Termination Rights",
            icon: AlertTriangle,
            content: [
                "Diagnoplus reserves the absolute right to:"
            ],
            list: [
                "Suspend or terminate the Partner immediately, without prior notice or consent, in case of:"
            ],
            nestedList: [
                "Illegal or unethical conduct",
                "Patient complaints or misconduct",
                "Data breach or confidentiality violation",
                "Brand misuse or reputational damage"
            ],
            note: "Upon termination, the Partner shall have no claim, compensation, or objection against Diagnoplus."
        },
        {
            id: 8,
            title: "Brand & Reputation Protection",
            icon: Award,
            content: [
                "Partners shall not:"
            ],
            list: [
                "Misuse or misrepresent the Diagnoplus name, logo, or brand identity",
                "Make false, misleading, or unauthorized public statements on behalf of Diagnoplus"
            ],
            note: "Any breach shall be solely the Partner's responsibility."
        },
        {
            id: 9,
            title: "Limitation of Liability",
            icon: Shield,
            content: [],
            list: [
                "Diagnoplus acts solely as a facilitation and coordination platform",
                "Clinical decisions, medical outcomes, and treatment results remain the sole responsibility of the Partner",
                "Diagnoplus shall not be liable for professional negligence or service deficiencies by Partners"
            ]
        },
        {
            id: 10,
            title: "Amendments",
            icon: FileText,
            content: [
                "Diagnoplus may update or modify these Terms and Privacy Policy at any time. Changes shall become effective upon publication on the website. Continued association implies acceptance of the revised terms."
            ]
        },
        {
            id: 11,
            title: "Governing Law & Jurisdiction",
            icon: Gavel,
            content: [
                "This document shall be governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts in Maharashtra, India."
            ]
        },
        {
            id: 12,
            title: "Acceptance",
            icon: CheckCircle,
            content: [
                "By registering or continuing as a Partner with Diagnoplus, you confirm that you have read, understood, and agreed to these Partner Terms & Conditions and Privacy Policy."
            ]
        },
        {
            id: 13,
            title: "Referral Obligation Clause",
            icon: Briefcase,
            content: [
                "Referral Exclusivity for Diagnostic Services",
                "Partners agree that all patients referred, introduced, or received through Diagnoplus (\"Diagnoplus Patients\") shall be exclusively referred to Diagnoplus Pathology Laboratory for all blood tests, pathology investigations, and radiology services, wherever such services are offered by Diagnoplus."
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
                            <FileText className="w-4 h-4" />
                            Legal Document
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Terms & Conditions
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                            This document governs the association between Diagnoplus and all healthcare service providers who register or provide services through the platform.
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

            {/* Introduction */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-[#393185]/5 via-white to-[#7AB735]/5 rounded-2xl p-8 border border-[#393185]/10">
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            This document governs the association between <strong className="text-[#A92881]">Diagnoplus</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) and all doctors, laboratories, clinics, hospitals, and healthcare service providers (&ldquo;Partner&rdquo;, &ldquo;you&rdquo;, &ldquo;your&rdquo;) who register, associate, or provide services through the Diagnoplus platform.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed mt-4">
                            By accessing, registering, or continuing as a Partner, you acknowledge and agree to be bound by the terms set out below.
                        </p>
                    </div>
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

                                    {section.nestedList && (
                                        <ul className="ml-6 space-y-2 border-l-2 border-[#393185]/20 pl-4">
                                            {section.nestedList.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="shrink-0 w-1.5 h-1.5 bg-[#A92881] rounded-full mt-2"></div>
                                                    <span className="text-foreground/70">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.subsections?.map((sub, idx) => (
                                        <div key={idx} className="mt-6 p-6 bg-gradient-to-br from-[#393185]/5 to-transparent rounded-xl border border-[#393185]/5">
                                            <h3 className="text-lg font-semibold text-[#393185] mb-3">{sub.subtitle}</h3>
                                            {sub.text && <p className="text-foreground/80 mb-3">{sub.text}</p>}
                                            {sub.list && (
                                                <ul className="space-y-2">
                                                    {sub.list.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <div className="shrink-0 w-2 h-2 bg-[#7AB735] rounded-full mt-2"></div>
                                                            <span className="text-foreground/80">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {sub.note && (
                                                <p className="mt-4 text-sm text-[#A92881] font-medium italic">
                                                    {sub.note}
                                                </p>
                                            )}
                                        </div>
                                    ))}

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
                        Have Questions About Our Terms?
                    </h2>
                    <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                        If you have any questions or need clarification regarding these terms and conditions, please don&apos;t hesitate to reach out to our team.
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
