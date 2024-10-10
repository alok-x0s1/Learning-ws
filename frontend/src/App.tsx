import { Route, Routes } from "react-router-dom";
import CreateRoom from "./components/CreateRoom";
import ChatRoom from "./components/ChatRoom";
import HomePage from "./components/Home";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/room" element={<CreateRoom />} />
			<Route path="/room/:roomId" element={<ChatRoom />} />
		</Routes>
	);
};

export default App;
