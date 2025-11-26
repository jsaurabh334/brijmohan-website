"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, ExternalLink, CheckCircle } from "lucide-react"

interface Scheme {
    id: number
    title: string
    category: string
    description: string
    eligibility: string[]
    benefits: string[]
    link: string
}

export function SchemesList({ schemes }: { schemes: Scheme[] }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("All")

    const filteredSchemes = schemes.filter(scheme => {
        const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            scheme.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = categoryFilter === "All" || scheme.category === categoryFilter
        return matchesSearch && matchesCategory
    })

    return (
        <>
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search schemes..."
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <select
                    className="border rounded-md p-2 bg-white dark:bg-gray-900 min-w-[200px]"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    <option value="Central Government">Central Government</option>
                    <option value="State Government">State Government</option>
                    <option value="Local Initiatives">Local Initiatives</option>
                </select>
            </div>

            {/* Schemes Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredSchemes.map((scheme) => (
                    <Card key={scheme.id} className="flex flex-col hover:shadow-lg transition-shadow border-t-4 border-t-primary">
                        <CardHeader>
                            <div className="mb-2">
                                <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-full font-medium">
                                    {scheme.category}
                                </span>
                            </div>
                            <CardTitle className="text-xl">{scheme.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-4">
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{scheme.description}</p>

                            <div>
                                <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                                    <CheckCircle className="h-4 w-4 text-green-600" /> Eligibility
                                </h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 pl-1">
                                    {scheme.eligibility.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm mb-2">Benefits</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 pl-1">
                                    {scheme.benefits.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-4 border-t bg-gray-50 dark:bg-gray-900/50">
                            <Button className="w-full gap-2" asChild>
                                <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                                    Apply / Learn More <ExternalLink className="h-4 w-4" />
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {filteredSchemes.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No schemes found matching your criteria.</p>
                    <Button variant="link" onClick={() => { setSearchTerm(""); setCategoryFilter("All") }}>
                        Clear Filters
                    </Button>
                </div>
            )}
        </>
    )
}
