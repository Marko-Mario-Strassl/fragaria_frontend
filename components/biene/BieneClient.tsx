import { useState, useEffect } from "react"
import bieneimg from "../../assets/images/biene.svg"
import Image from "next/image"

interface BieneProps {
	index: number
}

const Biene = ({ index }: BieneProps) => {
	const [style, setStyle] = useState({})

	useEffect(() => {
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
			src={bieneimg}
			className="biene"
			style={style}
			alt={`Biene ${index}`}
			onClick={handleClick}
		/>
	)
}

export default function BieneClient() {
	const numberOfBiene = 20

	return (
		<div className="absolute inset-0 overflow-hidden">
			{Array.from({ length: numberOfBiene }, (_, index) => (
				<Biene key={index} index={index} />
			))}
		</div>
	)
}
