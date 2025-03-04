// contexts/FaqsContext.tsx
"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { fetchWpData } from "@/app/api/fetchWpData"

export interface Faq {
	id: string
	acf: {
		label: string
		description: string
	}
}

interface FaqsContextType {
	faqs: Faq[]
	loading: boolean
}

const FaqsContext = createContext<FaqsContextType | undefined>(undefined)

export const useFaqs = () => {
	const context = useContext(FaqsContext)
	if (!context) {
		throw new Error(
			"useFaqs muss innerhalb eines FaqsProvider verwendet werden"
		)
	}
	return context
}

export const FaqsProvider = ({ children }: { children: React.ReactNode }) => {
	const [faqs, setFaqs] = useState<Faq[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadFaqs = async () => {
			try {
				const data = await fetchWpData("faqs")
				setFaqs(data)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		loadFaqs()
	}, [])

	return (
		<FaqsContext.Provider value={{ faqs, loading }}>
			{children}
		</FaqsContext.Provider>
	)
}
