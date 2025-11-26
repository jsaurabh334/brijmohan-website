"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, GraduationCap, Heart, Download } from "lucide-react"

export default function VolunteerPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        Join the Movement
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Become a part of our team and contribute to the development of our nation. Together, we can make a difference.
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Registration Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="h-6 w-6 text-primary" /> Volunteer Registration
                            </CardTitle>
                            <CardDescription>Fill out the form to join us as a volunteer.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">First Name</label>
                                        <input type="text" className="w-full border rounded-md p-2 bg-white dark:bg-gray-800" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Last Name</label>
                                        <input type="text" className="w-full border rounded-md p-2 bg-white dark:bg-gray-800" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input type="email" className="w-full border rounded-md p-2 bg-white dark:bg-gray-800" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Phone</label>
                                    <input type="tel" className="w-full border rounded-md p-2 bg-white dark:bg-gray-800" placeholder="+91 98765 43210" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Area of Interest</label>
                                    <select className="w-full border rounded-md p-2 bg-white dark:bg-gray-800">
                                        <option>Social Media</option>
                                        <option>Field Work</option>
                                        <option>Event Management</option>
                                        <option>Research</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Why do you want to join?</label>
                                    <textarea className="w-full border rounded-md p-2 bg-white dark:bg-gray-800 min-h-[100px]" placeholder="Tell us about yourself..." />
                                </div>
                                <Button className="w-full">Submit Application</Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Opportunities */}
                    <div className="space-y-6">
                        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                                    <GraduationCap className="h-6 w-6" /> Internship Program
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    We offer internship opportunities for students interested in public policy, governance, and social work. Gain hands-on experience working with our team.
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                                    <li>Policy Research</li>
                                    <li>Social Media Management</li>
                                    <li>Community Outreach</li>
                                    <li>Data Analysis</li>
                                </ul>
                                <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-100">
                                    Apply for Internship
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-green-50 dark:bg-green-900/20 border-green-200">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                                    <Heart className="h-6 w-6" /> Youth Programs
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Engage in our youth leadership programs designed to empower the next generation of leaders. Participate in workshops, debates, and community service.
                                </p>
                                <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-100">
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Download className="h-6 w-6 text-gray-500" /> Resources
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Button variant="ghost" className="w-full justify-start h-auto py-3">
                                    <div className="text-left">
                                        <div className="font-medium">Volunteer Handbook</div>
                                        <div className="text-xs text-gray-500">PDF • 2.5 MB</div>
                                    </div>
                                </Button>
                                <Button variant="ghost" className="w-full justify-start h-auto py-3">
                                    <div className="text-left">
                                        <div className="font-medium">Campaign Guidelines</div>
                                        <div className="text-xs text-gray-500">PDF • 1.8 MB</div>
                                    </div>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    )
}
