import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                                B
                            </div>
                            <span className="text-2xl font-bold">Brijmohan Agrawal</span>
                        </div>
                        <p className="text-sm leading-6 text-gray-300">
                            Dedicated to the development and welfare of the people.
                            Building a stronger, prosperous community together.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" aria-hidden="true" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" aria-hidden="true" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" aria-hidden="true" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">YouTube</span>
                                <Youtube className="h-6 w-6" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/schemes" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Schemes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/projects" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/news" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            News & Updates
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/media" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Media Gallery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Get Involved</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/volunteer" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Volunteer
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Public Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/issues" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Report Issue
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="flex items-start gap-2 text-sm leading-6 text-gray-300">
                                        <MapPin className="h-5 w-5 shrink-0 text-primary" />
                                        <span>Raipur Office: Civil Lines, Raipur, Chhattisgarh</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm leading-6 text-gray-300">
                                        <Phone className="h-5 w-5 shrink-0 text-primary" />
                                        <span>+91 12345 67890</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm leading-6 text-gray-300">
                                        <Mail className="h-5 w-5 shrink-0 text-primary" />
                                        <span>contact@brijmohanagrawal.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; {new Date().getFullYear()} Brijmohan Agrawal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
