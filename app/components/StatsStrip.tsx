"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Package, Leaf, Cpu } from "lucide-react";
import { TiltCard } from "./TiltCard";

/* ─── CountUp ─────────────────────────────────────────────── */
function CountUp({
  end,
  duration = 1800,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Data ────────────────────────────────────────────────── */
const stats = [
  { value: 3,   suffix: "",  label: "Waste types collected" },
  { value: 24,  suffix: "h", label: "Daily pickup window" },
  { value: 100, suffix: "%", label: "Certified recycling" },
];

const pillars = [
  {
    Icon: Package,
    label: "Dry Waste",
    desc: "Paper, cardboard, plastic, metal, glass — collected and sent to certified recyclers.",
    rotation: "-2deg",
    delay: 0,
    accent: "#7cbd7c",
  },
  {
    Icon: Leaf,
    label: "Wet Waste",
    desc: "Kitchen scraps, vegetable peels, garden cuttings — composted at authorised facilities.",
    rotation: "0deg",
    delay: 0.1,
    elevated: true,
    accent: "#5bc4a0",
  },
  {
    Icon: Cpu,
    label: "E-Waste",
    desc: "Old phones, batteries, cables, appliances — dismantled at MoEFCC-approved centres.",
    rotation: "2deg",
    delay: 0.2,
    accent: "#c8b86c",
  },
];

export function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "var(--bg-alt)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border-accent), transparent)" }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-2"
            style={{ color: "#00c853" }}
          >
            What we handle
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}
          >
            Every category of waste,{" "}
            <em style={{ color: "#00c853", fontStyle: "italic" }}>door to recycler</em>
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-12 mb-14"
        >
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="text-center">
              <p
                className="text-4xl font-black tabular-nums"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}
              >
                <CountUp end={value} suffix={suffix} />
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: p.delay, duration: 0.6 }}
              style={{ transform: `rotate(${p.rotation})` }}
            >
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "0 0 0 1px rgba(0,200,83,0.4), 0 8px 32px rgba(0,200,83,0.12)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <TiltCard
                  className="rounded-3xl p-8 relative overflow-hidden"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    boxShadow: p.elevated
                      ? "0 20px 60px rgba(0,0,0,0.2), 0 4px 16px var(--glow)"
                      : "0 8px 32px rgba(0,0,0,0.1)",
                  }}
                >
                  <span
                    className="absolute -top-4 -right-4 text-8xl font-black select-none pointer-events-none"
                    style={{ color: "var(--border-accent)", lineHeight: 1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      background: `${p.accent}18`,
                      boxShadow: `0 4px 16px ${p.accent}20`,
                    }}
                  >
                    <p.Icon size={24} color={p.accent} strokeWidth={1.8} />
                  </div>

                  <p
                    className="text-xs uppercase tracking-widest font-semibold mb-2"
                    style={{ color: p.accent }}
                  >
                    {p.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {p.desc}
                  </p>
                </TiltCard>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
