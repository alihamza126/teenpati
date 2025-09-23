import { HeroSection } from "@/components/hero-section"

export const metadata = {
  title: "Disclaimer - Rummy Gamer Apk",
  description: "Important disclaimers and legal information regarding our gaming app reviews and recommendations.",
}

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection
                title="Disclaimer"
                subtitle="Important legal information and disclaimers regarding our gaming app reviews"
                className="bg-white"
            />

            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto prose prose-lg">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                        <h2 className="text-xl font-bold text-yellow-800 mb-2">Important Notice</h2>
                        <p className="text-yellow-700">
                            Please read this disclaimer carefully before using our website and services. 
                            By accessing and using this website, you agree to be bound by the terms and conditions outlined below.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">General Disclaimer</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The information provided on this website is for general informational purposes only. 
                        While we strive to provide accurate and up-to-date information about gaming apps, 
                        we make no representations or warranties of any kind, express or implied, about the 
                        completeness, accuracy, reliability, suitability, or availability of the information, 
                        products, services, or related graphics contained on this website.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Gaming and Legal Compliance</h2>
                    <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                        <h3 className="text-lg font-bold text-red-800 mb-2">⚠️ Important Legal Notice</h3>
                        <ul className="text-red-700 space-y-2">
                            <li>• Online gaming and gambling laws vary by jurisdiction</li>
                            <li>• Users are responsible for ensuring compliance with local laws</li>
                            <li>• We do not guarantee the legality of any gaming app in your region</li>
                            <li>• Please verify local regulations before participating in any gaming activities</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Financial Disclaimer</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        All financial information, including bonuses, withdrawal limits, and earnings potential, 
                        is provided for informational purposes only. Actual results may vary significantly. 
                        We are not responsible for any financial losses incurred through the use of recommended apps.
                    </p>

                    <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
                        <h3 className="text-lg font-bold text-orange-800 mb-2">💰 Financial Risks</h3>
                        <ul className="text-orange-700 space-y-1">
                            <li>• Gaming involves financial risk</li>
                            <li>• Past performance does not guarantee future results</li>
                            <li>• Only gamble with money you can afford to lose</li>
                            <li>• Seek professional financial advice if needed</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">App Recommendations</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our app recommendations are based on publicly available information, user reviews, 
                        and our research. We do not guarantee the performance, security, or reliability of 
                        any recommended applications. Users should conduct their own research before downloading 
                        or using any gaming app.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Third-Party Links and Content</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        This website may contain links to third-party websites, apps, or services. 
                        We have no control over the content, privacy policies, or practices of these 
                        third-party sites and are not responsible for their content or services.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Limitation of Liability</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        In no event shall Rummy Gamer Apk, its owners, employees, or affiliates be liable 
                        for any direct, indirect, incidental, special, consequential, or punitive damages, 
                        including without limitation, loss of profits, data, use, goodwill, or other 
                        intangible losses, resulting from your use of this website or any recommended apps.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Age Restrictions</h2>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                        <h3 className="text-lg font-bold text-blue-800 mb-2">🔞 Age Requirements</h3>
                        <ul className="text-blue-700 space-y-1">
                            <li>• You must be at least 18 years old to use our services</li>
                            <li>• Some gaming apps may have higher age requirements</li>
                            <li>• We do not knowingly collect information from minors</li>
                            <li>• Parents should monitor their children's online activities</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Responsible Gaming</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We promote responsible gaming practices. If you or someone you know has a gambling 
                        problem, please seek help from appropriate resources in your area. Gaming should be 
                        viewed as entertainment, not as a way to make money.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                        <h3 className="text-lg font-bold text-green-800 mb-2">🆘 Help Resources</h3>
                        <ul className="text-green-700 space-y-1">
                            <li>• Set time and money limits before gaming</li>
                            <li>• Never chase losses</li>
                            <li>• Take regular breaks from gaming</li>
                            <li>• Seek help if gaming becomes a problem</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Updates to Disclaimer</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We reserve the right to update this disclaimer at any time without prior notice. 
                        Changes will be effective immediately upon posting. Your continued use of this 
                        website after any changes constitutes acceptance of the new disclaimer.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Contact Information</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        If you have any questions about this disclaimer, please contact us through our 
                        contact page or email us at support@rummynabobapk.com
                    </p>

                    <div className="bg-gray-100 p-6 rounded-lg mt-8">
                        <p className="text-sm text-gray-600 text-center">
                            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
