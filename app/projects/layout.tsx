import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Development Projects",
    description: "Track development projects and infrastructure initiatives in Raipur. View project status, budgets, and completion timelines with interactive dashboards.",
    keywords: ["Development Projects", "Infrastructure", "Raipur Projects", "Project Dashboard", "MPLADS"],
    openGraph: {
        title: "Development Projects Dashboard - Brijmohan Agrawal",
        description: "Interactive dashboard showing all development projects in Raipur constituency",
        type: "website",
    },
}

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
