"use client"

import React from "react"
import { Accordion, AccordionItem } from "@heroui/react"
import { Icon } from "@iconify/react"

interface Faq {
	acf: {
		label: string
		description: string
	}
}

interface FaqsProps {
	faqs: Faq[]
}

const FaqSection: React.FC<FaqsProps> = ({ faqs }) => {
	return (
		<div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
			<Accordion
				fullWidth
				keepContentMounted
				className="gap-3"
				itemClasses={{
					base: "px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50",
					title: "font-medium",
					trigger: "py-6",
					content: "pt-0 pb-6 text-base text-default-500",
				}}
				selectionMode="multiple"
				variant="splitted"
			>
				{faqs.map((faq, index) => (
					<AccordionItem
						key={index}
						indicator={<Icon icon="lucide:plus" width={24} />}
						title={faq.acf.label}
						className="bg-white rounded-lg text-left text-black"
					>
						{faq.acf.description}
					</AccordionItem>
				))}
			</Accordion>
		</div>
	)
}

export default FaqSection
