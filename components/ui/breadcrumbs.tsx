"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export function Breadcrumbs() {
    const pathname = usePathname()

    if (pathname === "/") return null

    const segments = pathname.split("/").filter(Boolean)

    const breadcrumbs = [
        { name: "Home", href: "/" },
        ...segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join("/")}`
            const name = segment
                .split("-")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            return { name, href }
        })
    ]

    return (
        <nav className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 md:px-6 py-3">
                <ol className="flex items-center space-x-2 text-sm">
                    {breadcrumbs.map((crumb, index) => (
                        <li key={crumb.href} className="flex items-center">
                            {index > 0 && (
                                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                            )}
                            {index === 0 && (
                                <Home className="h-4 w-4 text-gray-400 mr-2" />
                            )}
                            {index === breadcrumbs.length - 1 ? (
                                <span className="text-gray-900 dark:text-white font-medium">
                                    {crumb.name}
                                </span>
                            ) : (
                                <Link
                                    href={crumb.href}
                                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                                >
                                    {crumb.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    )
}
