"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { tratamientos } from "../data/treatment.data";

function getVisible() {
  if (typeof window === "undefined") return 5;
  if (window.innerWidth < 640) return 4;
  if (window.innerWidth < 768) return 4;
  return 5;
}

export function TratamientosSection() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(5);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setVisible(getVisible());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const itemWidth = containerRef.current
    ? containerRef.current.offsetWidth / visible
    : 0;

  const canPrev = index > 0;
  const canNext = index + visible < tratamientos.length;

  return (
    <section className="bg-[#FAF0EA] py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#B5622A] leading-tight mb-3">
            Soluciones personalizadas para tu piel y tu estilo único.
          </h2>
          <p className="text-[#4A2C1A]/70 text-lg lg:text-xl md:text-base">
            Comenzá tu camino hacia un maquillaje impecable. Sentí la diferencia.
          </p>
        </div>

        {/* Carousel track */}
        <div ref={containerRef} className="overflow-hidden w-full">
          <div
            className="flex"
            style={{
              transform: `translateX(-${index * (containerRef.current ? containerRef.current.offsetWidth / visible : 0)}px)`,
              transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {tratamientos.map((t) => (
              <div
                key={t.nombre}
                className="flex flex-col items-center gap-2 px-1.5 shrink-0"
                style={{ width: `${100 / visible}%` }}
              >
                <div className="w-full aspect-square rounded-full overflow-hidden shadow-md max-w-[90px] sm:max-w-[120px]">
                  <Image
                    src={t.imagen}
                    alt={t.nombre}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] lg:text-xl text-[#1C0F0A] text-center font-medium leading-tight">
                  {t.nombre}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={() => canPrev && setIndex((i) => i - 1)}
            disabled={!canPrev}
            className="w-10 h-10 rounded-full border border-[#4A2C1A]/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8B99A] hover:border-[#E8B99A] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-transparent"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-[#1C0F0A] text-xs" />
          </button>
          <button
            onClick={() => canNext && setIndex((i) => i + 1)}
            disabled={!canNext}
            className="w-10 h-10 rounded-full border border-[#4A2C1A]/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8B99A] hover:border-[#E8B99A] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-transparent"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-[#1C0F0A] text-xs" />
          </button>
        </div>
      </div>
    </section>
  );
}