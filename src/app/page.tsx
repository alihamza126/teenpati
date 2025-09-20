// "use client"

import { AppsGrid } from "@/components/apps-grid"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

const topApps = [
  {
    rank: 1,
    name: "Teen Patti Glory",
    icon: "/teen-patti-glory-app-icon.jpg",
    downloads: "541K+",
    bonus: "₹25",
    minWithdrawal: "₹200",
    description: "Teen Patti Glory APK Download – Play & Win ₹800+ Daily Bonus",
    rating: 5,
  },
  {
    rank: 2,
    name: "Dhani Teen Patti",
    icon: "/dhani-teen-patti-app-icon.jpg",
    downloads: "416K+",
    bonus: "₹79",
    minWithdrawal: "₹500",
    description: "Dhani Teen Patti Casino Slot Game - 24/7",
    rating: 5,
  },
  {
    rank: 3,
    name: "Yono Teen Patti",
    icon: "/yono-teen-patti-app-icon.jpg",
    downloads: "196K+",
    bonus: "₹100",
    minWithdrawal: "₹200",
    description: "Yono Teen Patti APK Free Download – No Deposit Required",
    rating: 5,
  },
  {
    rank: 4,
    name: "Rummy Only",
    icon: "/rummy-only-app-icon.jpg",
    downloads: "436K+",
    bonus: "₹50",
    minWithdrawal: "₹200",
    description: "Min. Withdrawal ₹200",
    rating: 5,
  },
  {
    rank: 5,
    name: "Rummy Se",
    icon: "/rummy-se-app-icon.jpg",
    downloads: "164K+",
    bonus: "₹500",
    minWithdrawal: "₹200",
    description: "Min. Withdrawal ₹200",
    rating: 5,
  },
  {
    rank: 6,
    name: "Teen Patti Yes",
    icon: "/teen-patti-yes-app-icon.jpg",
    downloads: "346K+",
    bonus: "₹100",
    minWithdrawal: "₹500",
    description: "Min. Withdrawal ₹500",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="Rummy Game – Play India's Latest Yono Rummy App & Claim ₹51 Instantly!"
        subtitle="All Rummy Apps – Download Now & Win ₹75 Bonus! Play Junglee Rummy, Yono Rummy, Rummy All Games, and more with secure withdrawals and verified winnings."
        className="bg-white"
      />

      <AppsGrid title="Top All Rummy Apps" apps={topApps} />
    </div>
  )
}


