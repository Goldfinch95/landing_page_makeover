// src/features/servicios/components/ServiciosSection.tsx
import Image from "next/image";
import { servicios } from "../data/service.data";

export function ServiceSection() {
  return (
    <section className="bg-[#FAF0EA] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C0F0A] leading-tight mb-4">
            Explorá nuestra amplia gama de servicios y soluciones profesionales
          </h2>
          <p className="text-[#4A2C1A]/70 text-base leading-relaxed">
            ¡Celebrá el lanzamiento de nuestra nueva web con una oferta exclusiva!
            Obtené un 10% de descuento en todos nuestros servicios profesionales,
            incluyendo consultas, paquetes premium y soluciones especializadas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio) => (
            <div
              key={servicio.titulo}
              className="
                bg-white rounded-2xl overflow-hidden shadow-sm
                transition-transform duration-300 ease-out
                hover:-translate-y-3 hover:shadow-md
              "
            >
              {/* Image */}
              <div className="relative w-full h-52">
                <Image
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-[#1C0F0A] mb-2">
                  {servicio.titulo}
                </h3>
                <p className="text-[#4A2C1A]/70 text-sm leading-relaxed">
                  {servicio.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
