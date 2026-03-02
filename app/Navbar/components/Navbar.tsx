"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/common/components/atom/button";
import { NavDropdown } from "./Navdropdown";
import { NAV_LINKS } from "../data/Navbar.data";

export function Navbar() {
  return (
    <header className="w-full bg-[#F2D5C0] px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-[72px]">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {/* Ícono de gota / perfil usando Font Awesome — reemplazable por SVG de marca */}
          <div className="w-10 h-10 flex items-center justify-center">
            <svg
              viewBox="0 0 40 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 h-9"
            >
              {/* gota dorada con silueta femenina estilizada */}
              <path
                d="M20 2C20 2 4 18 4 30C4 39.94 11.16 46 20 46C28.84 46 36 39.94 36 30C36 18 20 2 20 2Z"
                fill="#c4872a"
              />
              {/* silueta simple */}
              <ellipse cx="20" cy="18" rx="5" ry="6" fill="#fae8db" />
              <path
                d="M12 38C12 31.37 15.58 26 20 26C24.42 26 28 31.37 28 38"
                stroke="#fae8db"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[22px] font-bold text-[#c4872a] tracking-wide font-serif">
              Magnética
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-[#a0826a] font-medium">
              Maquillaje Argentino
            </span>
          </div>
        </Link>

        {/* ── Nav Links ── */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) =>
            link.subLinks ? (
              <NavDropdown key={link.href} link={link} />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-[#3d2b1f] hover:text-[#c4872a] transition-colors duration-200 py-2"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* ── Actions ── */}
        <div className="flex items-center gap-4">
          {/* Icon group */}
          <div className="hidden sm:flex items-center gap-4">
            {[
              { icon: faUser, label: "Mi cuenta" },
              { icon: faCartShopping, label: "Carrito" },
              { icon: faPhone, label: "Llamanos" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                aria-label={label}
                title={label}
                className="
                  text-[#3d2b1f] transition-all duration-200
                  hover:text-[#c4872a] hover:scale-125
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4872a] rounded
                "
              >
                <FontAwesomeIcon icon={icon} className="w-[18px] h-[18px]" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            asChild
            className="
              rounded-full px-6 py-2 text-[14px] font-semibold
              bg-[#e07a3b] text-white border-2 border-[#e07a3b]
              hover:bg-transparent hover:text-[#e07a3b]
              transition-all duration-300
            "
          >
            <Link href="/reservar">Reservar Turno</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}