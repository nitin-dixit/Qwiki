"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function DottedBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 bg-stone-200">
        <div
          className="absolute inset-0"
          style={{
            backgroundSize: "20px 20px",
            backgroundImage: "radial-gradient(#c8c8c8 1px, transparent 1px)",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="fixed inset-0 -z-10 transition-colors duration-300"
      style={{ backgroundColor: isDark ? "#0c0a09" : "#e7e5e4" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "20px 20px",
          backgroundImage: isDark
            ? "radial-gradient(#404040 1px, transparent 1px)"
            : "radial-gradient(#c8c8c8 1px, transparent 1px)",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
