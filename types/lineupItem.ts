export interface LineupItem {
	id: number
	acf: {
		name: string
		bild: string // Dies ist die Bild-ID
		description: string
		zeit_von: string
		zeit_bis: string
	}
	imageUrl: string
}
