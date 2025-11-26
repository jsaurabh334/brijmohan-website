import { Metadata } from "next"

export const metadata: Metadata = {
    title: "News & Updates",
    description: "Latest news, announcements, and updates from Brijmohan Agrawal, BJP MP Raipur. Stay informed about development works, events, and initiatives.",
    keywords: ["News", "Updates", "Announcements", "BJP Raipur", "Development News"],
    openGraph: {
        title: "News & Updates - Brijmohan Agrawal",
        description: "Stay updated with the latest news and initiatives from your MP",
        type: "website",
    },
}

export default function NewsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
