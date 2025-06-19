// components/ArtistList.tsx
import React from "react"
import SponsorCard from "./SponsorCard"
import { SponsorItem } from "@/contexts/SponsorContext"

interface ArtistListProps {
	sponsors: SponsorItem[]
}

const SponsorList: React.FC<ArtistListProps> = ({ sponsors }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{sponsors.map((sponsor) => (
				<SponsorCard
					key={sponsor.id}
					bildId={sponsor.acf.bild}
					name={sponsor.acf.name}
					link={sponsor.acf.link ? sponsor.acf.link : ""}
				/>
			))}
		</div>
	)
}

export default SponsorList
