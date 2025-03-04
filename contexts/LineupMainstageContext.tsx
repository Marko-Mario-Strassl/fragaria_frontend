"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { fetchWpData } from "@/app/api/fetchWpData"
import { LineupItem } from "@/types/lineupItem"

interface LineupMainstageContextType {
	lineupMainstage: LineupItem[]
	loading: boolean
}

const LineupMainstageContext = createContext<
	LineupMainstageContextType | undefined
>(undefined)

export const useLineupMainstage = () => {
	const context = useContext(LineupMainstageContext)
	if (!context) {
		throw new Error(
			"useLineupMainstage muss innerhalb eines LineupMainstageProvider verwendet werden"
		)
	}
	return context
}

export const LineupMainstageProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [lineupMainstage, setLineupMainstage] = useState<LineupItem[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadLineupMainstage = async () => {
			try {
				const data = await fetchWpData("lineups-mainstage")
				const processedData = await Promise.all(
					data.map(async (item: LineupItem) => {
						const imageUrl = await fetchImageUrl(item.acf.bild) // Implementieren Sie diese Funktion
						return { ...item, imageUrl }
					})
				)
				setLineupMainstage(processedData)
			} catch (error) {
				console.warn("Fehler beim Laden des Lineups:", error)
			} finally {
				setLoading(false)
			}
		}

		loadLineupMainstage()
	}, [])

	return (
		<LineupMainstageContext.Provider value={{ lineupMainstage, loading }}>
			{children}
		</LineupMainstageContext.Provider>
	)
}

// Implementieren Sie diese Funktion, um die Bild-URL zu holen
async function fetchImageUrl(bildId: string): Promise<string> {
	// Hier die Logik zum Abrufen der Bild-URL basierend auf der Bild-ID
	// Beispiel:
	const response = await fetch(
		`https://wordpress.fragaria.ch/wp-json/wp/v2/media/${bildId}`
	)
	const data = await response.json()
	return data.source_url
}
