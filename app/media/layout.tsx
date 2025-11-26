import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Media Gallery",
    description: "Browse photos, videos, and press releases from Brijmohan Agrawal's events, visits, and public engagements in Raipur.",
    keywords: ["Media Gallery", "Photos", "Videos", "Press Releases", "Events", "Public Engagements"],
    openGraph: {
        title: "Media Gallery - Brijmohan Agrawal",
        description: "View photos and videos from recent events and initiatives",
        type: "website",
    },
}

export default function MediaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
