import { useState, useEffect } from "react"
import cloudimg from "../../assets/images/cloud.svg"
import cloudimg2 from "../../assets/images/cloud_2.svg"
import cloudimg3 from "../../assets/images/cloud_3.svg"
import Image from "next/image"

interface CloudProps {
	index: number
}

const Cloud = ({ index }: CloudProps) => {
	const cloudImages = [cloudimg, cloudimg2, cloudimg3]
	const [style, setStyle] = useState({})
	const [cloudSrc, setCloudSrc] = useState(cloudimg)

	useEffect(() => {
		setCloudSrc(cloudImages[Math.floor(Math.random() * cloudImages.length)])
		setStyle({
			position: "absolute",
			top: `${Math.random() * 100}%`,
			left: `${Math.random() * 100}%`,
			width: `${50 + Math.random() * 100}px`,
			animationDuration: `${20 + Math.random() * 10}s`,
		})
	}, [])

	const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
		const target = event.currentTarget
		target.classList.add("clicked")
		setTimeout(() => {
			target.remove()
		}, 500)
	}

	return (
		<Image
			src={cloudSrc}
			className="cloud"
			style={style}
			alt={`Wolke ${index}`}
			onClick={handleClick}
		/>
	)
}

export default function CloudsClient() {
	const numberOfClouds = 20

	return (
		<div className="absolute inset-0 overflow-hidden">
			{Array.from({ length: numberOfClouds }, (_, index) => (
				<Cloud key={index} index={index} />
			))}
		</div>
	)
}
