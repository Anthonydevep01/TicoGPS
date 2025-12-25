import Layout from '@/components/layout/Layout';
import { Shield, Smartphone, Bell, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AutosParticulares() {
  return (
    <Layout
      seo={{
        title: "GPS para Autos Particulares | TicoGPS",
        description: "Protege tu vehículo personal con la mejor tecnología GPS de Costa Rica. Apagado remoto, alertas de movimiento y monitoreo 24/7.",
        canonical: "https://ticogps.com/servicios/autos-particulares"
      }}
    >
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
        {/* Hero */}
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src="/images/TicoGPS-Impreza.jpg" 
            alt="GPS para Autos Particulares" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">GPS para Autos Particulares</h1>
              <p className="text-xl text-slate-200 max-w-2xl">
                La máxima seguridad para tu vehículo personal y la tranquilidad de tu familia.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Protección Total 24/7</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-lg">
                Sabemos que tu auto es más que un medio de transporte; es una inversión importante y parte de tu vida diaria. 
                Con TicoGPS, tienes el control total en la palma de tu mano.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Apagado Remoto</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Detén el motor de tu vehículo desde tu celular en caso de robo.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Bell className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Alertas Instantáneas</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Recibe notificaciones si tu auto se mueve, sale de una zona segura o excede velocidad.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">App Fácil de Usar</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Visualiza la ubicación en tiempo real en mapas actualizados.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/contacto" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-bold transition-colors inline-block">
                  Solicitar Cotización
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">¿Por qué instalar GPS en tu auto?</h3>
              <div className="space-y-4">
                {[
                  "Recuperación efectiva en caso de robo",
                  "Monitoreo de conductores jóvenes",
                  "Historial de rutas recorridas",
                  "Recordatorios de mantenimiento",
                  "Sin contratos forzosos"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
