import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Scrolling Keywords Banner */}
            <div className="bg-yellow-300 py-2 overflow-hidden">
                <div className="animate-scroll whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-800">
                        load,51 bonus rummy new app,rummy arcade,rummy aras,rummy777,rummy bonus,rummy try app,rummy pro 51
                        bonus,newrummy,rummy bonus new app 2025,rummy ledi,rummy circle,rummy passion,rummy
                        culture,ace2three,junglee rummy,classic rummy,rummy villa,adda52 rummy,khelplay rummy,rummy time,rummy
                        modern,rummy east,rummy west,rummy north,rummy south
                    </span>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-blue-900 text-white py-8">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Age Restriction */}
                    <div className="text-center mb-6">
                        <p className="text-lg font-medium">You must be 18 years or older to Play Real Money Rummy*</p>
                    </div>

                    {/* Warning Box */}
                    <div className="bg-blue-800 border border-yellow-400 rounded-lg p-4 mb-6 max-w-4xl mx-auto">
                        <div className="flex items-start gap-2">
                            <span className="text-yellow-400 text-xl">⚠️</span>
                            <p className="text-sm leading-relaxed">
                                <strong>Warning:</strong> This game involves financial risk, play responsibly and at your own risk.
                                Don't add money. Only play with sign up bonus of ₹41. You will be responsible for your losses.
                            </p>
                        </div>
                    </div>

                    {/* Download Button */}
                    <div className="text-center mb-6">
                        <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg">
                            Download Apk
                        </button>
                    </div>

                    {/* Disclaimer */}
                    <div className="text-center mb-6">
                        <p className="text-xs text-gray-300 max-w-4xl mx-auto">
                            Note: We do not own or operate the app. This website is just to share our referral link. The apps shown
                            here belong to the app owners, we do not claim to own them in anyway.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="flex justify-center gap-6 mb-6 flex-wrap">
                        <Link href="/disclaimer" className="text-sm hover:text-yellow-400 transition-colors">
                            Disclaimer
                        </Link>
                        <Link href="/privacy-policy" className="text-sm hover:text-yellow-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="text-sm hover:text-yellow-400 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/sitemap" className="text-sm hover:text-yellow-400 transition-colors">
                            SiteMap
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="text-center border-t border-blue-800 pt-4">
                        <p className="text-sm text-gray-300">Copyright © 2024 Rummy Nabob Apk | All Rights Reserved</p>
                    </div>
                </div>
            </div>

            {/* Bottom Promotional Banner */}
            
        </footer>
    )
}
