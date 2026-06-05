"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Package, FileText, Recycle, Wine,
  Leaf, Scissors, Coffee, Apple,
  Cpu, Smartphone, BatteryCharging, Zap,
  ArrowRight,
} from "lucide-react";
import { TiltCard } from "./TiltCard";

type WasteItem = { Icon: React.ElementType; text: string };

const wasteTypes: {
  Icon: React.ElementType;
  label: string;
  tagline: string;
  desc: string;
  items: WasteItem[];
  bgVar: string;
  accent: string;
  tag: string;
  rotation: string;
  zIndex: number;
}[] = [
  {
    Icon: Package,
    label: "Dry Waste",
    tagline: "Paper, plastic, metal & glass",
    desc: "Newspapers, cardboard, PET bottles, tin cans, and all recyclable dry materials. Sorted, baled, and sent to certified recyclers.",
    items: [
      { Icon: FileText, text: "Paper & Cardboard" },
      { Icon: Recycle, text: "Plastic Bottles" },
      { Icon: Package, text: "Metal Cans" },
      { Icon: Wine, text: "Glass" },
    ],
    bgVar: "var(--card-dry-bg)",
    accent: "#7cbd7c",
    tag: "MOST COMMON",
    rotation: "-1.5deg",
    zIndex: 3,
  },
  {
    Icon: Leaf,
    label: "Wet Waste",
    tagline: "Kitchen & garden organic waste",
    desc: "Food scraps, vegetable peels, garden trimmings. Composted at certified facilities and returned to the earth as rich soil.",
    items: [
      { Icon: Apple, text: "Vegetable Peels" },
      { Icon: Scissors, text: "Garden Trimmings" },
      { Icon: Coffee, text: "Coffee Grounds" },
      { Icon: Leaf, text: "Food Scraps" },
    ],
    bgVar: "var(--card-wet-bg)",
    accent: "#5bc4a0",
    tag: "DAILY PICKUP",
    rotation: "0deg",
    zIndex: 4,
  },
  {
    Icon: Cpu,
    label: "E-Waste",
    tagline: "Electronics & batteries",
    desc: "Old phones, laptops, chargers, batteries. Dismantled at MoEFCC-authorised centres to safely recover rare materials.",
    items: [
      { Icon: Smartphone, text: "Old Phones" },
      { Icon: Cpu, text: "Laptops & PCs" },
      { Icon: BatteryCharging, text: "Batteries" },
      { Icon: Zap, text: "Cables & Chargers" },
    ],
    bgVar: "var(--card-ewaste-bg)",
    accent: "#c8b86c",
    tag: "AUTHORISED",
    rotation: "1.5deg",
    zIndex: 3,
  },
];

export function WasteCards() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="waste"
      ref={ref}
      className="py-24 px-6"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs uppercase tracking-widest font-semibold mb-3"
            style={{ color: "#00c853" }}
          >
            What we pick up
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}
          >
            Every type of{" "}
            <em style={{ color: "#00c853", fontStyle: "italic" }}>waste, handled</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wasteTypes.map((type, i) => (
            <motion.div
              key={type.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              style={{ zIndex: type.zIndex, position: "relative", transform: `rotate(${type.rotation})` }}
            >
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "0 0 0 1px rgba(0,200,83,0.4), 0 8px 32px rgba(0,200,83,0.12)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <TiltCard
                  className="rounded-3xl overflow-hidden h-full"
                  maxTilt={10}
                  style={{
                    boxShadow: "0 16px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="p-8 h-full flex flex-col"
                    style={{ background: type.bgVar, minHeight: 420 }}
                  >
                    {/* Tag row */}
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider"
                        style={{
                          background: `${type.accent}18`,
                          color: type.accent,
                          border: `1px solid ${type.accent}35`,
                        }}
                      >
                        {type.tag}
                      </span>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${type.accent}18` }}
                      >
                        <type.Icon size={20} color={type.accent} strokeWidth={1.8} />
                      </div>
                    </div>

                    <h3
                      className="text-2xl font-bold mb-1"
                      style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}
                    >
                      {type.label}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: type.accent }}>
                      {type.tagline}
                    </p>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                      {type.desc}
                    </p>

                    {/* Items */}
                    <div className="grid grid-cols-2 gap-2 mb-8 flex-1">
                      {type.items.map(({ Icon: ItemIcon, text }) => (
                        <div
                          key={text}
                          className="flex items-center gap-2 text-xs px-3 py-2.5 rounded-xl"
                          style={{
                            background: "var(--bg-surface)",
                            color: "var(--text-highlight)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <ItemIcon size={12} strokeWidth={2} style={{ opacity: 0.7, flexShrink: 0 }} />
                          {text}
                        </div>
                      ))}
                    </div>

                    <button
                      className="w-full py-3.5 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200"
                      style={{
                        background: type.accent,
                        color: "var(--bg)",
                        boxShadow: `0 4px 20px ${type.accent}38`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${type.accent}55`;
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${type.accent}38`;
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      }}
                    >
                      Book {type.label} Pickup
                      <ArrowRight size={15} strokeWidth={2.2} />
                    </button>
                  </div>
                </TiltCard>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
