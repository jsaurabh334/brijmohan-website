"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="h-9 w-9">
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9 relative group"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            {/* Light Mode Icon */}
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />

            {/* Dark Mode Icon with Saffron Glow */}
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary dark:drop-shadow-[0_0_8px_rgba(255,111,0,0.6)]" />

            <span className="sr-only">Toggle theme</span>

            {/* Enhanced Tooltip */}
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 dark:bg-primary text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-primary rotate-45"></span>
            </span>
        </Button>
    )
}
