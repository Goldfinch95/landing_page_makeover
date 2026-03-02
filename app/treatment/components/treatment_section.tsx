// src/features/tratamientos/components/TratamientosSection.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { tratamientos, highlights } from "../data/treatment.data";

const VISIBLE = 5;

export function TratamientosSection() {
  const [index, setIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calcWidth = () => {
      if (containerRef.current) {
        setItemWidth(containerRef.current.offsetWidth / VISIBLE);
      }
    };
    calcWidth();
    window.addEventListener("resize", calcWidth);
    return () => window.removeEventListener("resize", calcWidth);
  }, []);

  const canPrev = index > 0;
  const canNext = index + VISIBLE < tratamientos.length;

  const prev = () => canPrev && setIndex((i) => i - 1);
  const next = () => canNext && setIndex((i) => i + 1);

  return (
    <section className="bg-[#FAF0EA] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
          <div className="max-w-4xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B5622A] leading-tight mb-4">
              Soluciones personalizadas para tu piel y tu estilo único.
            </h2>
            <p className="text-[#4A2C1A]/70 text-base">
              Comenzá tu camino hacia un maquillaje impecable. Sentí la diferencia.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div ref={containerRef} className="overflow-hidden w-full">
          <div
            className="flex"
            style={{
              transform: `translateX(-${index * itemWidth}px)`,
              transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
              width: `${tratamientos.length * itemWidth}px`,
            }}
          >
            {tratamientos.map((t) => (
              <div
                key={t.nombre}
                className="flex flex-col items-center gap-3 px-3 shrink-0"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="w-28 h-28 rounded-full overflow-hidden">
                  <div className="w-full h-full transition-transform duration-500 ease-out hover:scale-110">
                    <Image
                      src={t.imagen}
                      alt={t.nombre}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <span className="text-sm text-[#1C0F0A] text-center font-medium">
                  {t.nombre}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-3 mt-10">
          <button
            onClick={prev}
            disabled={!canPrev}
            className="
              w-10 h-10 rounded-full border border-[#4A2C1A]/30
              flex items-center justify-center
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:bg-[#E8B99A] hover:border-[#E8B99A]
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0
              disabled:hover:bg-transparent
            "
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-[#1C0F0A] text-xs" />
          </button>

          <button
            onClick={next}
            disabled={!canNext}
            className="
              w-10 h-10 rounded-full border border-[#4A2C1A]/30
              flex items-center justify-center
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:bg-[#E8B99A] hover:border-[#E8B99A]
              disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0
              disabled:hover:bg-transparent
            "
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-[#1C0F0A] text-xs" />
          </button>
        </div>
      </div>
    </section>
  );
}