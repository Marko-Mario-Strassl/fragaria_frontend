"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { fetchWpData } from "@/app/api/fetchWpData"
import { LineupItem } from "@/types/lineupItem"

interface LineupAfterpartyContextType {
	lineupAfterparty: LineupItem[]
	loading: boolean
}

const LineupAfterpartyContext = createContext<
	LineupAfterpartyContextType | undefined
>(undefined)

export const useLineupAfterparty = () => {
	const context = useContext(LineupAfterpartyContext)
	if (!context) {
		throw new Error(
			"useLineupAfterparty muss innerhalb eines LineupAfterpartyProvider verwendet werden"
		)
	}
	return context
}

export const LineupAfterpartyProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [lineupAfterparty, setLineupAfterparty] = useState<LineupItem[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadLineupAfterparty = async () => {
			try {
				const data = await fetchWpData("lineup-afterparty")
				setLineupAfterparty(data)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}

		loadLineupAfterparty()
	}, [])

	return (
		<LineupAfterpartyContext.Provider value={{ lineupAfterparty, loading }}>
			{children}
		</LineupAfterpartyContext.Provider>
	)
}
