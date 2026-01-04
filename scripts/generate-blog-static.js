
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DIST_DIR = path.resolve(__dirname, '../dist');
const BLOG_DIR = path.resolve(__dirname, '../public/content/blog');
const BASE_URL = 'https://www.ticogps.com';

// Read the production index.html template
const indexHtmlPath = path.join(DIST_DIR, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html not found. Run "vite build" first.');
  process.exit(1);
}
const templateHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// Function to parse frontmatter safely
function parseFrontmatter(content) {
  const match = content.match(/^---([\s\S]*?)---/);
  if (!match) return {};
  
  const frontmatter = {};
  match[1].split('\n').forEach(line => {
    const [key, ...values] = line.split(':');
    if (key && values.length) {
      let value = values.join(':').trim();
      // Remove quotes
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      frontmatter[key.trim()] = value;
    }
  });
  return frontmatter;
}

// Process blog posts
fs.readdirSync(BLOG_DIR).forEach(file => {
  if (!file.endsWith('.md')) return;

  const content = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
  const meta = parseFrontmatter(content);

  if (!meta.slug) return;

  const postDir = path.join(DIST_DIR, 'blog', meta.slug);
  if (!fs.existsSync(postDir)) {
    fs.mkdirSync(postDir, { recursive: true });
  }

  // Inject metadata into HTML
  let postHtml = templateHtml;
  
  // Replace Title
  if (meta.title) {
    postHtml = postHtml.replace(
      /<title>.*?<\/title>/, 
      `<title>${meta.title}</title>`
    );
    postHtml = postHtml.replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${meta.title}" />`
    );
    postHtml = postHtml.replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${meta.title}" />`
    );
  }

  // Replace Description
  if (meta.excerpt || meta.description) {
    const desc = meta.excerpt || meta.description;
    postHtml = postHtml.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${desc}" />`
    );
    postHtml = postHtml.replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${desc}" />`
    );
    postHtml = postHtml.replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${desc}" />`
    );
  }

  // Replace Image
  if (meta.image) {
    const imageUrl = meta.image.startsWith('http') ? meta.image : `${BASE_URL}${meta.image}`;
    postHtml = postHtml.replace(
      /<meta property="og:image" content=".*?" \/>/,
      `<meta property="og:image" content="${imageUrl}" />`
    );
    postHtml = postHtml.replace(
      /<meta property="og:image:secure_url" content=".*?" \/>/,
      `<meta property="og:image:secure_url" content="${imageUrl}" />`
    );
    postHtml = postHtml.replace(
      /<meta name="twitter:image" content=".*?" \/>/,
      `<meta name="twitter:image" content="${imageUrl}" />`
    );
  }

  // Replace URL
  const postUrl = `${BASE_URL}/blog/${meta.slug}`;
  postHtml = postHtml.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${postUrl}" />`
  );
  postHtml = postHtml.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${postUrl}" />`
  );

  const ensure = (html, pattern, tag) => pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `${tag}\n</head>`);
  const desc = meta.excerpt || meta.description || '';
  const titleTag = meta.title || '';
  const imageUrl = meta.image && meta.image.startsWith('http') ? meta.image : (meta.image ? `${BASE_URL}${meta.image}` : '');
  postHtml = ensure(postHtml, /<meta property="og:type" content=".*?" \/>/, `<meta property="og:type" content="article" />`);
  postHtml = ensure(postHtml, /<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${titleTag}" />`);
  postHtml = ensure(postHtml, /<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${desc}" />`);
  postHtml = ensure(postHtml, /<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${imageUrl}" />`);
  postHtml = ensure(postHtml, /<meta property="og:image:secure_url" content=".*?" \/>/, `<meta property="og:image:secure_url" content="${imageUrl}" />`);
  postHtml = ensure(postHtml, /<meta property="og:image:width" content=".*?" \/>/, `<meta property="og:image:width" content="1200" />`);
  postHtml = ensure(postHtml, /<meta property="og:image:height" content=".*?" \/>/, `<meta property="og:image:height" content="630" />`);
  postHtml = ensure(postHtml, /<meta property="og:image:type" content=".*?" \/>/, `<meta property="og:image:type" content="image/jpeg" />`);
  postHtml = ensure(postHtml, /<meta property="og:image:alt" content=".*?" \/>/, `<meta property="og:image:alt" content="${titleTag || 'TicoGPS'}" />`);
  postHtml = ensure(postHtml, /<meta property="og:site_name" content=".*?" \/>/, `<meta property="og:site_name" content="TicoGPS" />`);
  postHtml = ensure(postHtml, /<meta property="og:locale" content=".*?" \/>/, `<meta property="og:locale" content="es_CR" />`);
  postHtml = ensure(postHtml, /<meta name="twitter:card" content=".*?" \/>/, `<meta name="twitter:card" content="summary_large_image" />`);
  postHtml = ensure(postHtml, /<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${titleTag}" />`);
  postHtml = ensure(postHtml, /<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${desc}" />`);
  postHtml = ensure(postHtml, /<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${imageUrl}" />`);
  postHtml = ensure(postHtml, /<meta name="description" content=".*?" \/>/, `<meta name="description" content="${desc}" />`);
  postHtml = ensure(postHtml, /<title>.*?<\/title>/, `<title>${titleTag}</title>`);

  // Write the pre-rendered HTML
  fs.writeFileSync(path.join(postDir, 'index.html'), postHtml);
  console.log(`Generated static page for: ${meta.slug}`);
});

console.log('Blog static generation complete.');
