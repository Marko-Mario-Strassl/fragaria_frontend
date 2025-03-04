"use client"

import SponsorList from "@/components/sponsors/SponsorsList"
import { useSiteConfig } from "@/contexts/SiteContext"
import { useSponsor } from "@/contexts/SponsorContext"

export default function AboutPage() {
	const { Sponsor, loading } = useSponsor()
	const siteConfig = useSiteConfig()

	if (loading) return <div>Lädt...</div>

	return (
		<>
			<div className="container mx-auto px-4 py-8">
				<h1
					className={`text-4xl  font-bold text-center mb-8 ${siteConfig.primaryColor}`}
				>
					Sponsoren & Partner
				</h1>
				<SponsorList sponsors={Sponsor} />
			</div>
		</>
	)
}
