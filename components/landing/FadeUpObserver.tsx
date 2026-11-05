"use client";

import { useEffect } from "react";

/**
 * Agrega la clase "visible" a cada elemento .fade-up cuando entra en pantalla,
 * igual que el <script> del HTML original.
 */
export default function FadeUpObserver() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) el.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
