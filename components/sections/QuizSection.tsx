"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink } from "@/lib/utils";

type Step = 0 | 1 | 2;

const q1 = {
  question: "How many people do you usually cook for?",
  options: [
    { label: "2–4 people", sub: "Intimate dinners", value: "small" },
    { label: "4–8 people", sub: "Family & friends", value: "medium" },
    { label: "8+ people", sub: "Feasts & gatherings", value: "large" },
  ],
};
const q2 = {
  question: "Where do you cook most?",
  options: [
    { label: "Home Kitchen", sub: "Gas or electric stove", value: "home" },
    { label: "BBQ & Grill", sub: "Charcoal or wood", value: "bbq" },
    { label: "Camping", sub: "Open fire outdoors", value: "camping" },
    { label: "Wood Stove", sub: "Traditional hearth", value: "stove" },
  ],
};

const recs: Record<string, Record<string, { name: string; price: string; desc: string }>> = {
  small: {
    home:    { name:"Stone Mini Cocotte",    price:"From $160", desc:"Elegant single-serve for home." },
    bbq:     { name:"Artisan Stone Skillet", price:"From $240", desc:"Perfect sear over hot coals." },
    camping: { name:"Stone Mini Cocotte",    price:"From $160", desc:"Compact and deeply personal." },
    stove:   { name:"Stone Dutch Oven",      price:"From $360", desc:"Precision heat for everyday cooking." },
  },
  medium: {
    home:    { name:"Stone Dutch Oven",      price:"From $360", desc:"The versatile kitchen workhorse." },
    bbq:     { name:"Vulcanic Grand Pot",    price:"From $480", desc:"Commands the grill." },
    camping: { name:"Vulcanic Grand Pot",    price:"From $480", desc:"The campfire centerpiece." },
    stove:   { name:"Volcanic Stone Wok",    price:"From $420", desc:"Stir-fry, braise, roast in one." },
  },
  large: {
    home:    { name:"Grand Stone Brasier",   price:"From $580", desc:"For the serious entertainer." },
    bbq:     { name:"Grand Stone Brasier",   price:"From $580", desc:"Built for the pit." },
    camping: { name:"Vulcanic Grand Pot",    price:"From $480", desc:"Feed the whole camp." },
    stove:   { name:"Grand Stone Brasier",   price:"From $580", desc:"Long, slow, magnificent." },
  },
};

