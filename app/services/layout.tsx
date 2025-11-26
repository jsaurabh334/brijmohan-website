import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Public Services",
    description: "Access public services including appointment booking, help requests, and application tracking. Get assistance from Brijmohan Agrawal's office.",
    keywords: ["Public Services", "Appointment", "Help Request", "Citizen Services", "Support"],
    openGraph: {
        title: "Public Services - Brijmohan Agrawal",
        description: "Book appointments, request help, and track your applications",
        type: "website",
    },
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
