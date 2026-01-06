import Layout from '@/components/layout/Layout';
import { Hammer, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MaquinariaPesada() {
  return (
    <Layout
      seo={{
        title: "GPS para Maquinaria Pesada | TicoGPS",
        description: "Monitoreo de horas motor, ubicación y seguridad para maquinaria amarilla y equipo pesado en Costa Rica.",
        canonical: "https://www.ticogps.com/servicios/maquinaria-pesada"
      }}
    >
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
        {/* Hero */}
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src="/images/TicoGPS-maquinaria.jpg" 
            alt="GPS Maquinaria Pesada" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">GPS para Maquinaria Pesada</h1>
              <p className="text-xl text-slate-200 max-w-2xl">
                Control total sobre tus activos más valiosos. Gestión de horas de trabajo y ubicación precisa en proyectos remotos.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Eficiencia en Obra</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-lg">
                La maquinaria detenida o mal utilizada cuesta dinero. Nuestra solución te permite saber exactamente cuánto tiempo trabaja cada máquina y dónde se encuentra.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Horas Motor</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Control exacto de horas de encendido para facturación y mantenimiento preventivo.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Hammer className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Mantenimiento Preventivo</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Alertas automáticas basadas en horas de uso para cambios de aceite y filtros.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Seguridad Antirrobo</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Geocercas de seguridad y alertas si la maquinaria es movida fuera de horario.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/contacto" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-bold transition-colors inline-block">
                  Cotizar para Maquinaria
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800">
               <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-6">
                 <div className="flex gap-4">
                   <AlertTriangle className="h-8 w-8 text-yellow-600 dark:text-yellow-500 shrink-0" />
                   <div>
                     <h4 className="font-bold text-slate-900 dark:text-white mb-2">Evita el uso no autorizado</h4>
                     <p className="text-sm text-slate-600 dark:text-slate-400">
                       Detecta si tu maquinaria está siendo utilizada para trabajos particulares fuera de tu contrato o en horarios no laborales.
                     </p>
                   </div>
                 </div>
               </div>
               <p className="text-slate-600 dark:text-slate-400">
                 Compatible con excavadoras, retroexcavadoras, tractores, grúas y todo tipo de equipo amarillo. Equipos robustos IP67 resistentes a agua y polvo.
               </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
