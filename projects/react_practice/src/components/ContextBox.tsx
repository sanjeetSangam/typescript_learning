import { ReactNode, createContext, useState } from "react";
import ThemeBox from "./ThemeBox";

type ThemeType = "light" | "dark";

interface ThemeContextType {
	theme: ThemeType;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: "light",
	toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<ThemeType>("light");
	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};
	return (
		<ThemeContext.Provider
			value={{
				theme: theme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

const ContextBox = () => {
	return (
		<ThemeProvider>
			<div>
                <ThemeBox />
            </div>
		</ThemeProvider>
	);
};

export default ContextBox;
