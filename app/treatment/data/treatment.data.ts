// src/features/tratamientos/data/tratamientos.data.ts
export interface Tratamiento {
  imagen: string;
  nombre: string;
}

export const tratamientos: Tratamiento[] = [
  {
    imagen: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80",
    nombre: "Limpieza Profunda",
  },
  {
    imagen: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80",
    nombre: "Microdermoabrasión",
  },
  {
    imagen: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80",
    nombre: "Dermaplaning",
  },
  {
    imagen: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80",
    nombre: "Medifacial",
  },
  {
    imagen: "https://images.unsplash.com/photo-1607008829749-c0f284a49fc4?w=400&q=80",
    nombre: "Hidrofacial",
  },
  {
    imagen: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
    nombre: "Peeling Químico",
  },
  {
    imagen: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    nombre: "Facial Carbón",
  },
  {
    imagen: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80",
    nombre: "Terapia LED",
  },
];

export const highlights = [
  "Profesionales especializadas en piel.",
  "Excelencia y seguridad garantizada.",
];