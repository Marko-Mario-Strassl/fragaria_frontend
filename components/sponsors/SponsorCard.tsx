"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

interface SponsorCardProps {
	bildId: string
	name: string
}

const SponsorCard: React.FC<SponsorCardProps> = ({ bildId, name }) => {
	const [imageUrl, setImageUrl] = useState<string | null>(null)

	useEffect(() => {
		const fetchImageUrl = async () => {
			try {
				const response = await fetch(
					`https://wordpress.fragaria.ch/wp-json/wp/v2/media/${bildId}`
				)
				const data = await response.json()
				setImageUrl(data.source_url)
			} catch (error) {
				console.error("Fehler beim Abrufen der Bild-URL:", error)
			}
		}

		fetchImageUrl()
	}, [bildId])

	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
			<div className="relative h-64 w-full bg-black">
				{imageUrl && (
					<Image
						src={imageUrl}
						alt={name}
						layout="fill"
						objectFit="contain"
						className="transition-opacity duration-300 hover:opacity-90"
					/>
				)}
			</div>
			<div className="px-6">
				<h2 className="text-2xl font-bold text-gray-800 my-2">
					{name}
				</h2>
			</div>
		</div>
	)
}

export default SponsorCard
