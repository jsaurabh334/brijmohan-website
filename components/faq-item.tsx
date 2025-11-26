"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
    question: string
    answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                aria-expanded={isOpen}
            >
                <span className="font-medium text-gray-900 dark:text-white">{question}</span>
                <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "transform rotate-180" : ""
                        }`}
                />
            </button>
            {isOpen && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300">{answer}</p>
                </div>
            )}
        </div>
    )
}
