"use client"
import { useSiteConfig } from "../../contexts/SiteContext"

export default function AboutPage() {
	const siteConfig = useSiteConfig()
	return (
		<>
			<div className="container mx-auto px-4 py-8 text-center">
				<h1
					className={`text-3xl font-bold mb-8 text-center ${siteConfig.primaryColor}`}
				>
					Über uns
				</h1>
				<div className="max-w-3xl mx-auto">
                                        <h2 className="max-w-3xl text-md text-white font-bold mb-8 ">
						Aus Liebe zur Tanzmusik und der Motivation neue Wege zu
						beschreiten, wollen wir Veranstaltungen in harmonischer
						Atmosphäre schaffen. Räume (Felder) zur
						Selbstentfaltung, in welchen alle willkommen sind.
					</h2>
                                        <h2 className="max-w-3xl text-md text-white font-bold mb-8 ">
						Räume voller Bass und Freude, welche die regionale
						Kultur fördern, sie wachsen lässt und zu neuen
						Horizonten treibt. Gemeinsam etwas Neues erschaffen -
						Tanzmat präsentiert sich als bunt gemischtes Kollektiv.
						Wie die Limmat wollen auch wir einen prägenden Eindruck
						im Limmattal hinterlassen.
					</h2>
				</div>
			</div>
		</>
	)
}
