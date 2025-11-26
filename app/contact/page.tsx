import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"
import { GoogleMap } from "@/components/ui/maps"
import { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Brijmohan Agrawal's office in Raipur and Delhi. Find office addresses, phone numbers, and contact forms.",
    keywords: ["Contact", "Office Address", "Raipur Office", "Delhi Office", "BJP MP Contact"],
    openGraph: {
        title: "Contact Brijmohan Agrawal - BJP MP Raipur",
        description: "Reach out to us for any queries, grievances, or support. We are here to serve you.",
    },
}

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We are here to listen. Reach out to us for any grievances, suggestions, or support.
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold">Get in Touch</h2>
                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-primary" /> Raipur Office
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className="text-gray-600 dark:text-gray-300">
                                        B-12, Civil Lines, Near Governor House,<br />
                                        Raipur, Chhattisgarh - 492001
                                    </p>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                        <Phone className="h-4 w-4" /> +91 0771-2425555
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-primary" /> Delhi Office
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className="text-gray-600 dark:text-gray-300">
                                        14, Canning Lane,<br />
                                        New Delhi - 110001
                                    </p>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                        <Phone className="h-4 w-4" /> +91 011-23381234
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-primary" /> Office Hours
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Monday - Saturday: 10:00 AM - 6:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm />
                </div>
            </Section>

            <section className="w-full">
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                    <GoogleMap address="Civil Lines, Raipur, Chhattisgarh, India" title="Raipur Office Location" />
                </div>
            </section>
        </div>
    )
}

