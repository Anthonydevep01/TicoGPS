import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import About from "@/pages/About";

import AutosParticulares from './pages/services/AutosParticulares';
import FlotasCorporativas from './pages/services/FlotasCorporativas';
import MaquinariaPesada from './pages/services/MaquinariaPesada';
import MonitoreoTiempoReal from './pages/services/MonitoreoTiempoReal';
import InstalacionDomicilio from './pages/services/InstalacionDomicilio';
import TransportePublico from './pages/services/TransportePublico';
import AppTaxis from './pages/services/AppTaxis';
import Autobuses from './pages/services/Autobuses';
import Products from './pages/Products';
import BlogPost from './pages/BlogPost';
import Blog from './pages/Blog';
import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticasPrivacidad from './pages/PoliticasPrivacidad';
import ProductDetail from './pages/ProductDetail';
import Ubicaciones from './pages/Ubicaciones';
import ProvinceDetail from './pages/ProvinceDetail';

// Placeholder components for other pages
const Placeholder = ({ title }: { title: string }) => (
  <Layout seo={{ title }}>
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
      <p className="text-muted-foreground">Esta página está en construcción.</p>
    </div>
  </Layout>
);

import { CartProvider } from './context/CartContext';
import CartSidebar from './components/cart/CartSidebar';

export default function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <CartSidebar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/servicios/autos-particulares" element={<AutosParticulares />} />
          <Route path="/servicios/flotas-corporativas" element={<FlotasCorporativas />} />
          <Route path="/servicios/maquinaria-pesada" element={<MaquinariaPesada />} />
          <Route path="/servicios/monitoreo-tiempo-real" element={<MonitoreoTiempoReal />} />
          <Route path="/servicios/instalacion-domicilio" element={<InstalacionDomicilio />} />
          <Route path="/servicios/transporte-publico" element={<TransportePublico />} />
          <Route path="/servicios/transporte-publico/app-taxis" element={<AppTaxis />} />
          <Route path="/servicios/transporte-publico/autobuses" element={<Autobuses />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/ubicaciones" element={<Ubicaciones />} />
          <Route path="/ubicaciones/:province" element={<ProvinceDetail />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="/politica-privacidad" element={<PoliticasPrivacidad />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Placeholder title="404 - No encontrado" />} />
          </Routes>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}
