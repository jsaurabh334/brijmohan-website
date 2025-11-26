import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Award, Heart } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description: "Learn about Brijmohan Agrawal, BJP Member of Parliament from Raipur, Chhattisgarh. Discover his journey, vision, and commitment to public service.",
    keywords: ["Brijmohan Agrawal", "BJP MP", "Raipur", "Biography", "Political Career"],
    openGraph: {
        title: "About Brijmohan Agrawal - BJP MP Raipur",
        description: "Biography, journey, and vision of Brijmohan Agrawal, dedicated to serving the people of Raipur.",
        type: "profile",
    },
}

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        About Brijmohan Agrawal
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Dedicated to the development and welfare of Raipur and its people
                    </p>
                </div>
            </section>

            {/* Biography */}
            <Section>
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Biography</h2>
                        <div className="space-y-4 text-gray-600 dark:text-gray-300">
                            <p>
                                Brijmohan Agrawal is a prominent political leader and Member of Parliament representing Raipur, Chhattisgarh.
                                With decades of experience in public service, he has been instrumental in driving development initiatives across the region.
                            </p>
                            <p>
                                Born and raised in Chhattisgarh, Shri Agrawal has deep roots in the community and understands the aspirations
                                and challenges of the people. His commitment to inclusive growth and sustainable development has made him a
                                respected voice in Indian politics.
                            </p>
                            <p>
                                As a member of the Bharatiya Janata Party (BJP), he has held various important positions and has been at the
                                forefront of implementing welfare schemes and infrastructure projects that have transformed the lives of thousands.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="h-32 w-32 bg-primary rounded-full flex items-center justify-center text-white font-bold text-5xl mx-auto mb-4">
                                    B
                                </div>
                                <p className="text-gray-500 dark:text-gray-400">Professional Photo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Journey */}
            <Section className="bg-gray-50 dark:bg-gray-900">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Political Journey</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader>
                            <Building2 className="h-12 w-12 text-primary mb-2" />
                            <CardTitle>Early Career</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300">
                                Started political career with grassroots work in local communities
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Users className="h-12 w-12 text-primary mb-2" />
                            <CardTitle>Public Service</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300">
                                Served in various capacities, always prioritizing citizen welfare
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Award className="h-12 w-12 text-primary mb-2" />
                            <CardTitle>Member of Parliament</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300">
                                Elected as MP from Raipur, representing the voice of the people
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heart className="h-12 w-12 text-primary mb-2" />
                            <CardTitle>Community Leader</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300">
                                Continues to work tirelessly for the development of Raipur
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            {/* Vision */}
            <Section>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Vision for Raipur</h2>
                    <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                        <p>
                            "My vision is to transform Raipur into a model city that balances rapid development with environmental
                            sustainability, where every citizen has access to quality education, healthcare, and economic opportunities."
                        </p>
                        <p>
                            "Through transparent governance, citizen participation, and innovative solutions, we will build a Raipur
                            that our children will be proud to call home."
                        </p>
                    </div>
                    <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                        <h3 className="font-bold text-xl mb-4">Key Focus Areas</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="p-3 bg-white dark:bg-gray-800 rounded">Infrastructure</div>
                            <div className="p-3 bg-white dark:bg-gray-800 rounded">Healthcare</div>
                            <div className="p-3 bg-white dark:bg-gray-800 rounded">Education</div>
                            <div className="p-3 bg-white dark:bg-gray-800 rounded">Employment</div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}
