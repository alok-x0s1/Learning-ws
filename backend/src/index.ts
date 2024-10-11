import "dotenv/config";
import express, { Request, Response } from "express";
import http from "http";
import { WebSocketServer, WebSocket } from "ws";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import Room from "./models/room";
import { dbConnect } from "./utils/db";

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const frontend_url = process.env.FRONTEND_URL as string;
// Middlewares
app.use(express.json());
app.use(
	cors({
		origin: [frontend_url],
		credentials: true,
	})
);

// Routes
app.post("/api/rooms", async (req: Request, res: Response) => {
	const { customUrl } = req.body;
	const room = new Room({
		id: uuidv4(),
		customUrl: customUrl || uuidv4(),
	});
	await room.save();
	res.json({ roomId: room.id, customUrl: room.customUrl });
});

// WebSocket handling
const clients = new Map();

wss.on("connection", (ws: WebSocket) => {
	const clientId = uuidv4();
	const metadata = { id: clientId };

	clients.set(ws, metadata);

	ws.on("message", (messageAsString: string) => {
		const message = JSON.parse(messageAsString);
		const metadata = clients.get(ws);

		message.sender = metadata.id;
		const outbound = JSON.stringify(message);

		[...clients.keys()].forEach((client) => {
			client.send(outbound);
		});
	});

	ws.on("close", () => {
		clients.delete(ws);
	});
});

// Server started
const port = process.env.PORT || 8000;
dbConnect();
server.listen(port, () => {
	console.log(`Server is starting at port : http://localhost:${port}`);
});
