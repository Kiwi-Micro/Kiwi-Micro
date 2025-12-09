import ReactDOM from "react-dom/client";
import logo from "./assets/img/logo.png";
import "./assets/main.css";
import { useEffect, useState } from "react";

function App() {
	const [secondsToRedirect, setSecondsToRedirect] = useState(10)

	useEffect(() => {
		if (secondsToRedirect == 0) {
			window.location.href = 'https://www.malcolmjh.com/';
		} else {
			setSecondsToRedirect(secondsToRedirect-1)
		}
	}, [secondsToRedirect])

 	return (
		<div className="main">
			<img src={logo} alt="Kiwi Micro Logo" width="200" height="200" />
			<h1>New Site Comming Soon! (Maybe)</h1>
			<p>Redirecting you to my personal site in {secondsToRedirect}</p>
      		<p>If you're not redirected, <a href="https://www.malcolmjh.com/">click here</a>.</p>
		</div>
  	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
