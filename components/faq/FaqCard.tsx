"use client"
import { Faq } from "@/contexts/FaqsContext"
import React, { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"

interface FaqCardProps {
	faq: Faq
}

const FaqCard: React.FC<FaqCardProps> = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto">
			<button
				className="w-full text-left p-6 focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="flex justify-between items-center">
					<h2 className="text-sm md:text-lg font-semibold text-gray-800">
						{faq.acf.label}
					</h2>
					<ChevronDownIcon
						className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
							isOpen ? "transform rotate-180" : ""
						}`}
					/>
				</div>
			</button>
			{isOpen && (
				<div className="p-6 pt-0">
					<p className="text-gray-600">{faq.acf.description}</p>
				</div>
			)}
		</div>
	)
}

export default FaqCard
