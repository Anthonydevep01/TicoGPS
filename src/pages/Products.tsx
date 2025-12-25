import Layout from "@/components/layout/Layout";
import { ShoppingCart, Check, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const { addToCart, updateQuantity, items } = useCart();

  // Flatten categories from array of arrays
  const categories = ["Todos", ...Array.from(new Set(products.flatMap(p => p.category)))];

  const getProductQuantity = (productId: string) => {
    return items.find(item => item.id === productId)?.quantity || 0;
  };

  const filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(p => p.category.includes(selectedCategory));

  return (
    <Layout
      seo={{
        title: "Productos GPS y Taxímetros | TicoGPS",
        description: "Catálogo de taxímetros, dispositivos GPS 4G, impresoras y accesorios para transporte en Costa Rica.",
        canonical: "https://ticogps.com/productos"
      }}
    >
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Nuestros Productos
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Soluciones tecnológicas de alta calidad para el control y seguridad de tu vehículo.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <Link 
                key={product.id}
                to={`/productos/${product.id}`}
                className="group bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              >
                {/* Image Area */}
                <div className="aspect-square bg-slate-50 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden relative flex items-center justify-center p-4">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            Ver Detalles
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    {product.category.join(", ")}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2 flex-1">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-slate-900 dark:text-white">
                            {product.price}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">I.V.A.I.</span>
                    </div>
                    {getProductQuantity(product.id) > 0 ? (
                        <div 
                            className="flex items-center bg-primary text-white rounded-full shadow-sm z-10 relative h-[40px]"
                            onClick={(e) => e.preventDefault()}
                        >
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    updateQuantity(product.id, getProductQuantity(product.id) - 1);
                                }}
                                className="h-full px-3 hover:bg-primary/80 rounded-l-full transition-colors flex items-center justify-center"
                                title="Reducir cantidad"
                            >
                                <Minus className="h-4 w-4" />
                            </button>
                            <span className="font-bold text-sm min-w-[20px] text-center">{getProductQuantity(product.id)}</span>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    addToCart(product, 1);
                                }}
                                className="h-full px-3 hover:bg-primary/80 rounded-r-full transition-colors flex items-center justify-center"
                                title="Aumentar cantidad"
                            >
                                <Plus className="h-4 w-4" />
                            </button>
                        </div>
                    ) : (
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                addToCart(product, 1);
                            }}
                            className="bg-primary text-white p-2.5 rounded-full hover:bg-primary/90 transition-colors shadow-sm z-10 relative flex items-center justify-center gap-1 min-w-[40px] h-[40px]"
                            title="Agregar al carrito"
                        >
                            <ShoppingCart className="h-5 w-5" />
                        </button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* NeoTax Certification Section */}
          <div className="mt-20 border-t border-slate-200 dark:border-slate-800 pt-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 max-w-4xl mx-auto">
                <div className="w-full md:w-1/3 flex justify-center">
                    <img 
                        src="/images/TicoGPS-neotax-logo.jpg" 
                        alt="NeoTax Official Provider" 
                        className="max-h-[120px] object-contain"
                    />
                </div>
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        Proveedor Oficial Certificado
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Somos distribuidores autorizados de NeoTax, garantizando productos originales, soporte técnico especializado y cumplimiento total con la normativa de ARESEP.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300">
                            <Check className="h-4 w-4 text-green-500" />
                            Garantía Directa
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300">
                            <Check className="h-4 w-4 text-green-500" />
                            Soporte Técnico
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300">
                            <Check className="h-4 w-4 text-green-500" />
                            Repuestos Originales
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}