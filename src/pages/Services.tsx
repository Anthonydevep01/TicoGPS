import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const services = [
  {
    title: "GPS para Autos Particulares",
    description: "Protege tu vehículo personal con tecnología de punta. Apagado remoto, alertas de movimiento y recuperación en caso de robo.",
    image: "/images/TicoGPS-Impreza.jpg",
    link: "/servicios/autos-particulares"
  },
  {
    title: "Control de Flotas Corporativas",
    description: "Optimiza tu operación logística. Control de combustible, gestión de rutas y reportes detallados para reducir costos.",
    image: "/images/TicoGPS-flotilla.jpg",
    link: "/servicios/flotas-corporativas"
  },
  {
    title: "GPS para Maquinaria Pesada",
    description: "Monitoreo especializado de horas motor y ubicación para maquinaria amarilla. Evita el uso no autorizado.",
    image: "/images/TicoGPS-maquinaria.jpg",
    link: "/servicios/maquinaria-pesada"
  },
  {
    title: "Monitoreo en Tiempo Real",
    description: "Plataforma web y app móvil para visualizar tus activos 24/7. Actualización cada 10 segundos y Google Street View.",
    image: "/images/TicoGPS-tiemporeal.jpg",
    link: "/servicios/monitoreo-tiempo-real"
  },
  {
    title: "Transporte Público",
    description: "Soluciones especializadas para Taxis y Autobuses. Apps de transporte y monitoreo de rutas en tiempo real.",
    image: "/images/TicoGPS-TransportePublico.jpg",
    link: "/servicios/transporte-publico"
  },
  {
    title: "Instalación a Domicilio",
    description: "Nuestros técnicos certificados van hasta tu casa u oficina. Cobertura en todo el GAM y zonas rurales.",
    image: "/images/TicoGPS-domicilio.jpg",
    link: "/servicios/instalacion-domicilio"
  }
];

const reviews = [
  {
    name: "Anthony P.",
    role: "Cliente Particular",
    content: "Excelente servicio, me instalaron el GPS en mi casa y la aplicación es súper fácil de usar. Me siento mucho más seguro.",
    stars: 5
  },
  {
    name: "Sheyla Z.",
    role: "Gerente de Logística",
    content: "Desde que implementamos TicoGPS en nuestra flota hemos reducido el gasto de combustible en un 15%. El soporte es inmediato.",
    stars: 5
  },
  {
    name: "Pablo Q.",
    role: "Propietario de Maquinaria",
    content: "El control de horas motor es exacto. Me ayuda mucho para los mantenimientos preventivos de las retroexcavadoras.",
    stars: 5
  },
  {
    name: "Ronald S.",
    role: "Dueño de Camiones",
    content: "Muy buena cobertura, incluso en zonas alejadas de Limón. La plataforma nunca se cae y los reportes son muy completos.",
    stars: 4
  },
  {
    name: "Rodrigo C.",
    role: "Cliente Particular",
    content: "Recuperé mi moto gracias al GPS. La policía actuó rápido con la ubicación que les di. ¡100% recomendados!",
    stars: 5
  }
];

export default function Services() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout
      seo={{
        title: "Nuestros Servicios | TicoGPS",
        description: "Soluciones de rastreo satelital para autos, flotas, maquinaria y más. Tecnología avanzada y soporte local.",
        canonical: "https://ticogps.com/servicios"
      }}
    >
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
        {/* Header */}
        <div className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Tecnología de rastreo satelital adaptada a tus necesidades específicas.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="relative w-full h-[500px] overflow-hidden group block"
            >
               {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors duration-500"></div>
              </div>

               {/* Content */}
              <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start z-10">
                <div className="max-w-2xl text-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 transform transition-all duration-500 translate-y-0 opacity-100">
                    {service.title}
                  </h2>
                  <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed opacity-90">
                    {service.description}
                  </p>
                  <span 
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all hover:gap-4 shadow-lg hover:shadow-primary/25"
                  >
                    Ver detalles <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
              
              {/* Separator */}
              {index < services.length - 1 && (
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 z-20"></div>
              )}
            </Link>
          ))}
        </div>

        {/* Reviews Carousel */}
        <section className="bg-white dark:bg-slate-900 py-20 border-t border-slate-100 dark:border-slate-800 transition-colors">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Lo que dicen nuestros clientes</h2>
              <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400">Más de 500 clientes satisfechos en todo el país</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${currentReview * 100}%)` }}
                >
                  {reviews.map((review, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl relative">
                        <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                        <div className="flex flex-col items-center text-center pt-6">
                          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 italic mb-6">
                            "{review.content}"
                          </p>
                          <div className="flex gap-1 text-yellow-400 mb-2">
                            {[...Array(review.stars)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <h4 className="font-bold text-slate-900 dark:text-white">{review.name}</h4>
                          <span className="text-sm text-primary">{review.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all",
                      currentReview === index 
                        ? "bg-primary w-6" 
                        : "bg-slate-300 dark:bg-slate-700 hover:bg-primary/50"
                    )}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
