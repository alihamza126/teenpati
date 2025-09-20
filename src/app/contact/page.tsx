
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection
                title="Contact Us"
                subtitle="Get in touch with our team for any queries or support"
                className="bg-white"
            />

            <section className="py-12 px-6">
                <div className="max-w-2xl mx-auto">
                    <Card className="p-8">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2">Send Message</Button>
                        </form>
                    </Card>
                </div>
            </section>
        </div>
    )
}
