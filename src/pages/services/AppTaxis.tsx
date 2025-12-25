import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Car, Smartphone, Shield, CheckCircle, ArrowRight } from "lucide-react";

export default function AppTaxis() {
  return (
    <Layout
      seo={{
        title: "App para Taxis | TicoGPS",
        description: "Aplicación de transporte tipo Uber/Didi exclusiva para taxis en Costa Rica. Tarifas competitivas y soporte 24/7.",
        canonical: "https://ticogps.com/servicios/transporte-publico/app-taxis"
      }}
    >
      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/TicoGPS-taxi.jpg" 
            alt="App de Taxis Costa Rica" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary mb-4 font-semibold">
              <Car className="h-6 w-6" />
              <span>Transporte Público</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              La Evolución del Taxi en Costa Rica
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Una plataforma tecnológica robusta que compite directamente con Didi, InDriver y Uber. 
              Moderniza tu servicio de taxi con nuestra aplicación móvil para conductores y pasajeros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center"
              >
                Afiliar mi Unidad
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1512428559087-560fa5ce7d5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Aplicación Móvil" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Tecnología de Punta a tu Alcance</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Nuestra aplicación ofrece una experiencia de usuario fluida y moderna, diseñada para competir con las grandes plataformas internacionales pero adaptada al mercado costarricense.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary h-fit">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">App Multi-plataforma</h3>
                    <p className="text-slate-600 dark:text-slate-400">Disponible para iOS y Android. Tanto para el conductor como para el pasajero.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary h-fit">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">Tarifas Competitivas</h3>
                    <p className="text-slate-600 dark:text-slate-400">Modelo de negocio justo. Menores comisiones para el conductor y mejores precios para el usuario.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary h-fit">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">Soporte 24/7</h3>
                    <p className="text-slate-600 dark:text-slate-400">Equipo local listo para atender cualquier incidencia en cualquier momento del día.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Product Link */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">¿Necesitas equipar tu taxi?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Contamos con taxímetros, "Marías" y todo lo necesario para cumplir con la regulación de CTP y ARESEP.
          </p>
          <Link to="/productos" className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
            Ver Productos para Taxis <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}