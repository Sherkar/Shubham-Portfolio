import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaMapMarkerAlt, FaLaptopCode, FaBriefcase } from "react-icons/fa";

function About() {
  const highlights = [
    { icon: <FaUser />,        label: "Name",       value: "Shubham Sherkar" },
    { icon: <FaMapMarkerAlt />,label: "Location",   value: "Pune District, Maharashtra, India" },
    { icon: <FaLaptopCode />,  label: "Role",       value: "Java Full Stack Developer" },
    { icon: <FaBriefcase />,   label: "Status",     value: "Open to Work" },
  ];

  return (
    <section id="about" className="section py-28 relative">
      {/* Background orb */}
      <div className="orb orb-gold w-[350px] h-[350px] -top-10 right-0 opacity-[0.07]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#c9a84c] uppercase tracking-widest text-sm mb-3">Get to know me</p>
        <h2
          className="text-5xl font-black section-heading inline-block"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT – Cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass card-hover border border-[var(--border)] rounded-2xl p-5 flex items-center gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#8a6a1f] flex items-center justify-center text-black text-lg flex-shrink-0">
                {h.icon}
              </div>
              <div>
                <p className="text-[#e8d5a3]/50 text-xs uppercase tracking-widest">{h.label}</p>
                <p className="text-[#e8d5a3] font-semibold text-base mt-0.5">{h.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT – Story */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass border border-[var(--border)] rounded-3xl p-10"
        >
          <h3
            className="text-2xl font-bold gradient-text mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            My Story
          </h3>

          <p className="text-[#e8d5a3]/70 leading-9 text-base">
            I'm <span className="text-[#f5d87a] font-semibold">Shubham Sherkar</span>,a Java Full Stack Developer who enjoys turning ideas into practical solutions through code
          </p>

          <p className="text-[#e8d5a3]/70 leading-9 text-base mt-5">
            I completed my internship at <span className="text-[#f5d87a] font-semibold">Kiran Academy (Java By Kiran)</span> as 
            a Trainee and Intern, where I gained hands-on experience building web applications using Java, Spring Boot, Hibernate, React.js, and REST APIs.
          </p>

          <p className="text-[#e8d5a3]/70 leading-9 text-base mt-5">
            I enjoy exploring how things work, solving problems, and learning something new along the way. For me, software development is not just about writing code; it's about understanding problems, thinking through solutions, and building things that make a difference.

            I'm always looking forward to new challenges, opportunities to grow, and the chance to create something meaningful.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["Problem Solver", "Team Player", "Fast Learner", "Detail Oriented"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  color: "#f5d87a",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
