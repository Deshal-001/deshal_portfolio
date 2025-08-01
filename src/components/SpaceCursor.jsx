import { useEffect, useState } from "react";

export const SpaceCursor = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    const [showCursor, setShowCursor] = useState(true);

    // Hide cursor on small screens
    useEffect(() => {
        const checkScreen = () => {
            setShowCursor(window.innerWidth >= 768); // 768px is Tailwind's md breakpoint
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    useEffect(() => {
        const handleThemeChange = () => {
            setTheme(localStorage.getItem("theme") || "light");
        };
        window.addEventListener("themechange", handleThemeChange);
        window.addEventListener("storage", handleThemeChange);
        return () => {
            window.removeEventListener("themechange", handleThemeChange);
            window.removeEventListener("storage", handleThemeChange);
        };
    }, []);

    useEffect(() => {
        if (!showCursor) return;
        const cursor = document.getElementById("space-cursor");
        const moveCursor = (e) => {
            if (cursor) {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            }
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [showCursor]);

    if (!showCursor) return null;

    const background =
        theme === "dark"
            ? "radial-gradient(circle, rgba(244,63,94,0.95) 0%, rgba(244,63,94,0.5) 70%, transparent 100%)"
            : "rgba(244,63,94,1)";
    const boxShadow =
        theme === "dark"
            ? "0 0 16px 4px rgba(244,63,94,0.8), 0 0 120px 20px rgba(244,63,94,0.5)"
            : "none";
    const border =
        theme === "dark"
            ? "2px solid rgba(244,63,94,0.95)"
            : "2px solid rgba(244,63,94,1)";
    const mixBlendMode = theme === "dark" ? "screen" : "normal";

    return (
        <div
            id="space-cursor"
            style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: "24px",
                height: "24px",
                pointerEvents: "none",
                borderRadius: "50%",
                background,
                boxShadow,
                border,
                zIndex: 9999,
                transform: "translate(-50%, -50%)",
                transition: "background 0.2s, box-shadow 0.2s, border 0.2s",
                mixBlendMode,
            }}
        />
    );
};