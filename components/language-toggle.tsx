"use client"

import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage()

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            className="h-9 px-3 text-sm font-medium"
            title={language === "en" ? "हिंदी में देखें" : "View in English"}
        >
            <Languages className="h-4 w-4 mr-2" />
            {language === "en" ? "हिंदी" : "English"}
        </Button>
    )
}
