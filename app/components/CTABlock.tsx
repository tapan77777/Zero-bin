"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PlayCircle, Leaf, MapPin } from "lucide-react";

export function CTABlock() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="book"
      ref={ref}
      className="py-24 px-6"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[32px] overflow-hidden px-10 py-16 md:px-20 md:py-20"
          style={{
            /* kept intentionally dark for contrast in both modes */
            background: "linear-gradient(135deg, #0a1a0c 0%, #050a06 50%, #0d1f0e 100%)",
            border: "1px solid rgba(0, 200, 83, 0.18)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.35), 0 8px 24px rgba(0,200,83,0.08)",
          }}
        >
          {/* Orbs */}
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              top: -60, right: -60, width: 240, height: 240,
              background: "radial-gradient(circle, rgba(0,200,83,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              bottom: -40, left: -40, width: 180, height: 180,
              background: "radial-gradient(circle, rgba(0,180,83,0.08) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          {/* Floating card 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-8 hidden md:flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{
              background: "rgba(10, 26, 12, 0.85)",
              border: "1px solid rgba(0,200,83,0.18)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(0,200,83,0.12)" }}
            >
              <Leaf size={15} color="#00c853" strokeWidth={2} />
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: "#f0f5f0" }}>Zero landfill policy</p>
              <p className="text-xs" style={{ color: "#00c853" }}>Certified recycling only</p>
            </div>
          </motion.div>

          {/* Floating card 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-8 right-12 hidden md:flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{
              background: "rgba(10, 26, 12, 0.85)",
              border: "1px solid rgba(0,200,83,0.18)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(0,200,83,0.12)" }}
            >
              <MapPin size={15} color="#00c853" strokeWidth={2} />
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: "#f0f5f0" }}>Serving Madurai</p>
              <p className="text-xs" style={{ color: "#00c853" }}>Tamil Nadu, India</p>
            </div>
          </motion.div>

          {/* Content — always light text since bg is always dark */}
          <div className="relative max-w-xl">
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-4"
              style={{ color: "#00c853" }}
            >
              Schedule your first pickup
            </p>
            <h2
              className="text-4xl md:text-5xl font-black mb-5 leading-tight"
              style={{ color: "#f0f5f0", fontFamily: "var(--font-playfair)" }}
            >
              Make Madurai{" "}
              <em style={{ color: "#00c853", fontStyle: "italic" }}>cleaner</em>
              {" "}— one pickup at a time
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#8aab8a" }}>
              Book a doorstep pickup in under a minute. Dry, wet, or e-waste —
              we handle it with OTP-confirmed handoff and live tracking.
              Payments via Razorpay.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.zerobin.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold transition-all duration-200"
                style={{
                  background: "#00c853",
                  color: "#050a06",
                  boxShadow: "0 8px 32px rgba(0,200,83,0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#1ddb6a";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,200,83,0.5)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#00c853";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,200,83,0.35)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <PlayCircle size={19} strokeWidth={2} />
                Get it on Google Play
              </a>
            </div>

            <p className="text-xs mt-6" style={{ color: "#8aab8a" }}>
              Questions?{" "}
              <a
                href="mailto:support@zerobin.in"
                className="transition-colors duration-200"
                style={{ color: "#00c853" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8e6c8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#00c853")}
              >
                support@zerobin.in
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