export default function QuizSection() {
  const [step, setStep] = useState<Step>(0);
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");

  const rec = ans1 && ans2 ? recs[ans1]?.[ans2] : null;

  const reset = () => { setStep(0); setAns1(""); setAns2(""); };

  const waMsg = rec
    ? `Hello! I took the StoneFlame quiz and my recommendation is the *${rec.name}*. I'd love to order one!`
    : undefined;

  return (
    <section className="section-padding" style={{ background:"#F5F0E8" }} id="quiz">
      <div className="container-xl">
        <div className="max-w-xl mx-auto text-center">

          {/* Header */}
          <p className="font-body text-xs tracking-widest uppercase text-bronze mb-3" style={{letterSpacing:"0.22em"}}>
            Find Your Piece
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-stone-dark mb-3 leading-none">
            Which stone<br/>
            <span className="italic text-bronze">chooses you?</span>
          </h2>
          <p className="font-body text-sm text-stone mb-10 leading-relaxed">
            Answer two questions. We&apos;ll recommend the perfect StoneFlame piece.
          </p>

          {/* Progress dots */}
          {step < 2 && (
            <div className="flex items-center justify-center gap-2 mb-8">
              {[0,1].map((i) => (
                <div key={i} className="rounded-full transition-all duration-400"
                  style={{
                    width: i === step ? 28 : 8, height: 8,
                    background: i <= step ? "#C67C3B" : "#EDE7DC",
                  }}/>
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="q1"
                initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }}
                exit={{ opacity:0, x:-20 }} transition={{ duration:0.35 }}>
                <p className="font-body text-base text-stone-dark font-medium mb-6">{q1.question}</p>
                <div className="flex flex-col gap-3">
                  {q1.options.map((opt) => (
                    <button key={opt.value} data-cursor="hover"
                      onClick={() => { setAns1(opt.value); setTimeout(() => setStep(1), 250); }}
                      className="flex items-center justify-between p-4 md:p-5 text-left transition-all duration-250 group"
                      style={{
                        background: ans1 === opt.value ? "rgba(198,124,59,0.08)" : "#FFFFFF",
                        border: ans1 === opt.value ? "1px solid #C67C3B" : "1px solid #EDE7DC",
                      }}>
                      <div>
                        <div className="font-body text-sm font-medium text-stone-dark group-hover:text-bronze transition-colors">{opt.label}</div>
                        <div className="font-body text-xs text-stone mt-0.5">{opt.sub}</div>
                      </div>
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-stone group-hover:text-bronze transition-colors flex-shrink-0">
                        <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="q2"
                initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }}
                exit={{ opacity:0, x:-20 }} transition={{ duration:0.35 }}>
                <p className="font-body text-base text-stone-dark font-medium mb-6">{q2.question}</p>
                <div className="grid grid-cols-2 gap-3">
                  {q2.options.map((opt) => (
                    <button key={opt.value} data-cursor="hover"
                      onClick={() => { setAns2(opt.value); setTimeout(() => setStep(2), 250); }}
                      className="p-4 text-center transition-all duration-250 group"
                      style={{
                        background: ans2 === opt.value ? "rgba(198,124,59,0.08)" : "#FFFFFF",
                        border: ans2 === opt.value ? "1px solid #C67C3B" : "1px solid #EDE7DC",
                      }}>
                      <div className="font-body text-sm font-medium text-stone-dark group-hover:text-bronze transition-colors">{opt.label}</div>
                      <div className="font-body text-xs text-stone mt-1">{opt.sub}</div>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(0)}
                  className="mt-4 font-body text-xs text-stone hover:text-stone-dark transition-colors">
                  ← Back
                </button>
              </motion.div>
            )}

            {step === 2 && rec && (
              <motion.div key="result"
                initial={{ opacity:0, scale:0.97 }} animate={{ opacity:1, scale:1 }}
                transition={{ duration:0.4 }}>
                {/* Result card */}
                <div className="bg-card p-8 md:p-10 text-center mb-6"
                  style={{ border:"1px solid #EDE7DC", boxShadow:"0 4px 24px rgba(26,18,8,0.08)" }}>
                  <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full"
                    style={{ background:"linear-gradient(135deg,#F5F0E8,#EDE7DC)", border:"1px solid #EDE7DC" }}>
                    <span className="font-display text-2xl text-bronze">✦</span>
                  </div>
                  <p className="font-body text-xs uppercase tracking-widest text-bronze mb-2" style={{letterSpacing:"0.22em"}}>
                    Your Perfect Piece
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-stone-dark mb-2">{rec.name}</h3>
                  <p className="font-display text-xl text-bronze mb-3">{rec.price}</p>
                  <p className="font-body text-sm text-stone mb-6">{rec.desc}</p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href={getWhatsAppLink(waMsg)} target="_blank" rel="noopener noreferrer"
                      data-cursor="hover"
                      className="font-body text-xs tracking-widest uppercase px-8 py-4 bg-vulcanic text-offwhite hover:bg-bronze transition-colors duration-300"
                      style={{letterSpacing:"0.16em"}}>
                      Order via WhatsApp
                    </a>
                    <button onClick={reset} data-cursor="hover"
                      className="font-body text-xs tracking-wider uppercase px-8 py-4 border border-stone-border text-stone hover:text-stone-dark hover:border-stone transition-colors duration-250">
                      Retake Quiz
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
