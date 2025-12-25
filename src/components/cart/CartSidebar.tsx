import { useCart } from "@/context/CartContext";
import { X, Trash2, Plus, Minus, ShoppingCart, ArrowRight } from "lucide-react";

export default function CartSidebar() {
  const { items, isOpen, toggleCart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('es-CR', { style: 'currency', currency: 'CRC' }).format(amount);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity"
        onClick={toggleCart}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white dark:bg-slate-900 shadow-2xl z-[9999] transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Tu Carrito
            <span className="text-sm font-normal text-slate-500">({items.length} productos)</span>
          </div>
          <button 
            onClick={toggleCart}
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 space-y-4">
              <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-full">
                <ShoppingCart className="h-12 w-12 text-slate-300" />
              </div>
              <p>Tu carrito está vacío.</p>
              <button 
                onClick={toggleCart} 
                className="text-primary hover:underline font-bold"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                {/* Image */}
                <div className="h-20 w-20 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-slate-700">
                  <img src={item.images[0]} alt={item.name} className="h-full w-full object-contain p-1" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-2">{item.name}</h4>
                    <p className="text-primary font-bold text-sm mt-1">{item.price}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    {/* Qty Selector */}
                    <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-900 rounded-full px-2 py-1 h-8">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-slate-500 hover:text-slate-900 dark:hover:text-white"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-slate-500 hover:text-slate-900 dark:hover:text-white"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Remove */}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 p-1"
                      title="Eliminar"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-4">
            <div className="flex items-center justify-between text-lg font-bold text-slate-900 dark:text-white">
              <span>Total Estimado:</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            
            <a 
              href={`https://wa.me/50689535649?text=Hola! Me gustaría cotizar los siguientes productos:%0A%0A${items.map(i => `- ${i.quantity}x ${i.name}`).join('%0A')}%0A%0ATotal a pagar: ${formatPrice(totalPrice)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 transition-all"
            >
              Confirmar Pedido por WhatsApp <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        )}
      </div>
    </>
  );
}
