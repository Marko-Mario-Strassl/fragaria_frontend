"use client"
import ArtistList from "@/components/artists/ArtistList"
import { useLineupMainstage } from "@/contexts/LineupMainstageContext"
import { useLineupTreibhaus } from "@/contexts/LineupTreibhausContext"
import { useSiteConfig } from "@/contexts/SiteContext"
import React from "react"

const ArtistsPage: React.FC = () => {
	const { lineupMainstage, loading } = useLineupMainstage()
	const { lineupTreibhaus } = useLineupTreibhaus()
	const siteConfig = useSiteConfig()

	if (loading) return <div>Lädt...</div>

	return (
		<>
			<div className="container mx-auto px-4 py-8">
				<h1
					className={`text-4xl  font-bold text-center mb-8 ${siteConfig.primaryColor}`}
				>
					Erdbeerfeld Lineup
				</h1>
				<ArtistList artists={lineupMainstage} />
			</div>
			<div className="container mx-auto px-4 py-8">
				<h1
					className={`text-4xl  font-bold text-center mb-8 ${siteConfig.primaryColor}`}
				>
					Treibhaus Lineup
				</h1>
				<ArtistList artists={lineupTreibhaus} />
			</div>
		</>
	)
}

export default ArtistsPage
