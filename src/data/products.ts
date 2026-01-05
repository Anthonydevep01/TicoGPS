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
    price: "₡90,000",
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
    price: "₡40,000",
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
  },
  {
    id: "gps-tracker-vehicular",
    name: "Dispositivo GPS Tracker Vehicular",
    description: "Dispositivo para el control y administracion remota de vehiculos. Hecho para: Anti-robo, Logistica industrial, administracion de vehiculos oficiales.",
    price: "₡65,000",
    images: ["/images/TicoGPS-GPS01.jpeg", "/images/TicoGPS-GPS01-02.jpeg"],
    category: ["GPS"],
    brand: "TicoGPS",
    sku: "GPS-ADV-010",
    stock: true,
    specs: [
      { label: "Funciones", value: "Posicionamiento en tiempo real, movimiento, geo cercas, sensor de exceso de velocidad, sensor de puerta, sensor de ACC" },
      { label: "Seguridad", value: "Corte externo de corriente, aviso de bateria baja, boton de SOS, corte remoto de combustible" },
      { label: "Red", value: "4G" },
      { label: "Precisión", value: "5 metros" },
      { label: "Resistencia", value: "A prueba de agua (Si)" },
      { label: "Certificación", value: "CE, FCC" }
    ]
  },
  {
    id: "gps-basico-vehiculo",
    name: "GPS Basico para vehiculo",
    description: "Solución de rastreo esencial para vehículos particulares y pequeñas flotas. Monitoreo confiable y funciones de seguridad estándar.",
    price: "₡60,000",
    images: ["/images/TicoGPS-GPS02.jpeg", "/images/TicoGPS-GPS03.jpeg"],
    category: ["GPS"],
    brand: "TicoGPS",
    sku: "GPS-BAS-011",
    stock: true,
    specs: [
      { label: "Funciones", value: "Rastreo en tiempo real, Historial de rutas" },
      { label: "Seguridad", value: "Alertas básicas de movimiento" },
      { label: "Red", value: "2G/4G" },
      { label: "Instalación", value: "Compacta y discreta" }
    ]
  },
  {
    id: "smart-trak-tok-gps",
    name: "Smart Trak Tok GPS Vehicular",
    description: "Tecnología de rastreo de última generación con integración inteligente. Ideal para usuarios exigentes que buscan máxima conectividad.",
    price: "₡75,000",
    images: ["/images/TicoGPS-GPS04.jpeg", "/images/TicoGPS-GPS04-02.jpeg"],
    category: ["GPS"],
    brand: "TicoGPS",
    sku: "GPS-SMART-012",
    stock: true,
    specs: [
      { label: "Funciones Avanzadas", value: "Telemetría avanzada, Análisis de conducción" },
      { label: "Conectividad", value: "App Smart Trak, Notificaciones Push instantáneas" },
      { label: "Red", value: "4G LTE Alta Velocidad" },
      { label: "Batería", value: "Larga duración con modo ahorro" }
    ]
  }
];
