export interface WPPost {
	id: number
	title: {
		rendered: string
	}
	content: {
		rendered: string
	}
	excerpt: {
		rendered: string
	}
	gallery?: GalleryImage[]
}

export interface GalleryImage {
	id: number
	url: string
	alt?: string
	title?: string
	caption?: string
	width?: number
	height?: number
}
