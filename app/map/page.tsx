"use client"
import Image from "next/image"
import anreise from "../../assets/images/anreise.png"
import situation from "../../assets/images/situation.png"
import { useSiteConfig } from "@/contexts/SiteContext"
export default function MapPage() {
	const siteConfig = useSiteConfig()
	return (
		<>
			<div className="z-0 absolute -left-[200px]"></div>
			<div className="container mx-auto px-4 py-8 text-center">
				<h1
					className={`text-3xl font-bold mb-8 ${siteConfig.primaryColor}`}
				>
					Anreiseplan
				</h1>
				<div className="flex justify-center mb-8 z-10">
					<Image
						src={anreise}
						alt="Anreiseplan"
						width={500}
						height={300}
						className="object-cover"
					/>
				</div>
				<h1
					className={`${siteConfig.primaryColor} text-3xl font-bold mt-12 mb-8`}
				>
					Situationsplan
				</h1>
				<div className="flex justify-center">
					<Image
						src={situation}
						alt="Situationsplan"
						width={500}
						height={300}
						className="object-cover"
					/>
				</div>
			</div>
		</>
	)
}
