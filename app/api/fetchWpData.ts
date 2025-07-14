export const fetchWpData = async (url: string) => {
	try {
		const response = await fetch(
			`https://wordpress.fragaria.ch/wp-json/wp/v2/${url}?_embed&&per_page=100`,
			{
				method: "GET",
			}
		)

		if (!response.ok) {
			console.warn(
				`Error fetching data from ${url}:`,
				response.status,
				response.statusText
			)
			return [] // Gib ein leeres Array zurück, wenn die API einen Fehler meldet
		}

		const data = await response.json()

		// Bild-URLs für jedes Element abrufen
		const dataWithImageUrl = await Promise.all(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			data.map(async (item: any) => {
				const imageId = item.acf?.bild // Bild-ID aus ACF
				let imageUrl = ""

				if (imageId) {
					try {
						// Abrufen der tatsächlichen Bild-URL von der Media-API
						const mediaResponse = await fetch(
							`https://wordpress.fragaria.ch/wp-json/wp/v2/media/${imageId}`
						)
						if (mediaResponse.ok) {
							const mediaData = await mediaResponse.json()
							imageUrl = mediaData.source_url // Tatsächliche Bild-URL
						}
					} catch (error) {
						console.error(
							"Fehler beim Abrufen der Bild-URL:",
							error
						)
					}
				}

				return { ...item, imageUrl }
			})
		)

		return dataWithImageUrl
	} catch (error) {
		console.error("Fehler beim Abrufen der Daten:", error)
		return [] // Gib ein leeres Array zurück, wenn ein Fehler auftritt
	}
}
