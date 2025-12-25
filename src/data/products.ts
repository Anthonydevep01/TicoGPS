export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  category: string[];
  specs?: { label: string; value: string }[];
  brand?: string;
  sku?: string;
  stock?: boolean;
}

export const products: Product[] = [
  {
    id: "taximetro-todo-en-uno",
    name: "Combo Taxímetro Todo en Uno",
    description: "Incluye 'María', impresora térmica y parlante de voz. Cumple con toda la normativa de ARESEP.",
    price: "₡185,000",
    images: ["/images/TicoGPS-combo-taximetro.jpg"],
    category: ["Taxímetros"],
    brand: "TicoGPS",
    sku: "TAX-COMBO-001",
    stock: true,
    specs: [
      { label: "Pantalla", value: "LED Digital de Alta Visibilidad" },
      { label: "Impresora", value: "Térmica Integrada de 58mm" },
      { label: "Conectividad", value: "GPS / Data (Opcional)" },
      { label: "Voltaje", value: "12V - 24V Automotriz" },
      { label: "Normativa", value: "Cumple ARESEP / Ley 7600" },
      { label: "Garantía", value: "12 Meses" }
    ]
  },
  {
    id: "taximetro-sencillo",
    name: "Taxímetro Digital Estándar",
    description: "Unidad de taxímetro digital de alta precisión. Pantalla LED de fácil lectura.",
    price: "₡65,000",
    images: ["/images/TicoGPS-taximetros.jpg", "/images/TicoGPS-taximetros-variedades.jpeg"],
    category: ["Taxímetros"],
    brand: "Neotax",
    sku: "TAX-STD-002",
    stock: true,
    specs: [
      { label: "Pantalla", value: "LED Rojo Brillante" },
      { label: "Dimensiones", value: "Compacto para tablero" },
      { label: "Funciones", value: "Tarifa 1, Tarifa 2, Espera" },
      { label: "Instalación", value: "Cableado estándar universal" }
    ]
  },
  {
    id: "impresora-taximetro",
    name: "Impresora Térmica para Taxi",
    description: "Impresora de recibos compatible con la mayoría de taxímetros del mercado. Rápida y duradera.",
    price: "₡45,000",
    images: ["/images/TicoGPS-impresora-taximetro.jpg"],
    category: ["Accesorios"],
    brand: "Generic",
    sku: "PRT-003",
    stock: true,
    specs: [
      { label: "Tipo", value: "Térmica Directa" },
      { label: "Ancho de papel", value: "58mm" },
      { label: "Velocidad", value: "90mm/s" },
      { label: "Interfaz", value: "Serial / RS232" }
    ]
  },
  {
    id: "parlante-taximetro",
    name: "Parlante de Voz",
    description: "Módulo de voz para taxímetros, anuncia la tarifa y bienvenida al usuario (obligatorio ley 7600).",
    price: "₡25,000",
    images: ["/images/TicoGPS-parlante-taximetro.jpg"],
    category: ["Accesorios"],
    brand: "TicoGPS",
    sku: "SPK-004",
    stock: true,
    specs: [
      { label: "Salida", value: "Audio Claro en Español" },
      { label: "Conexión", value: "Plug & Play taxímetros compatibles" },
      { label: "Función", value: "Anuncio de tarifa automática" }
    ]
  },
  {
    id: "microprocesador",
    name: "Microprocesadores para Taxímetros",
    description: "Chip de procesamiento para reparación y mantenimiento de taxímetros digitales.",
    price: "₡35,000",
    images: ["/images/TicoGPS-microprocesador.jpg"],
    category: ["Repuestos"],
    brand: "Microchip",
    sku: "CPU-005",
    stock: false,
    specs: [
      { label: "Modelo", value: "PIC Series / ATMEL (según versión)" },
      { label: "Uso", value: "Reparación especializada" }
    ]
  },
  {
    id: "gps-tracker",
    name: "Dispositivo GPS 4G",
    description: "Rastreador satelital 4G LTE con batería de respaldo y corte de corriente remoto.",
    price: "₡45,000",
    images: ["/images/TicoGPS-dispositivo1.jpg"],
    category: ["GPS"],
    brand: "Coban / Concox",
    sku: "GPS-4G-006",
    stock: true,
    specs: [
      { label: "Red", value: "4G LTE / 2G Fallback" },
      { label: "Precisión", value: "5 - 10 metros" },
      { label: "Batería", value: "Respaldo interno 150mAh" },
      { label: "Funciones", value: "Corte de motor, Alerta de vibración, Geocercas" },
      { label: "Plataforma", value: "Acceso Web y App Android/iOS" }
    ]
  },
  {
    id: "cable-cat6",
    name: "Cable de Red Cat6 (Azul)",
    description: "Cable UTP Categoría 6 certificado, color azul. Ideal para instalaciones de cámaras en buses.",
    price: "₡250 / metro",
    images: ["/images/TicoGPS-CableCat6.jpg"],
    category: ["Conectividad"],
    brand: "Nexxt / Belden",
    sku: "CAB-CAT6-007",
    stock: true,
    specs: [
      { label: "Categoría", value: "Cat 6" },
      { label: "Material", value: "Cobre 100% (No CCA)" },
      { label: "Uso", value: "Interior / Vehicular" }
    ]
  },
  {
    id: "conector-rj45",
    name: "Conector RJ45",
    description: "Pack de 10 conectores RJ45 de alta calidad para terminaciones de red en vehículos.",
    price: "₡3,500",
    images: ["/images/TicoGPS-ConectorRJ.jpg"],
    category: ["Conectividad"],
    brand: "Generic",
    sku: "CON-RJ45-008",
    stock: true,
    specs: [
      { label: "Tipo", value: "RJ45 (8P8C)" },
      { label: "Blindaje", value: "Metálico" },
      { label: "Compatibilidad", value: "Cable Cat5e / Cat6" }
    ]
  },
  {
    id: "inmovilizador-vehicular",
    name: "Inmovilizador Vehicular",
    description: "Dispositivo inmovilizador para vehiculos con sensores de proximidad, manejando un corte de corriente efectivo para la seguridad del vehiculo.",
    price: "₡45,000",
    images: ["/images/TicoGPS-inmovilizador.jpeg"],
    category: ["Accesorios", "GPS"],
    brand: "TicoGPS",
    sku: "INMO-009",
    stock: true,
    specs: [
      { label: "Función Principal", value: "Corte de corriente por proximidad" },
      { label: "Seguridad", value: "Anti-portonazo / Anti-robo" },
      { label: "Compatibilidad", value: "Todo tipo de vehículo 12V" },
      { label: "Instalación", value: "Oculta y segura" }
    ]
  }
];
