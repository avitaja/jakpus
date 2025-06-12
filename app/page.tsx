"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  GraduationCap,
  Award,
  ChevronDown,
  ExternalLink,
  Star,
  Calendar,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "education", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    { category: "Tax Reporting", items: ["Form 1770/1770S/1770SS/1771", "PPh 21/23/4(2)/15/22", "VAT (PPN)"] },
    { category: "Microsoft Office", items: ["Excel", "Word", "PowerPoint", "Power BI"] },
    { category: "Content Creation", items: ["Canva", "Content Planning", "Copywriting"] },
    { category: "Data Analytics", items: ["Excel", "SPSS", "Data Analysis"] },
  ]

  const experiences = [
    {
      title: "Renjani (Volunteer)",
      company: "Kantor Pelayanan Pajak Pratama Purwokerto",
      period: "Jan 2024 - Mar 2024",
      location: "Purwokerto, Indonesia",
      achievements: [
        "Assisted 20+ taxpayers in filling annual tax reports",
        "Created social media content for tax information",
        "Conducted tax outreach programs for society",
        "Provided taxation consultation services",
      ],
    },
    {
      title: "Owner / Self-Employed",
      company: "Avit Store",
      period: "Aug 2021 - Present",
      location: "Purwokerto, Indonesia",
      achievements: [
        "Achieved 10,000+ successful sales with after-sales service",
        "Managed inventory and supply chain operations",
        "Built long-term B2B partnerships",
        "Resolved 100+ customer complaints",
      ],
    },
    {
      title: "Internship",
      company: "Pusat Informasi Ilmiah FEB UMP",
      period: "Nov 2024 - Feb 2025",
      location: "Purwokerto, Indonesia",
      achievements: [
        "Organized and maintained digital resources",
        "Assisted with reference management",
        "Used cataloging and database software",
        "Provided information search guidance",
      ],
    },
  ]

  const achievements = [
    "Funded PPK Ormawa 2023 (Direktorat Jenderal Pendidikan Tinggi)",
    "Top 8 Finalist BPC FEB UMP 2022",
    "Top 5 Finalist BPC FEB UMP 2024",
    "Top 12 National Tax Olympiad (OTAX) 2024",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Avit Tri Laksono
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Experience", "Education", "Achievements", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div
          className={`container mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold">
                  AT
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Avit Tri Laksono
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">Financial Management Graduate & Tax Professional</p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 rounded-full px-4 py-2">
                  Brevet A & B Certified
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 rounded-full px-4 py-2">
                  CFTR Certified
                </Badge>
                <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 rounded-full px-4 py-2">
                  Tax Specialist
                </Badge>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Purwokerto, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+6281385784478</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-pink-400" />
                <span>avittri09@gmail.com</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-full px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-full px-8 py-3 font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl p-8">
              <CardContent className="p-0">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a Financial Management graduate with a strong passion for taxation and corporate finance. I hold
                  Brevet A & B and Certified Fundamental Tax Reporting (CFTR) certifications and have had the
                  opportunity to gain hands-on experience at KPP Pratama Purwokerto for assisting taxpayers and
                  supporting public education programs.
                </p>
                <br />
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm confident in preparing tax forms, staying current with tax regulations, and using tools like
                  Microsoft Excel and Power BI for data analysis. I also enjoy working in teams, leading initiatives,
                  and communicating with diverse audiences. With a problem-solving mindset and a collaborative spirit,
                  I'm excited to grow and contribute in a dynamic and professional environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-center gap-2">
                        <Star className="w-4 h-4 text-purple-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-cyan-400 mb-1">{exp.title}</h3>
                      <p className="text-lg text-purple-400 mb-2">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-300 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 flex items-start gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-cyan-400">University Education</h3>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Universitas Muhammadiyah Purwokerto</h4>
                <p className="text-purple-400 mb-2">Management Degree</p>
                <p className="text-gray-300">GPA: 3.89/4.00</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-400">Certifications</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Bina Muda Inspira Institute</h4>
                    <p className="text-gray-300">Tax Brevet Certification A and B</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">CFTR Certification</h4>
                    <p className="text-gray-300">Certified Fundamental Tax Reporting</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <p className="text-gray-300">{achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl p-8">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-300 mb-6">
                    Ready to collaborate or discuss opportunities? Let's connect!
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <a
                    href="tel:+6281385784478"
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-8 h-8 text-cyan-400" />
                    <span className="text-gray-300">+6281385784478</span>
                  </a>

                  <a
                    href="mailto:avittri09@gmail.com"
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-8 h-8 text-purple-400" />
                    <span className="text-gray-300">avittri09@gmail.com</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/avittri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  >
                    <Linkedin className="w-8 h-8 text-pink-400" />
                    <span className="text-gray-300">LinkedIn Profile</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Avit Tri Laksono. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
