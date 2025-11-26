import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { FAQItem } from "@/components/faq-item";

export const metadata: Metadata = {
    title: "Frequently Asked Questions",
    description: "Common questions about schemes, services, and office contact details.",
    keywords: ["FAQ", "BJP", "Brijmohan Agrawal", "schemes", "services"],
    openGraph: {
        title: "FAQ - Brijmohan Agrawal",
        description: "Find answers to common queries about government schemes and services.",
    },
};

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Find answers to common questions about schemes, services, and how to reach us
                    </p>
                </div>
            </section>

            <Section>
                <div className="max-w-3xl mx-auto space-y-12">
                    {faqs.map((category, idx) => (
                        <div key={idx}>
                            <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                            <div className="space-y-4">
                                {category.questions.map((faq, qIdx) => (
                                    <FAQItem key={qIdx} question={faq.q} answer={faq.a} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle>Still have questions?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Can't find the answer you're looking for? Please contact our office.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            >
                                Contact Us
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </Section>
        </div>
    );
}

// Mock FAQ data (same as before)
const faqs = [
    {
        category: "Government Schemes",
        questions: [
            {
                q: "How can I apply for Pradhan Mantri Awas Yojana?",
                a: "You can apply online through the official PMAY website or visit our office for assistance with the application process.",
            },
            {
                q: "What documents are required for Ayushman Bharat scheme?",
                a: "You need Aadhaar card, ration card, and income certificate. Visit our services section for detailed documentation.",
            },
            {
                q: "How do I check my scheme application status?",
                a: "Visit the respective scheme portal with your application number or contact our office for assistance.",
            },
        ],
    },
    {
        category: "Services & Support",
        questions: [
            {
                q: "How can I book an appointment with the MP?",
                a: "You can book an appointment through our Public Services page or call our office during working hours.",
            },
            {
                q: "What is the process to report a civic issue?",
                a: "Use our Report Issues page to submit your complaint with location and photos. We'll track and resolve it.",
            },
            {
                q: "How can I volunteer for community programs?",
                a: "Register through our Volunteer page. We'll contact you with opportunities matching your interests.",
            },
        ],
    },
    {
        category: "Office & Contact",
        questions: [
            {
                q: "What are the office timings?",
                a: "Monday to Saturday: 10:00 AM - 6:00 PM. Closed on Sundays and public holidays.",
            },
            {
                q: "Where is the Raipur office located?",
                a: "B-12, Civil Lines, Near Governor House, Raipur, Chhattisgarh - 492001",
            },
            {
                q: "How can I reach the office?",
                a: "Call +91 0771-2425555 or email through our contact form on the Contact page.",
            },
        ],
    },
];
