"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="relative h-screen flex items-center justify-center"
    >
      <motion.div
        className="flex flex-col items-center gap-5 text-center px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="font-lato text-[11px] tracking-[0.4em] uppercase text-[#C9A96E]"
        >
          BALI HEALING RITUAL
        </motion.p>
        <motion.div variants={item} className="w-10 h-px bg-[#C9A96E]" />
        <motion.h1
          variants={item}
          className="font-shippori text-[48px] md:text-[56px] font-normal text-[#F5F0E8] leading-tight"
        >
          身体の声を、聴く。
        </motion.h1>
        <motion.p
          variants={item}
          className="font-shippori text-[16px] text-[#9C8E7E]"
        >
          バリ島古来の癒しの手技を、日本へ。
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#C9A96E]"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
