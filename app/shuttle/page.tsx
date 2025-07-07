"use client"
import { useSiteConfig } from "@/contexts/SiteContext"

export default function ShuttlePage() {
	const siteConfig = useSiteConfig()
	return (
		<>
			<div className="container mx-auto px-4 py-8 text-center">
				<h1
					className={`text-3xl font-bold mb-8 text-center ${siteConfig.primaryColor}`}
				>
					Shuttle Service
				</h1>
				<div className="max-w-3xl mx-auto">
					<h2 className="max-w-3xl text-md text-black font-bold mb-8 ">
						Nach dem Festival stellen wir für Euch einen kostenlosen
						Shuttle-Service ins Nordportal und zum Baden Bahnhof
						bereit.
					</h2>
					<h2 className="max-w-3xl text-md text-black font-bold mb-8 ">
						Dieser wird von 23.45 bis 01.15 ab Bushaltestelle Tägi
						fahren. So seid ihr am schnellsten an der Afterparty und
						könnt weiterfeiern!
					</h2>
				</div>
			</div>
		</>
	)
}
