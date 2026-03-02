// app/products/components/Products_card.tsx
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { Producto } from "../data/products.data";

function formatPrecio(n: number) {
  return `$${(n / 100).toFixed(2)}`;
}

export function ProductoCard({ producto }: { producto: Producto }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full border border-transparent hover:border-[#E8B99A] transition-all duration-300 shadow-sm">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#FAF0EA] h-36 sm:h-52">
        {producto.enOferta && (
          <span className="absolute top-2 left-2 z-10 bg-[#E8B99A] text-[#1C0F0A] text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full">
            Oferta
          </span>
        )}
        <div className="w-full h-full transition-transform duration-500 ease-out hover:scale-110">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-3 sm:p-5 gap-1 sm:gap-2">
        {/* Precio */}
        <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
          {producto.precioOriginal && (
            <span className="text-xs lg:text-base text-[#4A2C1A]/40 line-through">
              {formatPrecio(producto.precioOriginal)}
            </span>
          )}
          <span className="text-2xl lg:text-2xl font-semibold text-[#1C0F0A]">
            {formatPrecio(producto.precio)}
          </span>
        </div>

        <h3 className="font-serif font-bold text-[#1C0F0A] text-lg lg:text-2xl leading-snug">
          {producto.nombre}
        </h3>

        {/* Description hidden on mobile to save space */}
        <p className="hidden sm:block text-base text-[#4A2C1A]/70 leading-relaxed flex-1">
          {producto.descripcion}
        </p>

        {producto.sinStock && (
          <div className="flex items-center gap-1 text-red-400 text-xs font-medium">
            <FontAwesomeIcon icon={faFaceFrown} />
            Sin stock
          </div>
        )}
      </div>

      {/* Button */}
      {!producto.sinStock && (
        <button className="mx-0 w-full py-2.5 sm:py-4 bg-[#7B3B1A] text-white text-lg lg:text-2xl font-medium transition-colors duration-300 hover:bg-[#9B4B2A] rounded-b-2xl">
          {producto.tieneOpciones ? "Ver Opciones" : "Agregar +"}
        </button>
      )}
    </div>
  );
}