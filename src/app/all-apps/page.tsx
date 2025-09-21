import { AppsGrid } from "@/components/apps-grid"
import { HeroSection } from "@/components/hero-section"
import { GAMES } from "@/lib/games"

export default function AllAppsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection
                title="All Rummy Apps List 2025: Latest & Most Trusted in India (Compare Bonuses!)"
                subtitle="All Rummy Apps List 2025: 100+ Legal Platforms in India with Free ₹1000 Bonus. Play Safe & Win Big"
                className="bg-gradient-to-r max-w-7xl mx-auto rounded-lg mt-5 from-blue-700 to-blue-800 text-gray-100"
                titleColor="text-white"
                subtitleColor="text-white"
            />

            <AppsGrid title="All Games" apps={GAMES} />
        </div>
    )
}
