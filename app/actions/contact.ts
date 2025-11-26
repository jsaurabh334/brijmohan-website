"use server"

import { z } from "zod"
import { prisma } from "@/lib/prisma"

const schema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please fix the errors below.",
        }
    }

    try {
        // Only attempt to save if DATABASE_URL is set
        if (process.env.DATABASE_URL) {
            await prisma.contactSubmission.create({
                data: {
                    firstName: validatedFields.data.firstName,
                    lastName: validatedFields.data.lastName,
                    email: validatedFields.data.email,
                    phone: validatedFields.data.phone || "",
                    message: validatedFields.data.message,
                },
            })
            return { success: true, message: "Message sent successfully!" }
        } else {
            // Fallback for development without DB
            console.log("Mock save to DB:", validatedFields.data)
            return { success: true, message: "Message sent successfully! (Mock)" }
        }
    } catch (error) {
        console.error("Database Error:", error)
        return { success: false, message: "Failed to send message. Please try again." }
    }
}
