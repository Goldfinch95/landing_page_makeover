// app/footer/components/footer_section.tsx
"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { columnas, redesSociales, contacto } from "../data/footer.data";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative">
      <footer className="bg-[#1C0A06] text-white/70 pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Columnas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            {columnas.map((col) => (
              <div key={col.titulo}>
                <h4 className="text-[#B5622A] text-xl font-semibold tracking-widest uppercase mb-5">
                  {col.titulo}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg lg:text-base text-white/70 hover:text-[#B5622A] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Seguinos */}
            <div>
              <h4 className="text-[#B5622A] text-xl font-semibold tracking-widest uppercase mb-5">
                Seguinos
              </h4>
              <div className="flex gap-4 mb-8">
                {redesSociales.map((red) => (
                  <Link
                    key={red.label}
                    href={red.href}
                    aria-label={red.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-200 hover:scale-110"
                  >
                    <FontAwesomeIcon icon={red.icon} className="text-white text-xl " />
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[#B5622A] text-lg mt-0.5 shrink-0" />
                  <span className="text-lg leading-relaxed">{contacto.direccion}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhoneVolume} className="text-[#B5622A] text-lg shrink-0" />
                  <span className="text-lg">{contacto.telefono}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2">
                <svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                  <path d="M20 2C20 2 4 18 4 30C4 39.94 11.16 46 20 46C28.84 46 36 39.94 36 30C36 18 20 2 20 2Z" fill="#c4872a" />
                  <ellipse cx="20" cy="18" rx="5" ry="6" fill="#fae8db" />
                  <path d="M12 38C12 31.37 15.58 26 20 26C24.42 26 28 31.37 28 38" stroke="#fae8db" strokeWidth="2" fill="none" />
                </svg>
                <div className="flex flex-col leading-tight">
                  <span className="text-[22px] font-bold text-[#c4872a] tracking-wide font-serif">Magnética</span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#a0826a] font-medium">Maquillaje Argentino</span>
                </div>
              </Link>
              <Link href="/privacidad" className="text-base lg:text-lg text-white/50 hover:text-[#B5622A] transition-colors duration-200">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-base  lg:text-lg text-white/50 hover:text-[#B5622A] transition-colors duration-200">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright bar */}
      <div className="flex bg-white justify-center px-5 py-5 sm:px-10 lg:px-20">
        <p className="text-base  lg:text-lg  text-black text-center m-0" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
          Desarrollado con <span style={{ color: "#B5622A" }}>&hearts;</span> por el equipo de{" "}
          <a
            href="https://undevcode.com/"
            target="_blank" rel="noopener noreferrer"
            className="font-bold text-black hover:text-[#B5622A] transition-colors duration-200 no-underline"
          >
            UNDEVCODE
          </a>
        </p>
      </div>

      {/* Back to top — hidden on mobile, visible on md+ */}
      <button
        onClick={scrollToTop}
        className="
          hidden md:flex
          group absolute bottom-[40px] right-95 z-10
          items-center gap-2
          bg-white text-[#1C0A06] text-base font-medium
          px-5 py-3
          border-[#ffffff] rounded-t-lg pb-5
        "
      >
        <span className="transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
          <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
        </span>
        Volver arriba
      </button>
    </div>
  );
}