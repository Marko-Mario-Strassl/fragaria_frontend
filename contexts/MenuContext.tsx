// contexts/MenuContext.tsx
"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { fetchWpData } from "@/app/api/fetchWpData"

export interface MenuItem {
	id: string
	acf: {
		menu_item: {
			label: string
			route: string
		}
		id: number
	}
}

interface MenuContextType {
	menuItems: MenuItem[]
	loading: boolean
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export const useMenus = () => {
	const context = useContext(MenuContext)
	if (!context) {
		throw new Error(
			"useMenus muss innerhalb eines MenuProvider verwendet werden"
		)
	}
	return context
}

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
	const [menuItems, setMenuItems] = useState<MenuItem[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadMenuItems = async () => {
			try {
				const data = await fetchWpData("menu")
				setMenuItems(data)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}

		loadMenuItems()
	}, [])

	return (
		<MenuContext.Provider value={{ menuItems, loading }}>
			{children}
		</MenuContext.Provider>
	)
}
