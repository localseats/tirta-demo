"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "生まれて初めて、施術中に眠ってしまいました。それほど深い時間でした。",
    name: "M.K.　38歳 女性",
  },
  {
    text: "空間に入った瞬間から、別世界でした。日本でこれほどの体験ができるとは。",
    name: "T.H.　45歳 男性",
  },
  {
    text: "施術後の静けさが、翌日まで続いています。また必ず来ます。",
    name: "A.S.　31歳 女性",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } },
};

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0D0A08] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" as const }}
          className="font-lato text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] text-center mb-14"
        >
          GUEST VOICES
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex flex-col gap-4"
            >
              <span className="font-cormorant text-[80px] leading-none text-[#C9A96E]/50 select-none">
                &ldquo;
              </span>
              <p className="font-shippori text-[15px] leading-[1.9] text-[#F5F0E8]">
                {t.text}
              </p>
              <div className="w-10 h-px bg-[#C9A96E]" />
              <p className="font-lato text-[11px] tracking-[0.2em] text-[#9C8E7E]">
                {t.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
