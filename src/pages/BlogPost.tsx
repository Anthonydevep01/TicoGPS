import Layout from "@/components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import { Calendar, User, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react";
import ShareButton from "@/components/common/ShareButton";
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

// Same interface as Blog.tsx
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

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Mapping slugs to file paths
        // In this demo, we can just look for the file in public/content/blog
        // We'll map the known slug to the filename. 
        // In a real system, you'd fetch an index.json first.
        let fileName = '';
        if (slug === 'calidad-garantia-gps-costa-rica') {
            fileName = 'calidad-garantia.md';
        } else if (slug === 'ticogps-experto-seguridad-vehicular-costa-rica') {
            fileName = 'ticogps-experto-seguridad.md';
        } else if (slug === 'robos-vehiculos-costa-rica-2025-mes-critico') {
            fileName = 'robos-vehiculos-costa-rica-2025-mes-critico.md';
        } else {
            fileName = `${slug}.md`;
        }

        const response = await fetch(`/content/blog/${fileName}`);
        if (!response.ok) throw new Error("File not found");
        
        const text = await response.text();
        const { data, content } = parseFrontmatter(text);
        
        setPost({
          slug: data.slug || '',
          title: data.title || 'Sin título',
          date: data.date || '',
          author: data.author || '',
          image: data.image || '',
          excerpt: data.excerpt || data.meta_description || '',
          category: data.category || '',
          content: content
        });
      } catch (error) {
        console.error("Error loading post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) loadPost();
  }, [slug]);

  if (loading) {
    return (
        <Layout>
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        </Layout>
    )
  }

  if (!post) {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
                <Link to="/blog" className="text-primary hover:underline">Volver al Blog</Link>
            </div>
        </Layout>
    )
  }

  // Append a version parameter to bust social media cache
  const absoluteImage = post.image.startsWith('http') 
    ? post.image 
    : `https://www.ticogps.com${post.image}?v=${new Date().getTime()}`; // Dynamic cache buster
    
  // Use the canonical URL for the share button, ensuring it doesn't have extra params
  // unless we explicitly want to bust cache, but cleaner is better for sharing.
  const pageUrl = `https://www.ticogps.com/blog/${post.slug}`;

  return (
    <Layout
      seo={{
        title: post.title,
        description: post.excerpt,
        canonical: pageUrl,
        image: absoluteImage,
        type: "article"
      }}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": pageUrl
            },
            "headline": post.title,
            "image": absoluteImage.replace(/\?v=\d+$/, ""),
            "author": {
              "@type": "Organization",
              "name": post.author || "TicoGPS"
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "publisher": {
              "@type": "Organization",
              "name": "TicoGPS",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.ticogps.com/images/TicoGPS-logo.webp"
              }
            }
          })}
        </script>
      </Helmet>
      {/* Hero Header */}
      <div className="bg-slate-900 text-white relative">
        <div className="absolute inset-0 overflow-hidden">
             <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-20 blur-sm" />
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-primary/20 text-primary border border-primary/30 px-4 py-1 rounded-full text-sm font-bold w-fit mx-auto mb-6">
                    {post.category}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    {post.title}
                </h1>
                <div className="flex items-center justify-center gap-6 text-slate-400 text-sm">
                    <span className="flex items-center gap-2"><User className="h-4 w-4" /> {post.author}</span>
                    <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</span>
                    <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 5 min lectura</span>
                </div>
            </div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-950 py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Column: Ads */}
                <aside className="hidden lg:block lg:col-span-2">
                    <div className="sticky top-24 space-y-6">
                         <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 text-center">
                            <p className="text-xs text-slate-400 mb-2">PUBLICIDAD</p>
                         <a
                            href="https://linkcraftmedia.com"
                            target="_blank"
                            rel="noopener"
                            aria-label="Publicidad LinkCraft Media"
                          >
                            <img
                              src="/images/TicoGPS-SideBanner01.jpg"
                              alt="Publicidad LinkCraft Media"
                              className="w-full h-64 object-cover rounded-md border border-slate-200 dark:border-slate-700"
                            />
                          </a>
                         </div>
                    </div>
                </aside>

                {/* Middle Column: Content */}
                <article className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-8 md:p-12">
                    {/* Featured image inside content removed to avoid duplication */}

                    <div className="prose prose-lg dark:prose-invert max-w-none 
                        prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                        prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
                        prose-a:text-primary prose-a:font-bold prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-primary/80
                        prose-img:rounded-xl prose-img:shadow-md prose-img:mx-auto
                        prose-hr:border-slate-200 dark:prose-hr:border-slate-800 prose-hr:my-8
                    ">
                        <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            components={{
                                // Custom renderers to ensure styling matches requirements
                                h2: ({node, ...props}) => (
                                    <>
                                        <hr className="border-t border-slate-200 dark:border-slate-800 my-8" />
                                        <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4" {...props} />
                                    </>
                                ),
                                img: ({node, ...props}) => (
                                    <figure className="my-8">
                                        <img className="rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 w-full" {...props} />
                                        {props.alt && <figcaption className="text-center text-sm text-slate-500 mt-2 italic">{props.alt}</figcaption>}
                                    </figure>
                                ),
                                a: ({node, ...props}) => {
                                    // Handle internal links with Link component, external with regular anchor
                                    const href = props.href || '';
                                    const isInternal = href.startsWith('/') || href.startsWith('#');
                                    const className = "text-primary font-bold underline decoration-2 underline-offset-2 hover:text-primary/80";
                                    
                                    if (isInternal) {
                                        return <Link to={href} className={className}>{props.children}</Link>;
                                    }
                                    return <a className={className} target="_blank" rel="noopener noreferrer" {...props} />;
                                }
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div className="font-bold text-slate-900 dark:text-white">
                            ¿Te gustó este artículo?
                        </div>
                        <ShareButton 
                            text={post.title}
                            url={pageUrl}
                        />
                    </div>
                </article>

                {/* Right Column: Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 sticky top-24">
                        <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Índice Relacionado</h3>
                        <nav className="flex flex-col gap-2">
                             <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors py-1 border-b border-slate-50 dark:border-slate-800">
                                Mantenimiento Preventivo
                             </a>
                             <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors py-1 border-b border-slate-50 dark:border-slate-800">
                                Ahorro de Combustible
                             </a>
                             <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors py-1 border-b border-slate-50 dark:border-slate-800">
                                Seguridad de Flotas
                             </a>
                        </nav>

                        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <h4 className="font-bold text-sm mb-2 text-slate-900 dark:text-white">¿Necesitas Asesoría?</h4>
                            <p className="text-xs text-slate-500 mb-3">Nuestros expertos están listos para ayudarte a elegir el mejor GPS.</p>
                            <Link to="/contacto" className="block w-full bg-primary text-white text-center text-sm font-bold py-2 rounded hover:bg-primary/90 transition-colors">
                                Contactar
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
      </div>
    </Layout>
  );
}
