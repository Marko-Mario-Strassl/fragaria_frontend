import "./globals.css"
import Navbar from "../components/navbar/Navbar"
import { Metadata } from "next"
import { SiteConfigProvider } from "@/contexts/SiteContext"
import { FaqsProvider } from "@/contexts/FaqsContext"
import { LineupMainstageProvider } from "@/contexts/LineupMainstageContext"
import { LineupTreibhausProvider } from "@/contexts/LineupTreibhausContext"
import Footer from "@/components/footer/Footer"
import { SponsorProvider } from "@/contexts/SponsorContext"
import { MenuProvider } from "@/contexts/MenuContext"
import BackgroundImages from "@/components/BackgroundImages/BackgroundImages"


export const metadata: Metadata = {
	title: {
		template: "%s | Fragaria",
		default: "Fragaria",
	},
	description:
		"Aus Liebe zur Tanzmusik und der Motivation neue Wege zu beschreiten, wollen wir Veranstaltungen in harmonischer Atmosphäre schaffen.",
	keywords:
		"Fragaria, Daydance, Erdbeerfeld, Fragaria Tickets,  Wettingen, Musikfestival, Kulturveranstaltung",
	openGraph: {
		title: "Fragaria",
		description:
			"Aus Liebe zur Tanzmusik und der Motivation neue Wege zu beschreiten, wollen wir Veranstaltungen in harmonischer Atmosphäre schaffen.",
		url: "https://fragaria.ch",
		siteName: "Fragaria",
		images: [],
		locale: "de_DE",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Fragaria",
		description:
			"Aus Liebe zur Tanzmusik und der Motivation neue Wege zu beschreiten, wollen wir Veranstaltungen in harmonischer Atmosphäre schaffen.",
		images: [],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		// Dein Seiteninhalt bleibt gleich
		<html lang="de">
			<SiteConfigProvider>
				<SponsorProvider>
					<LineupTreibhausProvider>
						<LineupMainstageProvider>
							<FaqsProvider>
                                                                <body className="bg-[#2f93ff] relative">
									<MenuProvider>
										<Navbar />
									</MenuProvider>
									<div className="pt-20 relative z-10 min-h-[80vh]">
										<BackgroundImages />{" "}
										<main className="max-w-7xl mx-auto relative z-10">
											{children}
										</main>
									</div>
									<Footer />
								</body>
							</FaqsProvider>
						</LineupMainstageProvider>
					</LineupTreibhausProvider>
				</SponsorProvider>
			</SiteConfigProvider>
		</html>
	)
}
