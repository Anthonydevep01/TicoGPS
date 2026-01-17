import Layout from "@/components/layout/Layout";
import { Lock, EyeOff, UserCheck, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function PoliticasPrivacidad() {
  return (
    <Layout
      seo={{
        title: "Política de Privacidad | TicoGPS",
        description: "Compromiso de confidencialidad, manejo de datos y privacidad de TicoGPS Costa Rica.",
        canonical: "https://www.ticogps.com/politica-privacidad"
      }}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            "name": "Política de Privacidad",
            "url": "https://www.ticogps.com/politica-privacidad"
          })}
        </script>
      </Helmet>
      {/* Header */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Política de Privacidad</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tu tranquilidad y tu privacidad viajan seguras con nosotros.
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
                En <strong>TicoGPS</strong>, entendemos que la naturaleza de nuestro servicio se basa en la seguridad y la confianza. Sabemos que al contratar nuestros servicios de rastreo satelital, nos estás confiando la ubicación de tus activos más valiosos y la información de tu familia o empresa.
              </p>
              <p>
                Esta Política de Privacidad describe cómo recopilamos, utilizamos, protegemos y, sobre todo, cómo respetamos la información de nuestros clientes actuales y pasados.
              </p>

              <hr className="my-8 border-slate-200 dark:border-slate-800" />

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-0">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Compromiso de Confidencialidad Absoluta
              </h2>
              <p>
                La base de nuestra relación con el cliente es la lealtad. Por ello, establecemos un compromiso inquebrantable de confidencialidad que abarca:
              </p>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-6 mb-3">Clientes Actuales y Pasados</h3>
              <p>La protección de datos no termina cuando finaliza el contrato. Mantenemos la confidencialidad de la información de todos los usuarios que han pasado por nuestra empresa.</p>

              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-6 mb-3">No Divulgación de Detalles Comerciales</h3>
              <p>TicoGPS garantiza que no revelará, publicará ni compartirá con terceros información sensible relacionada con:</p>
              <ul className="list-disc pl-5">
                <li>Historial de compras o modelos de dispositivos adquiridos.</li>
                <li>Detalles de contratos, tarifas pactadas o volúmenes de flotilla.</li>
                <li>Información financiera o métodos de pago.</li>
                <li>Datos de contacto personal (teléfonos, correos, direcciones físicas).</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
                <p className="text-blue-800 dark:text-blue-200 m-0 text-sm font-medium">
                  Tu relación comercial con nosotros es privada y así se mantendrá, salvo obligación legal mediante orden judicial.
                </p>
              </div>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Uso de Información para Demostraciones y Capacitaciones
              </h2>
              <p>En TicoGPS nos enorgullece nuestro trabajo y frecuentemente realizamos capacitaciones o demostraciones a nuevos prospectos. Sin embargo, tu privacidad va primero.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <UserCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                        <strong>Política de Consentimiento Previo:</strong> Bajo ninguna circunstancia utilizaremos datos reales, nombres de empresas, rutas en vivo, historial de ubicaciones o fotografías de instalaciones de un cliente para fines publicitarios, material de marketing, redes sociales o demos de venta, sin haber obtenido previamente una aprobación explícita y por escrito por parte del cliente.
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <EyeOff className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                        <strong>Anonimato por defecto:</strong> Cualquier demostración del sistema se realizará con cuentas de prueba ("Demo Accounts") o datos ficticios, a menos que un cliente decida voluntariamente participar en un caso de éxito.
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                        <strong>Fotografías de Instalación:</strong> Si nuestros técnicos toman fotografías de la instalación, estas serán estrictamente para uso interno de control de calidad y garantía, y nunca serán publicadas en web o redes sociales donde se identifique la placa o propiedad del cliente sin su permiso.
                    </div>
                </li>
              </ul>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Información que Recopilamos
              </h2>
              <p>Para brindar el servicio de rastreo satelital eficiente, recopilamos y procesamos los siguientes datos:</p>
              <ul className="list-disc pl-5">
                <li><strong>Información de Identificación:</strong> Nombre completo, número de cédula (física o jurídica), dirección de correo electrónico y número de teléfono.</li>
                <li><strong>Datos del Vehículo:</strong> Marca, modelo, año, número de placa y VIN (número de chasis).</li>
                <li><strong>Datos de Geolocalización:</strong> Coordenadas GPS en tiempo real, velocidad, dirección de desplazamiento, historial de rutas y alertas de sensores (encendido/apagado, frenazos, etc.).</li>
              </ul>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                Protección y Almacenamiento de Datos
              </h2>
              <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra el acceso no autorizado, alteración o pérdida.</p>
              <ul className="list-disc pl-5">
                <li><strong>Acceso Restringido:</strong> Solo el personal autorizado de TicoGPS (Soporte Técnico y Administración) tiene acceso a la base de datos de clientes, y lo hacen bajo estrictos acuerdos de confidencialidad.</li>
                <li><strong>Seguridad en la Plataforma:</strong> Nuestros servidores y plataformas de rastreo cuentan con protocolos de encriptación estándar de la industria para asegurar la transmisión de datos desde el dispositivo GPS hasta tu pantalla.</li>
              </ul>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                Derechos del Usuario (Ley 8968)
              </h2>
              <p>Como usuario en Costa Rica, tienes el control sobre tu información. Tienes derecho a:</p>
              <ul className="list-disc pl-5">
                <li><strong>Acceso:</strong> Solicitar conocer qué datos tenemos sobre ti.</li>
                <li><strong>Rectificación:</strong> Pedir que corrijamos datos erróneos o desactualizados.</li>
                <li><strong>Cancelación:</strong> Solicitar la eliminación de tus datos personales de nuestros registros una vez finalizada la relación comercial (siempre que no existan obligaciones legales o contables de mantenerlos).</li>
              </ul>
              <p>Para ejercer cualquiera de estos derechos, puedes contactar directamente a nuestro departamento de servicio al cliente.</p>

              <h2 className="flex items-center gap-3 text-2xl font-bold mt-12">
                <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                Contacto
              </h2>
              <p>Si tienes alguna duda sobre nuestra política de privacidad o sobre cómo manejamos tu información, estamos a tu disposición:</p>
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg not-prose space-y-3">
                <div className="flex items-center gap-3">
                    <span className="font-bold w-32">Email:</span>
                    <a href="mailto:serviticogps@gmail.com" className="text-primary hover:underline">serviticogps@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                    <span className="font-bold w-32">Teléfono:</span>
                    <a href="tel:+50670103232" className="text-primary hover:underline">+506 7010-3232</a>
                </div>
                <div className="flex items-start gap-3">
                    <span className="font-bold w-32 shrink-0">Ubicación:</span>
                    <span>100m Sur del costado Este de los Tribunales de Cartago, Costa Rica.</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
