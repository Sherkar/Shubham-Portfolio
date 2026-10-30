import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Swarajya Gatha (स्वराज्यगाथा",
    emoji: "🚩",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate",
      "MySQL",
      "React.js",
      "Tailwind CSS",
      "REST APIs",
    ],
    desc:
      "Developed a bilingual heritage platform for exploring Maharashtra’s historical forts, with historical information and trekking details in English and Marathi.",
    github: "https://github.com/Sherkar/Swarajya-Gatha-Backend",
    live: "#",
    image: "Swarajya.png",
    color: "from-[#c9a84c] to-[#8a6a1f]",
  },
  {
    title: "UPI Offline Mesh Network Simulator",
    emoji: "💸",
    tech: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "H2 Database",
      "Spring Data JPA",
      "RSA/AES Encryption",
      "React.js",
    ],
    desc:
      "A high-performance Spring Boot backend and interactive dashboard simulating offline UPI-style payments via decentralized mesh network routing. Implements secure transaction signing, duplicate detection, and gossip-style packet propagation.",
    github: "https://github.com/Sherkar/UPI_Without_Internet",
    live: "#",
    image: "/upi.png",
    color: "from-[#f5d87a] to-[#c9a84c]",
  },
];

function Projects() {
  return (
    <section id="projects" className="section py-28 relative">
      <div className="orb orb-amber w-[400px] h-[400px] left-0 bottom-0 opacity-[0.06]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#c9a84c] uppercase tracking-widest text-sm mb-3">What I've built</p>
        <h2
          className="text-5xl font-black section-heading inline-block"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="glass card-hover border border-[var(--border)] rounded-3xl overflow-hidden group flex flex-col"
          >
            {/* Project Image */}
            <div className="relative h-60 overflow-hidden border-b border-[var(--border)]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute top-4 right-4 text-3xl bg-black/40 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center border border-white/10">
                {project.emoji}
              </span>
            </div>

            {/* Content */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3
                  className="text-2xl font-bold text-[#e8d5a3] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.title}
                </h3>

                <p className="text-[#e8d5a3]/60 text-sm leading-7 mb-6">
                  {project.desc}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.25)",
                        color: "#f5d87a",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm"
                >
                  <FaGithub size={16} /> GitHub Code
                </a>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm"
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
