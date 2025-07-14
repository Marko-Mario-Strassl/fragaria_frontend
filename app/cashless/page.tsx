"use client"

import { useEffect, useRef } from "react"
import { useSiteConfig } from "@/contexts/SiteContext"

export default function CashlessPage() {
	const siteConfig = useSiteConfig()
	const widgetRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// Script nur im Browser laden
		const script = document.createElement("script")
		script.src = "https://widget.weezevent.com/weez.js"
		script.async = true
		widgetRef.current?.appendChild(script)

		return () => {
			// Script beim Unmount entfernen (optional)
			if (widgetRef.current) {
				const scripts = widgetRef.current.querySelectorAll("script")
				scripts.forEach((s) => s.remove())
			}
		}
	}, [])

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
			<div ref={widgetRef}>
				<a
					title="Weezevent cashless"
					className="weezevent-widget-integration"
					data-src="https://widget.weezevent.com/pay/420317/widgets/cc8188f7-6e1c-41ab-9e18-d92410654311"
					data-resize="1"
					data-width_auto="1"
					data-use-container="yes"
					data-type="gadget"
				>
					WeezPay widget
				</a>
			</div>
		</div>
	)
}
