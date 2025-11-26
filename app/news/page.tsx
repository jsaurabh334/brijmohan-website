"use client"

import { useState } from "react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Tag } from "lucide-react"
import Link from "next/link"

// Mock news data
const newsItems = [
    {
        id: 1,
        title: "Inauguration of New Community Hall in Raipur South",
        date: "2025-11-25",
        category: "Development",
        summary: "A state-of-the-art community hall was inaugurated today to serve the residents of Raipur South.",
    },
    {
        id: 2,
        title: "Press Conference on Urban Development Policy",
        date: "2025-11-22",
        category: "Press Release",
        summary: "Addressed the media regarding the new urban development policy aimed at improving city infrastructure.",
    },
    {
        id: 3,
        title: "Meeting with Youth Delegation",
        date: "2025-11-20",
        category: "Events",
        summary: "Met with a delegation of students to discuss their concerns and ideas for the future of education.",
    },
    {
        id: 4,
        title: "Inspection of Water Supply Project",
        date: "2025-11-18",
        category: "Development",
        summary: "Inspected the ongoing water supply project to ensure timely completion and quality standards.",
    },
    {
        id: 5,
        title: "Diwali Milan Samaroh",
        date: "2025-11-12",
        category: "Events",
        summary: "Celebrated Diwali with the citizens of Raipur. Distributed sweets and exchanged greetings.",
    },
    {
        id: 6,
        title: "Statement on Farmers' Issues",
        date: "2025-11-10",
        category: "Press Release",
        summary: "Issued a statement supporting the demands of farmers and urging the government to take immediate action.",
    },
]

export default function NewsPage() {
    const [filter, setFilter] = useState("All")

    const filteredNews = filter === "All"
        ? newsItems
        : newsItems.filter(item => item.category === filter)

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        News & Updates
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Stay informed about the latest developments, events, and press releases.
                    </p>
                </div>
            </section>

            <Section>
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
            </Section>
        </div>
    )
}
