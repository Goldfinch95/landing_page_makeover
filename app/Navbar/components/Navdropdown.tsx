// features/navigation/components/Navdropdown.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import type { NavLink } from "../data/Navbar.data";

interface NavDropdownProps {
  link: NavLink;
}

export function NavDropdown({ link }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setHoveredSub(null);
      }}
    >
      {/* Trigger */}
      <button className="flex items-center gap-1.5 text-[15px] font-medium text-[#3d2b1f] hover:text-[#c4872a] transition-colors duration-200 py-2">
        {link.label}
        <FontAwesomeIcon
          icon={open ? faChevronUp : faChevronDown}
          className="w-2.5 h-2.5 transition-transform duration-200"
        />
      </button>

      {/* Dropdown panel */}
      {open && link.subLinks && (
        <div className="absolute top-full left-0 w-56 z-50">
          {/* ✅ Puente invisible que tapa el gap entre el trigger y el panel */}
          <div className="h-2 w-full" />

          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.10)] py-2">
            {link.subLinks.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onMouseEnter={() => setHoveredSub(sub.label)}
                onMouseLeave={() => setHoveredSub(null)}
                className={`flex items-center justify-between px-5 py-3 text-[14px] text-[#3d2b1f] transition-all duration-150 ${
                  hoveredSub === sub.label
                    ? "bg-[#f5e4d7] font-medium"
                    : "hover:bg-[#fdf1e8]"
                }`}
              >
                <span>{sub.label}</span>
                {hoveredSub === sub.label && (
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-3.5 h-3.5 text-[#c4872a]"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}