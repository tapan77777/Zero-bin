"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Navigation, UserCheck, Building2, CreditCard } from "lucide-react";
import { TiltCard } from "./TiltCard";

const features = [
  {
    Icon: CreditCard,
    label: "Razorpay Payments",
    desc: "All transactions processed via Razorpay's PCI-DSS certified gateway. Pay securely by UPI, card, or netbanking.",
    accent: "#7cbd7c",
  },
  {
    Icon: Navigation,
    label: "Live Rider Tracking",
    desc: "Follow your rider on a live map from assignment to your doorstep. No guesswork — you see exactly where they are.",
    accent: "#5bc4a0",
  },
  {
    Icon: UserCheck,
    label: "Verified Riders",
    desc: "Every ZeroBin rider is ID-verified, trained in safe waste handling, and confirmed before each booking.",
    accent: "#7cbd7c",
  },
  {
    Icon: Building2,
    label: "Authorised Recycling",
    desc: "We work exclusively with MoEFCC-registered recycling and composting facilities in Tamil Nadu.",
    accent: "#5bc4a0",
  },
];

const partners = [
  { Icon: CreditCard, name: "Razorpay" },
  { Icon: ShieldCheck, name: "MoEFCC Listed" },
  { Icon: Building2, name: "Certified Centres" },
  { Icon: Navigation, name: "Live Tracking" },
];

export function TrustSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto">
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
            Built on trust
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}
          >
            Safe, transparent &{" "}
            <em style={{ color: "#00c853", fontStyle: "italic" }}>certified</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "0 0 0 1px rgba(0,200,83,0.4), 0 8px 32px rgba(0,200,83,0.12)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <TiltCard
                  className="rounded-3xl p-8 h-full"
                  maxTilt={6}
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border-accent)",
                        boxShadow: `0 4px 16px ${feat.accent}18`,
                      }}
                    >
                      <feat.Icon size={22} color={feat.accent} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {feat.label}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Partner row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          {partners.map(({ Icon, name }) => (
            <div
              key={name}
              className="flex items-center gap-2.5 px-5 py-3 rounded-2xl"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
              }}
            >
              <Icon size={15} color="#00c853" strokeWidth={2} />
              <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
