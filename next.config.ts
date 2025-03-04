import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
