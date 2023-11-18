import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import SwapPage from "./pages/SwapPage";
import PoolsPage from "./pages/PoolsPage";
import FarmsPage from "./pages/FarmsPage";

function App() {
  return (
	<Router>
		<Routes>
			<Route path='/' element={<SwapPage />}/>
			<Route path='swap' element={<SwapPage />}/>
			<Route path='pools' element={<PoolsPage />}/>
			<Route path='farms' element={<FarmsPage/>}/>
		</Routes>
	</Router>
  );
}

export default App;
