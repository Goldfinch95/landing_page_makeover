// src/features/productos/data/productos.data.ts
export interface Producto {
  imagen: string;
  nombre: string;
  descripcion: string;
  precio: number;
  precioOriginal?: number;
  enOferta?: boolean;
  sinStock?: boolean;
  tieneOpciones?: boolean;
}

export const productos: Producto[] = [
  {
    imagen: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
    nombre: "Máscara Iluminadora Día",
    descripcion: "Máscara de doble acción que ilumina y protege tu piel del daño solar.",
    precio: 33600,
    precioOriginal: 42000,
    enOferta: true,
  },
  {
    imagen: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80",
    nombre: "Gel Calmante de Aloe",
    descripcion: "Gel refrescante con aloe vera puro que calma la piel irritada al instante.",
    precio: 28000,
  },
  {
    imagen: "https://images.unsplash.com/photo-1570194065650-d99fb4d4b4e0?w=400&q=80",
    nombre: "Sérum Reparador Noche",
    descripcion: "Sérum intensivo nocturno que repone la humedad y repara mientras dormís.",
    precio: 46400,
    precioOriginal: 58000,
    enOferta: true,
  },
  {
    imagen: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
    nombre: "Limpiador Suave",
    descripcion: "Limpiador no espumoso que elimina impurezas sin agredir la piel.",
    precio: 25600,
    precioOriginal: 32000,
    enOferta: true,
  },
  {
    imagen: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
    nombre: "Sérum Vitamina C",
    descripcion: "Fórmula potente de vitamina C que unifica el tono y combate manchas.",
    precio: 40000,
    tieneOpciones: true,
  },
  {
    imagen: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=400&q=80",
    nombre: "Gel Antimperfecciones",
    descripcion: "Gel de acción rápida que reduce la apariencia de imperfecciones.",
    precio: 24000,
  },
  {
    imagen: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&q=80",
    nombre: "Crema Hidratante Coco",
    descripcion: "Hidratante cremosa con aceite de coco orgánico para una piel radiante.",
    precio: 44000,
  },
  {
    imagen: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80",
    nombre: "Hidratante FPS Diario",
    descripcion: "Hidratante liviana de uso diario con protección solar de amplio espectro.",
    precio: 30400,
    precioOriginal: 38000,
    enOferta: true,
  },
  {
    imagen: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80",
    nombre: "Crema Contorno de Ojos",
    descripcion: "Crema delicada con extracto de rosa y péptidos que reduce ojeras.",
    precio: 48000,
    sinStock: true,
  },
  {
    imagen: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80",
    nombre: "Aceite Facial Glow",
    descripcion: "Mezcla lujosa de aceites botánicos de absorción rápida para piel luminosa.",
    precio: 44800,
    precioOriginal: 56000,
    enOferta: true,
  },
  {
    imagen: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80",
    nombre: "Limpiador FreshStart",
    descripcion: "Limpiador diario refrescante que purifica los poros suavemente.",
    precio: 30000,
  },
  {
    imagen: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=400&q=80",
    nombre: "Limpiador Intensivo 150ml",
    descripcion: "Fórmula extra suave en tamaño generoso para uso prolongado.",
    precio: 36000,
  },
];