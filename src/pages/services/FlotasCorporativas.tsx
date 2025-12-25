import Layout from "@/components/layout/Layout";
import { BarChart, Map, Shield, Smartphone, Clock, Zap } from "lucide-react";
import { Link } from 'react-router-dom';

export default function FlotasCorporativas() {
  return (
    <Layout
      seo={{
        title: "Control de Flotas Corporativas | TicoGPS",
        description: "Optimiza la logística de tu empresa. Control de combustible, rutas, tiempos de entrega y hábitos de conducción.",
        canonical: "https://ticogps.com/servicios/flotas-corporativas"
      }}
    >
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
        {/* Hero */}
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src="/images/TicoGPS-flotilla.jpg" 
            alt="Control de Flotas Corporativas" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Control de Flotas Corporativas</h1>
              <p className="text-xl text-slate-200 max-w-2xl">
                Maximiza la eficiencia de tu operación y reduce costos operativos con nuestra plataforma avanzada.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Inteligencia para tu Negocio</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-lg">
                Para las empresas modernas, el control de la flota no es un lujo, es una necesidad. TicoGPS te ofrece herramientas
                analíticas para tomar decisiones basadas en datos reales.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Fuel className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Control de Combustible</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Detecta robos, cargas inusuales y optimiza el consumo por kilómetro.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Map className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Optimización de Rutas</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Reduce tiempos de entrega y kilómetros recorridos innecesariamente.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Reportes Gerenciales</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Informes automáticos de actividad, paradas, excesos de velocidad y más.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/contacto" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-bold transition-colors inline-block">
                  Solicitar Demo Empresarial
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800">
              <img 
                src="/images/TicoGPS-camion.jpg" 
                alt="Flota de camiones" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Beneficios ROI</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Nuestros clientes reportan un retorno de inversión en los primeros 3 meses de uso gracias al ahorro en combustible y mantenimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
