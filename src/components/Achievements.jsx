import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaLaptopCode, FaRocket, FaFlag } from "react-icons/fa";

const certifications = [
   {
    icon: <FaCertificate />,
    title: "Technology Job Simulation",
    badge: "Deloitte (2026)",
    desc: "Built Python solutions for telemetry data integration, implemented JSON data transformation with unit testing, and prepared a development proposal for a real-time manufacturing dashboard. This experience strengthened my problem-solving and software development skills.",
    color: "from-[#f5d87a] to-[#c9a84c]",
  },
  {
    icon: <FaCertificate />,
    title: "5-Day AI Agents: Intensive Vibe Coding",
    badge: "Google (2026)",
    desc: "Intensive training program by Google focusing on agentic AI workflows, prompt engineering, tool integration, and building automated coding agents.",
    color: "from-[#f5d87a] to-[#c9a84c]",
  },
  {
    icon: <FaCertificate />,
    title: "Java Full Stack Development Trainee",
    badge: "The Kiran Academy (2025)",
    desc: "Comprehensive hands-on training covering Java Core & Advanced, Spring Boot, Hibernate, MySQL, React.js, and building RESTful web services.",
    color: "from-[#c9a84c] to-[#8a6a1f]",
  },
  {
    icon: <FaCertificate />,
    title: "Programming in Java",
    badge: "FUEL (2024)",
    desc: "Academic and professional training on Java programming fundamentals, Object-Oriented Principles, multi-threading, and exception handling by Friends Union for Engineering Lives.",
    color: "from-[#c9a84c] to-[#f5d87a]",
  },
  {
    icon: <FaCertificate />,
    title: "Introduction to Generative AI",
    badge: "Google",
    desc: "Introductory course covering the basics of generative AI models, their applications, and how they differ from traditional machine learning methods.",
    color: "from-[#8a6a1f] to-[#c9a84c]",
  },
];

const leadership = [
  {
    icon: <FaTrophy />,
    title: "College Kabaddi Team Captain",
    badge: "Leadership",
    desc: "Selected to lead the varsity squad. Structured rigorous strategy sessions, delegated on-field responsibilities, and managed team dynamics during high-pressure inter-collegiate tournaments.",
    color: "from-[#f5d87a] to-[#8a6a1f]",
  },
  {
    icon: <FaFlag />,
    title: "Historical Trek Organizer",
    badge: "Management",
    desc: "Spearheaded logistics, budget planning, and crowd safety protocols for a large-scale fort exploration trek, demonstrating strong risk management and execution skills.",
    color: "from-[#c9a84c] to-[#8a6a1f]",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="section py-28 relative">
      <div className="orb orb-gold w-[400px] h-[400px] left-1/2 -translate-x-1/2 top-0 opacity-[0.05]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#c9a84c] uppercase tracking-widest text-sm mb-3">Certificates &amp; Leadership</p>
        <h2
          className="text-5xl font-black section-heading inline-block"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Achievements &amp; <span className="gradient-text">Milestones</span>
        </h2>
      </motion.div>

      {/* Certifications Subsection */}
      <div className="mb-20">
        <h3
          className="text-2xl font-bold text-[#e8d5a3] mb-8 flex items-center gap-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span>📜</span> Certifications &amp; Training
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass card-hover border border-[var(--border)] rounded-3xl p-8 group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-[0.05] rounded-bl-full`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-black text-xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-[#e8d5a3] mb-2">{item.title}</h4>
              <span className="inline-block text-xs px-3 py-1 rounded-full mb-4" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", color: "#f5d87a" }}>
                {item.badge}
              </span>
              <p className="text-[#e8d5a3]/60 text-sm leading-6">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership Subsection */}
      <div>
        <h3
          className="text-2xl font-bold text-[#e8d5a3] mb-8 flex items-center gap-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span>🏆</span> Leadership &amp; Extracurriculars
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass card-hover border border-[var(--border)] rounded-3xl p-8 group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-[0.05] rounded-bl-full`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-black text-xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-[#e8d5a3] mb-2">{item.title}</h4>
              <span className="inline-block text-xs px-3 py-1 rounded-full mb-4" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", color: "#f5d87a" }}>
                {item.badge}
              </span>
              <p className="text-[#e8d5a3]/60 text-sm leading-6">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
