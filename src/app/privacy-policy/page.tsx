import { HeroSection } from "@/components/hero-section"

export const metadata = {
  title: "Privacy Policy - Rummy Gamer Apk",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection
                title="Privacy Policy"
                subtitle="How we collect, use, and protect your personal information"
                className="bg-white"
            />

            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto prose prose-lg">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                        <h2 className="text-xl font-bold text-blue-800 mb-2">Your Privacy Matters</h2>
                        <p className="text-blue-700">
                            We are committed to protecting your privacy and ensuring the security of your personal information. 
                            This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Information We Collect</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information You Provide Directly</h3>
                    <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• Contact information when you reach out to us</li>
                        <li>• Feedback and comments you submit</li>
                        <li>• Newsletter subscription information (if applicable)</li>
                        <li>• Any other information you voluntarily provide</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information We Collect Automatically</h3>
                    <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• IP address and location data</li>
                        <li>• Browser type and version</li>
                        <li>• Device information and operating system</li>
                        <li>• Pages visited and time spent on our site</li>
                        <li>• Referring website information</li>
                        <li>• Cookies and similar tracking technologies</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">How We Use Your Information</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We use the information we collect for the following purposes:
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• To provide and improve our services</li>
                        <li>• To respond to your inquiries and provide customer support</li>
                        <li>• To analyze website usage and optimize user experience</li>
                        <li>• To send you updates about our services (with your consent)</li>
                        <li>• To comply with legal obligations</li>
                        <li>• To prevent fraud and ensure website security</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We use cookies and similar technologies to enhance your browsing experience. 
                        Cookies are small text files stored on your device that help us:
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• Remember your preferences and settings</li>
                        <li>• Analyze website traffic and usage patterns</li>
                        <li>• Provide personalized content and recommendations</li>
                        <li>• Improve website functionality and performance</li>
                    </ul>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                        <h3 className="text-lg font-bold text-yellow-800 mb-2">🍪 Cookie Management</h3>
                        <p className="text-yellow-700">
                            You can control cookie settings through your browser preferences. 
                            However, disabling cookies may affect website functionality.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Third-Party Services</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We may use third-party services for analytics, advertising, and other purposes. 
                        These services may collect information about your visits to our website and other sites. 
                        Popular third-party services we may use include:
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• Google Analytics for website analytics</li>
                        <li>• Social media platforms for content sharing</li>
                        <li>• Advertising networks for relevant ads</li>
                        <li>• Content delivery networks for faster loading</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Data Security</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We implement appropriate security measures to protect your personal information against 
                        unauthorized access, alteration, disclosure, or destruction. However, no method of 
                        transmission over the internet or electronic storage is 100% secure.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                        <h3 className="text-lg font-bold text-green-800 mb-2">🔒 Security Measures</h3>
                        <ul className="text-green-700 space-y-1">
                            <li>• SSL encryption for data transmission</li>
                            <li>• Regular security updates and monitoring</li>
                            <li>• Limited access to personal information</li>
                            <li>• Secure data storage and backup procedures</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Data Sharing and Disclosure</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We do not sell, trade, or rent your personal information to third parties. 
                        We may share your information only in the following circumstances:
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• With your explicit consent</li>
                        <li>• To comply with legal obligations or court orders</li>
                        <li>• To protect our rights, property, or safety</li>
                        <li>• With trusted service providers who assist in our operations</li>
                        <li>• In case of a business merger or acquisition</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Your Rights and Choices</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Depending on your location, you may have certain rights regarding your personal information:
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-4">
                        <li>• Right to access your personal information</li>
                        <li>• Right to correct inaccurate information</li>
                        <li>• Right to delete your personal information</li>
                        <li>• Right to restrict processing of your information</li>
                        <li>• Right to data portability</li>
                        <li>• Right to object to processing</li>
                        <li>• Right to withdraw consent</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Children's Privacy</h2>
                    <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                        <h3 className="text-lg font-bold text-red-800 mb-2">👶 Important Notice</h3>
                        <p className="text-red-700">
                            Our services are not intended for children under 13 years of age. 
                            We do not knowingly collect personal information from children under 13. 
                            If you are a parent or guardian and believe your child has provided us with 
                            personal information, please contact us immediately.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">International Data Transfers</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Your information may be transferred to and processed in countries other than your own. 
                        We ensure that such transfers comply with applicable data protection laws and implement 
                        appropriate safeguards to protect your information.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We may update this Privacy Policy from time to time to reflect changes in our practices 
                        or applicable laws. We will notify you of any material changes by posting the new 
                        Privacy Policy on this page and updating the "Last Updated" date.
                    </p>

                    <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Contact Us</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        If you have any questions about this Privacy Policy or our data practices, 
                        please contact us:
                    </p>
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <ul className="text-gray-700 space-y-2">
                            <li>• Email: privacy@rummynabobapk.com</li>
                            <li>• Contact Page: <a href="/contact" className="text-blue-600 hover:underline">Visit our contact page</a></li>
                            <li>• Response Time: We aim to respond within 48 hours</li>
                        </ul>
                    </div>

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
