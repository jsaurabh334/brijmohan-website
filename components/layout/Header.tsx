"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Facebook, Twitter, Instagram, Youtube, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { GlobalSearch } from "@/components/global-search"
import { LanguageToggle } from "@/components/language-toggle"

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Initiatives",
        href: "#",
        submenu: [
            { name: "Development Projects", href: "/projects" },
            { name: "Government Schemes", href: "/schemes" },
            { name: "Report Issues", href: "/issues" },
        ]
    },
    { name: "News", href: "/news" },
    { name: "Media", href: "/media" },
    {
        name: "Get Involved",
        href: "#",
        submenu: [
            { name: "Volunteer", href: "/volunteer" },
            { name: "Public Services", href: "/services" },
            { name: "FAQ", href: "/faq" },
        ]
    },
    { name: "Contact", href: "/contact" },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    return (
        <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="sr-only">Brijmohan Agrawal</span>
                        <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                            B
                        </div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">Brijmohan Agrawal</span>
                    </Link>
                </div>
                <div className="flex lg:hidden gap-2"> {/* Added gap-2 here */}
                    <GlobalSearch /> {/* Moved GlobalSearch here for mobile */}
                    <ThemeToggle /> {/* Moved ThemeToggle here for mobile */}
                    <LanguageToggle /> {/* Added LanguageToggle for mobile */}
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300" // Added dark mode text color
                        onClick={() => setMobileMenuOpen(true)} // Changed to always open on click
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* Simplified mobile menu button logic as per the provided edit's intent */}
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
                    {navigation.map((item) => (
                        item.submenu ? (
                            <div
                                key={item.name}
                                className="relative flex items-center"
                                onMouseEnter={() => setOpenDropdown(item.name)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <button className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-primary transition-colors flex items-center gap-1 h-full">
                                    {item.name}
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                                {openDropdown === item.name && (
                                    <div className="absolute left-0 top-full pt-2 z-50">
                                        <div className="w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                                            <div className="py-1">
                                                {item.submenu.map((subitem) => (
                                                    <Link
                                                        key={subitem.name}
                                                        href={subitem.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition-colors"
                                                    >
                                                        {subitem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-primary transition-colors">
                                {item.name}
                            </Link>
                        )
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
                    <GlobalSearch />
                    <LanguageToggle />
                    <ThemeToggle />
                    <Link href="https://twitter.com" target="_blank" className="text-gray-500 hover:text-primary dark:text-gray-400">
                        <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="https://facebook.com" target="_blank" className="text-gray-500 hover:text-primary dark:text-gray-400">
                        <Facebook className="h-5 w-5" />
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            item.submenu ? (
                                <div key={item.name}>
                                    <div className="px-3 py-2 text-base font-medium text-gray-900">{item.name}</div>
                                    {item.submenu.map((subitem) => (
                                        <Link
                                            key={subitem.name}
                                            href={subitem.href}
                                            className="block rounded-md px-6 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-primary"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {subitem.name}
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
