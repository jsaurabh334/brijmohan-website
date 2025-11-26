"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Play, Image as ImageIcon, FileText, Download } from "lucide-react"

// Mock Data
const mediaItems = [
    { id: 1, type: "Photo", title: "Inauguration of Community Hall", date: "2025-11-20", src: "/placeholder-1.jpg" },
    { id: 2, type: "Video", title: "Speech at Youth Convention", date: "2025-11-15", src: "/placeholder-video.jpg" },
    { id: 3, type: "Photo", title: "Inspection of Road Works", date: "2025-11-10", src: "/placeholder-2.jpg" },
    { id: 4, type: "Press Release", title: "Press Note on New Education Policy", date: "2025-11-05", src: "" },
    { id: 5, type: "Photo", title: "Meeting with Farmers", date: "2025-10-28", src: "/placeholder-3.jpg" },
    { id: 6, type: "Video", title: "Diwali Celebration with Citizens", date: "2025-10-20", src: "/placeholder-video-2.jpg" },
]

export default function MediaPage() {
    const [activeTab, setActiveTab] = useState("All")

    const filteredMedia = activeTab === "All"
        ? mediaItems
        : mediaItems.filter(item => item.type === activeTab)

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        Media Gallery
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Glimpses of events, speeches, and press interactions.
                    </p>
                </div>
            </section>

            <Section>
                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex rounded-lg border bg-gray-100 p-1 dark:bg-gray-800">
                        {["All", "Photo", "Video", "Press Release"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === tab
                                        ? "bg-white text-primary shadow-sm dark:bg-gray-950"
                                        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                                    }`}
                            >
                                {tab}s
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredMedia.map((item) => (
                        <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                            <div className="relative aspect-video bg-gray-200 overflow-hidden">
                                {item.type === "Press Release" ? (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                        <FileText className="h-16 w-16 text-gray-400" />
                                    </div>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                                        <span className="text-gray-500 text-sm">Image Placeholder</span>
                                    </div>
                                )}

                                {/* Overlay for Video */}
                                {item.type === "Video" && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                        <div className="h-12 w-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Play className="h-5 w-5 text-primary ml-1" />
                                        </div>
                                    </div>
                                )}

                                {/* Overlay for Photo */}
                                {item.type === "Photo" && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                        <ImageIcon className="h-8 w-8 text-white drop-shadow-lg" />
                                    </div>
                                )}
                            </div>
                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                                        {item.type}
                                    </span>
                                    <span className="text-xs text-gray-500">{item.date}</span>
                                </div>
                                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                {item.type === "Press Release" && (
                                    <Button variant="outline" size="sm" className="w-full mt-4 gap-2">
                                        <Download className="h-4 w-4" /> Download PDF
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    )
}
