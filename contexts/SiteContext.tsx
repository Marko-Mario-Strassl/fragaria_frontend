// contexts/SiteContext.tsx
"use client"

import React, { createContext, useContext } from "react"
import { siteConfig } from "../siteConfig"

type SiteConfigContextType = typeof siteConfig

const SiteConfigContext = createContext<SiteConfigContextType | undefined>(
	undefined
)

export const useSiteConfig = () => {
	const context = useContext(SiteConfigContext)
	if (context === undefined) {
		throw new Error(
			"useSiteConfig must be used within a SiteConfigProvider"
		)
	}
	return context
}

export const SiteConfigProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<SiteConfigContext.Provider value={siteConfig}>
			{children}
		</SiteConfigContext.Provider>
	)
}
