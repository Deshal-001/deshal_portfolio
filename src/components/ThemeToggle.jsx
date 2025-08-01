import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check local storage for theme preference on initial load
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (!storedTheme) {
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");}
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    // Function to toggle the theme
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
            window.dispatchEvent(new Event("themechange"));
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
            window.dispatchEvent(new Event("themechange"));
        }
    };

    // Render the toggle button
    return (
        <button
            onClick={toggleTheme}
            className={cn(
                // Center on mobile, right on desktop
                "fixed top-5 left-1/2 -translate-x-1/2 md:left-auto md:right-5 md:translate-x-0 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-none"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
};