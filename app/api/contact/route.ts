import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
        const { name, email, message } = await request.json()

        if (!process.env.RESEND_API_KEY) {
                console.warn("❗ RESEND_API_KEY is missing – skipping Resend setup.")
                return NextResponse.json(
                        { error: "Server configuration error." },
                        { status: 500 }
                )
        }

        const resend = new Resend(process.env.RESEND_API_KEY)

	// Überprüfen, ob alle Felder ausgefüllt sind
	if (!name || !email || !message) {
		return NextResponse.json(
			{ error: "Alle Felder sind erforderlich." },
			{ status: 400 }
		)
	}

	try {
		// Senden der E-Mail an beide Empfänger
		await resend.emails.send({
			from: "Kontaktformular <onboarding@resend.dev>",
			to: [`info@fragaria.ch, ${email}`], // Beide Empfänger hinzufügen
			subject: "Neue Kontaktanfrage",
			html: `
        <h1>Neue Kontaktanfrage</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong> ${message}</p>
      `,
		})

		return NextResponse.json({ message: "E-Mail erfolgreich gesendet." })
	} catch (error) {
		return NextResponse.json(
			{ error: `Fehler beim Senden der E-Mail. ${error}` },
			{ status: 500 }
		)
	}
}
