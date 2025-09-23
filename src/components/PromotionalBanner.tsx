"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GAMES } from '@/lib/games'

const PromotionalBanner = () => {
    const [currentGame, setCurrentGame] = useState<typeof GAMES[0] | null>(null)

    useEffect(() => {
        // Set initial random game
        const randomGame = GAMES[Math.floor(Math.random() * GAMES.length)]
        setCurrentGame(randomGame)

        // Change game every 15 seconds
        const interval = setInterval(() => {
            const randomGame = GAMES[Math.floor(Math.random() * GAMES.length)]
            setCurrentGame(randomGame)
        }, 15000)

        return () => clearInterval(interval)
    }, [])

    if (!currentGame) return null

    return (
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-3 z-0 sticky bottom-0 border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                        <Image
                            src={currentGame.icon}
                            alt={currentGame.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-sm">{currentGame.name}</h3>
                        <p className="text-yellow-400 text-xs">
                            {currentGame.bonus} Bonus | Min. Withdrawal {currentGame.minWithdrawal}
                        </p>
                        <p className="text-gray-300 text-xs">
                            {currentGame.downloads} Downloads | ⭐ {currentGame.rating}/5
                        </p>
                    </div>
                </div>
                <Link
                    href={currentGame.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white px-2 md:px-6 py-2 rounded font-bold transition-colors"
                >
                    Download
                </Link>
            </div>
        </div>
    )
}

export default PromotionalBanner