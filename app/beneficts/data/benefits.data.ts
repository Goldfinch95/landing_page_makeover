import {
  faMagnifyingGlass,
  faClipboardCheck,
  faMicrochip,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Beneficio {
  icon: IconDefinition;
  titulo: string;
  descripcion: string;
}

export const beneficios: Beneficio[] = [
  {
    icon: faMagnifyingGlass,
    titulo: "Atención Experta",
    descripcion:
      "Personalizada según las necesidades de cada clienta, brindando los mejores resultados.",
  },
  {
    icon: faClipboardCheck,
    titulo: "Servicios Completos",
    descripcion:
      "Una amplia gama de productos y servicios para cubrir todas tus necesidades de maquillaje.",
  },
  {
    icon: faMicrochip,
    titulo: "Fórmulas Avanzadas",
    descripcion:
      "Utilizamos ingredientes de última generación y técnicas probadas para resultados extraordinarios.",
  },
  {
    icon: faUserGear,
    titulo: "Enfoque Personalizado",
    descripcion:
      "Cada solución se adapta a tus necesidades específicas, potenciando tu belleza natural.",
  },
];