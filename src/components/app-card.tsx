import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface AppCardProps {
    rank: number
    name: string
    slug: string
    icon: string
    downloads: string
    bonus: string
    minWithdrawal: string
    description: string
    rating: number
    externalUrl: string
}

export function AppCard({
    rank,
    name,
    slug,
    icon,
    downloads,
    bonus,
    minWithdrawal,
    description,
    rating,
    externalUrl,
}: AppCardProps) {
    const renderStars = (rating: number) => {
        // return Array.from({ length: 5 }, (_, i) => (
        //     <span key={i} className={`text-sm ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
        //         ★
        //     </span>
        // ))
        return (
            <span>
                <img src="/stars.webp" alt="rating" className=" h-3.5" />
            </span>
        )
    }

    return (
        <Card className="p-4 bg-white border-gray-300 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
                <div className="relative">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                        <Image
                            src={icon || "/placeholder.svg"}
                            alt={name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -top-2 -left-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        {rank}
                    </div>
                </div>

                <div className="flex-1">
                    <Link href={`/${slug}`}>
                        <h3 className="font-bold text-blue-900 mb-2">{name}</h3>
                    </Link>

                    <div className="space-y-1 text-sm mb-3">
                        <div className="flex items-center gap-2">
                            <span className="text-blue-600">📱 {downloads} Downloads</span>
                            <span className="text-orange-600">💰 {bonus} Bonus</span>
                        </div>
                        <div className="text-green-600">💵 Min. Withdrawal {minWithdrawal}</div>
                        <p className="text-gray-600 text-xs">{description}</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">{renderStars(rating)}</div>
                        <Link
                            href={externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm">Download</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    )
}
