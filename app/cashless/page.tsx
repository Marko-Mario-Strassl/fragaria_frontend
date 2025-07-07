"use client"

import { useSiteConfig } from "@/contexts/SiteContext"

export default function CashlessPage() {
	const siteConfig = useSiteConfig()
	return (
		<div className="container mx-auto px-4 py-8">
			<h1
				className={`text-3xl font-bold mb-8 text-center ${siteConfig.primaryColor}`}
			>
				Cashless Konto
			</h1>
			<div className="grid grid-cols text-center">
				<h2 className="text-md text-black font-bold">
					Dein Cashless-Konto ist deine elektronische Brieftasche am
					Fragaria.
				</h2>

				<h2 className="text-md text-black font-bold">
					RÜCKERSTATTUNGEN BEANTRAGEN IM CASHLESS KONTO AB 00:01 UHR -
					DIREKT NACH DEM EVENT.
				</h2>
			</div>
		</div>
	)
}
