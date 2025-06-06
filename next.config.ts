import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ["@headlessui/react", "@heroicons/react"], // Hier kannst du Paketnamen hinzufügen
		serverSourceMaps: false,
	},
	productionBrowserSourceMaps: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "wordpress.fragaria.ch",
				pathname: "/**",
			},
		],
	},
	env: {
		RESEND_API_KEY: process.env.RESEND_API_KEY,
	},
}

export default nextConfig
