"use client";

import { Recycle, X, Globe, Camera, Play, Heart, Mail } from "lucide-react";

export function Footer() {
  const links = {
    Product: ["How it Works", "Waste Types", "Book Pickup", "Download App"],
    Company: ["About Us", "Careers", "Press"],
    Support: ["Help Centre", "Privacy Policy", "Terms of Service"],
  };

  const socialIcons = [
    { Icon: X,      label: "X (Twitter)" },
    { Icon: Globe,  label: "Facebook" },
    { Icon: Camera, label: "Instagram" },
    { Icon: Play,   label: "YouTube" },
  ];

  return (
    <footer
      className="py-16 px-6"
      style={{
        background: "var(--bg-deep)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "#00c853" }}
              >
                <Recycle size={17} color="#050a06" strokeWidth={2.5} />
              </div>
              <span
                className="text-xl font-bold"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair)" }}
              >
                Zero<span style={{ color: "#00c853" }}>Bin</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
              Doorstep waste pickup for Madurai.
              Dry, wet, and e-waste — collected, sorted, recycled.
            </p>

            <a
              href="mailto:support@zerobin.in"
              className="inline-flex items-center gap-2 text-sm mb-6 transition-colors duration-200"
              style={{ color: "#00c853" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-highlight)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#00c853")}
            >
              <Mail size={13} strokeWidth={2} />
              support@zerobin.in
            </a>

            <div className="flex gap-2.5">
              {socialIcons.map(({ Icon, label }) => (
                <button
                  key={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                  aria-label={label}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)";
                    (e.currentTarget as HTMLElement).style.color = "#00c853";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  }}
                >
                  <Icon size={15} strokeWidth={1.8} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-4"
                style={{ color: "#00c853" }}
              >
                {category}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2025 ZeroBin · Madurai, Tamil Nadu, India
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>Made with</span>
            <Heart size={12} color="#00c853" strokeWidth={2} fill="#00c853" />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              for a cleaner Madurai
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
