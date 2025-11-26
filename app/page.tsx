"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { ArrowRight, Users, Building2, IndianRupee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-950 dark:to-gray-900 pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                Member of Parliament, Raipur
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white">
                Dedicated to <span className="text-primary">Development</span> & Public Service
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-300">
                Welcome to the official website of Brijmohan Agrawal. Explore our initiatives, track development projects, and connect directly with your representative.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Connect with Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">
                    View Projects
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto lg:ml-auto"
            >
              {/* Placeholder for MP Image */}
              <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 font-semibold text-xl">MP Image Placeholder</span>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
                <p className="font-bold text-primary text-2xl">30+</p>
                <p className="text-sm text-gray-600">Years of Service</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="bg-white dark:bg-gray-950">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center justify-center space-y-2 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
              <Building2 className="h-12 w-12 text-primary mb-2" />
              <div className="text-3xl font-bold">500+</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center justify-center space-y-2 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
              <IndianRupee className="h-12 w-12 text-secondary mb-2" />
              <div className="text-3xl font-bold">₹100 Cr+</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Funds Utilized</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col items-center justify-center space-y-2 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
              <Users className="h-12 w-12 text-accent-foreground mb-2" />
              <div className="text-3xl font-bold">10 Lakh+</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Citizens Benefited</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Latest News Section */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            Latest Updates
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            News & Initiatives
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Stay updated with the latest development works and events.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 w-full object-cover" />
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-2">Development</div>
                <CardTitle className="line-clamp-2">New Road Project Inaugurated in Raipur South</CardTitle>
                <CardDescription>Nov 25, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  A major infrastructure boost for the city as the new 4-lane road project kicks off...
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0 text-primary" asChild>
                  <Link href="/news">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/news">View All News</Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-white dark:bg-gray-950">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Citizens Say
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Hear from the people of Raipur about their experiences and the impact of our work.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Rajesh Kumar",
              role: "Small Business Owner",
              text: "The road infrastructure project has transformed our area. Business has improved significantly, and commuting is much easier now."
            },
            {
              name: "Sunita Devi",
              role: "Homemaker",
              text: "Thanks to the Ayushman Bharat scheme, my family received quality healthcare without financial burden. Truly grateful for this support."
            },
            {
              name: "Amit Sharma",
              role: "Student",
              text: "The scholarship program helped me pursue higher education. The youth programs are inspiring and provide great opportunities."
            }
          ].map((testimonial, i) => (
            <Card key={i} className="border-gray-200 dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Video Message Section */}
      <Section className="bg-white dark:bg-gray-950">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              A Message for the People
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              "My vision is to make Raipur a model city of development, where every citizen has access to quality infrastructure, healthcare, and education."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-200" />
              <div>
                <p className="font-bold">Brijmohan Agrawal</p>
                <p className="text-sm text-gray-500">Member of Parliament</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-primary border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white font-medium">
              Watch: Vision for 2025
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
