"use client";
import { motion } from "framer-motion";

const treatments = [
  {
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
    en: "Bali Signature Ritual",
    ja: "バリ伝統の全身アロマトリートメント",
    time: "90分",
    price: "¥15,000",
  },
  {
    image: "https://unsplash.com/photos/IxX6XrMfu4U/download?force=true",
    en: "Hot Stone Therapy",
    ja: "溶岩石の熱で深部の緊張をほぐす",
    time: "60分",
    price: "¥11,000",
  },
  {
    image: "https://unsplash.com/photos/cU53ZFBr3lk/download?force=true",
    en: "Aroma Oil Journey",
    ja: "厳選アロマオイルによるリラクゼーション",
    time: "75分",
    price: "¥13,000",
  },
  {
    image: "https://unsplash.com/photos/Y1JKxNFwZx4/download?force=true",
    en: "Couples Retreat",
    ja: "おふたりで過ごす特別なひととき",
    time: "90分",
    price: "¥28,000（2名）",
  },
];

export default function TreatmentSection() {
  return (
    <section
      id="treatment"
      className="py-24 px-6 md:px-16 lg:px-24"
      style={{ backgroundColor: "#1A1410" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" as const }}
          className="text-center mb-16 flex flex-col items-center gap-4"
        >
          <p className="font-lato text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]">
            HEALING RITUALS
          </p>
          <h2 className="font-shippori text-[36px] text-[#F5F0E8]">
            施術メニュー
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((t, i) => (
            <motion.div
              key={t.en}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: "easeOut" as const, delay: i * 0.15 }}
              className="group border-b border-[#C9A96E]/40"
              style={{ backgroundColor: "#0D0A08" }}
            >
              <div className="overflow-hidden">
                <img
                  src={t.image}
                  alt={t.en}
                  style={{
                    aspectRatio: "3/4",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.7s ease",
                  }}
                  className="group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="font-cormorant text-[22px] text-[#F5F0E8]">
                  {t.en}
                </h3>
                <p className="font-shippori text-[13px] text-[#9C8E7E]">
                  {t.ja}
                </p>
                <p className="font-lato text-[13px] text-[#C9A96E] mt-1">
                  {t.time} / {t.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
