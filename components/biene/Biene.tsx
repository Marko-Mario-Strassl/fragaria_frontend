"use client"

import dynamic from "next/dynamic"

const BieneClient = dynamic(() => import("./BieneClient"), { ssr: false })

export default function BieneWrapper() {
	return <BieneClient />
}
