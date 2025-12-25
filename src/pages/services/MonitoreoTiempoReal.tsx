import Layout from '@/components/layout/Layout';
import { Smartphone, Globe, Wifi, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MonitoreoTiempoReal() {
  return (
    <Layout
      seo={{
        title: "Monitoreo GPS en Tiempo Real | TicoGPS",
        description: "Plataforma de rastreo satelital en vivo. Acceso desde App (Android/iOS) y Web. Ubicación precisa cada 10 segundos.",
        canonical: "https://ticogps.com/servicios/monitoreo-tiempo-real"
      }}
    >
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
        {/* Hero */}
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src="/images/TicoGPS-tiemporeal.jpg" 
            alt="Monitoreo en Tiempo Real" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Monitoreo en Tiempo Real</h1>
              <p className="text-xl text-slate-200 max-w-2xl">
                Visualiza tus activos en vivo, sin retrasos. Tecnología 4G LTE para una conexión estable y rápida.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Plataforma Avanzada</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-lg">
                Olvídate de sistemas lentos o desactualizados. Nuestra plataforma te ofrece una experiencia fluida, intuitiva y rápida.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Acceso Web y App</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Entra desde cualquier computadora o usa nuestra App nativa para Android y iOS.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Wifi className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Actualización cada 10s</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">No pierdas detalle. Ve el movimiento del vehículo curva por curva.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Google Street View</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Visualiza el entorno real donde se encuentra estacionado tu vehículo.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/contacto" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-bold transition-colors inline-block">
                  Ver Demo en Vivo
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
               <Smartphone className="h-24 w-24 text-primary mb-6" />
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Todo en tu Bolsillo</h3>
               <p className="text-slate-600 dark:text-slate-400 mb-6">
                 Recibe notificaciones push directamente en tu celular: Encendido, Apagado, Exceso de Velocidad, Batería desconectada y más.
               </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
