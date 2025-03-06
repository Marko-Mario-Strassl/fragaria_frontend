"use client"

import dynamic from "next/dynamic"

const CloudsClient = dynamic(() => import("./CloudsClient"), { ssr: false })

export default function CloudsWrapper() {
	return <CloudsClient />
}
