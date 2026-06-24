import React from "react";
import { motion } from "framer-motion";
import {
  FaJava, FaReact, FaHtml5, FaCss3Alt,
  FaGitAlt, FaGithub, FaDatabase, FaServer,
  FaPython,
} from "react-icons/fa";
import {
  SiSpringboot, SiMysql, SiJavascript,
  SiPostman, SiHibernate, SiIntellijidea,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Backend Development",
    emoji: "⚙️",
    skills: [
      { name: "Java",        icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Hibernate",   icon: <SiHibernate /> },
      { name: "REST APIs",   icon: <FaServer /> },
      { name: "Python",      icon: <FaPython /> },
    ],
  },
  {
    title: "Frontend Development",
    emoji: "🎨",
    skills: [
      { name: "React.js",    icon: <FaReact /> },
      { name: "JavaScript",  icon: <SiJavascript /> },
      { name: "HTML5",       icon: <FaHtml5 /> },
      { name: "CSS3",        icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "Database",
    emoji: "🗄️",
    skills: [
      { name: "MySQL",  icon: <SiMysql /> },
      { name: "SQL",    icon: <FaDatabase /> },
    ],
  },
  {
    title: "Tools & Platforms",
    emoji: "🛠️",
    skills: [
      { name: "Git",     icon: <FaGitAlt /> },
      { name: "GitHub",  icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "IntelliJ",icon: <SiIntellijidea /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section py-28 relative">
      <div className="orb orb-amber w-[400px] h-[400px] top-0 left-0 opacity-[0.06]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#c9a84c] uppercase tracking-widest text-sm mb-3">What I work with</p>
        <h2
          className="text-5xl font-black section-heading inline-block"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Technical <span className="gradient-text">Skills</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="glass card-hover border border-[var(--border)] rounded-3xl p-8"
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-7">
              <span className="text-2xl">{cat.emoji}</span>
              <h3
                className="text-xl font-bold text-[#e8d5a3]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {cat.title}
              </h3>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: ci * 0.1 + si * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08 }}
                  className="skill-pill flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-default"
                >
                  <span className="text-[#c9a84c]">{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;