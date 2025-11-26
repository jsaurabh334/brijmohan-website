"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface NewsItem {
    id: number
    title: string
    date: string
    category: string
    summary: string
}

export function NewsList({ newsItems }: { newsItems: NewsItem[] }) {
    const [filter, setFilter] = useState("All")

    const filteredNews = filter === "All"
        ? newsItems
        : newsItems.filter(item => item.category === filter)

    return (
        <>
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {["All", "Development", "Press Release", "Events"].map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${filter === category
                                ? "bg-primary text-white border-primary"
                                : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* News Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredNews.map((item) => (
                    <Card key={item.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-6xl opacity-20">📰</div>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 dark:bg-gray-900/90 text-primary text-xs font-bold px-2 py-1 rounded shadow-sm">
                                    {item.category}
                                </span>
                            </div>
                        </div>
                        <CardHeader>
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                                <Calendar className="h-3 w-3" /> {item.date}
                            </div>
                            <CardTitle className="text-xl line-clamp-2">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                                {item.summary}
                            </p>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <Button variant="link" className="px-0 text-primary">
                                Read More →
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )
}
