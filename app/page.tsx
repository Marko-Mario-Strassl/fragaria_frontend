import React from "react"

export default function HomePage() {
	return (
		<div className="mx-center  text-center items-center flex flex-col ">
			<div className="text-center z-20 mb-12 -mt-8">
				<h1 className="text-6xl md:text-8xl font-extrabold text-red-500 mb-4 animate-fade-in-down">
					Fragaria
				</h1>
				<h2 className="text-xl md:text-3xl font-semibold text-black animate-fade-in-up">
					26th July 2025 | <a href="https://www.google.com/maps/place/Fragaria+Festival/@47.4549473,8.340185,621m/data=!3m2!1e3!4b1!4m6!3m5!1s0x479013de853646c3:0x3ef23e7ec9a98ea7!8m2!3d47.4549473!4d8.340185!16s%2Fg%2F11v0h00lbh?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-600">Erdbeerfeld</a> 13:00 - 00:00 <br /><br />
					26th/27th July 2025 | Afterparty @<a href="https://duckduckgo.com/?q=nordportla+baden&iaxm=directions&end=what%3ANordportal%2520Eventhalle%2520Baden%2Cwhere%3ASchmiedestrasse%252012%252C%2520Baden%252C%2520CH%25205400&transport=automobile" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-600">Nordportal Baden</a> 23:00 - 04:00
				</h2>
			</div>
			<div className="relative min-w-full max-w-4xl aspect-video">
				<iframe
					src="https://player.vimeo.com/video/1060142796?h=ce4ea6f7b5&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
					className="absolute top-0 left-0 w-full h-full"
					allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
					title="Fragaria"
				></iframe>
			</div>
		</div>
	)
}
