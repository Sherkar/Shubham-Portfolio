import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace with your EmailJS credentials
    emailjs
      .sendForm(
        "service_rvk2v1c",   // ← replace with your service ID
        "template_v1qbwkt",  // ← replace with your template ID
        form.current,
        "j2N2IItxjKRQeNOy2"  // ← replace with your public key
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
          setLoading(false);
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  const socials = [
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
  ];

  return (
    <section id="contact" className="section py-28 relative">
      <div className="orb orb-amber w-[400px] h-[400px] right-0 bottom-0 opacity-[0.07]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#c9a84c] uppercase tracking-widest text-sm mb-3">Get in touch</p>
        <h2
          className="text-5xl font-black section-heading inline-block"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact <span className="gradient-text">Me</span>
        </h2>
        <p className="text-[#e8d5a3]/50 mt-6 max-w-xl mx-auto text-sm">
          Open to Full Stack Java Developer opportunities, collaborations, and technical discussions.
          Let's build something great together!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* LEFT – Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass border border-[var(--border)] rounded-3xl p-10"
        >
          <h3
            className="text-2xl font-bold gradient-text mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's Connect 🤝
          </h3>

          <p className="text-[#e8d5a3]/60 leading-7 text-sm mb-8">
            I'm passionate about Java Full Stack Development and always excited
            to collaborate on challenging projects. Feel free to reach out!
          </p>

          {/* Contact info */}
          <div className="space-y-5 mb-10">
            {[
              { icon: <FaEnvelope />,      label: "Email",    value: "shubham.sherkar.dev@gmail.com" },
              { icon: <FaMapMarkerAlt />,   label: "Location", value: "Pune District, Maharashtra, India " },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c9a84c] to-[#8a6a1f] flex items-center justify-center text-black flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[#e8d5a3]/40 text-xs uppercase tracking-widest">{c.label}</p>
                  <p className="text-[#e8d5a3] text-sm font-medium mt-0.5">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 glass border border-[rgba(201,168,76,0.25)] rounded-xl flex items-center justify-center text-[#c9a84c] hover:text-[#f5d87a] hover:border-[#f5d87a] hover:shadow-[0_0_18px_rgba(245,216,122,0.25)] transition-all duration-300 text-lg"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT – Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass border border-[var(--border)] rounded-3xl p-10"
        >
          <div className="space-y-5">
            <div>
              <label className="text-[#e8d5a3]/50 text-xs uppercase tracking-widest block mb-2">Your Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Shubham Sherkar"
                required
                className="input-gold w-full p-4 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="text-[#e8d5a3]/50 text-xs uppercase tracking-widest block mb-2">Your Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="you@example.com"
                required
                className="input-gold w-full p-4 rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="text-[#e8d5a3]/50 text-xs uppercase tracking-widest block mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Hello Shubham, I'd love to connect about..."
                required
                className="input-gold w-full p-4 rounded-xl text-sm resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading || sent}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-3 text-sm"
            >
              {sent ? (
                "✅ Message Sent!"
              ) : loading ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;