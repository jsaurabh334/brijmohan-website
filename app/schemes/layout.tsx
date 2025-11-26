import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Government Schemes",
    description: "Browse and search government welfare schemes available for citizens of Raipur. Find eligibility criteria, benefits, and application procedures.",
    keywords: ["Government Schemes", "Welfare Programs", "PMAY", "Ayushman Bharat", "Subsidy Schemes"],
    openGraph: {
        title: "Government Schemes - Brijmohan Agrawal",
        description: "Comprehensive list of government schemes and how to apply",
        type: "website",
    },
}

export default function SchemesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
