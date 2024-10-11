import { useState } from "react";
import { Link } from "react-router-dom";

const CreateRoom: React.FC = () => {
	const [customUrl, setCustomUrl] = useState("");
	const [roomLink, setRoomLink] = useState<string | null>(null);
	const backend_url = import.meta.env.VITE_BACKEND_URL;
	const frontend_url = import.meta.env.VITE_FRONTEND_URL;

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const response = await fetch(`${backend_url}/api/rooms`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ customUrl }),
		});
		const data = await response.json();
		setRoomLink(`${frontend_url}/room/${data.customUrl}`);
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-background text-foreground">
			<div className="p-6 border border-gray-700 rounded-lg shadow-lg w-full max-w-md">
				{!roomLink ? (
					<>
						<h1 className="text-3xl tracking-tight font-bold mb-6 text-center animate-pulse">
							Create a New Chat Room
						</h1>
						<form
							onSubmit={handleSubmit}
							className="flex flex-col space-y-4"
						>
							<input
								type="text"
								value={customUrl}
								onChange={(e) => setCustomUrl(e.target.value)}
								placeholder="Custom URL (optional)"
								className="w-full p-4 bg-foreground/75 rounded border border-foreground outline-none font-semibold text-white"
							/>
							<button
								type="submit"
								className="bg-white text-black font-bold p-3 rounded-md w-fit transition-colors hover:bg-gray-300 duration-300"
							>
								Create Room
							</button>
						</form>
					</>
				) : (
					<div className="text-center space-y-4 flex flex-col">
						<p className="text-xl font-bold">
							Room Created Successfully!
						</p>
						<p className="text-lg font-semibold text-foreground/75">
							Room Link
						</p>
						<p className="font-semibold rounded-md p-2 border border-border bg-white/30 text-black w-full text-start">
							{roomLink}
						</p>
						<div className="flex gap-2 flex-wrap">
							<Link
								to={roomLink}
								className="bg-white w-fit text-black font-bold p-3 rounded-md transition transform hover:scale-105 hover:bg-gray-300"
							>
								Go to Room
							</Link>
							<button
								className="bg-foreground w-fit text-background font-bold p-3 rounded-md transition transform hover:scale-105 hover:bg-foreground/75"
								onClick={() => {
									window.navigator.clipboard.writeText(
										roomLink
									);
									alert("Link copied successfully.");
								}}
							>
								Copy link
							</button>
						</div>
					</div>
				)}
				<p className="text-sm text-foreground/80 font-semibold mt-6 text-center">
					Share the room link to invite others.
				</p>
			</div>
		</div>
	);
};

export default CreateRoom;
