"use client"
import { useSiteConfig } from "@/contexts/SiteContext"

import React from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const Footer: React.FC = () => {
	const siteConfig = useSiteConfig()
	return (
		<div className=" text-white text-center py-6 self-end">
			{/* Social Media Icons */}
			<div className="flex justify-center space-x-4 mb-4">
				<a
					href={siteConfig.socialMedia.facebook}
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
				>
					<FaFacebookF className="text-white" />
				</a>
				<a
					href={siteConfig.socialMedia.instagram}
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
				>
					<FaInstagram className="text-white" />
				</a>
			</div>

			{/* Copyright and Text */}
			<p className="text-sm">Fragaria © Tanzmat 2025.</p>
			<p className="text-sm mt-2">Made by Marko Strassl </p>
		</div>
	)
}

export default Footer
