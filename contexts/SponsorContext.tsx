"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { fetchWpData } from "@/app/api/fetchWpData"

export interface SponsorItem {
	id: number
	acf: {
		name: string
		bild: string
	}
	imageUrl: string
}

interface SponsorContextType {
	Sponsor: SponsorItem[]
	loading: boolean
}

const SponsorContext = createContext<SponsorContextType | undefined>(undefined)

export const useSponsor = () => {
	const context = useContext(SponsorContext)
	if (!context) {
		throw new Error(
			"useSponsor muss innerhalb eines SponsorProvider verwendet werden"
		)
	}
	return context
}

export const SponsorProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [Sponsor, setSponsors] = useState<SponsorItem[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadSponsor = async () => {
			try {
				const data = await fetchWpData("sponsor")
				setSponsors(data)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}

		loadSponsor()
	}, [])

	return (
		<SponsorContext.Provider value={{ Sponsor, loading }}>
			{children}
		</SponsorContext.Provider>
	)
}
