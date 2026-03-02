"use client";

import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { productos } from "../data/products.data";
import { ProductoCard } from "./Products_card";

function getPerPage() {
  if (typeof window === "undefined") return 4;
  return window.innerWidth < 640 ? 2 : 4;
}

export function ProductosSection() {
  const [pagina, setPagina] = useState(0);
  const [perPage, setPerPage] = useState(4);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calc = () => {
      const pp = getPerPage();
      setPerPage(pp);
      if (containerRef.current) {
        setItemWidth(containerRef.current.offsetWidth / pp);
      }
      // clamp page on resize
      setPagina((p) => {
        const total = Math.ceil(productos.length / pp);
        return Math.min(p, total - 1);
      });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const totalPaginas = Math.ceil(productos.length / perPage);
  const canPrev = pagina > 0;
  const canNext = pagina < totalPaginas - 1;

  return (
    <section className="bg-[#FAF0EA] py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-4xl lg:text-4xl font-bold text-[#B5622A] leading-tight mb-3">
            Productos Populares para tu Rutina Diaria
          </h2>
          <p className="text-[#4A2C1A]/70 text-base lg:text-lg">
            Nuestra selección favorita: los productos que amamos y recomendamos para que brilles.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left arrow */}
          {canPrev && (
            <button
              onClick={() => setPagina((p) => p - 1)}
              className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-[#E8B99A] shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#E8B99A]"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-[#1C0F0A] text-xs" />
            </button>
          )}

          {/* Right arrow */}
          {canNext && (
            <button
              onClick={() => setPagina((p) => p + 1)}
              className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-[#E8B99A] shadow-md flex items-center justify-center transition-all duration-300 hover:bg-[#E8B99A]"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-[#1C0F0A] text-xs" />
            </button>
          )}

          {/* Track */}
          <div ref={containerRef} className="overflow-hidden w-full">
            <div
              className="flex items-stretch"
              style={{
                transform: `translateX(-${pagina * itemWidth * perPage}px)`,
                transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                width: `${productos.length * itemWidth}px`,
              }}
            >
              {productos.map((producto) => (
                <div
                  key={producto.nombre}
                  className="px-1.5 md:px-3 shrink-0"
                  style={{ width: `${itemWidth}px` }}
                >
                  <ProductoCard producto={producto} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPaginas }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPagina(i)}
              className={`rounded-full transition-all duration-300 ${
                pagina === i ? "w-4 h-4 bg-[#7B3B1A]" : "w-3 h-3 bg-[#D4A99A] hover:bg-[#B5622A]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}