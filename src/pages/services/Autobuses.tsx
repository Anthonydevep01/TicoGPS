import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Bus, Map, Clock, Shield, ArrowRight } from "lucide-react";

export default function Autobuses() {
  return (
    <Layout
      seo={{
        title: "Gestión de Autobuses | TicoGPS",
        description: "Sistema de rastreo GPS para autobuses en Costa Rica. Ubicación en tiempo real para usuarios y control de flota para empresas.",
        canonical: "https://www.ticogps.com/servicios/transporte-publico/autobuses"
      }}
    >
      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/TicoGPS-bus.jpg" 
            alt="Buses Costa Rica" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary mb-4 font-semibold">
              <Bus className="h-6 w-6" />
              <span>Transporte Público</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Control de Rutas y Ubicación en Tiempo Real
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Moderniza tu empresa de autobuses. Ofrece a tus usuarios la capacidad de ver dónde viene el bus y a qué hora llega, mientras tú controlas tu operación al milímetro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center"
              >
                Solicitar Demostración
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature: Real Time Maps */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Plataforma de Visualización para Usuarios</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Mejora la calidad de vida de tus pasajeros permitiéndoles ver el trayecto en vivo de las unidades desde su celular o computadora.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
             <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
                <img src="/images/TicoGPS-mapa-servicio.jpeg" alt="Mapa Satelital" className="w-full h-auto hover:scale-105 transition-transform duration-500"/>
                <div className="p-6 bg-slate-50 dark:bg-slate-800">
                    <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Vista Satelital de Alta Precisión</h3>
                    <p className="text-slate-600 dark:text-slate-400">Visualización detallada del entorno y ubicación exacta de la unidad.</p>
                </div>
             </div>
             <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
                <img src="/images/TicoGPS-servicio-mapa-detalles.jpeg" alt="Detalle de Mapa" className="w-full h-auto hover:scale-105 transition-transform duration-500"/>
                <div className="p-6 bg-slate-50 dark:bg-slate-800">
                    <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Detalle de Paradas y Rutas</h3>
                    <p className="text-slate-600 dark:text-slate-400">Información clara sobre las paradas oficiales y el trazado de la ruta.</p>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
                <img src="/images/TicoGPS-ruta-autobuses.jpeg" alt="Ruta de Autobuses" className="w-full h-auto hover:scale-105 transition-transform duration-500"/>
                <div className="p-6 bg-slate-50 dark:bg-slate-800">
                    <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Seguimiento de Flota</h3>
                    <p className="text-slate-600 dark:text-slate-400">Vista general de todas las unidades activas en el mapa para los administradores.</p>
                </div>
             </div>
             <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
                <img src="/images/TicoGPS-ruta-autobuses2.jpeg" alt="Seguimiento en Vivo" className="w-full h-auto hover:scale-105 transition-transform duration-500"/>
                <div className="p-6 bg-slate-50 dark:bg-slate-800">
                    <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Estimación de Llegada</h3>
                    <p className="text-slate-600 dark:text-slate-400">Cálculos de tiempo real para informar a los usuarios cuándo llegará el próximo bus.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits for Owners */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Seguridad y Control para tu Empresa</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-6">
                        <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Seguridad Activa</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        Botones de pánico, cámaras en la unidad y monitoreo 24/7 para proteger a tus choferes y pasajeros.
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-6">
                        <Clock className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Cumplimiento de Horarios</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        Verifica que tus unidades cumplan con los tiempos de vuelta y frecuencia establecidos por el CTP.
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-6">
                        <Map className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Geocercas de Ruta</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        Alertas inmediatas si una unidad se desvía de su ruta autorizada sin justificación.
                    </p>
                </div>
            </div>
         </div>
      </section>

      {/* CTA Services */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Soluciones Integrales</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Integramos conteo de pasajeros, barras electrónicas y sistemas de cobro automatizado con nuestro rastreo GPS.
            </p>
            <div className="flex justify-center gap-4">
                <Link to="/servicios/flotas-corporativas" className="text-primary font-semibold hover:underline flex items-center gap-1">
                    Ver Control de Flotas <ArrowRight className="h-4 w-4"/>
                </Link>
                <Link to="/contacto" className="text-primary font-semibold hover:underline flex items-center gap-1">
                    Cotizar Proyecto <ArrowRight className="h-4 w-4"/>
                </Link>
            </div>
        </div>
      </section>
    </Layout>
  );
}
