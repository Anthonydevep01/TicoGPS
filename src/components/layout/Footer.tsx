import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import ShareButton from '../common/ShareButton';

export default function Footer() {
  return (
    <footer className="bg-coffee_bean-100 text-almond_cream-500">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/images/TicoGPS-large-logo.png" alt="TicoGPS" className="h-32 w-auto bg-white rounded-md p-2 object-contain" />
            </Link>
            <p className="text-sm leading-relaxed mb-4 text-almond_cream-600">
              Expertos en seguridad y control vehicular en Costa Rica con más de 10 años de experiencia.
              Tecnología de punta para tu tranquilidad.
            </p>
            <div className="flex gap-4 items-center">
              <a href="https://www.facebook.com/profile.php?id=61585416941658" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <ShareButton className="hover:text-white text-almond_cream-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white hover:underline transition-all">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-white hover:underline transition-all">Servicios</Link></li>
              <li><Link to="/productos" className="hover:text-white hover:underline transition-all">Productos</Link></li>
              <li><Link to="/blog" className="hover:text-white hover:underline transition-all">Blog</Link></li>
              <li><Link to="/contacto" className="hover:text-white hover:underline transition-all">Contacto</Link></li>
              <li><Link to="/terminos-condiciones" className="hover:text-white hover:underline transition-all">Términos y Condiciones</Link></li>
              <li><Link to="/politica-privacidad" className="hover:text-white hover:underline transition-all">Política de Privacidad</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/servicios/autos-particulares" className="hover:text-white hover:underline transition-all">GPS para Autos Particulares</Link></li>
              <li><Link to="/servicios/flotas-corporativas" className="hover:text-white hover:underline transition-all">Control de Flotas Corporativas</Link></li>
              <li><Link to="/servicios/maquinaria-pesada" className="hover:text-white hover:underline transition-all">GPS para Maquinaria Pesada</Link></li>
              <li><Link to="/servicios/monitoreo-tiempo-real" className="hover:text-white hover:underline transition-all">Monitoreo en Tiempo Real</Link></li>
              <li><Link to="/servicios/transporte-publico" className="hover:text-white hover:underline transition-all">Transporte Público</Link></li>
              <li><Link to="/servicios/instalacion-domicilio" className="hover:text-white hover:underline transition-all">Instalación a Domicilio</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <a href="https://www.google.com/maps/place/TicoGPS/@9.8617368,-83.9175622,20.5z/data=!4m6!3m5!1s0x8fa0df9945df90fd:0xcbf3946366101ca0!8m2!3d9.8617812!4d-83.9173914!16s%2Fg%2F11msx65ymn!5m1!1e1?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-all">100m Sur del costado Este de los Tribunales de Cartago, Costa Rica.</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+50689535649" className="hover:text-white hover:underline transition-all">+506 8953-5649</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:serviticogps@gmail.com" className="hover:text-white hover:underline transition-all">serviticogps@gmail.com</a>
              </li>
            </ul>
            <div className="rounded-lg overflow-hidden h-40 w-full border border-coffee_bean-200">
              <iframe 
                src="https://maps.google.com/maps?q=9.8617524,-83.9172903&z=19&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Ubicación TicoGPS"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t border-coffee_bean-200 mt-12 pt-8 text-center text-sm text-almond_cream-600">
          <p>&copy; {new Date().getFullYear()} TicoGPS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}