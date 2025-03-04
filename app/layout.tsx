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

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
	title: "title",
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
									className={`${inter.className} bg-blue-300`}
								>
									<MenuProvider>
										<Navbar />
									</MenuProvider>
									<main className="max-w-7xl mx-auto py-20 ">
										{children}
									</main>
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
