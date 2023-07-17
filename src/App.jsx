import { Footer } from "./components/Footer";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="flex min-h-screen flex-col font-sans">
			<Navbar />
			<Layout />
			<Footer />
		</div>
	);
}

export default App;
