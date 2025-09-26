import Main from "./pages/main/Main.tsx";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router";
import Register from "./pages/registration/Register.tsx";
import Login from "./pages/login/Login.tsx";

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
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <button
                onClick={toggleTheme}
                className="px-3 py-2 bg-violet text-white rounded fixed z-100 bg-[red] right-0 bottom-0"
            >
                Сменить тему
            </button>
        </>
	)
}