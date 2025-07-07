import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { FRAGARIA } from "@/assets"

export const metadata: Metadata = {
        title: "Fragaria Festival 2025",
        description:
                "Offizielle Website des Fragaria Festivals am 26.07.2025 in Wettingen.",
        alternates: { canonical: "/" },
        keywords: ["Fragaria", "Festival", "Wettingen", "Tanzmusik"],
}

export default function HomePage() {
        return (
                <section className="relative flex flex-col items-center justify-center text-center min-h-[60vh]">
                        <Image
                                src={FRAGARIA}
                                alt="Fragaria Background"
                                fill
                                className="object-cover opacity-30"
                                priority
                        />
                        <div className="absolute inset-0 bg-[#2f93ff]/70"></div>
                        <div className="relative z-10 p-8">
                                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
                                        Fragaria
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                                        26.07.2025 - SAVE THE DATE
                                </h2>
                                <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
                                        <iframe
                                                src="https://player.vimeo.com/video/1060142796?h=ce4ea6f7b5&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                                className="absolute top-0 left-0 w-full h-full"
                                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                                title="Fragaria Festival Trailer"
                                                loading="lazy"
                                        ></iframe>
                                </div>
                        </div>
                </section>
        )
}
