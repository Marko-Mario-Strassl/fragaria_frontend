import React from "react"

export default function HomePage() {
	return (
		<div className="mx-auto px-4 text-center items-center flex flex-col">
			<div className="text-center z-20 mb-8 md:mb-12 -mt-4 md:-mt-8">
				<h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-red-500 mb-4 animate-fade-in-down">
					Fragaria
				</h1>
				<h2 className="text-base sm:text-lg md:text-xl lg:text-3xl font-semibold text-black animate-fade-in-up leading-relaxed">
					<span className="block mb-2">
						26th July 2025 | <a href="https://maps.app.goo.gl/LXYNPRGN9wJz1nf48?g_st=iw" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-600">Erdbeerfeld</a> 13:00 - 00:00
					</span>
					<span className="block">
						26th/27th July 2025 | Afterparty @<a href="https://maps.app.goo.gl/GnxywPbAztoYSHMD9?g_st=iw" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-600">Nordportal Baden</a> 23:00 - 04:00
					</span>
				</h2>
			</div>
			<div className="relative min-w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-1 ring-black/5 transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] hover:scale-[1.02]">
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
