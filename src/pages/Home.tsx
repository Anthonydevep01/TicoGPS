import Layout from "@/components/layout/Layout";
import { ArrowRight, CheckCircle, Shield, Truck, Smartphone, Hammer, Home as HomeIcon, Settings, Map, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/TicoGPS-main-banner.webp" 
            alt="Rastreo Satelital Costa Rica" 
            className="w-full h-full object-cover opacity-40"
            fetchPriority="high"
            width="1920"
            height="1080"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Control Total y Seguridad para tu Vehículo o Flota
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Más de 10 años brindando soluciones de rastreo satelital en Costa Rica. 
              Tecnología avanzada para autos, camiones y maquinaria con soporte 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center"
              >
                Solicitar Cotización
              </Link>
              <Link
                to="/servicios"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center backdrop-blur-sm"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">+10</div>
              <div className="text-sm opacity-90">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+100</div>
              <div className="text-sm opacity-90">Clientes Activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Soporte Técnico</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Cobertura Nacional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">Soluciones Integrales de Rastreo</h2>
            <p className="text-slate-600 dark:text-slate-400 transition-colors">
              Adaptamos nuestra tecnología a tus necesidades, ya sea para un solo vehículo o una flota corporativa completa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link to="/servicios/flotas-corporativas" className="block bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all group">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Truck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:text-white transition-colors">Control de Flotas</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 transition-colors">
                Optimiza rutas, controla combustible y mejora la eficiencia de tu operación logística con reportes detallados.
              </p>
              <div className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Más información <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            {/* Service 2 */}
            <Link to="/servicios/autos-particulares" className="block bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all group">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:text-white transition-colors">Seguridad Vehicular</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 transition-colors">
                Protege tu patrimonio con apagado remoto, alertas de movimiento y geocercas configurables.
              </p>
              <div className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Más información <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            {/* Service 3 */}
            <Link to="/servicios/monitoreo-tiempo-real" className="block bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all group">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Smartphone className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:text-white transition-colors">App y Monitoreo Web</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 transition-colors">
                Acceso total desde tu celular o computadora. Visualiza la ubicación de tus activos en tiempo real.
              </p>
              <div className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Más información <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

             {/* Service 4 */}
            <Link to="/servicios/maquinaria-pesada" className="block bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all group">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Hammer className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:text-white transition-colors">Maquinaria Pesada</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 transition-colors">
                Control de horas motor y ubicación precisa para equipo amarillo y maquinaria de construcción.
              </p>
              <div className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Más información <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

             {/* Service 5 */}
            <Link to="/servicios/instalacion-domicilio" className="block bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all group">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <HomeIcon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:text-white transition-colors">Instalación a Domicilio</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 transition-colors">
                Nuestros técnicos certificados van hasta tu casa u oficina. Sin costos adicionales en el GAM.
              </p>
              <div className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Más información <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            {/* Service 6 - Warranty & Support */}
            <Link to="/blog" className="block bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all group">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Trophy className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:text-white transition-colors">Garantía y Soporte</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 transition-colors">
                Respaldo total en todos nuestros dispositivos y asistencia técnica especializada cuando la necesites.
              </p>
              <div className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Más información <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/TicoGPS-PorqueTicoGPS.webp" 
                alt="Por qué elegir TicoGPS: instalación profesional de GPS" 
                title="Por qué elegir TicoGPS"
                className="rounded-xl shadow-xl"
                width="800"
                height="600"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white transition-colors">¿Por qué elegir TicoGPS?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full h-fit text-green-600 dark:text-green-400">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 dark:text-white transition-colors">Precios Competitivos</h3>
                    <p className="text-slate-600 dark:text-slate-400 transition-colors">Ofrecemos los mejores planes del mercado, con opciones de suscripción o venta directa.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full h-fit text-green-600 dark:text-green-400">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 dark:text-white transition-colors">Instalación Flexible</h3>
                    <p className="text-slate-600 dark:text-slate-400 transition-colors">Servicio a domicilio o en nuestro taller en Cartago. Nos adaptamos a tu horario.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full h-fit text-green-600 dark:text-green-400">
                    <Map className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 dark:text-white transition-colors">Cobertura Nacional</h3>
                    <p className="text-slate-600 dark:text-slate-400 transition-colors">Nuestros dispositivos funcionan en todo el territorio de Costa Rica con la mejor señal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ebony text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">¿Listo para proteger tu vehículo?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Contáctanos hoy mismo y recibe una cotización personalizada para tu auto o flota.</p>
          <Link
            to="/contacto"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
          >
            Hablar con un Asesor
          </Link>
        </div>
      </section>
    </Layout>
  );
}
