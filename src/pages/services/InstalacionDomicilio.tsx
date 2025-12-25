import Layout from "@/components/layout/Layout";
import { MapPin, Calendar, Clock, CheckCircle2, Wrench, ShieldCheck, PenTool, Home } from "lucide-react";
import { Link } from 'react-router-dom';

export default function InstalacionDomicilio() {
  return (
    <Layout
      seo={{
        title: "Instalación de GPS a Domicilio | TicoGPS",
        description: "Vamos donde estés. Instalación profesional de GPS a domicilio en todo Costa Rica. Técnicos certificados y garantía.",
        canonical: "https://ticogps.com/servicios/instalacion-domicilio"
      }}
    >
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
        {/* Hero */}
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src="/images/TicoGPS-domicilio.jpg" 
            alt="Instalación GPS a Domicilio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Instalación a Domicilio</h1>
              <p className="text-xl text-slate-200 max-w-2xl">
                Tu comodidad es primero. Nuestros técnicos certificados van hasta tu casa u oficina sin costo adicional en el GAM.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Servicio Profesional donde estés</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-lg">
                No pierdas tiempo en el tráfico o esperando en un taller. Nosotros nos movilizamos para realizar la instalación
                de manera limpia, segura y profesional.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Cobertura Nacional</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Cubrimos todo el Gran Área Metropolitana y realizamos giras a zonas rurales.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <PenTool className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Instalación Oculta</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Dispositivos instalados estratégicamente dentro del vehiculo para máxima seguridad..</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Flexibilidad de Horario</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Agendamos según tu disponibilidad, incluso fines de semana.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/contacto" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-bold transition-colors inline-block">
                  Agendar Cita
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Proceso de Instalación</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {[
                  { title: "Coordinación", desc: "Definimos día, hora y lugar por WhatsApp o llamada." },
                  { title: "Instalación", desc: "Técnico arriba puntualmente. Duración aprox: 45-60 min." },
                  { title: "Configuración", desc: "Activación de la plataforma y creación de usuarios." },
                  { title: "Capacitación", desc: "Te enseñamos a usar la App y todas sus funciones." }
                ].map((step, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
                      {index + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow">
                      <div className="font-bold text-slate-900 dark:text-white">{step.title}</div>
                      <div className="text-slate-500 dark:text-slate-400 text-sm">{step.desc}</div>
                    </div>
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
