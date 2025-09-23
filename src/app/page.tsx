// "use client"

import { AppsGrid } from "@/components/apps-grid"
import { HeroSection } from "@/components/hero-section"
import { getTopGames } from "@/lib/games"
import { Suspense } from "react";

export default function HomePage() {
  const topApps = getTopGames(6);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="Rummy Game – Play India's Latest Yono Rummy App & Claim ₹51 Instantly!"
        subtitle="All Rummy Apps – Download Now & Win ₹75 Bonus! Play Junglee Rummy, Yono Rummy, Rummy All Games, and more with secure withdrawals and verified winnings."
        className="bg-white"
      />

      <Suspense fallback={<div>Loading</div>}>
        <AppsGrid title="Top All Rummy Apps" apps={topApps} />
      </Suspense>
    </div>
  )
}


