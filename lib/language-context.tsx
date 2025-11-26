"use client"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "hi"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.initiatives": "Initiatives",
        "nav.projects": "Development Projects",
        "nav.schemes": "Government Schemes",
        "nav.issues": "Report Issues",
        "nav.news": "News",
        "nav.media": "Media",
        "nav.getInvolved": "Get Involved",
        "nav.volunteer": "Volunteer",
        "nav.services": "Public Services",
        "nav.contact": "Contact",
        "nav.faq": "FAQ",
    },
    hi: {
        "nav.home": "होम",
        "nav.about": "परिचय",
        "nav.initiatives": "पहल",
        "nav.projects": "विकास परियोजनाएं",
        "nav.schemes": "सरकारी योजनाएं",
        "nav.issues": "समस्या दर्ज करें",
        "nav.news": "समाचार",
        "nav.media": "मीडिया",
        "nav.getInvolved": "शामिल हों",
        "nav.volunteer": "स्वयंसेवक",
        "nav.services": "सार्वजनिक सेवाएं",
        "nav.contact": "संपर्क",
        "nav.faq": "सामान्य प्रश्न",
    },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en")

    useEffect(() => {
        const saved = localStorage.getItem("language") as Language
        if (saved && (saved === "en" || saved === "hi")) {
            setLanguageState(saved)
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("language", lang)
    }

    const t = (key: string) => {
        return translations[language][key as keyof typeof translations.en] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider")
    }
    return context
}
