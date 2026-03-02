// src/features/hero/components/HeroSection.tsx
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F2D5C0] overflow-hidden flex flex-col items-center">
      {/* Dotted decorations */}
      
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-24 px-6 max-w-3xl mx-auto">
        {/* Stars */}
        <div className="flex items-center gap-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className="text-[#B5622A] text-base"
            />
          ))}
          <span className="text-[#B5622A] text-sm font-semibold tracking-widest uppercase ml-1">
            102+ Reseñas de 5 Estrellas
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1C0F0A] leading-tight mb-4">
          Tu elección de confianza para
          <br /> maquillaje de calidad
          <br /> en Buenos Aires
        </h1>

        {/* Subtitle */}
        <p className="text-[#4A2C1A]/70 text-base max-w-xl mb-8">
          Servicios personalizados adaptados a cada clienta, con resultados que
          realzan tu belleza única.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-6">
          {/* Outlined button → fill on hover */}
          <Link
            href="/productos"
            className="
              group relative px-7 py-3 rounded-full border-2 border-[#1C0F0A]
              text-[#1C0F0A] font-medium text-sm
              overflow-hidden transition-colors duration-300
              hover:text-white
            "
          >
            <span
              className="
                absolute inset-0 bg-[#7B3B1A]
                translate-y-full group-hover:translate-y-0
                transition-transform duration-300 ease-in-out
              "
            />
            <span className="relative z-10">Descubrí Nuestra Selección</span>
          </Link>

          {/* Text link con underline que se va a la derecha */}
          <Link
            href="/empezar"
            className="group flex items-center gap-2 text-sm font-medium text-[#4A2C1A] relative"
          >
            <span className="relative">
              Comenzar
              <span
                className="
                  absolute -bottom-0.5 left-0 h-px bg-[#4A2C1A] w-full
                  origin-left
                  transition-all duration-300 ease-in-out
                  group-hover:translate-x-full group-hover:opacity-0
                "
              />
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Images area */}
      <div className="relative w-full flex justify-center items-end mt-12">
        {/* Left small circle */}
        <div className="absolute left-[17%] top-[0%] bottom-0 w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
          <Image
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&q=80"
            alt="Clienta feliz"
            fill
            className="object-cover"
          />
        </div>

        {/* Right top circle */}
        <div className="absolute right-[20%] top-[0%] bottom-20 w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
          <Image
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&q=80"
            alt="Clienta satisfecha"
            fill
            className="object-cover"
          />
        </div>

        {/* Right bottom circle */}
        <div className="absolute right-[8%] bottom-0 w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80"
            alt="Cliente contento"
            fill
            className="object-cover"
          />
        </div>

        {/* Main center image */}
        <div className="relative w-72 h-80 md:w-96 md:h-[420px] rounded-t-full overflow-hidden shadow-2xl z-20">
          <Image
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80"
            alt="Mujer aplicando maquillaje"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

function DotPattern({ className }: { className?: string }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 15 + 7}
            cy={row * 15 + 7}
            r="2"
            fill="#B5622A"
          />
        ))
      )}
    </svg>
  );
}