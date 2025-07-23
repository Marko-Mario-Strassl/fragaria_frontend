import React from "react"

export default function HomePage() {
	return (
		<div className="mx-center  text-center items-center flex flex-col ">
			<div className="text-center z-20 mb-12 -mt-8">
				<h1 className="text-6xl md:text-8xl font-extrabold text-red-500 mb-4 animate-fade-in-down">
					Fragaria
				</h1>
				<h2 className="text-xl md:text-3xl font-semibold text-black animate-fade-in-up">
					26th July 2025 | <a href="https://maps.app.goo.gl/LXYNPRGN9wJz1nf48?g_st=iw" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-600">Erdbeerfeld</a> 13:00 - 00:00 <br /><br />
					26th/27th July 2025 | Afterparty @<a href="https://maps.app.goo.gl/GnxywPbAztoYSHMD9?g_st=iw" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-600">Nordportal Baden</a> 23:00 - 04:00
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
