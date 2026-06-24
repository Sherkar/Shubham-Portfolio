import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home",         label: "Home" },
    { id: "about",        label: "About" },
    { id: "skills",       label: "Skills" },
    { id: "experience",   label: "Experience" },
    { id: "projects",     label: "Projects" },
    { id: "education",    label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "contact",      label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-[0_4px_30px_rgba(201,168,76,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group cursor-pointer">
          <span className="text-2xl font-bold gradient-text tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
            SS
          </span>
          <span className="text-lg font-semibold text-[#e8d5a3] group-hover:text-[#f5d87a] transition">
            Shubham Sherkar
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-7 items-center">
          {links.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer text-sm text-[#e8d5a3]/70 hover:text-[#f5d87a] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#f5d87a] to-[#c9a84c] rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="btn-gold px-5 py-2 rounded-xl text-sm"
            >
              Resume ↓
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden text-[#f5d87a] text-xl"
          aria-label="Toggle menu"
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden glass border-t border-[var(--border)]">
          <ul className="flex flex-col items-center gap-5 py-6">
            {links.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setMenu(false)}
                  className="cursor-pointer text-[#e8d5a3] hover:text-[#f5d87a] transition text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;