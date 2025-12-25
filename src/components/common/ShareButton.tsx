import { Share2, Check, Copy, Facebook, Twitter, MessageCircle, X as XIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface ShareButtonProps {
  url?: string;
  text?: string;
  className?: string;
  variant?: "icon" | "button" | "floating";
}

export default function ShareButton({ 
  url = window.location.href, 
  text = "Mira este contenido de TicoGPS", 
  className = "",
  variant = "icon"
}: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      // Don't close immediately so user sees the checkmark
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const openSocial = (socialUrl: string) => {
    window.open(socialUrl, '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  const shareLinks = [
    {
      name: "Copiar enlace",
      icon: copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />,
      action: handleCopy
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4 text-blue-600" />,
      action: () => openSocial(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
    },
    {
      name: "X (Twitter)",
      icon: <Twitter className="h-4 w-4 text-black dark:text-white" />,
      action: () => openSocial(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`)
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-4 w-4 text-green-500" />,
      action: () => openSocial(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`)
    }
  ];

  const toggleOpen = () => setIsOpen(!isOpen);

  const buttonContent = (
    <>
      <Share2 className={variant === "floating" ? "h-6 w-6" : variant === "button" ? "h-4 w-4" : "h-5 w-5"} />
      {variant === "button" && <span>Compartir</span>}
    </>
  );

  const baseButtonClass = variant === "floating"
    ? `bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-110 flex items-center justify-center ${className}`
    : variant === "button"
      ? `flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors ${className}`
      : `hover:text-primary transition-colors ${className}`;

  return (
    <div 
      className={`${variant === "floating" ? "fixed bottom-8 right-8 z-[9990]" : "relative inline-block z-10"}`} 
      ref={containerRef}
    >
      <button
        onClick={toggleOpen}
        className={baseButtonClass}
        aria-label="Compartir"
        title="Compartir"
      >
        {buttonContent}
      </button>

      {isOpen && (
        <div className={`absolute ${variant === "floating" ? "bottom-full mb-4 right-0 origin-bottom-right" : "top-full right-0 mt-2 origin-top-right"} w-56 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 p-2 z-[10000] animate-in fade-in zoom-in duration-200`}>
          <div className="flex justify-between items-center px-3 py-2 border-b border-slate-100 dark:border-slate-700 mb-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Compartir en</span>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">
              <XIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {shareLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={link.action}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 transition-colors text-sm text-left w-full"
              >
                {link.icon}
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
