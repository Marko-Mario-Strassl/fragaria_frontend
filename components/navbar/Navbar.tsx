"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSiteConfig } from "../../contexts/SiteContext"
import { useMenus, MenuItem } from "@/contexts/MenuContext"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const siteConfig = useSiteConfig()
	const pathname = usePathname()
	const { menuItems, loading } = useMenus()

	const { filteredMenuItems, ticketItem } = useMemo(() => {
		if (!menuItems || menuItems.length === 0) {
			return { filteredMenuItems: [], ticketItem: null }
		}

		// Sortierfunktion
		const sortByAcfId = (a: MenuItem, b: MenuItem) => a.acf.id - b.acf.id

		// Sortiere alle Menüitems
		const sortedMenuItems = [...menuItems].sort(sortByAcfId)

		const ticketItem = sortedMenuItems.find(
			(item) => item.acf?.menu_item?.label?.toLowerCase() === "tickets"
		)

		const filteredMenuItems = sortedMenuItems.filter(
			(item) => item.acf?.menu_item?.label?.toLowerCase() !== "tickets"
		)

		return { filteredMenuItems, ticketItem }
	}, [menuItems])

	if (loading) return <div>Lädt...</div>

	const isActive = (href: string) => {
		return pathname === href
	}

	return (
		<nav className="bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<div className="flex-shrink-0 flex items-center ">
						<Link href="/" className="flex items-center">
							<Image
								src={siteConfig.logo}
								alt="Logo"
								width={80}
								height={80}
							/>
							<span className="ml-2 text-xl font-bold text-gray-800 hover:text-red-500">
								{siteConfig.company}
							</span>
						</Link>
					</div>

					{/* Ticket Navigation and Mobile Menu Button */}
					<div className="flex items-center space-x-4">
						{ticketItem &&
						ticketItem.acf?.menu_item?.route &&
						ticketItem.acf?.menu_item?.label ? (
							<Link
								href={ticketItem.acf.menu_item.route}
								className={`text-gray-600 hover:text-red-500 font-medium transition duration-300 ${
									isActive(ticketItem.acf.menu_item.route)
										? "text-red-500"
										: ""
								}`}
							>
								{ticketItem.acf.menu_item.label}
							</Link>
						) : null}
						<button
							className="text-gray-600 hover:text-primary focus:outline-none"
							onClick={() => setIsOpen(!isOpen)}
						>
							<svg
								className="w-6 h-6 hover:text-red-500"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isOpen ? (
									<path d="M6 18L18 6M6 6l12 12" />
								) : (
									<path d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div
				className={`transition-all duration-300 ${
					isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
				}`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
					{filteredMenuItems && filteredMenuItems.length > 0 ? (
						filteredMenuItems.map((item) =>
							item.acf?.menu_item &&
							item.acf.menu_item.route &&
							item.acf.menu_item.label ? (
								<Link
									key={item.id}
									href={item.acf.menu_item.route}
									className={`block px-3 py-2 rounded-md text-base font-medium text-gray-600 transition duration-300 hover:text-red-500 ${
										isActive(item.acf.menu_item.route)
											? "text-red-500"
											: ""
									}`}
									onClick={() => setIsOpen(!isOpen)}
								>
									{item.acf.menu_item.label}
								</Link>
							) : (
								<span key={item.id}>Missing Data</span>
							)
						)
					) : (
						<span>Keine Menüitems gefunden.</span>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
