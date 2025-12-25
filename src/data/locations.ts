export interface Province {
  name: string;
  slug: string;
  image: string;
  description: string;
  cantons: string[];
}

export const locations: Province[] = [
  {
    name: "San José",
    slug: "san-jose",
    image: "/images/TicoGPS-Ubicaciones-SanJose.jpg",
    description: "Cobertura total de rastreo GPS y monitoreo satelital en la capital y zona metropolitana.",
    cantons: [
      "San José", "Escazú", "Desamparados", "Puriscal", "Tarrazú", 
      "Aserrí", "Mora", "Goicoechea", "Santa Ana", "Alajuelita", 
      "Vázquez de Coronado", "Acosta", "Tibás", "Moravia", "Montes de Oca", 
      "Turrubares", "Dota", "Curridabat", "Pérez Zeledón", "León Cortés Castro"
    ]
  },
  {
    name: "Alajuela",
    slug: "alajuela",
    image: "/images/TicoGPS-Ubicaciones-Alajuela.jpg",
    description: "Servicios de GPS para flotas agrícolas, logísticas y transporte en toda la provincia de Alajuela.",
    cantons: [
      "Alajuela", "San Ramón", "Grecia", "San Mateo", "Atenas", 
      "Naranjo", "Palmares", "Poás", "Orotina", "San Carlos", 
      "Zarcero", "Sarchí", "Upala", "Los Chiles", "Guatuso", "Río Cuarto"
    ]
  },
  {
    name: "Cartago",
    slug: "cartago",
    image: "/images/TicoGPS-Ubicaciones-Cartago.jpg",
    description: "Hogar de TicoGPS. Soluciones especializadas de rastreo vehicular en Cartago y zonas industriales.",
    cantons: [
      "Cartago", "Paraíso", "La Unión", "Jiménez", "Turrialba", 
      "Alvarado", "Oreamuno", "El Guarco"
    ]
  },
  {
    name: "Heredia",
    slug: "heredia",
    image: "/images/TicoGPS-Ubicaciones-Heredia.jpg",
    description: "Tecnología de punta en GPS para el sector corporativo y residencial de Heredia.",
    cantons: [
      "Heredia", "Barva", "Santo Domingo", "Santa Bárbara", "San Rafael", 
      "San Isidro", "Belén", "Flores", "San Pablo", "Sarapiquí"
    ]
  },
  {
    name: "Guanacaste",
    slug: "guanacaste",
    image: "/images/TicoGPS-Ubicaciones-Guanacaste.jpg",
    description: "Seguridad y control GPS para turismo, transporte y maquinaria en Guanacaste.",
    cantons: [
      "Liberia", "Nicoya", "Santa Cruz", "Bagaces", "Carrillo", 
      "Cañas", "Abangares", "Tilarán", "Nandayure", "La Cruz", "Hojancha"
    ]
  },
  {
    name: "Puntarenas",
    slug: "puntarenas",
    image: "/images/TicoGPS-Ubicaciones-Puntarenas.jpg",
    description: "Rastreo satelital marítimo y terrestre a lo largo de toda la costa pacífica.",
    cantons: [
      "Puntarenas", "Esparza", "Buenos Aires", "Montes de Oro", "Osa", 
      "Quepos", "Golfito", "Coto Brus", "Parrita", "Corredores", 
      "Garabito", "Monteverde", "Puerto Jiménez"
    ]
  },
  {
    name: "Limón",
    slug: "limon",
    image: "/images/TicoGPS-Ubicaciones-Limon.jpg",
    description: "Monitoreo GPS para logística portuaria y transporte en la zona del Caribe.",
    cantons: [
      "Limón", "Pococí", "Siquirres", "Talamanca", "Matina", "Guácimo"
    ]
  }
];
