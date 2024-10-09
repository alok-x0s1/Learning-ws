import { Route, Routes } from "react-router-dom";
import CreateRoom from "./components/CreateRoom";
import ChatRoom from "./components/ChatRoom";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<CreateRoom />} />
			<Route path="/room/:roomId" element={<ChatRoom />} />
		</Routes>
	);
};

export default App;
