import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Moon, Sun, ChevronDown, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import ShareButton from '../common/ShareButton';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const { toggleCart, totalItems } = useCart();

  const navigation = [
    { name: 'Inicio', href: '/', hasDropdown: false },
    { name: 'Servicios', href: '/servicios', hasDropdown: false },
    { name: 'Productos', href: '/productos', hasDropdown: false },
    { name: 'Ubicaciones', href: '/ubicaciones', hasDropdown: true },
    { name: 'Nosotros', href: '/nosotros', hasDropdown: false },
    { name: 'Blog', href: '/blog', hasDropdown: false },
    { name: 'Otro', href: '#', hasDropdown: true, isOther: true },
  ];

  const locations = [
    { name: 'Cartago', href: '/ubicaciones/cartago' },
    { name: 'San José', href: '/ubicaciones/san-jose' },
    { name: 'Alajuela', href: '/ubicaciones/alajuela' },
    { name: 'Heredia', href: '/ubicaciones/heredia' },
    { name: 'Puntarenas', href: '/ubicaciones/puntarenas' },
    { name: 'Limón', href: '/ubicaciones/limon' },
    { name: 'Guanacaste', href: '/ubicaciones/guanacaste' },
  ];

  const otherLinks = [
    { name: 'Contacto', href: '/contacto' },
    { name: 'Términos y Condiciones', href: '/terminos-condiciones' },
    { name: 'Política de Privacidad', href: '/politica-privacidad' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-slate-200">
      {/* Top Bar */}
      <div className="bg-ebony text-white py-2 text-xs sm:text-sm font-semibold">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="https://www.google.com/maps/place/TicoGPS/@9.8617368,-83.9175622,20.5z/data=!4m6!3m5!1s0x8fa0df9945df90fd:0xcbf3946366101ca0!8m2!3d9.8617812!4d-83.9173914!16s%2Fg%2F11msx65ymn!5m1!1e1?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
              Cartago, Costa Rica
            </a>
            <a href="tel:+50689535649" className="hidden sm:flex items-center gap-1 hover:text-accent">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              +506 8953-5649
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#" className="hover:text-accent">Facebook</a>
            <a href="#" className="hover:text-accent">Instagram</a>
            <ShareButton className="hover:text-accent text-white" />
            <button 
              onClick={toggleTheme}
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/TicoGPS-large-logo.png" alt="TicoGPS" className="h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href || (item.hasDropdown && location.pathname.startsWith(item.href));
              
              if (item.hasDropdown) {
                const dropdownItems = item.isOther ? otherLinks : locations;
                
                return (
                  <div key={item.name} className="relative group flex items-center">
                    <button
                      className={cn(
                        "text-base font-bold transition-all duration-200 decoration-2 underline-offset-4 flex items-center",
                        "hover:text-primary hover:underline",
                        isActive 
                      ? "text-primary underline" 
                          : "text-slate-900"
                      )}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-slate-900 hover:bg-slate-50 hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-base font-bold transition-all duration-200 decoration-2 underline-offset-4",
                    "hover:text-primary hover:underline",
                    isActive 
                      ? "text-primary underline" 
                      : "text-slate-900"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/contacto"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md text-base font-bold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Cotizar Ahora
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button 
              onClick={toggleCart}
              className="relative p-2 text-slate-900 hover:text-primary transition-colors"
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full animate-in zoom-in duration-300">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-base font-medium text-black hover:text-primary hover:underline transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 rounded-md text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Cotizar Ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}