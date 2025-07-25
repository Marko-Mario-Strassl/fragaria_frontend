"use client"
import Image from "next/image"
import anreise from "../../assets/images/anreise.jpg"
import situation from "../../assets/images/situation.jpg"
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
				<p className="text-lg mb-8 text-black uppercase">
					BUS NR. 7 <br />
					BADEN BHF - WETTINGEN TÄGI
				</p>
				<h2 className={`text-2xl font-bold mb-4 ${siteConfig.primaryColor}`}>
					ANREISE
				</h2>
				<div className="text-lg mb-8 space-y-4 text-black uppercase">
					<p>
						ANFAHRT ZUM FESTIVAL MIT BUS NR. 7<br />
						VON BADEN BHF RICHTUNG WETTINGEN TÄGI
					</p>
				</div>
				<h2 className={`text-2xl font-bold mb-4 ${siteConfig.primaryColor}`}>
					ABREISE
				</h2>
				<div className="text-lg mb-8 space-y-4 text-black uppercase">
					<p className="font-semibold">
						REGULÄRER BUSFAHRPLAN<br />
						(BIS 00:25)
					</p>
					<p>
						BUS NR. 7.<br />
						AB WETTINGEN TÄGI
					</p>
					<p>
						BUS NR. 1.<br />
						AB WETTINGEN TÄGI<br />
						(AB 20:25)
					</p>
					<p className="font-semibold underline">
						ANSCHLIESSEND BIS 1:00 SHUTTLE SERVICE
					</p>
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
