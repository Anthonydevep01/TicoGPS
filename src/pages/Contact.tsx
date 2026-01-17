import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/sections/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <Layout
      seo={{
        title: "Contacto",
        description: "Contáctanos para cotizar tu GPS o sistema de rastreo satelital. Ubicados en Cartago, servicio a todo Costa Rica.",
        canonical: "https://www.ticogps.com/contacto"
      }}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto",
            "url": "https://www.ticogps.com/contacto",
            "about": {
              "@type": "Organization",
              "name": "TicoGPS",
              "url": "https://www.ticogps.com/"
            }
          })}
        </script>
      </Helmet>
      <div className="bg-slate-50 dark:bg-slate-950 py-12 md:py-20 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Contáctanos</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors">
              Estamos listos para asesorarte. Visítanos, llámanos o escríbenos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors">
                <h3 className="text-xl font-bold mb-6 dark:text-white transition-colors">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white transition-colors">Ubicación</h4>
                      <a href="https://www.google.com/maps/place/TicoGPS/@9.8617368,-83.9175622,20.5z/data=!4m6!3m5!1s0x8fa0df9945df90fd:0xcbf3946366101ca0!8m2!3d9.8617812!4d-83.9173914!16s%2Fg%2F11msx65ymn!5m1!1e1?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 transition-colors hover:text-primary hover:underline">100m Sur del costado Este de los Tribunales de Cartago, Costa Rica.</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white transition-colors">Teléfono</h4>
                      <a href="tel:+50689535649" className="text-slate-600 dark:text-slate-400 transition-colors hover:text-primary hover:underline">+506 8953-5649</a>
                      <p className="text-sm text-slate-500 dark:text-slate-500 transition-colors">Atención 24/7 para emergencias</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white transition-colors">Correo</h4>
                      <a href="mailto:serviticogps@gmail.com" className="text-slate-600 dark:text-slate-400 transition-colors hover:text-primary hover:underline">serviticogps@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white transition-colors">Horario de Oficina</h4>
                      <p className="text-slate-600 dark:text-slate-400 transition-colors">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                      <p className="text-slate-600 dark:text-slate-400 transition-colors">Sábados: 8:00 AM - 12:00 MD</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="bg-white dark:bg-slate-900 p-2 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 h-[300px] overflow-hidden transition-colors">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.3787722754687!2d-83.9173914!3d9.8617812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0df9945df90fd%3A0xcbf3946366101ca0!2sTicoGPS!5e0!3m2!1sen!2scr!4v1709251200000!5m2!1sen!2scr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Ubicación TicoGPS"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
