import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Report Issues",
    description: "Report civic issues, infrastructure problems, and local concerns. Track your complaints and get updates on resolution status.",
    keywords: ["Report Issues", "Civic Problems", "Complaints", "Infrastructure Issues", "Public Grievances"],
    openGraph: {
        title: "Report Issues - Brijmohan Agrawal",
        description: "Report and track civic issues in your area",
        type: "website",
    },
}

export default function IssuesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
