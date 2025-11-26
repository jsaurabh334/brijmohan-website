"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, HelpCircle, Search, Clock } from "lucide-react"
import { useState } from "react"

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState("help")

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        Public Services
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Access services, book appointments, and track your requests. We are here to serve you.
                    </p>
                </div>
            </section>

            <Section>
                {/* Service Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex rounded-lg border bg-gray-100 p-1 dark:bg-gray-800">
                        <button
                            onClick={() => setActiveTab("help")}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "help"
                                    ? "bg-white text-primary shadow-sm dark:bg-gray-950"
                                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                                }`}
                        >
                            Request Help
                        </button>
                        <button
                            onClick={() => setActiveTab("appointment")}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "appointment"
                                    ? "bg-white text-primary shadow-sm dark:bg-gray-950"
                                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                                }`}
                        >
                            Book Appointment
                        </button>
                        <button
                            onClick={() => setActiveTab("track")}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === "track"
                                    ? "bg-white text-primary shadow-sm dark:bg-gray-950"
                                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                                }`}
                        >
                            Track Status
                        </button>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    {activeTab === "help" && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <HelpCircle className="h-6 w-6 text-primary" /> Request Help / Support
                                </CardTitle>
                                <CardDescription>
                                    Submit a request for financial aid, medical assistance, or other personal grievances.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Name</label>
                                            <input type="text" className="w-full border rounded-md p-2 bg-white dark:bg-gray-800" placeholder="Your Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Phone</label>
                                            <input type="tel" className="w-full border rounded-md p-2 bg-white dark:bg-gray-800" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Type of Assistance</label>
                                        <select className="w-full border rounded-md p-2 bg-white dark:bg-gray-800">
                                            <option>Medical Aid</option>
                                            <option>Education Support</option>
                                            <option>Financial Assistance</option>
                                            <option>Legal Aid</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Description</label>
                                        <textarea className="w-full border rounded-md p-2 bg-white dark:bg-gray-800 min-h-[100px]" placeholder="Describe your request in detail..." />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Upload Documents (if any)</label>
                                        <input type="file" className="w-full text-sm" />
                                    </div>
                                    <Button className="w-full">Submit Request</Button>
                                </form>
                            </CardContent>
                        </Card>
                    )}

                    {activeTab === "appointment" && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="h-6 w-6 text-primary" /> Book an Appointment
                                </CardTitle>
                                <CardDescription>
                                    Schedule a meeting with the MP or office staff.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Name</label>
                                            <input type="text" className="w-full border rounded-md p-2 bg-white dark:bg-gray-800" placeholder="Your Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Phone</label>
                                            <input type="tel" className="w-full border rounded-md p-2 bg-white dark:bg-gray-800" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Preferred Date</label>
                                        <input type="date" className="w-full border rounded-md p-2 bg-white dark:bg-gray-800" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Purpose of Meeting</label>
                                        <textarea className="w-full border rounded-md p-2 bg-white dark:bg-gray-800 min-h-[100px]" placeholder="Briefly explain why you want to meet..." />
                                    </div>
                                    <Button className="w-full">Request Appointment</Button>
                                </form>
                            </CardContent>
                        </Card>
                    )}

                    {activeTab === "track" && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Search className="h-6 w-6 text-primary" /> Track Application Status
                                </CardTitle>
                                <CardDescription>
                                    Check the status of your previously submitted requests.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2 mb-6">
                                    <input
                                        type="text"
                                        className="flex-1 border rounded-md p-2 bg-white dark:bg-gray-800"
                                        placeholder="Enter Application ID / Phone Number"
                                    />
                                    <Button>Track</Button>
                                </div>

                                {/* Mock Result */}
                                <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="font-bold">Application #REQ-2025-001</h4>
                                            <p className="text-sm text-gray-500">Submitted on Nov 20, 2025</p>
                                        </div>
                                        <div className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                            <Clock className="h-3 w-3" /> In Progress
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">Application Received</p>
                                                <p className="text-xs text-gray-500">Nov 20, 10:00 AM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">Document Verification</p>
                                                <p className="text-xs text-gray-500">Nov 22, 02:30 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-500">Processing</p>
                                                <p className="text-xs text-gray-400">Pending</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </Section>
        </div>
    )
}
