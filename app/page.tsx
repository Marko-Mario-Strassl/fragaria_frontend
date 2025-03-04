import React from "react"

export default function HomePage() {
	return (
		<div className="mx-center  text-center items-center flex flex-col ">
			<div className="text-center z-20 mb-12 -mt-8">
				<h1 className="text-6xl md:text-8xl font-extrabold text-red-500 mb-4 animate-fade-in-down">
					Fragaria
				</h1>
				<h2 className="text-xl md:text-3xl font-semibold text-white animate-fade-in-up">
					26.07.2025 - SAVE THE DATE
				</h2>
			</div>
			<div className="relative min-w-full max-w-4xl aspect-video">
				<iframe
					src="https://player.vimeo.com/video/1059260305?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1"
					className="absolute top-0 left-0 w-full h-full"
					allow="autoplay; fullscreen; picture-in-picture"
					allowFullScreen
					title="Vimeo Video"
				></iframe>
			</div>
		</div>
	)
}
