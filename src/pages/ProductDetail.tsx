import Layout from "@/components/layout/Layout";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { products, Product } from "@/data/products";
import { Check, ChevronRight, ShoppingCart, Store, Minus, Plus, ChevronLeft } from "lucide-react";
import ShareButton from "@/components/common/ShareButton";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setActiveImage(foundProduct.images[0]);
    } else {
      // Handle not found
      // navigate("/productos");
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout
      seo={{
        title: `${product.name} | TicoGPS`,
        description: product.description,
        canonical: `https://ticogps.com/productos/${product.id}`,
        image: product.images[0]
      }}
    >
      <div className="bg-white dark:bg-slate-950 min-h-screen pb-16">
        {/* Breadcrumb */}
        <div className="bg-slate-100 dark:bg-slate-900 py-3 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 text-xs md:text-sm text-slate-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/productos" className="hover:text-primary transition-colors">Productos</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/productos?cat=${product.category[0]}`} className="hover:text-primary transition-colors">{product.category[0]}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-900 dark:text-slate-300 font-medium">{product.name}</span>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Images */}
            <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
              {/* Thumbnails (Desktop: Left side stack) */}
              <div className="order-2 md:order-1 flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 md:w-20 md:h-20 border rounded-md p-1 bg-white dark:bg-slate-800 flex-shrink-0 transition-all ${
                      activeImage === img 
                        ? "border-primary ring-2 ring-primary/20" 
                        : "border-slate-200 dark:border-slate-700 hover:border-primary/50"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="order-1 md:order-2 flex-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-8 flex items-center justify-center relative min-h-[400px]">
                <img 
                  src={activeImage} 
                  alt={product.name} 
                  className="max-w-full max-h-[500px] object-contain transition-all duration-300 hover:scale-105" 
                />
                <div className="absolute top-4 right-4">
                  <ShareButton url={window.location.href} />
                </div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Brand Logo Area (Placeholder if no brand logo) */}
              <div className="flex items-center justify-between">
                {product.brand && (
                  <div className="text-2xl font-bold text-slate-400 uppercase tracking-widest font-mono">
                    {product.brand}
                  </div>
                )}
                {product.sku && (
                  <span className="text-xs text-slate-400">SKU: {product.sku}</span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                {product.name}
              </h1>

              {/* Specs List */}
              {product.specs && (
                <ul className="space-y-2 mt-4">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="font-bold text-slate-900 dark:text-slate-200 min-w-[100px]">{spec.label}:</span>
                      <span className="text-red-600 dark:text-red-400 font-medium ml-2">{spec.value}</span>
                    </li>
                  ))}
                  {/* Fallback description if specs are sparse */}
                  {!product.specs.length && (
                    <li className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {product.description}
                    </li>
                  )}
                </ul>
              )}

              <hr className="border-slate-200 dark:border-slate-800 my-6" />

              {/* Price & Stock */}
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-red-600">{product.price}</span>
                  <span className="text-slate-400 text-sm font-medium">I.V.A.I.</span>
                </div>
                
                {product.stock !== false ? (
                  <div className="flex items-center gap-2 text-green-600 font-bold text-sm mt-2">
                    <Check className="h-4 w-4" />
                    Hay existencias
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-500 font-bold text-sm mt-2">
                    <Minus className="h-4 w-4" />
                    Agotado
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-4 pt-4">
                {/* Store Availability Button */}
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-full uppercase text-sm transition-all flex items-center justify-center gap-2">
                  <Store className="h-4 w-4" />
                  Ver Disponibilidad en Tiendas
                </button>

                <div className="flex gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-full px-4 h-14 bg-white dark:bg-slate-800">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="mx-4 font-bold w-4 text-center">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full flex items-center justify-center gap-2 uppercase transition-all shadow-lg hover:shadow-red-600/30 h-14"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Añadir al Carrito
                  </button>
                  {/* Add to Cart (WhatsApp Contact) */}
                  <a 
                    href={`https://wa.me/50689535649?text=Hola! Me gustaría cotizar los siguientes productos:%0A%0A- ${quantity}x ${product.name}%0A%0ATotal a pagar: ${product.price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden" // Hidden since we use the cart button now, but keeping for reference if needed
                  >
                    Legacy Link
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Related Products Carousel */}
          <div className="mt-20">
            <h2 className="text-xl font-bold uppercase tracking-wide border-b-2 border-red-600 pb-2 mb-8 inline-block">
              Productos Relacionados
            </h2>
            
            <div className="relative group/carousel">
                {/* Carousel Arrows */}
                <button 
                    onClick={() => scrollCarousel('left')}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                </button>
                <button 
                    onClick={() => scrollCarousel('right')}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                </button>

                <div 
                    ref={carouselRef}
                    className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x scroll-smooth"
                >
                    {products
                        .filter(p => p.id !== product.id) // Exclude current product
                        .slice(0, 5) // Limit to 5 items
                        .map((related) => (
                        <Link 
                            key={related.id} 
                            to={`/productos/${related.id}`}
                            className="min-w-[250px] w-[250px] snap-start bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all flex flex-col group/card"
                        >
                            {/* Image */}
                            <div className="aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg mb-4 p-4 flex items-center justify-center relative overflow-hidden">
                                <img 
                                    src={related.images[0]} 
                                    alt={related.name} 
                                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover/card:scale-105" 
                                />
                                {related.stock === false && (
                                    <span className="absolute top-2 right-2 bg-slate-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                        AGOTADO
                                    </span>
                                )}
                            </div>

                            {/* Info */}
                            <div className="text-center flex-1 flex flex-col">
                                <h3 className="font-medium text-slate-900 dark:text-white mb-1 line-clamp-2 text-sm h-10 flex items-center justify-center">
                                    {related.name}
                                </h3>
                                {related.brand && (
                                    <div className="text-xs text-slate-400 uppercase font-bold mb-2">
                                        {related.brand}
                                    </div>
                                )}
                                <div className="mt-auto">
                                    <div className="text-red-600 font-bold text-lg">
                                        {related.price} <span className="text-[10px] text-slate-400 font-normal">I.V.A.I.</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
