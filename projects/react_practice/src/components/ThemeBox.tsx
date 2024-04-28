import { useContext } from "react";
import { ThemeContext } from "./ContextBox";

const ThemeBox = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<div
			className="boxContainer"
			style={{
				background: theme === "dark" ? "black" : "yellow",
				color: theme === "dark" ? "white" : "black",
			}}
		>
			ThemeBox
			<h1>Box 1</h1>
			<button onClick={toggleTheme}>Change Theme</button>
		</div>
	);
};

export default ThemeBox;
