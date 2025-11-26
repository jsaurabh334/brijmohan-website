"use client"

import { useState } from "react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, IndianRupee, Filter } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import dynamic from 'next/dynamic'

// Dynamic import to fix SSR warning
const ProjectCharts = dynamic(() => import('@/components/project-charts').then(mod => ({ default: mod.ProjectCharts })), {
    ssr: false,
    loading: () => <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse">Loading charts...</div>
})

// Mock Data
const projectData = [
    { id: 1, title: "Raipur South Road Widening", category: "Roads", budget: "₹50 Cr", status: "In Progress", completion: 60 },
    { id: 2, title: "Community Health Center", category: "Health", budget: "₹12 Cr", status: "Completed", completion: 100 },
    { id: 3, title: "Smart School Upgrade", category: "Education", budget: "₹8 Cr", status: "In Progress", completion: 45 },
    { id: 4, title: "Rural Water Supply Scheme", category: "Rural Development", budget: "₹25 Cr", status: "Planning", completion: 10 },
    { id: 5, title: "City Park Renovation", category: "MP-LAD", budget: "₹2 Cr", status: "Completed", completion: 100 },
]

const fundsData = [
    { name: 'Roads', value: 50, color: '#FF9933' },
    { name: 'Health', value: 12, color: '#138808' },
    { name: 'Education', value: 8, color: '#000080' },
    { name: 'Rural', value: 25, color: '#FFC107' },
    { name: 'Others', value: 5, color: '#8884d8' },
]

const COLORS = ['#FF9933', '#138808', '#000080', '#FFC107', '#8884d8'];

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All")

    const filteredProjects = filter === "All"
        ? projectData
        : projectData.filter(p => p.category === filter)

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        Development Dashboard
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tracking the progress of development initiatives across the constituency. Transparency is our priority.
                    </p>
                </div>
            </section>

            {/* Dashboard Charts */}
            <Section className="bg-gray-50 dark:bg-gray-900">
                <div className="grid gap-8 lg:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Funds Utilization by Sector</CardTitle>
                            <CardDescription>Distribution of development funds (in Crores)</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ProjectCharts data={fundsData} />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Project Completion Status</CardTitle>
                            <CardDescription>Overview of project progress</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={projectData}
                                    layout="vertical"
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" domain={[0, 100]} />
                                    <YAxis dataKey="title" type="category" width={150} style={{ fontSize: '12px' }} />
                                    <Tooltip />
                                    <Bar dataKey="completion" fill="#FF9933" name="Completion %" radius={[0, 4, 4, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            {/* Projects List */}
            <Section>
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h2 className="text-3xl font-bold">Project Details</h2>
                    <div className="flex items-center gap-2">
                        <Filter className="h-5 w-5 text-gray-500" />
                        <select
                            className="border rounded-md p-2 bg-white dark:bg-gray-800"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="All">All Categories</option>
                            <option value="Roads">Roads</option>
                            <option value="Health">Health</option>
                            <option value="Education">Education</option>
                            <option value="Rural Development">Rural Development</option>
                        </select>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                        <Card key={project.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600 mb-2">
                                        {project.category}
                                    </div>
                                    <div className={`text-xs font-bold px-2 py-1 rounded-full ${project.status === 'Completed' ? 'bg-green-100 text-green-600' :
                                        project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'
                                        }`}>
                                        {project.status}
                                    </div>
                                </div>
                                <CardTitle className="text-lg">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <IndianRupee className="h-4 w-4" />
                                        <span>Budget: {project.budget}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        <span>Raipur</span>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${project.completion}%` }}></div>
                                </div>
                                <div className="text-right text-xs text-gray-500">{project.completion}% Completed</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Map Placeholder */}
            <Section className="bg-gray-50 dark:bg-gray-900">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Interactive Map</h2>
                    <p className="text-gray-600">Explore projects on the map</p>
                </div>
                <div className="h-[500px] w-full bg-gray-200 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                        <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-xl text-gray-500 font-medium">Interactive Project Map</p>
                        <p className="text-sm text-gray-400 mt-2">(Map integration pending)</p>
                    </div>
                </div>
            </Section>
        </div>
    )
}
