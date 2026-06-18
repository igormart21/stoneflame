"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getWhatsAppLink } from "@/lib/utils";

const testimonials = [
  {
    quote: "I've cooked on cast iron my whole life. After one dinner in the StoneFlame Grand Pot over oak wood, I couldn't go back. The flavor difference is not subtle.",
    name: "Marcus W.",
    role: "Chef & BBQ Competitor",
    location: "Austin, TX",
    rating: 5,
  },
  {
    quote: "It arrived wrapped in cloth with a handwritten note from the artisan. Before I even cooked in it I understood — this was something different.",
    name: "Elena P.",
    role: "Food Stylist & Writer",
    location: "New York, NY",
    rating: 5,
  },
  {
    quote: "We use ours over campfire every weekend. Heat retention means we cook less and gather more. It's become the ritual around which our family connects.",
    name: "Daniel R.",
    role: "Outdoor Enthusiast",
    location: "Colorado",
    rating: 5,
  },
  {
    quote: "I gifted the Dutch Oven to my father — a man who has everything. He called it the best gift of his life. That says everything.",
    name: "Sophia C.",
    role: "Interior Designer",
    location: "Miami, FL",
    rating: 5,
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" className="w-3.5 h-3.5"
          fill={i < n ? "#C67C3B" : "#E8E0D5"}>
          <path d="M6 0.5L7.35 4.15H11.27L8.19 6.41L9.54 10.07L6.46 7.81L3.38 10.07L4.73 6.41L1.65 4.15H5.57L6 0.5Z"/>
        </svg>
      ))}
    </div>
  );
}

function TestiCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-card p-6 md:p-8 relative"
      style={{
        border: "1px solid #EDE7DC",
        boxShadow: "0 1px 4px rgba(26,18,8,0.05)",
      }}
    >
      {/* Big quote mark */}
      <div className="absolute top-4 right-6 font-display text-6xl leading-none select-none pointer-events-none"
        style={{ color: "rgba(198,124,59,0.1)" }}>
        &ldquo;
      </div>

      <Stars n={t.rating}/>

      <blockquote className="font-display text-xl md:text-2xl text-stone-dark leading-relaxed mt-5 mb-6 font-light italic relative z-10">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3 pt-4 border-t border-stone-border">
        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "linear-gradient(135deg,#F5F0E8,#EDE7DC)", border:"1px solid #EDE7DC" }}>
          <span className="font-display text-sm text-bronze">{t.name[0]}</span>
        </div>
        <div>
          <p className="font-body text-sm font-medium text-stone-dark">{t.name}</p>
          <p className="font-body text-xs text-stone" style={{fontSize:"0.72rem"}}>
            {t.role} · {t.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section className="bg-bg section-padding" id="reviews">
      <div className="container-xl">

        {/* Header */}
        <div ref={headerRef} className="mb-10 md:mb-12">
          <motion.p className="font-body text-xs text-stone/60 mb-2"
            initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ duration:0.5 }}
            style={{ letterSpacing:"0.05em" }}>
            Told by those who cook
          </motion.p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.div
              initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.7, ease:[0.25,0.46,0.45,0.94], delay:0.1 }}
            >
              <div className="flex items-baseline gap-3">
                <h2 className="font-display font-light text-4xl md:text-5xl text-stone-dark leading-none">Best</h2>
                <span className="font-body text-sm text-stone/50 tracking-widest">×</span>
                <h2 className="font-display font-light text-4xl md:text-5xl text-bronze italic leading-none">Reviews</h2>
              </div>
            </motion.div>
            <motion.a href="https://instagram.com/stoneflame" target="_blank" rel="noopener noreferrer"
              data-cursor="hover"
              className="flex items-center gap-2 font-body text-sm text-stone hover:text-bronze transition-colors duration-250"
              initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ delay:0.3 }}>
              @stoneflame
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>
          <div className="mt-6 h-px" style={{ background:"linear-gradient(90deg,#C67C3B,#EDE7DC,transparent)" }}/>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {testimonials.map((t, i) => (
            <TestiCard key={i} t={t} i={i}/>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}} transition={{ delay:0.9 }}
        >
          <h3 className="font-display font-light text-3xl md:text-4xl text-stone-dark mb-3">
            Ready to cook with <span className="italic text-bronze">fire?</span>
          </h3>
          <p className="font-body text-sm text-stone mb-7 max-w-sm mx-auto leading-relaxed">
            Every order starts with a conversation. Tell us how you cook — we&apos;ll help you choose the right piece.
          </p>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" data-cursor="hover"
            className="inline-flex items-center gap-3 font-body text-xs tracking-widest uppercase px-10 py-4 bg-vulcanic text-offwhite hover:bg-bronze transition-colors duration-300"
            style={{letterSpacing:"0.18em"}}>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M14.59 11.98c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.37-.42.12-.14.16-.24.24-.41.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.75-1.8-.2-.47-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.43.06-.65.3-.22.24-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.62 4.15 3.67.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 1.77.46 3.43 1.27 4.87L0 20l5.32-1.39A9.945 9.945 0 0010 20c5.523 0 10-4.477 10-10S15.523 0 10 0zm0 18.18a8.18 8.18 0 01-4.18-1.14l-.3-.18-3.1.81.83-3.01-.2-.31A8.18 8.18 0 1110 18.18z"/>
            </svg>
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
