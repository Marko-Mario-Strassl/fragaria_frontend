"use client"

import React from "react"
import Image from "next/image"

interface ArtistCardProps {
	imageUrl: string
	name: string
	description: string
	zeit_von: string
	zeit_bis: string
	isOpen: boolean
	onToggle: () => void
}

const ArtistCard: React.FC<ArtistCardProps> = ({
	imageUrl,
	name,
	description,
	zeit_von,
	zeit_bis,
	isOpen,
	onToggle,
}) => {
	const formatTime = (time: string) => {
		return time.substring(0, 5) // Nimmt nur die ersten 5 Zeichen (HH:MM)
	}

	return (
		<div
			className={`h-fit bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl`}
			style={{ cursor: "pointer" }}
		>
			{/* Bildbereich */}
			<div className="relative h-64 w-full bg-gray-200">
				{imageUrl && (
					<Image
						src={imageUrl}
						alt={name}
						layout="fill"
						objectFit="cover"
						className="transition-opacity duration-300 hover:opacity-90 rounded-t-xl"
					/>
				)}
			</div>

			{/* Textbereich */}
			<div className="px-6 py-4">
				{/* Zeit und Name */}
				<div className="flex justify-between items-center">
					<div>
						<div className="text-sm text-gray-500 mb-2">
							<span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
								{formatTime(zeit_von)} - {formatTime(zeit_bis)}
							</span>
						</div>
						<h2 className="text-xl font-semibold text-gray-800 mb-2">
							{name}
						</h2>
					</div>
					{/* Button nur anzeigen, wenn description vorhanden ist */}
					{description && (
						<button
							className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
								isOpen
									? "bg-red-500 text-white"
									: "bg-blue-500 text-white"
							} hover:bg-opacity-80`}
							onClick={onToggle}
						>
							{isOpen ? "Weniger" : "Mehr"}
						</button>
					)}
				</div>

				{/* Beschreibung */}
				{isOpen && description && (
					<div className="mt-4 text-gray-600 leading-relaxed">
						<p>{description}</p>
					</div>
				)}
			</div>

			{/* Unterer dekorativer Bereich */}
			<div className="h-[6px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-xl"></div>
		</div>
	)
}

export default ArtistCard
