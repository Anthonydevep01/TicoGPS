import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import SEO from '../seo/SEO';
import ShareButton from '../common/ShareButton';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: ReactNode;
  seo?: {
    title?: string;
    description?: string;
    canonical?: string;
    type?: string;
    name?: string;
    image?: string;
  };
}

export default function Layout({ children, seo }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Logic to show back button only on secondary paths (depth > 1)
  // e.g., show on /services/cars but not on /services
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const showBackButton = pathSegments.length > 1;

  const handleBack = () => {
    if (pathSegments.length > 0) {
      pathSegments.pop();
      const parentPath = '/' + pathSegments.join('/');
      navigate(parentPath);
    } else {
      navigate('/');
    }
  };

  const host = 'https://www.ticogps.com';
  const segmentNames: Record<string, string> = {
    servicios: 'Servicios',
    productos: 'Productos',
    ubicaciones: 'Ubicaciones',
    nosotros: 'Nosotros',
    blog: 'Blog',
    contacto: 'Contacto',
    'terminos-condiciones': 'Términos y Condiciones',
    'politica-privacidad': 'Política de Privacidad'
  };
  const toTitle = (s: string) => (segmentNames[s] ?? s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()));
  const breadcrumbItems = [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${host}/` }];
  pathSegments.forEach((seg, idx) => {
    const url = `${host}/${pathSegments.slice(0, idx + 1).join('/')}`;
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: idx + 2,
      name: toTitle(seg),
      item: url
    });
  });
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO {...seo} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <Header />
      {showBackButton && (
        <button
          onClick={handleBack}
          className="fixed top-36 left-4 z-[9999] flex items-center gap-2 bg-ebony text-white px-4 py-2 rounded-md hover:bg-ebony/90 transition-all shadow-md text-sm font-medium animate-in fade-in zoom-in duration-300 border border-white/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </button>
      )}
      <main className="flex-grow relative">
        {children}
      </main>
      <Footer />
      <ShareButton variant="floating" />
    </div>
  );
}
