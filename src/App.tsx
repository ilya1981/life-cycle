import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';

import { HomePage } from "./HomePage.tsx";
import Watches from "./components/Watches/Watches.tsx";
import Crud from "./components/Crud/Crud.tsx";
import Chat from "./components/Chat/Chat.tsx";



function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/watches" element={<Watches />} />
					<Route path="/crud" element={<Crud />} />
					<Route path="/chat" element={<Chat />} />

				</Routes>
			</BrowserRouter>

		</div>
	)
}

export default App