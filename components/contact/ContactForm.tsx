"use client"

import React, { useState } from "react"

const ContactForm: React.FC = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [status, setStatus] = useState("")

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setStatus("Senden...")

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, message }),
			})

			if (response.ok) {
				setStatus("Nachricht erfolgreich gesendet!")
				setName("")
				setEmail("")
				setMessage("")
			} else {
				const data = await response.json()
				setStatus(`Fehler: ${data.error}`)
			}
		} catch (error) {
			setStatus(`Ein Fehler ist aufgetreten. ${error}`)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="min-w-full mx-auto mt-8 p-6 ">
			<div className="mb-4">
				<label
					htmlFor="name"
					className="block text-black font-bold mb-2"
				>
					Name
				</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="email"
					className="block text-black font-bold mb-2"
				>
					E-Mail
				</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="message"
					className="block text-black font-bold mb-2"
				>
					Nachricht
				</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
					className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 h-32"
				></textarea>
			</div>
			<div className="text-center">
				<button
					type="submit"
					className="w-full mx-auto bg-red-500 text-black font-bold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
				>
					Senden
				</button>
			</div>
			{status && <p className="mt-4 text-center font-bold">{status}</p>}
		</form>
	)
}

export default ContactForm
