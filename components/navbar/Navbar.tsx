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

	const sortedMenuItems = useMemo(() => {
		if (!menuItems || menuItems.length === 0) return []
		return [...menuItems].sort(
			(a: MenuItem, b: MenuItem) => a.acf.id - b.acf.id
		)
	}, [menuItems])

	// Finde das Ticket-Item
	const ticketItem = useMemo(
		() =>
			sortedMenuItems.find(
				(item) =>
					item.acf?.menu_item?.label?.toLowerCase() === "tickets"
			),
		[sortedMenuItems]
	)

	if (loading) return <div>Lädt...</div>

	const isActive = (href: string) => pathname === href

	return (
		<nav className="bg-white sticky top-0 z-50 shadow-lg">
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

					{/* Nur Ticket-Item im Header */}
					<div className="flex items-center space-x-4">
						{ticketItem &&
							ticketItem.acf?.menu_item?.route &&
							ticketItem.acf?.menu_item?.label && (
								<Link
									href={ticketItem.acf.menu_item.route}
									className={`text-gray-600 hover:text-red-500 font-medium transition duration-300 ${
										isActive(ticketItem.acf.menu_item.route)
											? "text-red-500"
											: ""
									}`}
									target="_blank"
								>
									{ticketItem.acf.menu_item.label}
								</Link>
							)}
						<Link
							className="text-gray-600 hover:text-primary focus:outline-none"
							href="https://maps.app.goo.gl/NBekjXxbtTSW2VHG6"
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
								/>
							</svg>
						</Link>
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

			{/* Mobile Navigation: alle Items inkl. Tickets */}
			<div
				className={`transition-all duration-300 ${
					isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
				}`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
					{sortedMenuItems && sortedMenuItems.length > 0 ? (
						sortedMenuItems.map((item) =>
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
									target={
										item.acf.menu_item.label.toLowerCase() ===
										"tickets"
											? "_blank"
											: undefined
									}
									onClick={() => setIsOpen(false)}
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
