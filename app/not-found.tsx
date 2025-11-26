import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 px-4">
            <div className="text-center space-y-6 max-w-2xl">
                <div className="relative">
                    <h1 className="text-9xl font-bold text-primary/20 dark:text-primary/10">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl">🔍</div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Page Not Found
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button asChild size="lg">
                        <Link href="/" className="gap-2">
                            <Home className="h-5 w-5" />
                            Go to Homepage
                        </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg">
                        <Link href="/contact" className="gap-2">
                            <Search className="h-5 w-5" />
                            Contact Support
                        </Link>
                    </Button>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Quick Links:
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { name: "About", href: "/about" },
                            { name: "Schemes", href: "/schemes" },
                            { name: "Projects", href: "/projects" },
                            { name: "News", href: "/news" },
                            { name: "FAQ", href: "/faq" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-primary hover:underline"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
