// src/features/productos/components/ProductosSection.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { productos } from "../data/products.data";
import { ProductoCard } from "./Products_card";

const POR_PAGINA = 4;
const TOTAL_PAGINAS = Math.ceil(productos.length / POR_PAGINA);

export function ProductosSection() {
  const [pagina, setPagina] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calc = () => {
      if (containerRef.current) {
        setItemWidth(containerRef.current.offsetWidth / POR_PAGINA);
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const canPrev = pagina > 0;
  const canNext = pagina < TOTAL_PAGINAS - 1;

  return (
    <section className="bg-[#FAF0EA] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B5622A] leading-tight mb-3">
            Productos Populares para tu Rutina Diaria
          </h2>
          <p className="text-[#4A2C1A]/70 text-base">
            Nuestra selección favorita: los productos que amamos y recomendamos para que brilles.
          </p>
        </div>

        {/* Carousel wrapper con flechas laterales */}
        <div className="relative">
          {/* Flecha izquierda */}
          {canPrev && (
            <button
              onClick={() => setPagina((p) => p - 1)}
              className="
                absolute -left-10 top-1/2 -translate-y-1/2 z-10
                w-10 h-10 rounded-full bg-white border border-[#E8B99A] shadow-md
                flex items-center justify-center
                transition-all duration-300 hover:-translate-y-[calc(50%+4px)] hover:bg-[#E8B99A]
              "
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-[#1C0F0A] text-xs" />
            </button>
          )}

          {/* Flecha derecha */}
          {canNext && (
            <button
              onClick={() => setPagina((p) => p + 1)}
              className="
                absolute -right-10 top-1/2 -translate-y-1/2 z-10
                w-10 h-10 rounded-full bg-white border border-[#E8B99A] shadow-md
                flex items-center justify-center
                transition-all duration-300 hover:-translate-y-[calc(50%+4px)] hover:bg-[#E8B99A]
              "
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-[#1C0F0A] text-xs" />
            </button>
          )}

          {/* Track */}
          <div ref={containerRef} className="overflow-hidden w-full">
            <div
              className="flex items-stretch"
              style={{
                transform: `translateX(-${pagina * itemWidth * POR_PAGINA}px)`,
                transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                width: `${productos.length * itemWidth}px`,
              }}
            >
              {productos.map((producto) => (
                <div
                  key={producto.nombre}
                  className="px-3 shrink-0"
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
          {Array.from({ length: TOTAL_PAGINAS }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPagina(i)}
              className={`
                rounded-full transition-all duration-300
                ${pagina === i
                  ? "w-4 h-4 bg-[#7B3B1A]"
                  : "w-3 h-3 bg-[#D4A99A] hover:bg-[#B5622A]"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
