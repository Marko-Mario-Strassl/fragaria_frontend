"use client"
import FaqList from "@/components/faq/FaqList"
import { useFaqs } from "@/contexts/FaqsContext"
import { useSiteConfig } from "@/contexts/SiteContext"

export default function MapPage() {
	const siteConfig = useSiteConfig()
	const { faqs, loading } = useFaqs()

	if (loading) return <div>Lädt...</div>

	return (
		<>
			<div className="container mx-auto px-4 py-8 text-center">
				<h1
					className={`text-3xl font-bold mb-8 ${siteConfig.primaryColor}`}
				>
					FAQ&apos;s
				</h1>
				<div className="grid grid-flow-rows justify-center mb-8">
					<FaqList faqs={faqs} />
				</div>
			</div>
		</>
	)
}
