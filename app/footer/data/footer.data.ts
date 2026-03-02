// src/features/footer/data/footer.data.ts
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumna {
  titulo: string;
  links: FooterLink[];
}

export interface RedSocial {
  icon: IconDefinition;
  href: string;
  label: string;
}

export const columnas: FooterColumna[] = [
  {
    titulo: "Links Rápidos",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Nosotras", href: "/nosotras" },
      { label: "Galería", href: "/galeria" },
      { label: "Precios", href: "/precios" },
      { label: "Tienda", href: "/tienda" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    titulo: "Servicios Profesionales",
    links: [
      { label: "Maquillaje de Novia", href: "/servicios/novia" },
      { label: "Maquillaje Social", href: "/servicios/social" },
      { label: "Asesoría de Color", href: "/servicios/color" },
      { label: "Maquillaje Artístico", href: "/servicios/artistico" },
      { label: "Cursos de Maquillaje", href: "/servicios/cursos" },
      { label: "Maquillaje Orgánico", href: "/servicios/organico" },
      { label: "Sesiones Fotográficas", href: "/servicios/fotos" },
    ],
  },
  {
    titulo: "Soluciones de Belleza",
    links: [
      { label: "Rutina de Día", href: "/soluciones/dia" },
      { label: "Cuidado Nocturno", href: "/soluciones/noche" },
      { label: "Piel Sensible", href: "/soluciones/sensible" },
      { label: "Anti-edad", href: "/soluciones/antiedad" },
      { label: "Hidratación Profunda", href: "/soluciones/hidratacion" },
      { label: "Corrección de Tono", href: "/soluciones/tono" },
      { label: "Luminosidad", href: "/soluciones/luminosidad" },
    ],
  },
];

export const redesSociales: RedSocial[] = [
  { icon: faFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: faInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: faTiktok, href: "https://tiktok.com", label: "TikTok" },
];

export const contacto = {
  direccion: "Av. Santa Fe 1234, Piso 3, Buenos Aires, Argentina",
  telefono: "011 1234-5678",
};