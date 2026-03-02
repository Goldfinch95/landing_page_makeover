"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faPhone,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/common/components/atom/button";
import { NavDropdown } from "./Navdropdown";
import { NAV_LINKS } from "../data/Navbar.data";

const DRAWER_FOOTER_COLS = [
  {
    title: "Nosotras",
    links: [
      { label: "Nuestra Historia", href: "/nosotras/historia" },
      { label: "El Equipo", href: "/nosotras/equipo" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Tienda",
    links: [
      { label: "Labiales", href: "/tienda/labiales" },
      { label: "Base & Correctores", href: "/tienda/bases" },
      { label: "Ojos", href: "/tienda/ojos" },
    ],
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔒 Lock body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="w-full bg-[#F2D5C0] px-6 lg:px-12 relative z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                <path d="M20 2C20 2 4 18 4 30C4 39.94 11.16 46 20 46C28.84 46 36 39.94 36 30C36 18 20 2 20 2Z" fill="#c4872a" />
                <ellipse cx="20" cy="18" rx="5" ry="6" fill="#fae8db" />
                <path d="M12 38C12 31.37 15.58 26 20 26C24.42 26 28 31.37 28 38" stroke="#fae8db" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[22px] font-bold text-[#c4872a] tracking-wide font-serif">Magnética</span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-[#a0826a] font-medium">Maquillaje Argentino</span>
            </div>
          </Link>

          {/* ── Nav Links (desktop) ── */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) =>
              link.subLinks ? (
                <NavDropdown key={link.href} link={link} />
              ) : (
                <Link key={link.href} href={link.href}
                  className="text-lg font-medium text-[#3d2b1f] hover:text-[#c4872a] transition-colors duration-200 py-2"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              {[
                { icon: faUser, label: "Mi cuenta" },
                { icon: faCartShopping, label: "Carrito" },
                { icon: faPhone, label: "Llamanos" },
              ].map(({ icon, label }) => (
                <button key={label} aria-label={label} title={label}
                  className="text-[#3d2b1f] transition-all duration-200 hover:text-[#c4872a] hover:scale-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4872a] rounded"
                >
                  <FontAwesomeIcon icon={icon} className="w-[18px] h-[18px]" />
                </button>
              ))}
            </div>

            <Button asChild className="hidden lg:inline-flex rounded-full px-6 py-6 text-lg font-semibold bg-[#e07a3b] text-white border-2 border-[#e07a3b] hover:bg-transparent hover:text-[#e07a3b] transition-all duration-300">
              <Link href="/reservar">Reservar Turno</Link>
            </Button>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 text-[#3d2b1f] hover:text-[#c4872a] transition-colors duration-200"
              aria-label="Abrir menú"
              onClick={() => setMenuOpen(true)}
            >
              <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen Drawer ── */}
      <div
        className={`
          lg:hidden fixed inset-0 z-[9999]
          bg-[#F5EDE4]
          overflow-hidden
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100dvh",
          touchAction: "none",       /* prevent any touch scroll on the drawer itself */
        }}
      >
        {/* Close — top right */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "18px 24px 0", flexShrink: 0 }}>
          <button
            aria-label="Cerrar menú"
            onClick={close}
            className="w-14! h-14! flex items-center justify-center text-[#3d2b1f] hover:text-[#c4872a] transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faXmark} className="w-8! h-8!" />
          </button>
        </div>

        {/* Main nav links */}
        <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 32px" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="font-serif text-4xl font-semibold text-[#1C0F0A] hover:text-[#c4872a] transition-colors duration-200"
              style={{ display: "block", paddingTop: "10px", paddingBottom: "10px", lineHeight: 1.2 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div style={{ flexShrink: 0, padding: "0 32px 28px" }}>
          <div style={{ borderTop: "1px solid rgba(196,160,122,0.4)", marginBottom: "16px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "18px" }}>
            {DRAWER_FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <p className="text-base" style={{  letterSpacing: "0.18em", textTransform: "uppercase", color: "#a0826a", fontWeight: 600, marginBottom: "8px" }}>
                  {col.title}
                </p>
                {col.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={close}
                    style={{ display: "block", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4a2c1a", fontWeight: 500, marginBottom: "6px" }}
                    className="text-xs hover:text-[#c4872a] transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {/* Social + logo badge */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "20px" }}>
              {[
                { icon: faFacebook, label: "Facebook", href: "https://facebook.com" },
                { icon: faInstagram, label: "Instagram", href: "https://instagram.com" },
                { icon: faTiktok, label: "TikTok", href: "https://tiktok.com" },
                { icon: faPhone, label: "Llamanos", href: "/contacto" },
              ].map(({ icon, label, href }) => (
                <Link key={label} href={href} aria-label={label} onClick={close}
                  className="text-[#3d2b1f] hover:text-[#c4872a] transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={icon} className="w-8! h-8!" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}