"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Mock search data
const searchData = [
    { title: "About Brijmohan Agrawal", url: "/about", category: "Page" },
    { title: "Development Projects", url: "/projects", category: "Page" },
    { title: "Government Schemes", url: "/schemes", category: "Page" },
    { title: "Pradhan Mantri Awas Yojana", url: "/schemes", category: "Scheme" },
    { title: "Report Civic Issues", url: "/issues", category: "Service" },
    { title: "Volunteer Registration", url: "/volunteer", category: "Service" },
    { title: "Book Appointment", url: "/services", category: "Service" },
    { title: "News & Updates", url: "/news", category: "Page" },
    { title: "Media Gallery", url: "/media", category: "Page" },
    { title: "Contact Office", url: "/contact", category: "Page" },
    { title: "FAQ", url: "/faq", category: "Page" },
]

export function GlobalSearch() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")

    // Keyboard shortcut: Cmd+K (Mac) or Ctrl+K (Windows/Linux)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault()
                setIsOpen(true)
            }
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false)
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [isOpen])

    const filteredResults = query
        ? searchData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        )
        : []

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                className="h-9 w-9 relative group"
                title="Search (⌘K)"
            >
                <Search className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Search</span>
                {/* Keyboard shortcut hint */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    ⌘K
                </span>
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-50"
                        />

                        {/* Search Modal */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
                        >
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-2 p-4 border-b border-gray-200 dark:border-gray-700">
                                    <Search className="h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search pages, schemes, services..."
                                        className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        autoFocus
                                    />
                                    <div className="flex items-center gap-2">
                                        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded border border-gray-300 dark:border-gray-600">
                                            ESC
                                        </kbd>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setIsOpen(false)}
                                            className="h-8 w-8"
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="max-h-[400px] overflow-y-auto p-2">
                                    {query && filteredResults.length === 0 && (
                                        <div className="p-8 text-center text-gray-500">
                                            No results found for "{query}"
                                        </div>
                                    )}
                                    {filteredResults.map((result, index) => (
                                        <Link
                                            key={index}
                                            href={result.url}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white">
                                                    {result.title}
                                                </div>
                                                <div className="text-sm text-gray-500">{result.url}</div>
                                            </div>
                                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                                {result.category}
                                            </span>
                                        </Link>
                                    ))}
                                </div>

                                {!query && (
                                    <div className="p-4 text-sm text-gray-500 border-t border-gray-200 dark:border-gray-700">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="font-medium">Quick Links</div>
                                            <div className="flex items-center gap-2 text-xs">
                                                <span className="text-gray-400">Keyboard shortcut:</span>
                                                <kbd className="px-2 py-1 font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded border border-gray-300 dark:border-gray-600">
                                                    ⌘K
                                                </kbd>
                                                <span className="text-gray-400">or</span>
                                                <kbd className="px-2 py-1 font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded border border-gray-300 dark:border-gray-600">
                                                    Ctrl+K
                                                </kbd>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {["Schemes", "Projects", "Contact", "Volunteer"].map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                                                    onClick={() => setQuery(item)}
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
