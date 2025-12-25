import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  name?: string;
  image?: string;
}

export default function SEO({
  title = 'TicoGPS | Rastreo Satelital y GPS en Costa Rica',
  description = 'Expertos en seguridad y control vehicular en Costa Rica. Venta e instalación de GPS para autos, camiones y flotas. Monitoreo 24/7 y cobertura nacional.',
  canonical = 'https://ticogps.com',
  type = 'website',
  name = 'TicoGPS',
  image = 'https://ticogps.com/og-image.jpg' // Placeholder
}: SEOProps) {
  
  const siteTitle = title === 'TicoGPS' ? title : `${title} | TicoGPS`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TicoGPS",
    "image": image,
    "telephone": "+506 8953-5649",
    "email": "serviticogps@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cartago, Costa Rica",
      "addressLocality": "Cartago",
      "addressRegion": "Cartago",
      "addressCountry": "CR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.8644", // Placeholder coords for Cartago Tribunals area
      "longitude": "-83.9194"
    },
    "url": "https://ticogps.com",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61585416941658",
      "https://instagram.com/ticogps"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}