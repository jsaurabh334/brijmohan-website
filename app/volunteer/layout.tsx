import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Volunteer",
    description: "Join our team of volunteers and contribute to community development. Register for volunteer programs, internships, and social initiatives in Raipur.",
    keywords: ["Volunteer", "Community Service", "Internship", "Social Work", "Youth Programs"],
    openGraph: {
        title: "Volunteer Programs - Brijmohan Agrawal",
        description: "Make a difference in your community. Join our volunteer programs today.",
        type: "website",
    },
}

export default function VolunteerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
