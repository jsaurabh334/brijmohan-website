"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, IndianRupee, Filter } from "lucide-react"

export default function ProjectsFilter({ projects }: { projects: any[] }) {
    const [filter, setFilter] = useState("All")

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter)

    return (
        <>
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {["All", "Roads", "Health", "Education", "Rural", "Others"].map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${filter === category
                            ? "bg-primary text-white border-primary"
                            : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-300 hover:border-primary hover:text-primary"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects List */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                    <Card key={project.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-bold mb-2">
                                {project.category}
                            </div>
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <Calendar className="h-4 w-4" /> {project.date}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <IndianRupee className="h-4 w-4" /> {project.budget}
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${project.completion}%` }} />
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{project.completion}% Completed</p>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <Button variant="link" className="px-0 text-primary">
                                Details →
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )
}
