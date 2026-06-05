"use client";

import { motion } from "framer-motion";
import {
  Bell, CheckCircle, Package, Leaf, Cpu,
  User, MapPin, Navigation, Clock,
} from "lucide-react";

/* The phone mockup is intentionally dark in both modes —
   it represents a real device screen / app interface. */

export function PhoneMockup() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ height: 620, width: 360 }}
    >
      {/* Background floating card */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute"
        style={{
          bottom: 60, right: -20, zIndex: 1,
          transform: "perspective(800px) rotateY(5deg) rotateZ(3deg)",
        }}
      >
        <div
          className="rounded-3xl p-4 flex items-center gap-3"
          style={{
            background: "#0a120b",
            border: "1px solid rgba(0, 200, 83, 0.2)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            width: 210,
          }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(0,200,83,0.12)" }}
          >
            <CheckCircle size={18} color="#00c853" strokeWidth={2} />
          </div>
          <div>
            <p className="text-xs font-semibold" style={{ color: "#f0f5f0" }}>
              Pickup confirmed
            </p>
            <p className="text-xs" style={{ color: "#00c853" }}>
              OTP sent to your phone
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main phone */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
        style={{
          zIndex: 2,
          transform: "perspective(900px) rotateY(-15deg) rotateX(5deg)",
          filter:
            "drop-shadow(0 30px 60px rgba(0,0,0,0.55)) drop-shadow(0 8px 20px rgba(0,200,83,0.15))",
        }}
      >
        {/* Phone frame */}
        <div
          style={{
            width: 270, height: 560,
            background: "#030704",
            borderRadius: 44,
            border: "10px solid #0a120b",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Dynamic island */}
          <div
            style={{
              position: "absolute", top: 12, left: "50%",
              transform: "translateX(-50%)",
              width: 90, height: 26,
              background: "#010302",
              borderRadius: 14, zIndex: 10,
            }}
          />

          {/* Screen */}
          <div
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(160deg, #080d08 0%, #030504 100%)",
              display: "flex", flexDirection: "column",
              padding: "52px 16px 20px", gap: 10,
            }}
          >
            {/* App header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium" style={{ color: "#00c853" }}>
                  Madurai, Tamil Nadu
                </p>
                <p
                  className="text-base font-bold"
                  style={{ color: "#f0f5f0", fontFamily: "var(--font-playfair)" }}
                >
                  ZeroBin
                </p>
              </div>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "#0a120b" }}
              >
                <Bell size={14} color="#00c853" strokeWidth={2} />
              </div>
            </div>

            {/* Booking status */}
            <div
              className="rounded-2xl p-4"
              style={{
                background: "#0a120b",
                border: "1px solid rgba(0, 200, 83, 0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle size={12} color="#00c853" strokeWidth={2.5} />
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "#00c853" }}
                >
                  Confirmed
                </span>
              </div>
              <p className="text-sm font-bold mb-1" style={{ color: "#f0f5f0" }}>
                Pickup Scheduled
              </p>
              <div className="flex items-center gap-1.5">
                <MapPin size={10} color="#4a6b4f" strokeWidth={2} />
                <p className="text-xs" style={{ color: "#4a6b4f" }}>Madurai</p>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Clock size={10} color="#4a6b4f" strokeWidth={2} />
                <p className="text-xs" style={{ color: "#4a6b4f" }}>
                  Today, 10:00 AM – 12:00 PM
                </p>
              </div>
            </div>

            {/* Waste type selector */}
            <div className="flex gap-2">
              {[
                { Icon: Package, label: "Dry" },
                { Icon: Leaf, label: "Wet" },
                { Icon: Cpu, label: "E-Waste" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex-1 rounded-xl p-2.5 flex flex-col items-center gap-1"
                  style={{ background: "#0a120b" }}
                >
                  <Icon size={14} color="#00c853" strokeWidth={2} />
                  <p className="text-xs font-medium" style={{ color: "#c8e6c8" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Rider card */}
            <div
              className="rounded-2xl p-3"
              style={{
                background: "rgba(10,18,11,0.7)",
                border: "1px solid rgba(0, 200, 83, 0.12)",
              }}
            >
              <p className="text-xs font-semibold mb-2" style={{ color: "#c8e6c8" }}>
                Your Rider
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "#0f1a10" }}
                >
                  <User size={16} color="#00c853" strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium" style={{ color: "#f0f5f0" }}>
                    Verified rider
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <CheckCircle size={10} color="#00c853" strokeWidth={2.5} />
                    <p className="text-xs" style={{ color: "#00c853" }}>
                      Background checked
                    </p>
                  </div>
                </div>
                <div
                  className="text-xs px-2 py-1 rounded-lg font-semibold"
                  style={{ background: "#00c853", color: "#050a06" }}
                >
                  Track
                </div>
              </div>
            </div>

            {/* Map strip */}
            <div
              className="rounded-2xl overflow-hidden flex-1"
              style={{ minHeight: 80, background: "#080d08", position: "relative" }}
            >
              <div
                style={{
                  position: "absolute", inset: 0,
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 14px, rgba(0,200,83,0.04) 14px, rgba(0,200,83,0.04) 15px), repeating-linear-gradient(90deg, transparent, transparent 14px, rgba(0,200,83,0.04) 14px, rgba(0,200,83,0.04) 15px)",
                }}
              />
              <div
                className="absolute flex items-center justify-center"
                style={{ top: "35%", left: "40%", transform: "translate(-50%,-50%)" }}
              >
                <MapPin size={18} color="#00c853" strokeWidth={2} />
              </div>
              <div
                className="absolute bottom-2 left-2 right-2 rounded-xl px-3 py-1.5 flex items-center justify-between"
                style={{ background: "rgba(3,7,4,0.9)" }}
              >
                <div className="flex items-center gap-1.5">
                  <Navigation size={11} color="#00c853" strokeWidth={2} />
                  <p className="text-xs font-semibold" style={{ color: "#00c853" }}>
                    En route
                  </p>
                </div>
                <p className="text-xs" style={{ color: "#c8e6c8" }}>~12 min away</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
        className="absolute"
        style={{ top: 100, left: -30, zIndex: 10 }}
      >
        <div
          className="rounded-2xl px-4 py-3 flex items-center gap-3"
          style={{
            background: "#0a120b",
            border: "1px solid rgba(0, 200, 83, 0.28)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,200,83,0.1)",
          }}
        >
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(0,200,83,0.12)" }}
          >
            <MapPin size={15} color="#00c853" strokeWidth={2} />
          </div>
          <div>
            <p className="text-xs font-bold" style={{ color: "#f0f5f0" }}>
              Rider arriving in
            </p>
            <p className="text-sm font-extrabold" style={{ color: "#00c853" }}>
              12 min
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
