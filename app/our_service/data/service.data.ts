// src/features/servicios/data/servicios.data.ts
export interface Servicio {
  imagen: string;
  titulo: string;
  descripcion: string;
}

export const servicios: Servicio[] = [
  {
    imagen: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    titulo: "Maquillaje Profesional",
    descripcion:
      "Identificamos tu estilo y aplicamos técnicas personalizadas para lograr un look que te represente.",
  },
  {
    imagen: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    titulo: "Asesoría de Color",
    descripcion:
      "Especialistas que aplican principios científicos del color para diseñar tu paleta ideal.",
  },
  {
    imagen: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    titulo: "Cuidado de la Piel",
    descripcion:
      "Desarrollamos estrategias personalizadas para atender las necesidades específicas de tu piel.",
  },
  {
    imagen: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
    titulo: "Maquillaje Orgánico",
    descripcion:
      "Usamos productos naturales y metodologías probadas para un resultado saludable y duradero.",
  },
];