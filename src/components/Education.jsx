import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from "react-icons/fa";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    university: "CSMSS Chh. Shahu College of Engineering",
    cgpa: "CGPA: 7.04",
    year: "2021 – 2025",
    desc: "Focused on core computer science subjects, including Data Structures and Algorithms (DSA), Object-Oriented Programming (OOPs), Database Management Systems (DBMS), and Computer Networks.",
  },
  {
    degree: "Higher Secondary Certificate (12th Boards)",
    university: "Sant Dnyaneshwar College",
    cgpa: "Percentage: 98%",
    year: "2021",
    desc: "Science Stream — Built a strong foundation in Mathematics, Physics, and logical reasoning.",
  },
  {
    degree: "Secondary School Certificate (10th Boards)",
    university: "New High School",
    cgpa: "Percentage: 85%",
    year: "2019",
    desc: "General school education focusing on science, mathematics, and language arts.",
  },
];

function Education() {
  return (
    <section id="education" className="section py-28 relative">
      <div className="orb orb-gold w-[350px] h-[350px] right-0 bottom-0 opacity-[0.06]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#c9a84c] uppercase tracking-widest text-sm mb-3">Academic Background</p>
        <h2
          className="text-5xl font-black section-heading inline-block"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          My <span className="gradient-text">Education</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[26px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px]"
          style={{ background: "linear-gradient(180deg, #f5d87a, #c9a84c, transparent)" }}
        />

        <div className="space-y-12">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              } gap-8 items-start md:items-center`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 timeline-dot z-10 mt-1 md:mt-0" />

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:mr-10" : "md:ml-10"}`}>
                <div className="glass card-hover border border-[var(--border)] rounded-3xl p-8">
                  {/* Icon + Degree */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#8a6a1f] flex items-center justify-center text-black text-xl flex-shrink-0">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold text-[#e8d5a3] leading-snug"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.degree}
                      </h3>
                      <p className="flex items-center gap-2 text-[#c9a84c] text-sm mt-2">
                        <FaUniversity /> {item.university}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#e8d5a3]/55 text-sm leading-7 mb-5">{item.desc}</p>

                  <div className="flex flex-wrap gap-3">
                    <span
                      className="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2"
                      style={{
                        background: "rgba(201,168,76,0.12)",
                        border: "1px solid rgba(201,168,76,0.3)",
                        color: "#f5d87a",
                      }}
                    >
                      <FaAward /> {item.cgpa}
                    </span>
                    <span
                      className="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 glass"
                      style={{ color: "#e8d5a3" }}
                    >
                      <FaCalendarAlt /> {item.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;