"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { fetchWpData } from "@/app/api/fetchWpData"
import { LineupItem } from "@/types/lineupItem"

interface LineupTreibhausContextType {
	lineupTreibhaus: LineupItem[]
	loading: boolean
}

const LineupTreibhausContext = createContext<
	LineupTreibhausContextType | undefined
>(undefined)

export const useLineupTreibhaus = () => {
	const context = useContext(LineupTreibhausContext)
	if (!context) {
		throw new Error(
			"useLineupTreibhaus muss innerhalb eines LineupTreibhausProvider verwendet werden"
		)
	}
	return context
}

export const LineupTreibhausProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [lineupTreibhaus, setLineupTreibhaus] = useState<LineupItem[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadLineupTreibhaus = async () => {
			try {
				const data = await fetchWpData("lineup-treibhaus")
				setLineupTreibhaus(data)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}

		loadLineupTreibhaus()
	}, [])

	return (
		<LineupTreibhausContext.Provider value={{ lineupTreibhaus, loading }}>
			{children}
		</LineupTreibhausContext.Provider>
	)
}
