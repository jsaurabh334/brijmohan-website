'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
            <div className="text-center max-w-md px-4">
                <div className="text-6xl mb-4">⚠️</div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Something went wrong!
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    We apologize for the inconvenience. Please try again.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button onClick={reset}>
                        Try again
                    </Button>
                    <Button variant="outline" asChild>
                        <a href="/">Go Home</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
