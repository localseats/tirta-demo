"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" as const } },
};

const accessInfo = [
  { label: "住所", value: "〒107-0062 東京都港区南青山3-1-XX" },
  { label: "最寄り駅", value: "表参道駅 B3出口より徒歩5分" },
  { label: "営業時間", value: "11:00〜20:00" },
  { label: "定休日", value: "毎週火曜日" },
];

export default function AccessSection() {
  return (
    <section id="access" className="bg-[#0D0A08] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6 max-w-md"
        >
          <motion.p
            variants={fadeInUp}
            className="font-lato text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]"
          >
            ACCESS
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-shippori text-[36px] text-[#F5F0E8]"
          >
            アクセス
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex flex-col gap-5">
            {accessInfo.map(({ label, value }) => (
              <div key={label}>
                <p className="font-shippori text-[13px] text-[#C9A96E]/70 mb-1">
                  {label}
                </p>
                <p className="font-shippori text-[14px] text-[#9C8E7E]">
                  {value}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeInUp}>
            <a
              href="https://www.google.com/maps/search/東京都港区南青山"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid #C9A96E",
                color: "#C9A96E",
                padding: "12px 28px",
                fontSize: "11px",
                letterSpacing: "0.25em",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C9A96E";
                e.currentTarget.style.color = "#0D0A08";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#C9A96E";
              }}
            >
              <MapPin size={14} />
              <span className="font-lato">GOOGLE MAP</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
