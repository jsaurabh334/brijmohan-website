"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, AlertTriangle, CheckCircle, Clock } from "lucide-react"
import { useState } from "react"

export default function IssuesPage() {
    const [issueType, setIssueType] = useState("Road")

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        Report & Track Issues
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Help us make Raipur better. Report civic issues directly on the map and track their resolution.
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Issue Form */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Report New Issue</CardTitle>
                                <CardDescription>Fill in the details below</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Issue Type</label>
                                    <select
                                        className="w-full border rounded-md p-2 bg-white dark:bg-gray-800"
                                        value={issueType}
                                        onChange={(e) => setIssueType(e.target.value)}
                                    >
                                        <option value="Road">Road / Pothole</option>
                                        <option value="Water">Water Supply</option>
                                        <option value="Streetlight">Streetlight</option>
                                        <option value="Garbage">Garbage / Sanitation</option>
                                        <option value="Electricity">Electricity</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Location</label>
                                    <input
                                        type="text"
                                        placeholder="Enter address or pin on map"
                                        className="w-full border rounded-md p-2 bg-white dark:bg-gray-800"
                                    />
                                    <Button variant="outline" size="sm" className="w-full gap-2">
                                        <MapPin className="h-4 w-4" /> Use Current Location
                                    </Button>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Description</label>
                                    <textarea
                                        className="w-full border rounded-md p-2 bg-white dark:bg-gray-800 min-h-[100px]"
                                        placeholder="Describe the issue..."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Upload Photo</label>
                                    <input type="file" className="w-full text-sm" />
                                </div>
                                <Button className="w-full">Submit Issue</Button>
                            </CardContent>
                        </Card>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200">
                                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                                    <AlertTriangle className="h-8 w-8 text-orange-500 mb-2" />
                                    <div className="text-2xl font-bold text-orange-700 dark:text-orange-400">12</div>
                                    <div className="text-xs text-orange-600 dark:text-orange-300">Pending</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200">
                                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                                    <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                                    <div className="text-2xl font-bold text-green-700 dark:text-green-400">45</div>
                                    <div className="text-xs text-green-600 dark:text-green-300">Resolved</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Map Area */}
                    <div className="lg:col-span-2">
                        <Card className="h-full min-h-[500px] overflow-hidden relative">
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4 animate-bounce" />
                                    <p className="text-xl text-gray-500 font-medium">Interactive Issue Map</p>
                                    <p className="text-sm text-gray-400 mt-2">Click on the map to pin an issue location</p>
                                    <div className="mt-8 grid grid-cols-2 gap-4 max-w-sm mx-auto text-left">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <span className="text-sm text-gray-600">High Priority</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <span className="text-sm text-gray-600">In Progress</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <span className="text-sm text-gray-600">Resolved</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mock Pins (Visual only) */}
                            <div className="absolute top-1/4 left-1/4">
                                <div className="relative group cursor-pointer">
                                    <MapPin className="h-8 w-8 text-red-500 drop-shadow-md" />
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-2 py-1 rounded shadow text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Pothole on MG Road
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2">
                                <div className="relative group cursor-pointer">
                                    <MapPin className="h-8 w-8 text-yellow-500 drop-shadow-md" />
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-2 py-1 rounded shadow text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Streetlight Repair
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-1/3 right-1/3">
                                <div className="relative group cursor-pointer">
                                    <MapPin className="h-8 w-8 text-green-500 drop-shadow-md" />
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-2 py-1 rounded shadow text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        Garbage Cleared
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    )
}
