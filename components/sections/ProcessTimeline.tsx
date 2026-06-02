"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    num: "01",
    icon: "◈",
    title: "Stone Selection",
    desc: "We travel to volcanic formations to hand-select rock of the right density, mineral composition, and character. Only 1 in 10 stones qualifies.",
    detail: "Volcanic origin · Manual inspection · Mineral testing",
  },
  {
    num: "02",
    icon: "⬡",
    title: "Rough Carving",
    desc: "The outer form is defined using traditional tools. This first stage takes 8–12 hours and removes up to 60% of the raw stone.",
    detail: "Hand tools only · 8-12 hours · Form definition",
  },
  {
    num: "03",
    icon: "◎",
    title: "Interior Shaping",
    desc: "The interior cavity is carved with precision — walls must be even within millimeters to ensure uniform heat transfer.",
    detail: "Precision carving · Thermal calibration · Balance check",
  },
  {
    num: "04",
    icon: "✦",
    title: "Hand Finishing",
    desc: "Surface refinement using progressively finer stone tools. Each texture mark is intentional — the finish is part of the performance.",
    detail: "Fine detailing · Surface treatment · Artisan signature",
  },
  {
    num: "05",
    icon: "◉",
    title: "Fire Curing",
    desc: "The piece is seasoned in controlled fire — multiple sessions at increasing temperature. This seals the stone and prepares it for a lifetime of cooking.",
    detail: "Multi-stage · 900°C peak · Seasoning ritual",
  },
  {
    num: "06",
    icon: "★",
    title: "Quality & Delivery",
    desc: "Final inspection, certificate of authenticity signed by the artisan, and hand-packed for delivery. Yours, and only yours.",
    detail: "QA inspection · Signed certificate · Hand-packed",
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const panels = trackRef.current!.querySelectorAll(".process-panel");
      const totalWidth = (panels.length - 1) * (panels[0] as HTMLElement).offsetWidth;

      gsap.to(trackRef.current, {
        x: () => -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth + window.innerWidth * 0.5}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      panels.forEach((panel, i) => {
        gsap.fromTo(
          panel.querySelector(".panel-content"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: panel,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: i * 0.05,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="overflow-hidden" style={{ background: "#1A1208" }}>
      {/* Header */}
      <div
        ref={headerRef}
        className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16"
        style={{ paddingTop: "clamp(5.5rem, 11vw, 8.5rem)", paddingBottom: "3rem" }}
      >
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-12 bg-copper" />
          <span className="font-body text-xs tracking-widest uppercase text-copper" style={{ letterSpacing: "0.22em" }}>
            How It&apos;s Made
          </span>
        </motion.div>

        <motion.h2
          className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-none mb-6"
          style={{ color: "#F5F2ED" }}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          The art of<br />
          making <span className="italic" style={{ color: "#C67C3B" }}>one.</span>
        </motion.h2>

        <motion.p
          className="font-body text-base max-w-lg leading-relaxed"
          style={{ color: "rgba(245,242,237,0.55)" }}
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Scroll to follow the journey from raw volcanic rock to a finished vessel that&apos;ll outlast generations.
        </motion.p>
      </div>

      {/* Horizontal track */}
      <div className="relative flex items-center" style={{ height: "70vh", minHeight: "500px" }}>
        {/* Progress line */}
        <div className="absolute top-1/2 left-16 right-16 h-px -translate-y-1/2 z-0"
          style={{ background: "rgba(163,109,58,0.25)" }} />

        <div
          ref={trackRef}
          className="flex gap-0 will-change-transform"
          style={{ paddingLeft: "4rem" }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="process-panel flex-shrink-0 relative"
              style={{ width: "clamp(280px, 35vw, 420px)" }}
            >
              {/* Connector dot */}
              <div
                className="absolute top-1/2 left-0 -translate-y-1/2 z-10 w-3 h-3 rounded-full"
                style={{ border: "1px solid #C67C3B", background: "#1A1208" }}
              />

              <div
                className="panel-content opacity-0 mx-6 p-8 relative"
                style={{
                  background: "rgba(43,33,24,0.55)",
                  border: "1px solid rgba(198,124,59,0.2)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {/* Number */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="font-display font-light text-5xl"
                    style={{
                      background: "linear-gradient(135deg, #A36D3A, #C67C3B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.num}
                  </span>
                  <span className="font-display text-2xl" style={{ color: "rgba(198,124,59,0.6)" }}>{step.icon}</span>
                </div>

                <h3 className="font-display text-2xl mb-3" style={{ color: "#F5F2ED" }}>{step.title}</h3>
                <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "rgba(245,242,237,0.55)", fontSize: "0.82rem" }}>{step.desc}</p>

                <div className="pt-4" style={{ borderTop: "1px solid rgba(163,109,58,0.2)" }}>
                  <p className="font-body text-xs tracking-wider uppercase" style={{ color: "rgba(198,124,59,0.7)", fontSize: "0.68rem" }}>{step.detail}</p>
                </div>

                {/* Glow corner */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 100% 0%, rgba(198,124,59,0.1), transparent 70%)" }}
                />
              </div>
            </div>
          ))}
          {/* Padding end */}
          <div className="flex-shrink-0 w-16 md:w-32" />
        </div>
      </div>

      {/* Bottom accent */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16"
        style={{ paddingBottom: "clamp(4rem, 8vw, 6rem)" }}>
        <div className="flex items-center gap-4">
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(163,109,58,0.35), transparent)" }} />
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: "rgba(245,242,237,0.35)", letterSpacing: "0.2em", fontSize: "0.68rem" }}>
            End to end · One artisan · Your piece
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(270deg, rgba(163,109,58,0.35), transparent)" }} />
        </div>
      </div>
    </section>
  );
}
