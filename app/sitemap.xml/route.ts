import { NextResponse } from "next/server"

const DOMAIN = "https://www.fragaria.ch" // Deine Domain hier einfügen

const staticUrls = [
	{ loc: `${DOMAIN}/`, lastmod: "2025-04-04", priority: 1.0 },
	{ loc: `${DOMAIN}/about`, lastmod: "2025-04-01", priority: 0.8 },
	{ loc: `${DOMAIN}/artists`, lastmod: "2025-03-28", priority: 0.7 },
	{ loc: `${DOMAIN}/cashless`, lastmod: "2025-03-15", priority: 0.6 },
	{ loc: `${DOMAIN}/contact`, lastmod: "2025-03-15", priority: 0.6 },
	{ loc: `${DOMAIN}/faqs`, lastmod: "2025-03-15", priority: 0.6 },
	{ loc: `${DOMAIN}/impressions`, lastmod: "2025-03-15", priority: 0.6 },
	{ loc: `${DOMAIN}/map`, lastmod: "2025-03-15", priority: 0.6 },
	{ loc: `${DOMAIN}/pre_fragaria`, lastmod: "2025-03-15", priority: 0.6 },
	{ loc: `${DOMAIN}/shuttle`, lastmod: "2025-03-15", priority: 0.6 },
	{ loc: `${DOMAIN}/sponsor`, lastmod: "2025-03-15", priority: 0.6 },
]

const generateSitemap = () => {
	return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls
			.map(
				(url) => `
          <url>
            <loc>${url.loc}</loc>
            <lastmod>${url.lastmod}</lastmod>
            <priority>${url.priority}</priority>
          </url>
        `
			)
			.join("")}
    </urlset>`
}

export async function GET() {
	const sitemap = generateSitemap()
	return new NextResponse(sitemap, {
		headers: {
			"Content-Type": "text/xml",
		},
	})
}
