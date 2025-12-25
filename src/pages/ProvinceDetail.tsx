import Layout from "@/components/layout/Layout";
import { useParams, Navigate, Link } from "react-router-dom";
import { locations } from "@/data/locations";
import { MapPin, CheckCircle2, ShieldCheck, Truck, ChevronRight, Phone } from "lucide-react";

export default function ProvinceDetail() {
  const { province } = useParams<{ province: string }>();
  const locationData = locations.find(l => l.slug === province);

  if (!locationData) {
    return <Navigate to="/ubicaciones" replace />;
  }

  return (
    <Layout
      seo={{
        title: `Rastreo GPS en ${locationData.name} | TicoGPS`,
        description: `Servicios de instalación de GPS, taxímetros y control de flotas en ${locationData.name} y todos sus cantones. Cobertura total y soporte local.`,
        canonical: `https://ticogps.com/ubicaciones/${locationData.slug}`,
        image: locationData.image
      }}
    >
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <img 
          src={locationData.image} 
          alt={`Cobertura GPS en ${locationData.name}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Rastreo GPS en {locationData.name}
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
              {locationData.description}
            </p>
            <a 
              href="https://wa.me/50689535649" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Cotizar Instalación en {locationData.name}
            </a>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-100 dark:bg-slate-900 py-3 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-sm text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-primary">Inicio</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/ubicaciones" className="hover:text-primary">Ubicaciones</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-900 dark:text-slate-300 font-medium">{locationData.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Servicios de Monitoreo Vehicular en {locationData.name}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                En TicoGPS entendemos las necesidades específicas de transporte y seguridad en la provincia de {locationData.name}. 
                Ya sea para vehículos particulares, flotas comerciales, transporte público o maquinaria pesada, ofrecemos 
                tecnología de rastreo satelital de última generación con instalación a domicilio en todos los cantones.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                  <Truck className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Control de Flotas</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Optimice sus rutas en {locationData.name}, reduzca costos de combustible y mejore la seguridad de sus activos.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                  <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Seguridad 24/7</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Protección contra robos con apagado remoto de motor y alertas en tiempo real en toda la zona de {locationData.name}.
                  </p>
                </div>
              </div>
            </section>

            {/* SEO Cantons List */}
            <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                Cobertura en Cantones de {locationData.name}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Nuestro equipo técnico se desplaza a cualquier punto de la provincia. Encuentra servicio de GPS cerca de ti:
              </p>
              
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-4">
                {locationData.cantons.map((canton) => (
                  <div key={canton} className="break-inside-avoid flex items-start gap-2 group">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm hover:text-primary transition-colors cursor-default">
                      Rastreo GPS en <strong className="font-semibold">{canton}</strong>, {locationData.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                ¿Por qué elegirnos en {locationData.name}?
              </h3>
              <ul className="space-y-4">
                {[
                  "Instalación a domicilio sin costo extra",
                  "Plataforma estable 99.9% uptime",
                  "Soporte técnico local",
                  "Homologados por aseguradoras",
                  "Experiencia en rutas de la zona"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-xl"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">¿Listo para proteger su vehículo?</h3>
              <p className="text-slate-300 mb-6 relative z-10">
                Agenda tu instalación en {locationData.name} hoy mismo.
              </p>
              <a 
                href="https://wa.me/50689535649" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all relative z-10"
              >
                <Phone className="h-4 w-4" />
                Contactar Ahora
              </a>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
