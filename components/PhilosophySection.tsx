"use client";
import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const photos = [
  {
    src: "https://unsplash.com/photos/oVuN0C5-FdE/download?force=true",
    alt: "Philosophy 1",
  },
  {
    src: "https://unsplash.com/photos/wJV7Lz5Q88o/download?force=true",
    alt: "Philosophy 2",
  },
];

export default function PhilosophySection() {
  return (
    <section id="about" className="bg-[#0D0A08] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={fadeInUp}
            className="font-lato text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]"
          >
            OUR PHILOSOPHY
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-shippori text-[36px] text-[#F5F0E8] leading-tight"
          >
            古来から伝わる、手の記憶。
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-shippori text-[15px] leading-[2] text-[#9C8E7E]"
          >
            バリ島に息づく伝統的な癒しの哲学——
            <br />
            自然の力と、熟練した手技が交わるとき、
            <br />
            身体は本来の静けさを思い出す。
            <br />
            Tirtaは、その出会いを日本にもたらします。
          </motion.p>
        </motion.div>

        {/* Right: Photo Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex gap-3"
        >
          {photos.map((photo) => (
            <motion.div key={photo.alt} variants={fadeInUp} className="flex-1 overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                style={{ aspectRatio: "3/4", width: "100%", objectFit: "cover", display: "block" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
