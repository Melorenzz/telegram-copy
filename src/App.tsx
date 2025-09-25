import Main from "./pages/main/Main.tsx";
import {useEffect, useState} from "react";

export default function App() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };
	return (
        <>
            <Main />
            <button
                onClick={toggleTheme}
                className="px-3 py-2 bg-violet text-white rounded fixed z-100 bg-[red] right-0 bottom-0"
            >
                Сменить тему
            </button>
        </>
	)
}