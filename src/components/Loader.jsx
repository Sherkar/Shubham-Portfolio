import React from "react";
import { motion } from "framer-motion";

function Loader() {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-[9999]"
      style={{ background: "#080808" }}
    >
      {/* Pulsing ring */}
      <div className="relative mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 60%, rgba(201,168,76,0.9) 80%, transparent 100%)",
          }}
        />
        <div className="absolute inset-2 rounded-full bg-[#080808] flex items-center justify-center">
          <span
            className="text-2xl font-black gradient-text"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            SS
          </span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase"
      >
        Loading Portfolio...
      </motion.p>
    </div>
  );
}

export default Loader;