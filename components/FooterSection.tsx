"use client";

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer className="bg-[#0D0A08] border-t border-[#C9A96E]/20 py-12 px-6">
      <div className="flex flex-col items-center gap-5">
        <span className="font-cormorant text-[24px] font-light tracking-[0.15em] text-[#C9A96E]">
          Tirta
        </span>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9C8E7E] hover:text-[#C9A96E] transition-colors duration-300"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
        <p className="font-lato text-[11px] text-[#9C8E7E]">
          © 2025 Tirta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
