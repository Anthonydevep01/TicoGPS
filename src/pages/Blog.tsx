import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

// Simple custom frontmatter parser to avoid gray-matter browser issues
const parseFrontmatter = (text: string) => {
  const match = text.match(/^---([\s\S]*?)---([\s\S]*)$/);
  if (!match) return { data: {}, content: text };

  const frontmatterRaw = match[1];
  const content = match[2].trim();
  const data: Record<string, string> = {};

  frontmatterRaw.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      let value = valueParts.join(':').trim();
      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      data[key.trim()] = value;
    }
  });

  return { data, content };
};

// In a real app, this list would be generated dynamically or fetched from an API/JSON index
const BLOG_POSTS_LIST = [
  'ticogps-experto-seguridad.md',
  'calidad-garantia.md',
  'robos-vehiculos-costa-rica-2025-mes-critico.md',
  'multas-transito-costa-rica-2026-rebajas.md',
  'robo-vehiculos-centros-comerciales-costa-rica-protocolos.md'
];

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  category: string;
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const loadedPosts: BlogPost[] = [];
        
        for (const fileName of BLOG_POSTS_LIST) {
          // Fetch from public folder
          const response = await fetch(`/content/blog/${fileName}`);
          if (response.ok) {
            const text = await response.text();
            const { data, content } = parseFrontmatter(text);
            
            loadedPosts.push({
              slug: data.slug || '',
              title: data.title || 'Sin título',
              date: data.date || '',
              author: data.author || '',
              image: data.image || '',
              excerpt: data.excerpt || data.meta_description || content.slice(0, 160),
              category: data.category || '',
              content: content
            });
          }
        }

        // Sort by date descending
        loadedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setPosts(loadedPosts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);
  
  const recentPosts = posts.slice(0, 4);
  useEffect(() => {
    if (recentPosts.length === 0) return;
    const t = setInterval(() => {
      setActive(a => (a + 1) % recentPosts.length);
    }, 5000);
    return () => clearInterval(t);
  }, [recentPosts.length]);

  return (
    <Layout
      seo={{
        title: "Blog TicoGPS | Noticias y Consejos de Seguridad",
        description: "Artículos sobre rastreo GPS, seguridad vehicular, mantenimiento de flotas y tecnología en Costa Rica.",
        canonical: "https://www.ticogps.com/blog"
      }}
    >
      {!loading && posts.length > 0 && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": posts.map((p, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "url": `https://www.ticogps.com/blog/${p.slug}`
              }))
            })}
          </script>
        </Helmet>
      )}
      {/* Header */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog TicoGPS</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Noticias, consejos y guías sobre seguridad vehicular y tecnología GPS en Costa Rica.
          </p>
        </div>
      </section>
      
      {/* Trending Carousel */}
      {recentPosts.length > 0 && (
        <section className="py-10 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-wide mb-3">Artículos recientes</h2>
            <hr className="border-t-2 border-primary w-full mb-6" />
            <div className="mx-auto max-w-4xl"><div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700"
                style={{ 
                  transform: `translateX(-${recentPosts.length > 0 ? (active * 100) / recentPosts.length : 0}%)`,
                  width: `${recentPosts.length * 100}%`
                }}
              >
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="relative flex-shrink-0 h-[260px] md:h-[340px] rounded-2xl"
                    style={{ width: `${100 / recentPosts.length}%` }}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width={1280}
                        height={720}
                        sizes="(max-width: 768px) 100vw, 1200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 h-full flex items-end p-6">
                      <div className="text-white max-w-xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{post.title}</h3>
                        <p className="text-sm md:text-base text-white/90 line-clamp-3">{post.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <button
                aria-label="Anterior"
                onClick={() => setActive(a => (a - 1 + recentPosts.length) % recentPosts.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow hover:bg-white dark:hover:bg-slate-700"
              >
                ‹
              </button>
              <button
                aria-label="Siguiente"
                onClick={() => setActive(a => (a + 1) % recentPosts.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow hover:bg-white dark:hover:bg-slate-700"
              >
                ›
              </button>
            </div></div>
          </div>
        </section>
      )}

      {/* Main Grid */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          {loading ? (
             <div className="flex justify-center py-20">
               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link 
                  key={post.slug} 
                  to={`/blog/${post.slug}`} 
                  className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col group h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                       <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                         Leer más <ArrowRight className="h-4 w-4" />
                       </span>
                       <span className="text-xs text-slate-400 flex items-center gap-1">
                         <Clock className="h-3 w-3" /> 5 min
                       </span>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* Fallback if no posts */}
              {posts.length === 0 && (
                <div className="col-span-full text-center py-20 text-slate-500">
                  No hay artículos disponibles en este momento.
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
