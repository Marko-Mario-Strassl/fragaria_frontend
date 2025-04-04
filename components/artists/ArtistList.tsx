"use client"
import React, { useState } from "react"
import ArtistCard from "./ArtistCard"
import { LineupItem } from "@/types/lineupItem"

interface ArtistListProps {
	artists: LineupItem[]
}

const ArtistList: React.FC<ArtistListProps> = ({ artists }) => {
	const [openCardId, setOpenCardId] = useState<number | null>(null)

	const handleToggle = (id: number) => {
		setOpenCardId((prevId) => (prevId === id ? null : id))
	}

	const timeToMinutes = (time: string): number => {
		const [hours, minutes] = time.split(":").map(Number)
		return (hours % 24) * 60 + minutes
	}

	const sortArtists = (a: LineupItem, b: LineupItem): number => {
		const timeA = timeToMinutes(a.acf.zeit_von)
		const timeB = timeToMinutes(b.acf.zeit_von)

		if ((timeA < 720 && timeB < 720) || (timeA >= 720 && timeB >= 720)) {
			return timeA - timeB
		}
		return timeB - timeA
	}

	const sortedArtists =
		artists && artists.length > 0 ? [...artists].sort(sortArtists) : []

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{sortedArtists.length > 0 ? (
				sortedArtists.map((artist) => (
					<ArtistCard
						key={artist.id}
						imageUrl={artist.imageUrl}
						name={artist.acf.name}
						description={artist.acf.description}
						zeit_von={artist.acf.zeit_von}
						zeit_bis={artist.acf.zeit_bis}
						isOpen={openCardId === artist.id}
						onToggle={() => handleToggle(artist.id)}
					/>
				))
			) : (
				<h2 className="col-span-full text-center text-2xl font-bold text-black">
					Coming Soon...
				</h2>
			)}
		</div>
	)
}

export default ArtistList
