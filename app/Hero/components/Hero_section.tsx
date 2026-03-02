// app/Hero/components/Hero_section.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // tiny delay so the initial state is painted before animation fires
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        /* ── Keyframes ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.93); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes starPop {
          0%   { opacity: 0; transform: scale(0) rotate(-20deg); }
          70%  { transform: scale(1.3) rotate(5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        /* ── Utility animation classes ── */
        .anim-fadeUp   { animation: fadeUp  0.7s cubic-bezier(.22,1,.36,1) both; }
        .anim-fadeIn   { animation: fadeIn  0.6s ease both; }
        .anim-scaleUp  { animation: scaleUp 0.8s cubic-bezier(.22,1,.36,1) both; }
        .anim-starPop  { animation: starPop 0.5s cubic-bezier(.34,1.56,.64,1) both; }
        .anim-float    { animation: float 5s ease-in-out infinite; }

        /* Stagger delays */
        .d-0  { animation-delay: 0ms; }
        .d-80 { animation-delay: 80ms; }
        .d-160{ animation-delay: 160ms; }
        .d-240{ animation-delay: 240ms; }
        .d-320{ animation-delay: 320ms; }
        .d-400{ animation-delay: 400ms; }
        .d-480{ animation-delay: 480ms; }
        .d-560{ animation-delay: 560ms; }
        .d-640{ animation-delay: 640ms; }
        .d-720{ animation-delay: 720ms; }
        .d-800{ animation-delay: 800ms; }
        .d-900{ animation-delay: 900ms; }

        /* Decorative pill shimmer */
        .pill-shimmer {
          background: linear-gradient(90deg, #F2D5C0 0%, #fff8f3 40%, #F2D5C0 60%, #F2D5C0 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
          animation-delay: 1.2s;
        }

        /* Side panels float */
        .float-left  { animation: float 6s ease-in-out infinite; animation-delay: 0.5s; }
        .float-right { animation: float 6s ease-in-out infinite; animation-delay: 1.5s; }
      `}</style>

      <section className="relative min-h-screen bg-[#F2D5C0] overflow-hidden flex flex-col">

        {/* ── Decorative background blobs ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#e8b08070] blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#c4621840] blur-[60px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f5d5b820] blur-[100px]" />
        </div>

        {/* ── Dot grid decoration ── */}
        <DotGrid className="absolute top-8 right-8 opacity-30 hidden md:block" />
        <DotGrid className="absolute bottom-36 left-6 opacity-20 hidden md:block" />

        {/* ══════════════════════════════════════
            CONTENT
        ══════════════════════════════════════ */}
        <div className="relative z-10 flex flex-col items-center text-center pt-16 md:pt-24 px-6 max-w-3xl mx-auto w-full">

          {/* Stars + badge */}
          {mounted && (
            <div className="flex items-center gap-2 mb-5 anim-fadeIn d-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={`text-[#B5622A] text-base anim-starPop`}
                  style={{ animationDelay: `${i * 80}ms` }}
                />
              ))}
              <span className="pill-shimmer ml-2 px-3 py-1 rounded-full text-[#7B3B1A] text-base lg:text-lg font-semibold tracking-widest uppercase border border-[#c4872a40]">
                102+ Reseñas de 5 Estrellas
              </span>
            </div>
          )}

          {/* Headline — word-by-word stagger */}
          {mounted && (
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1C0F0A] leading-tight mb-5">
              <span className="block overflow-hidden">
                <span className="block anim-fadeUp d-80">Tu elección de confianza</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block anim-fadeUp d-160">para maquillaje de</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block anim-fadeUp d-240 text-[#B5622A]">calidad en Buenos Aires</span>
              </span>
            </h1>
          )}

          {/* Subtitle */}
          {mounted && (
            <p className="text-[#4A2C1A]/70 text-base lg:text-xl max-w-xl mb-8 anim-fadeUp d-320">
              Servicios personalizados adaptados a cada clienta, con resultados que
              realzan tu belleza única.
            </p>
          )}

          {/* CTAs */}
          {mounted && (
            <div className="flex flex-wrap items-center justify-center gap-5 mb-10 anim-fadeUp d-400">
              <Link
                href="/productos"
                className="
                  group relative px-7 py-3 rounded-full border-2 border-[#1C0F0A]
                  text-[#1C0F0A] font-medium text-base
                  overflow-hidden transition-colors duration-300
                  hover:text-white
                "
              >
                <span className="absolute inset-0 bg-[#7B3B1A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10">Descubrí Nuestra Selección</span>
              </Link>

              <Link
                href="/empezar"
                className="group flex items-center gap-2 text-base font-medium text-[#4A2C1A] relative"
              >
                <span className="relative ">
                  Comenzar
                  <span className="absolute -bottom-0.5 left-0 h-px bg-[#4A2C1A] w-full origin-left transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0" />
                </span>
                <FontAwesomeIcon icon={faArrowRight} className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>

        {/* ══════════════════════════════════════
            IMAGE AREA  — desktop: 3-panel layout
                          mobile: single full image
        ══════════════════════════════════════ */}
        <div className="relative z-10 w-full flex-1 flex items-end justify-center mt-4 md:mt-0">

          {/* ── DESKTOP LAYOUT (md+): three panels ── */}
          <div className="hidden md:flex w-full max-w-6xl mx-auto px-8 items-end justify-center gap-6 pb-0">

            {/* Left panel */}
            {mounted && (
              <div className="float-left anim-scaleUp d-560 flex flex-col gap-4 pb-8 flex-1 max-w-[220px]">
                <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-xl border-2 border-white/60">
                  <Image
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80"
                    alt="Paleta de maquillaje"
                    fill className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F0A]/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-[#B5622A]/80 px-2 py-1 rounded-full backdrop-blur-sm">
                    Colección
                  </span>
                </div>
                <div className="relative w-full h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-white/60">
                  <Image
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80"
                    alt="Productos"
                    fill className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Center — tall arch */}
            {mounted && (
              <div className="anim-scaleUp d-400 relative w-72 md:w-80 lg:w-96 flex-shrink-0" style={{ height: "440px" }}>
                <div className="absolute inset-0 rounded-t-full overflow-hidden shadow-2xl border-4 border-white/80">
                  <Image
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80"
                    alt="Mujer aplicando maquillaje"
                    fill className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F0A]/20 to-transparent" />
                </div>
                {/* Floating badge on center image */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-4 py-2 flex items-center gap-2 whitespace-nowrap border border-[#f0d5c0]">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] font-semibold text-[#1C0F0A]">Reservá tu turno hoy</span>
                </div>
              </div>
            )}

            {/* Right panel */}
            {mounted && (
              <div className="float-right anim-scaleUp d-640 flex flex-col gap-4 pb-8 flex-1 max-w-[220px] items-end">
                <div className="relative w-full h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-white/60">
                  <Image
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80"
                    alt="Labiales"
                    fill className="object-cover"
                  />
                </div>
                <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-xl border-2 border-white/60">
                  <Image
                    src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80"
                    alt="Rutina de cuidado"
                    fill className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F0A]/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-[#B5622A]/80 px-2 py-1 rounded-full backdrop-blur-sm">
                    Skin Care
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* ── MOBILE LAYOUT: single arch image, no faces ── */}
          {mounted && (
            <div className="md:hidden w-full flex justify-center px-8 anim-scaleUp d-400">
              <div className="relative w-full max-w-[280px]" style={{ height: "320px" }}>
                <div className="absolute inset-0 rounded-t-[140px] overflow-hidden shadow-2xl border-4 border-white/80">
                  <Image
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80"
                    alt="Mujer aplicando maquillaje"
                    fill className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F0A]/20 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg px-4 py-2 flex items-center gap-2 whitespace-nowrap border border-[#f0d5c0]">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] font-semibold text-[#1C0F0A]">Reservá tu turno hoy</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* bottom spacer */}
        <div className="h-12 md:h-8" />
      </section>
    </>
  );
}

/* ── Dot grid SVG decoration ── */
function DotGrid({ className }: { className?: string }) {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" className={className} aria-hidden="true">
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={col * 18 + 9} cy={row * 18 + 9} r="2" fill="#B5622A" />
        ))
      )}
    </svg>
  );
}