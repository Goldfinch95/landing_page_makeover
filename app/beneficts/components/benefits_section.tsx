"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { beneficios } from "../data/benefits.data";

export function BeneficiosSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#FAF0EA] py-24 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Headline alineado a la derecha */}
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C0F0A] mb-16 max-w-full">
          Orgullosas de ofrecer soluciones integrales diseñadas para realzar tu
          belleza y superar tus expectativas
        </h2>

        {/* Cards con animación de entrada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {beneficios.map((item, index) => (
            <div
              key={item.titulo}
              className="flex flex-col gap-4"
              style={{
                transitionProperty: "transform, opacity",
                transitionDuration: "600ms",
                transitionTimingFunction: "ease-out",
                transitionDelay: `${index * 120}ms`,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                opacity: visible ? 1 : 0,
              }}
            >
              {/* Icon box */}
              <div className="w-14 h-14 rounded-xl bg-[#E8B99A] flex items-center justify-center">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-[#1C0F0A] text-xl"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1C0F0A] mb-2">
                  {item.titulo}
                </h3>
                <p className="text-[#4A2C1A]/70 text-sm leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}