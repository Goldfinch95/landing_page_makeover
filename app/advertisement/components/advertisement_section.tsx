// src/features/anuncio/components/AnuncioBar.tsx
"use client";

import { useState } from "react";
import { mensajes } from "../data/advertisement.data";

export function AnuncioBar() {
  const [pausado, setPausado] = useState(false);

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className="bg-[#FAF0EA] py-3 overflow-hidden">
        <div
          className="marquee-track flex gap-6 w-max"
          style={{ animationPlayState: pausado ? "paused" : "running" }}
        >
          {[...mensajes, ...mensajes].map((msg, i) => (
            <span
              key={i}
              onMouseEnter={() => setPausado(true)}
              onMouseLeave={() => setPausado(false)}
              className="
                inline-flex items-center px-5 py-1.5
                bg-[#F2D5C0] text-[#4A2C1A] text-sm rounded-full
                whitespace-nowrap cursor-default
              "
            >
              {msg}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}