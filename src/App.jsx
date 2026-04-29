import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react'
import Hero3D from './components/Hero3D'

function App() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const projects = [
    {
      title: "Handloom E-Commerce Platform",
      period: "Jun '24 — Dec '24",
      desc: "Developed an e-commerce platform to promote and sell handcrafted products made by tribal artisans. Integrated JWT Authentication for secure login.",
      tech: ["React.js", "Spring Boot", "MySQL", "HTML", "CSS"],
      link: "#"
    },
    {
      title: "Tourism Forecasting Dashboard",
      period: "Recent",
      desc: "Built a tourism forecasting solution using real-time and historical data. Designed interactive Power BI dashboards for predictive insights.",
      tech: ["Microsoft Azure", "Power BI", "SQL"],
      link: "#"
    }
  ]

  const skills = [
    "C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript", 
    "Spring Boot", "Spring", "MySQL", "PostgreSQL"
  ]

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <nav className="fixed top-0 w-full glass z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gradient">Ajay Kumar</h1>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li className="hover:text-primary transition-colors cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-primary transition-colors cursor-pointer"><a href="#projects">Projects</a></li>
          <li className="hover:text-primary transition-colors cursor-pointer"><a href="#skills">Skills</a></li>
          <li className="hover:text-primary transition-colors cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="relative h-screen flex flex-col items-center justify-center px-6">
        <Hero3D />
        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn}
          className="text-center z-10 glass p-10 rounded-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Hello, I'm <br/><span className="text-gradient">Bavisetti Ajay Kumar</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-md font-medium">
            Full Stack Developer | Java | Spring Boot | React
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-dark font-bold hover:scale-105 transition-transform text-lg shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full glass font-bold hover:scale-105 transition-transform text-lg border border-primary/30">
              Hire Me
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h3 className="text-4xl font-bold mb-12 text-center"><span className="text-gradient">About Me</span></h3>
          <div className="glass p-8 rounded-2xl mb-8 border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary"></div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Ambitious Computer Science student at KL University with expertise in C, Java, C++, Python, and Java Full Stack Development. Proficient in Spring Boot, MySQL, and MongoDB, with hands-on experience in Web Development and Problem-Solving projects.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary">Education</h4>
                <div className="mb-4">
                  <p className="font-bold">BTech in CSE - KL University</p>
                  <p className="text-gray-400 text-sm">Aug '22 — Present | CGPA: 9.5</p>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-secondary">Experience</h4>
                <div>
                  <p className="font-bold">Java Full Stack Internship</p>
                  <p className="text-gray-400 text-sm mb-2">AICTE (Virtual)</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    <li>Developed web applications using Java, Spring Boot, React.</li>
                    <li>Designed and implemented RESTful APIs.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h3 className="text-4xl font-bold mb-12 text-center"><span className="text-gradient">Featured Projects</span></h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-8 rounded-2xl border border-white/5 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="text-2xl font-bold mb-2 flex justify-between items-center">
                  {project.title}
                  <a href={project.link} className="text-primary hover:text-white"><ExternalLink size={20}/></a>
                </h4>
                <p className="text-secondary text-sm mb-4 font-mono">{project.period}</p>
                <p className="text-gray-300 mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="skills" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h3 className="text-4xl font-bold mb-12 text-center"><span className="text-gradient">Skills & Certifications</span></h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 240, 255, 0.4)" }}
                    className="glass px-6 py-3 rounded-xl border border-white/10 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-center">Certifications</h4>
              <div className="flex flex-col gap-4">
                <div className="glass p-5 rounded-xl border border-secondary/30 flex items-center justify-between">
                  <span className="font-bold">Red Hat Certified Enterprise Application Developer</span>
                  <span className="text-secondary text-sm">Sep '24</span>
                </div>
                <div className="glass p-5 rounded-xl border border-primary/30 flex items-center justify-between">
                  <span className="font-bold">AWS Certified Cloud Practitioner</span>
                  <span className="text-primary text-sm">Jun '25</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h3 className="text-5xl font-bold mb-8">Let's Work <span className="text-gradient">Together</span></h3>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:2200031278cseh@gmail.com" className="p-4 glass rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:scale-110">
              <Mail size={28} />
            </a>
            <a href="https://linkedin.com" className="p-4 glass rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com" className="p-4 glass rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:scale-110">
              <Github size={28} />
            </a>
            <a href="tel:7989524528" className="p-4 glass rounded-full hover:bg-primary/20 hover:text-primary transition-all hover:scale-110">
              <Phone size={28} />
            </a>
          </div>
          <p className="text-gray-500">© 2026 Bavisetti Ajay Kumar. All rights reserved.</p>
        </motion.div>
      </section>
    </div>
  )
}

export default App
