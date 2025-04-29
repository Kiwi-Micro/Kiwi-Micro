import ReactDOM from "react-dom/client";
import logo from "./assets/img/logo.png";
import "./assets/main.css";

function App() {
	return (
		<div className="main">
			<img src={logo} alt="Kiwi Micro Logo" width="200" height="200" />
			<h1>New Site Comming Soon!</h1>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
