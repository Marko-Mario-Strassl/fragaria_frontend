// layout.tsx
import "./globals.css"
import Navbar from "../components/navbar/Navbar"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import { SiteConfigProvider } from "@/contexts/SiteContext"
import { FaqsProvider } from "@/contexts/FaqsContext"
import { LineupMainstageProvider } from "@/contexts/LineupMainstageContext"
import { LineupTreibhausProvider } from "@/contexts/LineupTreibhausContext"
import Footer from "@/components/footer/Footer"
import { SponsorProvider } from "@/contexts/SponsorContext"
import { MenuProvider } from "@/contexts/MenuContext"
import BackgroundImages from "@/components/BackgroundImages/BackgroundImages" // Importiere die Komponente

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
	title: "Fragaria",
	description: "description",
	keywords: "keywords",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="de">
			<SiteConfigProvider>
				<SponsorProvider>
					<LineupTreibhausProvider>
						<LineupMainstageProvider>
							<FaqsProvider>
								<body
									className={`${inter.className} bg-blue-300 relative`}
								>
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
