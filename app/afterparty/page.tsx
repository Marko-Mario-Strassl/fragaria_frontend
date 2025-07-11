"use client"
import React from "react"
import ArtistList from "@/components/artists/ArtistList"
import { useLineupAfterparty } from "@/contexts/LineupAfterpartyContext"

const NORDPORTAL_LINK =
	"https://nordportal.ch/programm/Fragaria-Afterparty-26-07-25"
const TICKET_LINK =
	"https://eventfrog.ch/de/p/party/house-techno/fragaria-afterparty-7340354971328635642.html"

const AfterpartyPage: React.FC = () => {
	const { lineupAfterparty } = useLineupAfterparty()

	return (
		<div className="relative min-h-screen ">
			{/* Hero-Bereich */}
			<header className="text-center py-12">
				<h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2">
					Afterparty Lineup 2025
				</h1>
				<p className="text-xl text-yellow-200 mb-6">
					Im Nordportal Baden
				</p>
				<div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
					<a
						href={NORDPORTAL_LINK}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-6 py-2 rounded-full bg-white/80 text-blue-700 font-semibold shadow hover:bg-yellow-200 transition"
					>
						Nordportal Baden
					</a>
					<a
						href={TICKET_LINK}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-6 py-2 rounded-full bg-green-400 text-white font-bold shadow hover:bg-green-500 transition"
					>
						Hier Tickets sichern
					</a>
				</div>
			</header>

			{/* Lineup */}
			<main className="container mx-auto px-4 pb-16">
				<ArtistList artists={lineupAfterparty} />
			</main>
		</div>
	)
}

export default AfterpartyPage
