"use client";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } },
};

export default function ReservationSection() {
  return (
    <section
      id="reservation"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-32 px-6 flex items-center justify-center min-h-[600px]"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-center gap-6 text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="font-lato text-[11px] tracking-[0.2em] text-[#C9A96E] border border-[#C9A96E] px-4 py-1.5"
        >
          完全予約制
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="font-shippori text-[36px] text-[#F5F0E8]"
        >
          ご予約・お問い合わせ
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="font-shippori text-[15px] text-[#9C8E7E]"
        >
          LINEまたはメールにてお気軽にご連絡ください
        </motion.p>
        <motion.div variants={fadeInUp}>
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-lato text-[13px] tracking-[0.15em] uppercase bg-[#C9A96E] text-[#0D0A08] px-12 py-4 hover:bg-[#b8956a] transition-colors duration-300"
          >
            LINE で予約する
          </a>
        </motion.div>
        <motion.p
          variants={fadeInUp}
          className="font-lato text-[13px] text-[#9C8E7E]"
        >
          info@tirta-spa.jp
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="font-shippori text-[13px] text-[#9C8E7E]"
        >
          11:00〜20:00 / 火曜定休
        </motion.p>
      </motion.div>
    </section>
  );
}
