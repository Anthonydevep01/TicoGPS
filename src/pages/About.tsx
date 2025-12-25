import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Target, Heart, Shield, Users, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <Layout
      seo={{
        title: "Nosotros | TicoGPS - Expertos en Rastreo Satelital",
        description: "Conoce a TicoGPS, empresa líder en seguridad vehicular en Costa Rica. Más de 10 años brindando tranquilidad a familias y empresas.",
        canonical: "https://ticogps.com/nosotros"
      }}
    >
      <div className="bg-almond_cream dark:bg-ebony-100 min-h-screen transition-colors duration-300">
        
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src="/images/TicoGPS-basilica.jpg" 
            alt="TicoGPS en Costa Rica" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-coffee_bean-900/80 dark:bg-ebony-100/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="container px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                TicoGPS: Tu Copiloto de Confianza
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-bold">
                Desde el corazón de Cartago para toda Costa Rica, conectamos tranquilidad con tecnología.
              </p>
            </div>
          </div>
        </div>

        {/* Quiénes Somos */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-camel/20 rounded-2xl transform -rotate-3"></div>
              <img 
                src="/images/TicoGPS-logo.png" 
                alt="Equipo TicoGPS" 
                className="relative rounded-2xl shadow-xl bg-white p-8 w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-dusty_olive/10 text-dusty_olive-700 dark:text-dusty_olive-300 font-semibold text-sm mb-4">
                Sobre Nosotros
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-coffee_bean dark:text-almond_cream mb-6">
                Más que tecnología, somos personas cuidando personas
              </h2>
              <div className="space-y-4 text-coffee_bean-400 dark:text-almond_cream-400 text-lg leading-relaxed">
                <p>
                  Somos una empresa costarricense con más de 10 años de trayectoria en el mercado de la seguridad vehicular y la telemática. Nacimos con una meta clara: democratizar el acceso a <Link to="/servicios" className="text-primary hover:text-primary/80 font-semibold underline decoration-2 underline-offset-2 transition-colors">servicios de rastreo GPS</Link> de alta calidad.
                </p>
                <p>
                  Hoy, con orgullo, servimos a más de 100 clientes activos, protegiendo desde el auto familiar y el taxi que recorre la ciudad, hasta grandes flotillas de autobuses y maquinaria pesada en los terrenos más difíciles del país.
                </p>
                <p>
                  Entendemos que detrás de cada vehículo hay una inversión, un trabajo o una familia. Por eso, nuestro enfoque no es solo la venta, sino el acompañamiento constante.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="bg-white dark:bg-ebony-200 py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-almond_cream-50 dark:bg-ebony-100 p-10 rounded-3xl border border-camel/10 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-coffee_bean dark:text-almond_cream mb-4">Nuestra Misión</h3>
                <p className="text-coffee_bean-400 dark:text-almond_cream-400 leading-relaxed">
                  Brindar paz mental y control total a familias y empresas costarricenses mediante soluciones de rastreo satelital innovadoras y accesibles. Nos dedicamos a ofrecer un servicio de soporte 24/7 ininterrumpido, garantizando que, sin importar la hora o el lugar, nuestros clientes nunca viajen solos.
                </p>
              </div>

              <div className="bg-almond_cream-50 dark:bg-ebony-100 p-10 rounded-3xl border border-camel/10 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-coffee_bean dark:text-almond_cream mb-4">Nuestra Visión</h3>
                <p className="text-coffee_bean-400 dark:text-almond_cream-400 leading-relaxed">
                  Consolidarnos como el referente indiscutible en seguridad vehicular en Costa Rica, distinguiéndonos por una relación de lealtad inquebrantable con nuestros clientes. Aspiramos a un futuro donde la tecnología de TicoGPS sea el estándar de seguridad para cada conductor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee_bean dark:text-almond_cream mb-6">Nuestros Valores</h2>
            <p className="text-lg text-coffee_bean-400 dark:text-almond_cream-400">
              Nuestros pilares son la base de la confianza que más de un centenar de clientes depositan en nosotros día a día.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Honestidad",
                desc: "Hablamos claro. Ofrecemos precios competitivos sin letras pequeñas ni costos ocultos. Tu confianza es nuestro activo más valioso."
              },
              {
                icon: Award,
                title: "Responsabilidad",
                desc: "Sabemos lo que está en juego. Asumimos el compromiso de mantener tu vehículo monitoreado y tus datos seguros."
              },
              {
                icon: Users,
                title: "Respeto",
                desc: "Valoramos tu tiempo y tu propiedad. Nuestros técnicos tratan cada vehículo con el máximo cuidado y profesionalismo."
              },
              {
                icon: Heart,
                title: "Vocación",
                desc: "No somos un 'bot', somos personas cuidando personas. Nuestra atención al cliente es cálida, cercana y siempre dispuesta."
              }
            ].map((valor, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-camel-100 dark:bg-ebony-300 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <valor.icon className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-coffee_bean dark:text-almond_cream mb-3">{valor.title}</h3>
                <p className="text-sm text-coffee_bean-400 dark:text-almond_cream-400 leading-relaxed">
                  {valor.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="bg-coffee_bean dark:bg-ebony-100 text-almond_cream py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  ¿Por qué elegir TicoGPS?
                </h2>
                <p className="text-lg text-almond_cream-200">
                  Sabemos que hay muchas opciones, pero en TicoGPS construimos relaciones a largo plazo.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Experiencia Local", desc: "Conocemos las rutas, los riesgos y las necesidades del conductor tico." },
                    { title: "Flexibilidad Total", desc: "Planes de suscripción o venta, adaptándonos a tu presupuesto." },
                    { title: "Cobertura Nacional", desc: "Nuestro servicio a domicilio cubre las 7 provincias." },
                    { title: "Capacitación Experta", desc: "Te enseñamos a usar la herramienta para maximizar tu seguridad." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="bg-camel/20 p-2 rounded-lg h-fit">
                        <MapPin className="h-6 w-6 text-almond_cream-200" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{item.title}</h4>
                        <p className="text-almond_cream-200 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2 bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">En TicoGPS, tu seguridad es nuestra ruta.</h3>
                <p className="text-white mb-8">Únete a nuestra familia de clientes protegidos.</p>
                <Link 
                  to="/contacto"
                  className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
                >
                  ¡Contáctanos hoy!
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
