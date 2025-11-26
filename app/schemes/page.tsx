import { Section } from "@/components/ui/section"
import { SchemesList } from "@/components/schemes-list"

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
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-primary/10 py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                        Government Schemes
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Find the right schemes for you. Empowering citizens with information and access.
                    </p>
                </div>
            </section>

            <Section>
                <SchemesList schemes={schemesData} />
            </Section>
        </div>
    )
}

