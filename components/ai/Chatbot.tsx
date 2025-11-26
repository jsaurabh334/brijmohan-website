"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

type Message = {
    id: number
    text: string
    sender: "bot" | "user"
}

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Namaste! I am Brijmohan Agrawal's AI Assistant. How can I help you today?", sender: "bot" }
    ])
    const [input, setInput] = useState("")
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = () => {
        if (!input.trim()) return

        const userMessage: Message = { id: Date.now(), text: input, sender: "user" }
        setMessages(prev => [...prev, userMessage])
        setInput("")

        // Mock AI Response
        setTimeout(() => {
            let botResponseText = "Thank you for your message. Our team will get back to you shortly."

            const lowerInput = input.toLowerCase()
            if (lowerInput.includes("scheme") || lowerInput.includes("yojana")) {
                botResponseText = "You can find details about various government schemes on our Schemes page. Is there a specific scheme you are looking for?"
            } else if (lowerInput.includes("road") || lowerInput.includes("water") || lowerInput.includes("issue")) {
                botResponseText = "To report an issue regarding roads, water, or other civic amenities, please use the 'Report Issue' feature on our Contact page or the Issues Map."
            } else if (lowerInput.includes("contact") || lowerInput.includes("office")) {
                botResponseText = "Our Raipur office is located at Civil Lines. You can also reach us at +91 0771-2425555."
            }

            const botResponse: Message = { id: Date.now() + 1, text: botResponseText, sender: "bot" }
            setMessages(prev => [...prev, botResponse])
        }, 1000)
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-20 right-4 z-50 w-[350px] shadow-2xl"
                    >
                        <Card className="border-primary/20">
                            <CardHeader className="bg-primary text-white rounded-t-lg p-4 flex flex-row items-center justify-between space-y-0">
                                <div className="flex items-center gap-2">
                                    <Bot className="h-6 w-6" />
                                    <CardTitle className="text-base">AI Assistant</CardTitle>
                                </div>
                                <Button variant="ghost" size="icon" className="text-white hover:bg-primary/80 h-8 w-8" onClick={() => setIsOpen(false)}>
                                    <X className="h-5 w-5" />
                                </Button>
                            </CardHeader>
                            <CardContent className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${msg.sender === "user"
                                                    ? "bg-primary text-white rounded-br-none"
                                                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-bl-none"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </CardContent>
                            <CardFooter className="p-3 border-t bg-white dark:bg-gray-950 rounded-b-lg">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        handleSend()
                                    }}
                                    className="flex w-full gap-2"
                                >
                                    <input
                                        className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                                        placeholder="Type your message..."
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                    />
                                    <Button type="submit" size="icon" className="h-8 w-8 shrink-0">
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </motion.button>
        </>
    )
}
