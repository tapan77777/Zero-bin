"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PlayCircle, ArrowRight, MapPin, Package } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { MagneticButton } from "./MagneticButton";

/* Fixed particle positions to avoid hydration mismatch */
const particles = [
  { x: "8%",  y: "18%", size: 5, opacity: 0.10, duration: 5.2, delay: 0,   range: 28 },
  { x: "84%", y: "12%", size: 4, opacity: 0.08, duration: 6.1, delay: 1.2, range: 22 },
  { x: "22%", y: "72%", size: 6, opacity: 0.12, duration: 4.6, delay: 0.4, range: 35 },
  { x: "76%", y: "68%", size: 5, opacity: 0.09, duration: 7.3, delay: 2.1, range: 26 },
  { x: "48%", y: "28%", size: 4, opacity: 0.07, duration: 5.8, delay: 1.6, range: 30 },
  { x: "33%", y: "82%", size: 7, opacity: 0.11, duration: 6.4, delay: 0.9, range: 20 },
  { x: "63%", y: "42%", size: 4, opacity: 0.08, duration: 4.2, delay: 3.1, range: 38 },
  { x: "14%", y: "52%", size: 5, opacity: 0.10, duration: 8.0, delay: 1.3, range: 24 },
  { x: "91%", y: "38%", size: 6, opacity: 0.13, duration: 5.1, delay: 2.6, range: 32 },
  { x: "44%", y: "88%", size: 4, opacity: 0.07, duration: 7.2, delay: 0.2, range: 28 },
  { x: "26%", y: "33%", size: 5, opacity: 0.09, duration: 6.3, delay: 1.9, range: 22 },
  { x: "71%", y: "77%", size: 6, opacity: 0.11, duration: 5.6, delay: 2.4, range: 30 },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const stagger = { animate: { transition: { staggerChildren: 0.12 } } };
  const fadeUp  = { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 } };
  const tx = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center overflow-hidden pt-24 pb-16 px-6"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, var(--bg) 0%, var(--bg-deep) 60%, var(--bg) 100%)",
      }}
    >
      {/* Radial overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 65% 40%, var(--glow) 0%, transparent 70%)" }}
      />

      {/* Orbs */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "15%", right: "10%", width: 320, height: 320,
          background: "radial-gradient(circle, rgba(0,200,83,0.08) 0%, transparent 70%)",
          filter: "blur(50px)", y: orb1Y,
        }}
      />
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: "10%", left: "5%", width: 240, height: 240,
          background: "radial-gradient(circle, rgba(0,200,83,0.06) 0%, transparent 70%)",
          filter: "blur(60px)", y: orb2Y,
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "60%", left: "30%", width: 160, height: 160,
          background: "radial-gradient(circle, rgba(0,200,83,0.04) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.x, top: p.y,
            width: p.size, height: p.size,
            background: "#00c853",
            opacity: p.opacity,
          }}
          animate={{ y: [0, -p.range, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <motion.div variants={stagger} initial="initial" animate="animate" style={{ y: textY }} className="lg:pr-8">

            {/* Location tag */}
            <motion.div variants={fadeUp} transition={tx} className="mb-7">
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full"
                style={{
                  background: "var(--bg-surface)",
                  color: "#00c853",
                  border: "1px solid var(--border-accent)",
                }}
              >
                <MapPin size={11} strokeWidth={2.5} />
                Madurai, Tamil Nadu
              </span>
            </motion.div>

            {/* Headline — word-by-word reveal */}
            <div className="mb-6">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                {["Waste", "out,"].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                    style={{ display: "inline-block", marginRight: "0.3em" }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                {["city", "clean."].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.51 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                    style={{
                      display: "inline-block",
                      marginRight: "0.3em",
                      color: "#00c853",
                      fontStyle: "italic",
                      textShadow: "0 0 48px rgba(0,200,83,0.2)",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              transition={tx}
              className="text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: "var(--text-muted)" }}
            >
              Doorstep pickup for dry, wet &amp; e-waste.
              Schedule in seconds — your rider arrives with{" "}
              <span style={{ color: "var(--text-highlight)" }}>OTP-confirmed handoff</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} transition={tx} className="flex flex-wrap gap-4 mb-14">
              <div>
                <MagneticButton>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.zerobin.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold transition-all duration-200"
                    style={{
                      background: "#00c853",
                      color: "#050a06",
                      boxShadow: "0 8px 32px rgba(0,200,83,0.3)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#1ddb6a";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,200,83,0.45)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#00c853";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,200,83,0.3)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <PlayCircle size={18} strokeWidth={2} />
                    Get it on Google Play
                  </a>
                </MagneticButton>
                <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                  Free to download · Android
                </p>
              </div>
              <MagneticButton>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-200"
                  style={{
                    background: "transparent",
                    color: "var(--text-highlight)",
                    border: "1.5px solid var(--border-accent)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-surface)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,83,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
                  }}
                >
                  How it works
                  <ArrowRight size={16} strokeWidth={2} />
                </a>
              </MagneticButton>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={fadeUp}
              transition={tx}
              className="flex flex-wrap items-center gap-5 pt-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { icon: <Package size={14} strokeWidth={2} />, text: "Dry, wet & e-waste" },
                { icon: <MapPin size={14} strokeWidth={2} />, text: "Madurai-wide pickup" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <span style={{ color: "#00c853" }}>{icon}</span>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{text}</span>
                </div>
              ))}
              <div className="h-4 w-px hidden sm:block" style={{ background: "var(--border)" }} />
              <a
                href="mailto:support@zerobin.in"
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00c853")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                support@zerobin.in
              </a>
            </motion.div>
          </motion.div>

          {/* Right: phone mockup — perspective wrapper is static CSS (no FM conflict) */}
          <div className="flex justify-center lg:justify-center">
            <div
              className="phone-mockup"
              style={{
                maxWidth: 320,
                transform: "perspective(900px) rotateY(-8deg) rotateX(3deg)",
                filter: "drop-shadow(0 24px 48px rgba(0,200,83,0.15)) drop-shadow(0 8px 24px rgba(0,0,0,0.4))",
                willChange: "transform",
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, -14, 0] }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.4 },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: [0.45, 0, 0.55, 1] as const,
                    repeatType: "loop" as const,
                    delay: 0.8,
                  },
                }}
                style={{ willChange: "transform" }}
              >
                <PhoneMockup />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0.8, 0.4] }}
        transition={{ delay: 1.5, duration: 2.4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.5, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: "#00c853" }}
        >
          <ArrowRight size={14} strokeWidth={2} style={{ transform: "rotate(90deg)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
