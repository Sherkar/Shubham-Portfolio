import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { id: "home",         label: "Home" },
    { id: "about",        label: "About" },
    { id: "skills",       label: "Skills" },
    { id: "experience",   label: "Experience" },
    { id: "projects",     label: "Projects" },
    { id: "contact",      label: "Contact" },
  ];

  const socials = [
    { href: "https://github.com/Sherkar", icon: <FaGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/shubham-sherkar-131807252/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "mailto:shubham.sherkar.dev@gmail.com", icon: <FaEnvelope />, label: "Email" },
  ];

  return (
    <footer className="border-t border-[rgba(201,168,76,0.12)] mt-10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">

          {/* Logo */}
          <div>
            <h2
              className="text-2xl font-black gradient-text"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Shubham Sherkar
            </h2>
            <p className="text-[#e8d5a3]/40 text-xs mt-1">Java Full Stack Developer</p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-6 justify-center">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="text-[#e8d5a3]/50 hover:text-[#f5d87a] text-sm transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 glass border border-[rgba(201,168,76,0.2)] rounded-xl flex items-center justify-center text-[#c9a84c] hover:text-[#f5d87a] hover:border-[#f5d87a] transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.2)] to-transparent mb-8" />

        {/* Bottom */}
        <p className="text-center text-[#e8d5a3]/30 text-xs">
          © {year} Shubham Sherkar. Crafted with{" "}
          <FaHeart className="inline text-[#c9a84c] mx-1" />
          in Java &amp; React.
        </p>
      </div>
    </footer>
  );
}

export default Footer;