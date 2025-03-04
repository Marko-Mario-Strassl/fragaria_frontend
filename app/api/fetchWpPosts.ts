import { parse } from "node-html-parser"

const defaultFetchOptions = {
	next: {
		tags: ["wordpress"],
		revalidate: 3600, // 1 Stunde Cache
	},
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
}

interface WordPressPost {
	id: number
	content: {
		rendered: string
	}
}

function extractImageUrls(posts: WordPressPost[]): string[] {
	const imageUrls: string[] = []

	posts.forEach((post) => {
		const root = parse(post.content.rendered)
		const imgElements = root.querySelectorAll("img")

		imgElements.forEach((img) => {
			const src = img.getAttribute("src")
			if (src) {
				imageUrls.push(src)
			}
		})
	})

	return imageUrls
}

export async function getAllPosts() {
	try {
		const response = await fetch(
			`https://wordpress.fragaria.ch/wp-json/wp/v2/posts?categories=3`,
			defaultFetchOptions
		)

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const posts: WordPressPost[] = await response.json()
		const imageUrls = extractImageUrls(posts)
		return imageUrls
	} catch (error) {
		console.error("Fehler beim Fetchen der Posts:", error)
		return []
	}
}
