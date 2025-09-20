import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection
                title="About Rummy Nabob Apk"
                subtitle="Your trusted source for the best Rummy apps in India"
                className="bg-white"
            />

            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto prose prose-lg">
                    <p className="text-gray-700 leading-relaxed">
                        Welcome to Rummy Nabob Apk, your ultimate destination for discovering the best Rummy gaming apps in India.
                        We provide comprehensive reviews, comparisons, and trusted download links for all major Rummy platforms.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Why Choose Us?</h2>
                    <ul className="text-gray-700 space-y-2">
                        <li>✅ Verified and trusted app recommendations</li>
                        <li>✅ Latest bonus offers and promotions</li>
                        <li>✅ Secure download links</li>
                        <li>✅ Regular updates on new apps and features</li>
                        <li>✅ Expert reviews and ratings</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
