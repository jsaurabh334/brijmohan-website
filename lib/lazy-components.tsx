"use client"

import dynamic from "next/dynamic"
import { ComponentType } from "react"

// Lazy load heavy components
export const LazyCharts = dynamic(
    () => import("recharts").then((mod) => ({ default: mod as any })),
    {
        loading: () => <div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg" />,
        ssr: false,
    }
)

export const LazyMap = dynamic(
    () => import("@/components/ui/map-placeholder").then((mod) => mod.MapPlaceholder),
    {
        loading: () => <div className="h-96 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg" />,
        ssr: false,
    }
)

// Lazy load Chatbot
export const LazyChatbot = dynamic(
    () => import("@/components/ai/Chatbot").then((mod) => ({ default: mod.Chatbot })),
    {
        loading: () => null,
        ssr: false,
    }
)
