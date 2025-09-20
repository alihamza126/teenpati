import { AppsGrid } from "@/components/apps-grid"
import { HeroSection } from "@/components/hero-section"
import { allApps } from "@/lib/Apps"


export default function AllAppsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <HeroSection
                title="All Rummy Apps List 2025: Latest & Most Trusted in India (Compare Bonuses!)"
                subtitle="All Rummy Apps List 2025: 100+ Legal Platforms in India with Free ₹1000 Bonus. Play Safe & Win Big"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white"
                titleColor="text-white"
                subtitleColor="text-white"
            />

            <AppsGrid title="App Rummy Apps" apps={allApps} />
        </div>
    )
}
