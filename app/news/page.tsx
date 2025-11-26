import { Section } from "@/components/ui/section"
import { NewsList } from "@/components/news-list"

// Mock news data
const newsItems = [
    {
        id: 1,
        title: "Inauguration of New Community Hall in Raipur South",
        date: "2025-11-25",
        category: "Development",
        summary: "A state-of-the-art community hall was inaugurated today to serve the residents of Raipur South.",
    },
    {
        id: 2,
        title: "Press Conference on Urban Development Policy",
        date: "2025-11-22",
        category: "Press Release",
        summary: "Addressed the media regarding the new urban development policy aimed at improving city infrastructure.",
    },
    {
        id: 3,
        title: "Meeting with Youth Delegation",
        date: "2025-11-20",
        category: "Events",
        summary: "Met with a delegation of students to discuss their concerns and ideas for the future of education.",
    },
    {
        id: 4,
        title: "Inspection of Water Supply Project",
        date: "2025-11-18",
        category: "Development",
        summary: "Inspected the ongoing water supply project to ensure timely completion and quality standards.",
    },
    {
        id: 5,
        title: "Diwali Milan Samaroh",
        date: "2025-11-12",
        category: "Events",
        summary: "Celebrated Diwali with the citizens of Raipur. Distributed sweets and exchanged greetings.",
    },
    {
        id: 6,
        title: "Statement on Farmers' Issues",
        date: "2025-11-10",
        category: "Press Release",
        summary: "Issued a statement supporting the demands of farmers and urging the government to take immediate action.",
    },
]

export default function NewsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        News & Updates
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Stay informed about the latest developments, events, and press releases.
                    </p>
                </div>
            </section>

            <Section>
                <NewsList newsItems={newsItems} />
            </Section>
        </div>
    )
}

