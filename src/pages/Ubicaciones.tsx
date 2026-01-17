import Layout from "@/components/layout/Layout";
import { locations } from "@/data/locations";
import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Ubicaciones() {
  return (
    <Layout
      seo={{
        title: "Cobertura Nacional de GPS | TicoGPS",
        description: "Brindamos servicios de rastreo GPS y monitoreo satelital en las 7 provincias de Costa Rica: San José, Alajuela, Cartago, Heredia, Guanacaste, Puntarenas y Limón.",
        canonical: "https://www.ticogps.com/ubicaciones"
      }}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": locations.map((prov, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "url": `https://www.ticogps.com/ubicaciones/${prov.slug}`
            }))
          })}
        </script>
      </Helmet>
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Cobertura Nacional
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              En TicoGPS ofrecemos soluciones de rastreo vehicular y control de flotas en todo el territorio de Costa Rica. 
              Selecciona tu provincia para conocer más sobre nuestros servicios locales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {locations.map((province) => (
              <Link
                key={province.slug}
                to={`/ubicaciones/${province.slug}`}
                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={province.image}
                    alt={`Rastreo GPS en ${province.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {province.name}
                    </h2>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                    {province.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                    Ver Cobertura <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
