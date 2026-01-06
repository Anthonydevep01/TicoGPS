import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Bus, Car, Smartphone, Shield, Users, ArrowRight } from "lucide-react";

export default function TransportePublico() {
  return (
    <Layout
      seo={{
        title: "Transporte Público | TicoGPS",
        description: "Soluciones de transporte público para taxis y autobuses. App tipo Uber/Didi y rastreo en tiempo real para usuarios.",
        canonical: "https://www.ticogps.com/servicios/transporte-publico"
      }}
    >
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/TicoGPS-TransportePublico.jpg" 
            alt="Transporte Público TicoGPS" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Revolucionando el Transporte Público en Costa Rica
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Conectamos a dueños de unidades, conductores y usuarios final. Desde aplicaciones de viaje para taxis hasta monitoreo en tiempo real de rutas de autobús.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center"
              >
                Solicitar Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Selection */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Soluciones Especializadas</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Hemos desarrollado tecnología específica para las necesidades del transporte público moderno, beneficiando tanto a las empresas como a los pasajeros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Taxi Service */}
            <Link to="/servicios/transporte-publico/app-taxis" className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video md:aspect-[4/3] lg:aspect-video">
              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors z-10"></div>
              <img 
                src="/images/TicoGPS-taxi.jpg" 
                alt="App para Taxis" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="bg-primary/90 w-fit p-3 rounded-lg mb-4 text-white">
                  <Car className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">App para Taxis</h3>
                <p className="text-slate-200 mb-4">
                  Plataforma moderna tipo Uber/Didi exclusiva para taxis. Tarifas competitivas y más seguridad.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold">
                  Ver detalles <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>

            {/* Bus Service */}
            <Link to="/servicios/transporte-publico/autobuses" className="group relative overflow-hidden rounded-2xl shadow-xl aspect-video md:aspect-[4/3] lg:aspect-video">
              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors z-10"></div>
              <img 
                src="/images/TicoGPS-bus.jpg" 
                alt="Gestión de Autobuses" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="bg-primary/90 w-fit p-3 rounded-lg mb-4 text-white">
                  <Bus className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Gestión de Autobuses</h3>
                <p className="text-slate-200 mb-4">
                  Control de flota para empresarios y ubicación en tiempo real para usuarios de las rutas.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold">
                  Ver detalles <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits for Everyone */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">Beneficios para todos los actores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Para Dueños y Empresas</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Control total de sus unidades, reducción de costos operativos, seguridad ante robos y gestión eficiente de la flota.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Para Conductores</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Herramientas modernas para recibir viajes, seguridad con botón de pánico y navegación optimizada.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center text-purple-600 mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Para Usuarios Finales</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Plataforma web para ver buses en vivo y app para pedir taxis con tarifas justas y tiempos de espera reducidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Complementa tu servicio</h2>
           <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
             Además de nuestras plataformas digitales, ofrecemos equipos de alta tecnología para el cumplimiento legal y operativo de tu transporte.
           </p>
           <Link to="/productos" className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-lg">
             Ver Taxímetros y Accesorios <ArrowRight className="h-5 w-5" />
           </Link>
        </div>
      </section>
    </Layout>
  );
}
