import React from "react"

export default function HomePage() {
	return (
		<div className="mx-center  text-center items-center flex flex-col ">
			<div className="text-center z-20 mb-12 -mt-8">
				<h1 className="text-6xl md:text-8xl font-extrabold text-red-500 mb-4 animate-fade-in-down">
					Fragaria
				</h1>
				<h2 className="text-xl md:text-3xl font-semibold text-black animate-fade-in-up">
					26.07.2025 - SAVE THE DATE
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
