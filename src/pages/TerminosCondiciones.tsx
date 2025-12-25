import Layout from "@/components/layout/Layout";
import { Scale, AlertTriangle, CheckCircle, Phone } from "lucide-react";

export default function TerminosCondiciones() {
  return (
    <Layout
      seo={{
        title: "Términos y Condiciones | TicoGPS",
        description: "Términos de servicio, políticas de garantía, instalación y privacidad de TicoGPS Costa Rica.",
        canonical: "https://ticogps.com/terminos-condiciones"
      }}
    >
      {/* Header */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
            <Scale className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Términos y Condiciones</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Transparencia y claridad en nuestra relación comercial.
            <br />
            <span className="text-sm opacity-70">Última actualización: Diciembre 2025</span>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 md:p-12">
            
            <div className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:text-slate-900 dark:prose-headings:text-white
                prose-p:text-slate-600 dark:prose-p:text-slate-300
                prose-li:text-slate-600 dark:prose-li:text-slate-300
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            ">
              <p className="lead text-lg">
                Bienvenido a <strong>TicoGPS.com</strong>. A continuación, detallamos los términos y condiciones que rigen la venta de nuestros dispositivos de rastreo, la prestación de servicios de monitoreo y el uso de nuestra plataforma.
              </p>
              <p>
                Al contratar nuestros servicios o adquirir nuestros productos, usted (el "Cliente") acepta los siguientes lineamientos, diseñados para garantizar una relación comercial transparente, honesta y responsable, basada en la confianza mutua.
              </p>

              <hr className="my-8 border-slate-200 dark:border-slate-800" />

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-0">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Sobre Nosotros
              </h2>
              <p>
                TicoGPS es una empresa dedicada a la seguridad vehicular y soluciones de telemática, ubicada en Cartago, Costa Rica, con cobertura de servicio en todo el territorio nacional.
              </p>
              <ul>
                <li><strong>Contacto Oficial:</strong> <a href="mailto:serviticogps@gmail.com">serviticogps@gmail.com</a></li>
                <li><strong>Teléfono/Soporte:</strong> <a href="tel:+50670103232">+506 7010-3232</a></li>
              </ul>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Descripción del Servicio
              </h2>
              <p>TicoGPS proporciona dos tipos de soluciones principales:</p>
              <ul>
                <li><strong>Venta de Hardware:</strong> Dispositivos GPS, accesorios, sensores y cámaras de seguridad vehicular.</li>
                <li><strong>Servicios de Monitoreo:</strong> Acceso a nuestra plataforma web y aplicación móvil para el rastreo en tiempo real, gestión de flotas y recepción de alertas.</li>
              </ul>
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-6 rounded-r-lg">
                <p className="text-amber-800 dark:text-amber-200 m-0 text-sm font-medium flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Nota Importante:</strong> Nuestro servicio es una herramienta de prevención y control. TicoGPS brinda la tecnología para localizar vehículos, pero no actúa como una aseguradora ni garantiza la recuperación física de vehículos robados, labor que corresponde a las autoridades competentes (OIJ/Fuerza Pública).
                  </span>
                </p>
              </div>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Políticas de Instalación
              </h2>
              <p>Para garantizar el correcto funcionamiento de los equipos, ofrecemos dos modalidades de instalación bajo los siguientes términos:</p>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-6 mb-3">3.1 Instalación en Taller (Cartago)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Se requiere cita previa.</li>
                <li>El cliente debe presentarse puntualmente. Después de 15 minutos de retraso, la cita podría ser reprogramada para no afectar a otros clientes.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-6 mb-3">3.2 Instalación a Domicilio (Cobertura Nacional)</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Nuestros técnicos se trasladan a su casa, oficina o predio.</li>
                <li><strong>Requisitos del lugar:</strong> El cliente debe proveer un espacio seguro (garaje o parqueo privado) y techado (en caso de lluvia) para realizar la instalación. Por seguridad de nuestro personal y calidad del trabajo, no realizamos instalaciones en vía pública expuesta.</li>
                <li><strong>Reprogramación:</strong> Cualquier cambio de cita a domicilio debe notificarse con al menos 24 horas de antelación.</li>
              </ul>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                Garantías y Devoluciones
              </h2>
              <p>En TicoGPS valoramos la Honestidad y la Responsabilidad. Nuestros productos están garantizados contra defectos de fábrica.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span><strong>Garantía de Hardware:</strong> Los dispositivos GPS tienen una garantía de 12 meses por defectos de fabricación.</span>
                </li>
                <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-1" />
                    <span><strong>Garantía de Instalación:</strong> Ofrecemos garantía de por vida sobre la mano de obra realizada por nuestros técnicos (ej. empalmes, cableado oculto).</span>
                </li>
              </ul>
              <p className="font-bold mt-4 mb-2">Exclusiones: La garantía no cubre daños por:</p>
              <ul className="list-disc pl-5">
                <li>Manipulación por terceros no autorizados.</li>
                <li>Daños por agua en dispositivos no certificados (IP67).</li>
                <li>Problemas eléctricos propios del vehículo (cortocircuitos ajenos al GPS).</li>
                <li>Accidentes o vandalismo.</li>
              </ul>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                Suscripciones y Pagos del Servicio de Datos
              </h2>
              <p>Para el funcionamiento del rastreo en tiempo real, el dispositivo requiere conectividad (Plan de Datos).</p>
              <ul className="list-disc pl-5">
                <li><strong>Pagos Mensuales/Anuales:</strong> El cliente se compromete a realizar el pago de su suscripción en las fechas acordadas.</li>
                <li><strong>Suspensión del Servicio:</strong> En caso de falta de pago, TicoGPS se reserva el derecho de suspender temporalmente el acceso a la plataforma y la transmisión de datos del chip SIM tras 5 días de gracia.</li>
                <li><strong>Reactivación:</strong> La reactivación de un servicio suspendido podría conllevar un costo administrativo o de reconexión de la línea telefónica.</li>
              </ul>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                Uso de Datos y Privacidad
              </h2>
              <p>Entendemos que la ubicación de su vehículo es información sensible. Nos regimos por la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley N.º 8968).</p>
              <ul className="list-disc pl-5">
                <li><strong>Confidencialidad:</strong> TicoGPS no comparte, vende ni alquila sus datos de ubicación o historial de rutas a terceros.</li>
                <li><strong>Acceso:</strong> Solo el titular de la cuenta tiene acceso a la ubicación de sus vehículos.</li>
                <li><strong>Excepciones Legales:</strong> La información solo será compartida con autoridades judiciales si existe una orden formal de un juez de la República de Costa Rica.</li>
              </ul>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">7</span>
                Limitaciones Técnicas y Responsabilidad
              </h2>
              <p>TicoGPS utiliza tecnología satelital (GPS) y redes celulares (GSM/4G) de proveedores externos. Por tanto:</p>
              <ul className="list-disc pl-5">
                <li><strong>Zonas de Cobertura:</strong> El servicio está sujeto a la cobertura de la red celular nacional. Pueden existir "zonas muertas" (sótanos profundos, áreas remotas de montaña) donde el dispositivo almacena la información y la transmite al recuperar señal.</li>
                <li><strong>Interrupciones:</strong> TicoGPS no es responsable por cortes de servicio atribuibles a fallas masivas de las operadoras telefónicas nacionales o mantenimiento de la red satelital global.</li>
              </ul>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">8</span>
                Soporte Técnico 24/7
              </h2>
              <p>Nuestro compromiso de Servicio al Cliente incluye soporte para emergencias.</p>
              <ul className="list-disc pl-5">
                <li><strong>Horario de Oficina:</strong> Consultas administrativas, facturación y dudas generales (Lunes a Sábado).</li>
                <li><strong>Emergencias 24/7:</strong> Casos de robo activo o fallas críticas que impidan el rastreo, a través de nuestra línea directa de emergencia.</li>
              </ul>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">9</span>
                Modificaciones
              </h2>
              <p>
                TicoGPS se reserva el derecho de actualizar estos términos para cumplir con cambios legales o mejoras en el servicio. Los clientes activos serán notificados de cualquier cambio sustancial.
              </p>
              
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mt-8 text-center">
                <p className="mb-0 font-medium">
                  Al utilizar los servicios de TicoGPS, usted confirma que ha leído, entendido y aceptado estos términos, confiando en nosotros como su aliado en seguridad.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
