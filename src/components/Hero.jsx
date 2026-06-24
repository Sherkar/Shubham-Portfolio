import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section pt-28 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb orb-gold w-[500px] h-[500px] -top-32 -left-40" />
      <div className="orb orb-amber w-[400px] h-[400px] bottom-0 right-0" />
      <div className="orb orb-gold w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* ── LEFT: TEXT ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start mb-6 px-4 py-2 rounded-full glass border border-[rgba(201,168,76,0.3)] text-[#f5d87a] text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#f5d87a] animate-pulse" />
            Open to Full Stack Developer Opportunities
          </motion.div>

          <p className="text-[#c9a84c] text-lg mb-2 font-medium tracking-widest uppercase">
            Hello, I'm
          </p>

          <h1
            className="text-5xl md:text-7xl font-black leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Shubham{" "}
            <span className="gradient-text">Sherkar</span>
          </h1>

          {/* Typing animation */}
          <div className="text-xl md:text-2xl font-semibold text-[#e8d5a3]/80 h-14 flex items-center">
            <span className="text-[#f5d87a] mr-2">&gt;</span>
            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                2000,
                "Spring Boot Developer",
                2000,
                "React.js Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
              repeat={Infinity}
              cursor
            />
          </div>

          <p className="text-[#e8d5a3]/60 mt-6 leading-8 text-base max-w-xl">
            Passionate Java Full Stack Developer with hands-on internship
            experience building scalable web applications. Skilled in Java,
            Spring Boot, Hibernate, React.js, REST APIs and MySQL.
            Focused on crafting elegant, high-performance software solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/resume.pdf"
              download
              className="btn-gold px-7 py-4 rounded-xl flex items-center gap-3 text-sm"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="btn-outline px-7 py-4 rounded-xl flex items-center gap-3 text-sm"
            >
              <FaEnvelope /> Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-5 mt-9">
            {[
              {
                href: "https://github.com/Sherkar",
                icon: <FaGithub />,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/shubham-sherkar-131807252/",
                icon: <FaLinkedin />,
                label: "LinkedIn",
              },
              {
                href: "mailto:shubham.sherkar.dev@gmail.com",
                icon: <FaEnvelope />,
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 glass border border-[rgba(201,168,76,0.25)] rounded-xl flex items-center justify-center text-[#c9a84c] hover:text-[#f5d87a] hover:border-[#f5d87a] hover:shadow-[0_0_18px_rgba(245,216,122,0.25)] transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: PROFILE VISUAL ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-auto w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 60%, rgba(201,168,76,0.6) 80%, transparent 100%)",
              }}
            />

            {/* Glow halo */}
            <div
              className="absolute inset-0 m-auto w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)",
              }}
            />

            {/* Profile image / placeholder */}
            <div
              className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-[3px] flex items-center justify-center"
              style={{
                borderColor: "rgba(201,168,76,0.5)",
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(0,0,0,0.6) 100%)",
                boxShadow: "0 0 60px rgba(201,168,76,0.2)",
              }}
            >
              {/* Initials fallback — replace src with /profile.jpg when you add your photo */}
              <img
                src="/photo.png"
                alt="Shubham Sherkar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="hidden w-full h-full items-center justify-center flex-col gap-2"
                style={{ display: "none" }}
              >
                <FaCode className="text-[#c9a84c] text-5xl" />
                <span
                  className="text-6xl font-black gradient-text"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  SS
                </span>
              </div>
            </div>

            {/* Floating badge — Code */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-4 top-8 glass border border-[rgba(201,168,76,0.3)] px-4 py-2 rounded-xl text-xs text-[#f5d87a] font-semibold shadow-lg"
            >
              💻 Full Stack Dev
            </motion.div>

            {/* Floating badge — Available */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -left-6 bottom-10 glass border border-[rgba(201,168,76,0.3)] px-4 py-2 rounded-xl text-xs text-[#f5d87a] font-semibold shadow-lg"
            >
              🚀 Open to Work
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6"
      >
        <div className="glass border border-[rgba(201,168,76,0.18)] rounded-2xl px-8 py-5 flex justify-around">
          {[
            { value: "6+", label: "Projects Built" },
            { value: "10+", label: "Technologies" },
            { value: "6mo", label: "Internship" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl font-black gradient-text"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </p>
              <p className="text-[#e8d5a3]/50 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;