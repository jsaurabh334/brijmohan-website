"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "lucide-react" // Using lucide icon as placeholder for badge if needed, but will use div for badge
import { useState } from "react"
import { Search, FileText, ExternalLink, CheckCircle } from "lucide-react"

// Mock Data
const schemesData = [
    {
        id: 1,
        title: "Pradhan Mantri Awas Yojana",
        category: "Central Government",
        description: "Housing for all by 2024. Provides financial assistance for building pucca houses.",
        eligibility: ["Low Income Group", "No Pucca House"],
        benefits: ["Subsidy up to ₹2.67 Lakh", "Low interest loans"],
        link: "https://pmaymis.gov.in/"
    },
    {
        id: 2,
        title: "Mahtari Vandana Yojana",
        category: "State Government",
        description: "Financial assistance for married women in Chhattisgarh to ensure their economic independence.",
        eligibility: ["Married Women", "Resident of Chhattisgarh"],
        benefits: ["₹1000 per month"],
        link: "#"
    },
    {
        id: 3,
        title: "Ayushman Bharat",
        category: "Central Government",
        description: "Health insurance scheme providing coverage of ₹5 Lakh per family per year.",
        eligibility: ["SECC Database Listed", "Low Income"],
        benefits: ["Free treatment up to ₹5 Lakh", "Cashless hospitalization"],
        link: "https://pmjay.gov.in/"
    },
    {
        id: 4,
        title: "Raipur Smart City Mission",
        category: "Local Initiatives",
        description: "Urban development projects to make Raipur a smart and sustainable city.",
        eligibility: ["Citizens of Raipur"],
        benefits: ["Better infrastructure", "Smart services"],
        link: "#"
    },
    {
        id: 5,
        title: "Kisan Nyay Yojana",
        category: "State Government",
        description: "Input subsidy scheme for farmers to encourage crop production.",
        eligibility: ["Farmers", "Land Owners"],
        benefits: ["Input subsidy per acre"],
        link: "#"
    }
]

export default function SchemesPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("All")

    const filteredSchemes = schemesData.filter(scheme => {
        const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            scheme.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = categoryFilter === "All" || scheme.category === categoryFilter
        return matchesSearch && matchesCategory
    })

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        Government Schemes
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Find the right schemes for you. Empowering citizens with information and access.
                    </p>
                </div>
            </section>

            <Section>
                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search schemes..."
                            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        className="border rounded-md p-2 bg-white dark:bg-gray-800 min-w-[200px]"
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
                                    <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
                                        {scheme.category}
                                    </span>
                                </div>
                                <CardTitle className="text-xl">{scheme.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-4">
                                <p className="text-gray-600 text-sm">{scheme.description}</p>

                                <div>
                                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4 text-green-600" /> Eligibility
                                    </h4>
                                    <ul className="list-disc list-inside text-sm text-gray-600 pl-1">
                                        {scheme.eligibility.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-sm mb-2">Benefits</h4>
                                    <ul className="list-disc list-inside text-sm text-gray-600 pl-1">
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
            </Section>
        </div>
    )
}
