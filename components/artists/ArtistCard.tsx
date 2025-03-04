"use client"

import React from "react"
import Image from "next/image"

interface ArtistCardProps {
	imageUrl: string
	name: string
	description: string
	zeit_von: string
	zeit_bis: string
}

const ArtistCard: React.FC<ArtistCardProps> = ({
	imageUrl,
	name,
	description,
	zeit_von,
	zeit_bis,
}) => {
	// Funktion zum Formatieren der Zeit (Entfernen der Sekunden)
	const formatTime = (time: string) => {
		return time.substring(0, 5) // Nimmt nur die ersten 5 Zeichen (HH:MM)
	}

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
				<div className="mt-4 mb-2 text-sm text-gray-500">
					<span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
						{formatTime(zeit_von)} - {formatTime(zeit_bis)}
					</span>
				</div>
				<h2 className="text-2xl font-bold text-gray-800 mb-2">
					{name}
				</h2>
				<p className="text-gray-600 mb-4">{description}</p>
			</div>
		</div>
	)
}

export default ArtistCard
