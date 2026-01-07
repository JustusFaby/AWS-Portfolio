"use client"

import { useState } from "react"
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const sections = ["about", "experience", "projects", "skills"]

const projects = [
  {
    title: "Student-Teacher Appointment System",
    description:
      "Cloud-based scheduling platform enabling students to book and manage teacher appointments in real time.",
    tech: ["Firebase", "JavaScript", "HTML/CSS"],
    link: "#",
  },
  {
    title: "AI-Powered FAQ Chatbot",
    description:
      "Full-stack chatbot using Google Gemini 2.0 Flash API with real-time intelligent responses and chat history management.",
    tech: ["React", "Node.js", "MongoDB", "Google Gemini"],
    link: "#",
  },
  {
    title: "Portfolio Generator",
    description:
      "Cloud-deployed static portfolio builder that converts Markdown input into professional developer portfolios with automated CI/CD.",
    tech: ["Next.js 13", "React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
]

const experience = [
  {
    role: "Web Development Intern",
    company: "Elevate Labs",
    period: "Sep 2025 – Nov 2025",
    description:
      "Developing cloud-based web apps with Next.js, Firebase, and Tailwind CSS. Contributing to frontend development, API integration, and agile sprints.",
  },
  {
    role: "Frontend Development Intern",
    company: "Unified Mentor",
    period: "May 2025 – Aug 2025",
    description:
      "Built responsive UI components using React, HTML, and CSS. Collaborated with designers to enhance UX and optimize performance.",
  },
]

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Node.js", "Express", "Firebase", "Supabase", "MongoDB"],
  Tools: ["Git & GitHub", "GitHub Actions", "Figma", "Postman", "VS Code"],
  Cloud: ["Firebase", "Cloud Deployment", "Render", "Netlify"],
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Justus Faby
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize text-sm font-medium transition-colors ${
                    activeSection === section ? "text-blue-400" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 flex flex-col gap-3">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section)
                    setMobileMenuOpen(false)
                  }}
                  className={`capitalize text-sm font-medium transition-colors text-left ${
                    activeSection === section ? "text-blue-400" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          {activeSection === "about" && (
            <section className="animate-in fade-in duration-500">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    Full Stack
                    <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                      Developer
                    </span>
                  </h2>
                  <p className="text-lg text-slate-300 mb-8">
                    I build innovative cloud-based web applications with Next.js, TypeScript, and modern frontend
                    technologies.
                  </p>
                  <div className="flex gap-4">
                    <Button className="bg-blue-500 hover:bg-blue-600">View My Work</Button>
                    <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
                      Contact Me
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-slate-700">
                    <p className="text-slate-300 leading-relaxed">
                      I'm an innovative full-stack developer passionate about crafting cloud-based, high-performance web
                      applications. Skilled in intuitive UI/UX design and agile teamwork, with a strong drive to turn
                      ideas into scalable digital experiences.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Experience Section */}
          {activeSection === "experience" && (
            <section className="animate-in fade-in duration-500">
              <h2 className="text-4xl font-bold mb-12">Experience</h2>
              <div className="space-y-8">
                {experience.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-blue-400 pl-8 pb-8">
                    <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                    <p className="text-slate-400 text-sm mt-1">{exp.company}</p>
                    <p className="text-slate-500 text-sm mt-2">{exp.period}</p>
                    <p className="text-slate-300 mt-4 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects Section */}
          {activeSection === "projects" && (
            <section className="animate-in fade-in duration-500">
              <h2 className="text-4xl font-bold mb-12">Projects</h2>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <section className="animate-in fade-in duration-500">
              <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, skillsList]) => (
                  <div
                    key={category}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700"
                  >
                    <h3 className="text-xl font-bold text-blue-400 mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillsList.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg text-sm border border-slate-600 hover:border-blue-400 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Justus Faby Jeyakumar</h3>
              <p className="text-slate-400 mb-6">
                Full Stack Developer passionate about building scalable web experiences.
              </p>
              <div className="flex gap-4">
                <a href="mailto:justusfaby@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div className="text-right">
              <p className="text-slate-400 mb-2">Email</p>
              <p className="text-white font-semibold">justusfaby@gmail.com</p>
              <p className="text-slate-400 mt-4 mb-2">Phone</p>
              <p className="text-white font-semibold">+91 88700 99067</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>© 2025 Justus Faby Jeyakumar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
