import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ChatRoom: React.FC = () => {
	const [messages, setMessages] = useState<
		{ username: string; content: string }[]
	>([]);
	const [inputMessage, setInputMessage] = useState("");
	const [username, setUsername] = useState("");
	const [ws, setWs] = useState<WebSocket | null>(null);
	const { roomId } = useParams<{ roomId: string }>();

	const [nameEntered, setNameEntered] = useState(false);
	const ws_url = import.meta.env.VITE_BACKEND_WS_URL;

	useEffect(() => {
		if (username) {
			const socket = new WebSocket(ws_url);
			setWs(socket);

			socket.onmessage = (event) => {
				const message = JSON.parse(event.data);
				setMessages((prevMessages) => [...prevMessages, message]);
			};

			return () => {
				socket.close();
			};
		}
	}, [username, roomId]);

	const sendMessage = (e: React.FormEvent) => {
		e.preventDefault();
		if (ws && inputMessage) {
			ws.send(
				JSON.stringify({
					type: "chat",
					content: inputMessage,
					username,
				})
			);
			setInputMessage("");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-background text-foreground">
			{!nameEntered ? (
				<div className="w-full max-w-md p-6 border border-foreground rounded-md shadow-lg">
					<h2 className="text-3xl tracking-tight font-bold mb-4 text-center">
						Enter Your Username
					</h2>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (username.trim()) {
								setNameEntered(true);
							}
						}}
						className="flex flex-col space-y-4"
					>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Your Name"
							className="w-full p-4 bg-foreground/75 rounded border border-foreground outline-none font-semibold text-white"
						/>
						<button
							type="submit"
							className="bg-white text-black font-bold p-3 rounded-md w-fit transition-colors hover:bg-gray-300 duration-300"
						>
							Enter Chat Room
						</button>
					</form>
				</div>
			) : (
				<div className="w-[800px] h-screen flex flex-col border border-foreground shadow-sm shadow-foreground">
					<h2 className="text-3xl font-extrabold p-4 text-center shadow-md shadow-foreground">
						Chat Room:
						<span className="text-red-700 text-2xl"> {roomId}</span>
					</h2>

					<div className="flex-grow overflow-y-auto p-4 border-t border-b border-gray-500 space-y-2">
						{messages.map((msg, index) => (
							<div
								key={index}
								className={`py-2 rounded-md w-fit max-w-[70%] h-fit shadow-sm shadow-gray-900 ${
									msg.username === username
										? "bg-green-800 text-white ml-auto text-right pr-3 pl-6"
										: "bg-foreground/80 text-white mr-auto text-left pr-6 pl-3"
								}`}
							>
								<span className="block font-semibold text-sm">
									{msg.username === username
										? "You"
										: msg.username}
								</span>
								<div className="text-lg font-bold break-words leading-5">
									{msg.content}
								</div>
							</div>
						))}
					</div>

					<form
						onSubmit={sendMessage}
						className="w-full p-4 flex items-center space-x-2"
					>
						<input
							type="text"
							value={inputMessage}
							onChange={(e) => setInputMessage(e.target.value)}
							className="flex-grow p-3 bg-transparent text-black rounded-md focus:outline-none transition border font-semibold border-gray-600"
							placeholder="Type your message..."
						/>
						<button
							type="submit"
							className="bg-white hover:bg-gray-300 font-bold px-6 py-3 rounded-md"
						>
							Send
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default ChatRoom;
