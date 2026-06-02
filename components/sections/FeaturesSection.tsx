"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import EmberParticles from "@/components/EmberParticles";
import { getWhatsAppLink } from "@/lib/utils";

const features = [
  {
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
        <circle cx="22" cy="22" r="18" stroke="#C67C3B" strokeWidth="1.2" strokeDasharray="4 3"/>
        <path d="M22 10C22 10 29 16 29 22C29 26.418 25.866 30 22 30C18.134 30 15 26.418 15 22C15 18 17 15 18.5 14C18.5 17 20.5 18 20.5 18C20.5 18 20 15 22 12C22 15 23 16 23 16C24 14.5 22 10 22 10Z" fill="#C67C3B" fillOpacity="0.9"/>
      </svg>
    ),
    title: "Personal Touch",
    desc: "Every piece is signed by its artisan. You know exactly who made your pot.",
  },
  {
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
        <rect x="6" y="6" width="32" height="32" rx="2" stroke="#C67C3B" strokeWidth="1.2"/>
        <path d="M14 22L18 26L30 16" stroke="#C67C3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="22" r="6" stroke="#C67C3B" strokeWidth="0.8" strokeOpacity="0.4"/>
      </svg>
    ),
    title: "Eco Innovation",
    desc: "Zero synthetic coatings. No PFAS. Pure volcanic rock — as nature made it.",
  },
  {
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
        <path d="M12 36C12 36 8 26 8 20C8 13.373 14.268 8 22 8C29.732 8 36 13.373 36 20C36 26 32 36 32 36H12Z" stroke="#C67C3B" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M17 36V40M27 36V40" stroke="#C67C3B" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M22 14C22 14 26 18 26 21C26 23.761 24.209 26 22 26C19.791 26 18 23.761 18 21C18 18 22 14 22 14Z" fill="#C67C3B" fillOpacity="0.5"/>
      </svg>
    ),
    title: "Sustainable Materials",
    desc: "Sourced from ethical volcanic formations. No quarry waste — every chip becomes a smaller piece.",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="relative overflow-hidden" style={{ background: "#1A1208" }} id="features">
      {/* Embers */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <EmberParticles density={30}/>
      </div>

      {/* Warm glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 100%, rgba(198,124,59,0.18) 0%, transparent 60%)",
      }}/>

      <div
        className="container-xl relative z-10"
        style={{ paddingTop: "clamp(5.5rem, 11vw, 8.5rem)", paddingBottom: "clamp(5.5rem, 11vw, 8.5rem)" }}
        ref={sectionRef}
      >
        {/* Two-column layout: text left, features right — matches reference dark section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* LEFT: Editorial text */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.9, ease:[0.25,0.46,0.45,0.94] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div style={{ width:36, height:1, background:"linear-gradient(90deg,#A36D3A,#C67C3B)" }}/>
              <span className="font-body text-xs tracking-widest uppercase text-copper" style={{letterSpacing:"0.22em"}}>Why Stone</span>
            </div>

            <h2 className="font-display font-light leading-none text-offwhite mb-6" style={{ fontSize:"clamp(2.5rem,4.5vw,4rem)" }}>
              We craft cookware<br/>
              you can trust<br/>
              <em className="italic text-copper not-italic">for generations.</em>
            </h2>

            <p className="font-body text-base text-offwhite/60 leading-relaxed mb-8 max-w-sm">
              Each piece is thoughtfully made by a single artisan — no production line, no shortcuts. Just stone, hands, and time.
            </p>

            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" data-cursor="hover"
              className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase px-6 py-3.5 border border-copper/50 text-copper hover:bg-copper hover:text-bg transition-all duration-300"
              style={{letterSpacing:"0.18em"}}>
              Order Your Piece
            </a>
          </motion.div>

          {/* RIGHT: 3 feature cards — matches reference's icon row */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity:0, y:28 }} animate={inView ? { opacity:1, y:0 } : {}}
                transition={{ duration:0.7, delay: 0.15 + i * 0.12, ease:[0.25,0.46,0.45,0.94] }}
                className="flex flex-col gap-4 p-5"
                style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(198,124,59,0.12)" }}
              >
                <div>{f.icon}</div>
                <h3 className="font-display text-xl text-offwhite">{f.title}</h3>
                <p className="font-body text-sm text-offwhite/55 leading-relaxed" style={{fontSize:"0.8rem"}}>{f.desc}</p>
                {/* divider line */}
                <div className="mt-auto pt-4 border-t border-copper/15">
                  <span className="font-body text-xs uppercase tracking-widest text-copper/40">StoneFlame</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-20 pt-12 border-t grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ borderColor:"rgba(198,124,59,0.2)" }}
          initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ delay:0.6 }}
        >
          {[
            { val:"100%", label:"Natural Stone" },
            { val:"30+", label:"Hours per piece" },
            { val:"∞", label:"Lifespan" },
            { val:"0", label:"Synthetic coatings" },
          ].map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-3xl md:text-4xl font-light" style={{
                background:"linear-gradient(135deg,#A36D3A,#C67C3B)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
              }}>{s.val}</div>
              <div className="font-body text-xs text-offwhite/40 uppercase tracking-wider mt-1" style={{fontSize:"0.7rem"}}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
