import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase, FaCode, FaDatabase, FaServer,
  FaCheckCircle,
} from "react-icons/fa";

function Experience() {
  const responsibilities = [
    { icon: <FaCode />,      text: "Built full-stack web applications using Java & Spring Boot" },
    { icon: <FaServer />,    text: "Developed and consumed REST APIs for frontend-backend integration" },
    { icon: <FaDatabase />,  text: "Designed and optimized MySQL database schemas and SQL queries" },
    { icon: <FaCode />,      text: "Created dynamic UI components with React.js and JavaScript" },
    { icon: <FaCheckCircle />, text: "Participated in code reviews and agile development practices" },
    { icon: <FaCheckCircle />, text: "Implemented Hibernate ORM for efficient data persistence" },
    { icon: <FaCheckCircle />, text: "Collaborated with team on project planning and delivery" },
    { icon: <FaCheckCircle />, text: "Worked on real-world Java projects and mentored by seniors" },
  ];

  return (
    <section id="experience" className="section py-28 relative">
      <div className="orb orb-gold w-[350px] h-[350px] right-0 top-1/4 opacity-[0.06]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#c9a84c] uppercase tracking-widest text-sm mb-3">My Journey</p>
        <h2
          className="text-5xl font-black section-heading inline-block"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Work <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      {/* Experience card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="glass border border-[var(--border)] rounded-3xl p-10 relative overflow-hidden"
      >
        {/* Gold accent line */}
        <div
          className="absolute top-0 left-0 w-1 h-full rounded-l-3xl"
          style={{ background: "linear-gradient(180deg, #f5d87a, #c9a84c, #8a6a1f)" }}
        />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 ml-4">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#8a6a1f] flex items-center justify-center text-black text-2xl flex-shrink-0">
              <FaBriefcase />
            </div>
            <div>
              <h3
                className="text-3xl font-black gradient-text"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Kiran Academy
              </h3>
              <p className="text-[#e8d5a3]/70 text-base mt-1 font-medium">
                Java By Kiran — Trainee &amp; Intern
              </p>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <span
              className="px-5 py-2 rounded-full text-sm font-semibold"
              style={{
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.35)",
                color: "#f5d87a",
              }}
            >
              📅 Sep 2025 – Feb 2026
            </span>
          </div>
        </div>

        {/* Responsibilities grid */}
        <div className="grid md:grid-cols-2 gap-4 ml-4">
          {responsibilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 rounded-2xl cursor-default"
              style={{
                background: "rgba(201,168,76,0.04)",
                border: "1px solid rgba(201,168,76,0.1)",
              }}
            >
              <span className="text-[#c9a84c] text-lg flex-shrink-0">{item.icon}</span>
              <span className="text-[#e8d5a3]/75 text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;