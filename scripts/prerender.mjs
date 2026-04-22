import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const serverEntryUrl = pathToFileURL(path.join(distDir, 'server', 'entry-server.js')).href

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function resolveOutputPath(pagePath) {
  return pagePath === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, pagePath.slice(1), 'index.html')
}

function renderPageHtml(template, page, appHtml, headTags) {
  return template
    .replace(/<html lang="[^"]+">/, `<html lang="${page.language}">`)
    .replace(/<title>.*?<\/title>/, `<title>${escapeAttribute(page.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeAttribute(page.description)}" />`,
    )
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace('</head>', `    ${headTags}\n  </head>`)
}

function renderSitemap(pages) {
  const urls = pages
    .map(
      (page) => `  <url>\n    <loc>${page.canonicalUrl}</loc>\n  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

const { prerenderPages, renderHeadTags, renderPage } = await import(serverEntryUrl)
const template = await readFile(path.join(distDir, 'index.html'), 'utf8')

for (const page of prerenderPages) {
  const outputPath = resolveOutputPath(page.path)
  const outputDir = path.dirname(outputPath)
  const html = renderPageHtml(template, page, renderPage(page.language), renderHeadTags(page.language))

  await mkdir(outputDir, { recursive: true })
  await writeFile(outputPath, html)
}

await writeFile(
  path.join(distDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: https://aereisdin.github.io/sitemap.xml\n`,
)
await writeFile(path.join(distDir, 'sitemap.xml'), renderSitemap(prerenderPages))
await rm(path.join(distDir, 'server'), { force: true, recursive: true })