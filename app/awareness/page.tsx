"use client"
import Image from "next/image"
import anreise from "../../assets/images/anreise.jpg"
import situation from "../../assets/images/situation.jpg"
import { useSiteConfig } from "@/contexts/SiteContext"

export default function AwarenessPage() {
    const siteConfig = useSiteConfig()
    return (
        <>
            <div className="container mx-auto px-4 py-8 text-center">
                <h1
                    className={`text-3xl font-bold mb-8 text-center ${siteConfig.primaryColor}`}
                >
                    WOHLFÜHLEN AM FRAGARIA
                </h1>

                <div className="max-w-3xl mx-auto">
                    <h2 className="max-w-3xl text-md text-black font-bold mb-8">
                        Bei unseren Veranstaltungen ist jede Person willkommen, unabhängig
                        von Geschlecht, Sexualität, Herkunft oder Hautfarbe. Diskriminierung, Sexismus,
                        Rassismus oder Gewalt (verbal, körperlich oder sexualisiert) haben hier keinen
                        Platz.
                    </h2>

                    <h2 className="max-w-3xl text-md text-black font-bold mb-8">
                        <span className="block mb-2 underline">Achtsam feiern:</span>
                        Wenn jemand Hilfe braucht oder unwohl wirkt –
                        fragt nach oder holt Unterstützung.
                    </h2>

                    <h2 className="max-w-3xl text-md text-black font-bold mb-8">
                        <span className="block mb-2 underline">Konsens ist Pflicht, Grenzen werden respektiert:</span>
                        Nur ein klares „Ja" ist ein Ja.
                        Respektiert die Grenzen eures Gegenübers. Keine Handlung ohne Zustimmung,
                        dies zählt auch bei nicht-sexuellen Begegnungen.
                    </h2>

                    <h2 className="max-w-3xl text-md text-black font-bold mb-8">
                        <span className="block mb-2 underline">Kleidung ist keine Einladung:</span>
                        Was jemand trägt, sagt nichts über Zustimmung zu
                        Körperkontakt oder Flirts aus. Konsens bleibt entscheidend.
                    </h2>

                    <h2 className="max-w-3xl text-md text-black font-bold mb-8">
                        <span className="block mb-2 underline">Betroffene definieren die Situation:</span>
                        Wer Gewalt oder Diskriminierung erlebt, bestimmt
                        selbst, was passiert ist. Ihre Perspektive wird ernst genommen und nicht
                        relativiert.
                    </h2>

                    <h2 className="max-w-3xl text-md text-black font-bold mb-8">
                        <span className="block mb-2 underline">Safe-Word "Angel Shot":</span>
                        Mit dem Safe-Word "Angel Shot" kann bei OK,
                        Sicherheitsdienst, Samariter oder Barpersonal
                        diskret nach Hilfe gebeten werden.
                    </h2>

                    <h2 className="max-w-3xl text-md text-black font-bold mb-8">
                        <span className="block mb-2 underline">Notfalltelefon:</span>
                        <a href="tel:+41762752810" className="text-3xl text-red-500 hover:underline transition-colors duration-200 font-bold tracking-wider">
                            076 275 28 10
                        </a>
                    </h2>
                </div>


            </div>
        </>
    )
} 