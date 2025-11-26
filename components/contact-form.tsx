"use client"

import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

const schema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
    })
    const [success, setSuccess] = useState(false)

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log(data)
        setSuccess(true)
        reset()
        setTimeout(() => setSuccess(false), 3000)
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            {success && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
                    Message sent successfully!
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                        <input id="first-name" {...register('firstName')} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="John" />
                        {errors.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                        <input id="last-name" {...register('lastName')} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Doe" />
                        {errors.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" type="email" {...register('email')} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="john@example.com" />
                    {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <input id="phone" type="tel" {...register('phone')} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea id="message" {...register('message')} className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Type your message here..." />
                    {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </div>
    )
}
