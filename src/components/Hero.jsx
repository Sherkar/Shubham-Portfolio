import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center px-6 md:px-10 lg:px-16 py-20"
    >
      {/* ================= BACKGROUND ORBS ================= */}

      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.5), transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.35), transparent 70%)",
        }}
      />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">

        {/* =====================================================
            LEFT: TEXT
        ====================================================== */}

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

          {/* Hello */}

          <p className="text-[#c9a84c] text-lg mb-2 font-medium tracking-widest uppercase">
            Hello, I'm
          </p>

          {/* Name */}

          <h1
            className="text-5xl md:text-7xl font-black leading-tight mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Shubham{" "}
            <span className="gradient-text">
              Sherkar
            </span>
          </h1>

          {/* Typing Animation */}

          <div className="text-xl md:text-2xl font-semibold text-[#e8d5a3]/80 h-14 flex items-center">
            <span className="text-[#f5d87a] mr-2">
              &gt;
            </span>

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
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          {/* Description */}

          <p className="text-[#e8d5a3]/60 mt-6 leading-8 text-base max-w-xl">
            Passionate Java Full Stack Developer with hands-on internship
            experience building scalable web applications. Skilled in Java,
            Spring Boot, Hibernate, React.js, REST APIs and MySQL.
            Focused on crafting elegant, high-performance software solutions.
          </p>

          {/* ================= CTA BUTTONS ================= */}

          <div className="flex flex-wrap gap-4 mt-10">

            {/* Resume */}

            <a
              href="/resume.pdf"
              download
              className="btn-gold px-7 py-4 rounded-xl flex items-center gap-3 text-sm"
            >
              <FaDownload />
              Download Resume
            </a>

            {/* Contact */}

            <a
              href="#contact"
              className="btn-outline px-7 py-4 rounded-xl flex items-center gap-3 text-sm"
            >
              <FaEnvelope />
              Contact Me
            </a>

          </div>

          {/* ================= SOCIAL LINKS ================= */}

          <div className="flex gap-5 mt-9">

            {[
              {
                href: "https://github.com/Sherkar",
                icon: <FaGithub />,
                label: "GitHub",
              },
              {
                href:
                  "https://www.linkedin.com/in/shubham-sherkar-131807252/",
                icon: <FaLinkedin />,
                label: "LinkedIn",
              },
              {
                href: "mailto:shubham.sherkar.dev@gmail.com",
                icon: <FaEnvelope />,
                label: "Email",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={
                  social.label === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  social.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={social.label}
                className="w-11 h-11 glass border border-[rgba(201,168,76,0.25)] rounded-xl flex items-center justify-center text-[#c9a84c] hover:text-[#f5d87a] hover:border-[#f5d87a] hover:shadow-[0_0_18px_rgba(245,216,122,0.25)] transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}

          </div>
        </motion.div>

        {/* =====================================================
            RIGHT: PROFILE VISUAL
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="flex justify-center items-center"
        >
          <div className="relative">

            {/* ================= ROTATING GOLD RING ================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 m-auto w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 60%, rgba(201,168,76,0.7) 80%, transparent 100%)",
              }}
            />

            {/* ================= OUTER GOLD GLOW ================= */}

            <div
              className="absolute inset-0 m-auto w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[390px] md:h-[390px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.08) 40%, transparent 72%)",
                filter: "blur(8px)",
              }}
            />

            {/* ================= PROFILE IMAGE ================= */}

            <div
              className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-[3px] flex items-center justify-center"
              style={{
                borderColor: "rgba(201,168,76,0.7)",
                background: "#ffffff",
                boxShadow:
                  "0 0 45px rgba(201,168,76,0.25), inset 0 0 30px rgba(201,168,76,0.08)",
              }}
            >

              {/* CLOUDINARY PHOTO */}

              <img
                src="https://res.cloudinary.com/sfyjkrej/image/upload/v1786196931/My_uxhe5v.png"
                alt="Shubham Sherkar"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = "none";

                  const fallback =
                    e.currentTarget.nextElementSibling;

                  if (fallback) {
                    fallback.style.display = "flex";
                  }
                }}
              />

              {/* ================= FALLBACK ================= */}

              <div
                className="w-full h-full items-center justify-center flex-col gap-2"
                style={{
                  display: "none",
                }}
              >
                <span
                  className="text-6xl font-black gradient-text"
                  style={{
                    fontFamily:
                      "'Playfair Display', serif",
                  }}
                >
                  SS
                </span>

                <span className="text-[#e8d5a3]/60 text-sm">
                  Software Engineer
                </span>
              </div>

            </div>

            {/* =================================================
                FLOATING BADGE — FULL STACK
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-8 glass border border-[rgba(201,168,76,0.3)] px-4 py-2 rounded-xl text-xs text-[#f5d87a] font-semibold shadow-lg"
            >
              💻 Full Stack Dev
            </motion.div>

            {/* =================================================
                FLOATING BADGE — OPEN TO WORK
            ================================================== */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-6 bottom-10 glass border border-[rgba(201,168,76,0.3)] px-4 py-2 rounded-xl text-xs text-[#f5d87a] font-semibold shadow-lg"
            >
              🚀 Open to Work
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* =====================================================
          STATS BAR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.7,
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 hidden md:block"
      >
        <div className="glass border border-[rgba(201,168,76,0.18)] rounded-2xl px-8 py-5 flex justify-around">

          {[
            {
              value: "6+",
              label: "Projects Built",
            },
            {
              value: "10+",
              label: "Technologies",
            },
            {
              value: "6mo",
              label: "Internship",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <p
                className="text-3xl font-black gradient-text"
                style={{
                  fontFamily:
                    "'Playfair Display', serif",
                }}
              >
                {stat.value}
              </p>

              <p className="text-[#e8d5a3]/50 text-xs mt-1">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </motion.div>

    </section>
  );
}

export default Hero;
