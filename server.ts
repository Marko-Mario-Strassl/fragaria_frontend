import express from "express"
import { IncomingMessage, ServerResponse } from "http"
import next from "next"

const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express()

	server.all(
		"*",
		(req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
			return handle(req, res)
		}
	)

	server.listen(3000, () => {
		console.log("Server läuft auf http://localhost:3000")
	})
})
