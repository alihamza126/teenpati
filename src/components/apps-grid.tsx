import { AppCard } from "./app-card"

interface App {
    rank: number
    name: string
    slug: string
    icon: string
    downloads: string
    bonus: string
    minWithdrawal: string
    description: string
    externalUrl: string
    rating: number
}

interface AppsGridProps {
    title: string
    apps: App[]
}

export function AppsGrid({ title, apps }: AppsGridProps) {
    return (
        <section className="py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-blue-900 flex items-center justify-center gap-2">🏆 {title}</h2>
                    <div className="w-full h-px bg-blue-900 mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {apps.map((app) => (
                        <AppCard key={app.rank} {...app} />
                    ))}
                </div>
            </div>
        </section>
    )
}
