"use client"

export function GoogleMap({ address, title }: { address: string; title: string }) {
    const encodedAddress = encodeURIComponent(address)
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`

    return (
        <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
                title={title}
            />
        </div>
    )
}

export function InteractiveMap({ markers }: { markers: Array<{ lat: number; lng: number; title: string }> }) {
    // Placeholder for interactive map with markers
    // In production, use react-leaflet or Google Maps React
    return (
        <div className="w-full h-[500px] bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            <div className="relative z-10 text-center p-6">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Interactive Map
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md">
                    {markers.length} project locations marked.
                    <br />
                    <span className="text-xs mt-2 block">
                        (Integrate Google Maps API or Leaflet.js for full functionality)
                    </span>
                </p>
            </div>
        </div>
    )
}
