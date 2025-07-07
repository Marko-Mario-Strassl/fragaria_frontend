"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Download from "yet-another-react-lightbox/plugins/download"
import { getAllPosts } from "../api/fetchWpPosts"
import { useSiteConfig } from "@/contexts/SiteContext"

export default function ImpressionsPage() {
	const [imageUrls, setImageUrls] = useState<string[]>([])
	const [isOpen, setIsOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)
	const siteConfig = useSiteConfig()
	useEffect(() => {
		async function loadImages() {
			const urls = await getAllPosts()
			setImageUrls(urls)
		}
		loadImages()
	}, [])

	const openLightbox = (index: number) => {
		setCurrentIndex(index)
		setIsOpen(true)
	}

	return (
		<div className="p-4">
			<h1 className={`text-3xl font-bold text-center mb-6 ${siteConfig.primaryColor}`}>
				Impressionen
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{imageUrls.map((url, index) => (
					<div
						key={index}
						className="relative cursor-pointer"
						onClick={() => openLightbox(index)}
					>
						<Image
							src={url}
							alt={`Impression ${index + 1}`}
							width={300}
							height={300}
							className="rounded-lg object-contain w-full h-full"
							style={{ aspectRatio: "1 / 1" }}
						/>
					</div>
				))}
			</div>

			{isOpen && (
				<Lightbox
					open={isOpen}
					close={() => setIsOpen(false)}
					slides={imageUrls.map((url) => ({ src: url }))}
					plugins={[Download]}
					index={currentIndex}
					on={{
						view: ({ index }) => setCurrentIndex(index),
					}}
				/>
			)}
		</div>
	)
}
