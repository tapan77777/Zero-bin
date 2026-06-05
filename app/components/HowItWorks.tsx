"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, CheckCircle, Bike, RecycleIcon, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Smartphone,
    title: "Book in seconds",
    desc: "Choose your waste type, pick a time slot, and confirm your address — done in under 30 seconds.",
  },
  {
    number: "02",
    Icon: CheckCircle,
    title: "OTP confirmed",
    desc: "Receive a one-time password by SMS. Your rider must present it at pickup for a secure handoff.",
  },
  {
    number: "03",
    Icon: Bike,
    title: "Rider arrives",
    desc: "A trained, verified rider comes to your door. Track them live on the map as they approach.",
  },
  {
    number: "04",
    Icon: RecycleIcon,
    title: "Waste recycled",
    desc: "Your waste goes to certified recycling or composting centres — sorted, processed, zero landfill.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how"
      ref={ref}
      className="py-24 px-6"
      style={{ background: "var(--bg)" }}
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
            Simple as 1 – 2 – 3 – 4
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}
          >
            How{" "}
            <em style={{ color: "#00c853", fontStyle: "italic" }}>ZeroBin</em>{" "}
            works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                onMouseEnter={() => setActiveStep(i)}
                className="relative cursor-pointer"
              >
                <motion.div
                  animate={{ scale: isActive ? 1.04 : 1, y: isActive ? -6 : 0 }}
                  whileHover={{
                    boxShadow: "0 0 0 1px rgba(0,200,83,0.4), 0 8px 32px rgba(0,200,83,0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-3xl p-7 h-full relative overflow-hidden"
                  style={{
                    background: isActive ? "var(--bg-elevated)" : "var(--bg-surface)",
                    border: isActive
                      ? "1px solid var(--border-accent)"
                      : "1px solid var(--border)",
                    boxShadow: isActive
                      ? `0 20px 60px rgba(0,0,0,0.2), 0 4px 16px var(--glow)`
                      : "0 4px 16px rgba(0,0,0,0.06)",
                    transition: "background 0.3s, border 0.3s, box-shadow 0.3s",
                  }}
                >
                  {/* Watermark */}
                  <span
                    className="absolute -top-3 -left-1 text-8xl font-black select-none pointer-events-none"
                    style={{
                      color: isActive ? "rgba(0,200,83,0.1)" : "var(--border-accent)",
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </span>

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative"
                    style={{
                      background: isActive ? "rgba(0,200,83,0.12)" : "var(--bg-alt)",
                      boxShadow: isActive ? "0 4px 20px rgba(0,200,83,0.18)" : "none",
                    }}
                  >
                    <step.Icon
                      size={22}
                      color={isActive ? "#00c853" : "var(--text-muted)"}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3
                    className="text-base font-bold mb-2.5 relative"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed relative"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {step.desc}
                  </p>

                  {i < steps.length - 1 && (
                    <div
                      className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full items-center justify-center"
                      style={{
                        background: "var(--bg)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <ArrowRight size={13} color="#00c853" strokeWidth={2} />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
