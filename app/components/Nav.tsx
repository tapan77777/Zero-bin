"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { PlayCircle, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

/* ─── Logo ─────────────────────────────────────────────────── */
function ZeroBinLogo() {
  return (
    <svg width="160" height="32" viewBox="0 0 160 32"
      fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ZeroBin">
      {/* Bin icon */}
      <rect x="5" y="8" width="18" height="17" rx="2.5"
        stroke="#00c853" strokeWidth="1.5" />
      <path d="M3 8 L26 8" stroke="#00c853"
        strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 8 L11 5 L20 5 L20 8"
        stroke="#00c853" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="12" x2="12" y2="21"
        stroke="#00c853" strokeWidth="1.2"
        strokeLinecap="round" opacity=".5" />
      <line x1="15.5" y1="12" x2="15.5" y2="21"
        stroke="#00c853" strokeWidth="1.2"
        strokeLinecap="round" opacity=".5" />
      <line x1="19" y1="12" x2="19" y2="21"
        stroke="#00c853" strokeWidth="1.2"
        strokeLinecap="round" opacity=".5" />
      {/* Wordmark — hardcoded hex, CSS vars don't apply inside SVG text */}
      <text x="38" y="23"
        fontFamily="Inter, sans-serif"
        fontSize="17"
        fill="#e8f5e9"
        fontWeight="600"
        letterSpacing="-0.6">Zero</text>
      <text x="84" y="23"
        fontFamily="Inter, sans-serif"
        fontSize="17"
        fill="#00c853"
        fontWeight="500"
        letterSpacing="-0.4">Bin</text>
    </svg>
  );
}

/* ─── Theme toggle ──────────────────────────────────────────── */
function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
      style={{
        border: "1px solid var(--border)",
        background: "var(--bg-surface)",
        color: "var(--text-primary)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--bg-elevated)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--bg-surface)";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={15} strokeWidth={2} />
      ) : (
        <Moon size={15} strokeWidth={2} />
      )}
    </button>
  );
}

const navLinks = [
  { label: "How it Works", href: "#how",   sectionId: "how" },
  { label: "Waste Types",  href: "#waste", sectionId: "waste" },
  { label: "Contact",      href: "mailto:support@zerobin.in", sectionId: null },
];

/* ─── Nav ───────────────────────────────────────────────────── */
export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const lastY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setAtTop(y < 20);
    if (y < 80) { setHidden(false); lastY.current = y; return; }
    if (y > lastY.current + 8)      setHidden(true);
    else if (y < lastY.current - 8) setHidden(false);
    lastY.current = y;
  });

  useEffect(() => {
    const sectionIds = ["how", "waste", "book"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <motion.nav
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between rounded-2xl px-6 py-3"
        style={{
          background: atTop
            ? "transparent"
            : "rgba(13, 31, 15, 0.85)",
          backdropFilter: atTop ? "none" : "blur(20px)",
          WebkitBackdropFilter: atTop ? "none" : "blur(20px)",
          border: atTop ? "none" : "1px solid var(--border)",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <ZeroBinLogo />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.sectionId !== null && activeSection === link.sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 relative"
                style={{ color: isActive ? "#00c853" : "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive ? "#00c853" : "var(--text-muted)")
                }
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: "#00c853" }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right cluster */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://play.google.com/store/apps/details?id=com.zerobin.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              background: "#00c853",
              color: "#050a06",
              boxShadow: "0 4px 16px rgba(0, 200, 83, 0.28)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1ddb6a";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 6px 24px rgba(0, 200, 83, 0.42)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#00c853";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 16px rgba(0, 200, 83, 0.28)";
            }}
          >
            <PlayCircle size={15} strokeWidth={2} />
            Get the App
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-xl transition-colors"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl px-6 py-5 flex flex-col gap-4"
          style={{
            background: "var(--bg-surface)",
            backdropFilter: "blur(20px)",
            border: "1px solid var(--border)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium py-1"
              style={{ color: "var(--text-primary)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://play.google.com/store/apps/details?id=com.zerobin.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold mt-1"
            style={{ background: "#00c853", color: "#050a06" }}
            onClick={() => setMobileOpen(false)}
          >
            <PlayCircle size={15} strokeWidth={2} />
            Get the App
          </a>
        </div>
      )}
    </motion.nav>
  );
}
