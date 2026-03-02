export interface SubLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  subLinks?: SubLink[];
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "Inicio",
    href: "/",
    subLinks: [
      { label: "Estilo Clásico", href: "/inicio/clasico" },
      { label: "Estilo Moderno", href: "/inicio/moderno" },
      { label: "Estilo Editorial", href: "/inicio/editorial" },
    ],
  },
  {
    label: "Colecciones",
    href: "/colecciones",
    subLinks: [
      { label: "Temporada Primavera", href: "/colecciones/primavera" },
      { label: "Edición Limitada", href: "/colecciones/edicion-limitada" },
      { label: "Clásicos Eternos", href: "/colecciones/clasicos" },
    ],
  },
  {
    label: "Tienda",
    href: "/tienda",
    subLinks: [
      { label: "Labiales", href: "/tienda/labiales" },
      { label: "Base & Correctores", href: "/tienda/bases" },
      { label: "Ojos", href: "/tienda/ojos" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    subLinks: [
      { label: "Tutoriales", href: "/blog/tutoriales" },
      { label: "Tendencias", href: "/blog/tendencias" },
      { label: "Cuidado de Piel", href: "/blog/cuidado" },
    ],
  },
  {
    label: "Nosotras",
    href: "/nosotras",
    subLinks: [
      { label: "Nuestra Historia", href: "/nosotras/historia" },
      { label: "El Equipo", href: "/nosotras/equipo" },
    ],
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];