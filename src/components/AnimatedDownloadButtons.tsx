"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { GAMES } from "@/lib/games"

export function AnimatedDownloadButtons() {
  const [randomGames, setRandomGames] = useState<typeof GAMES>([])

  useEffect(() => {
    // Get 3 random games
    const shuffled = [...GAMES].sort(() => 0.5 - Math.random())
    setRandomGames(shuffled.slice(0, 3))
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-3">
      {randomGames.map((game, index) => (
        <Link
          key={game.id}
          href={game.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block animate-bounce"
          style={{
            animationDelay: `${index * 0.5}s`,
            animationDuration: '2s'
          }}
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
            <span className="text-lg">📱</span>
            <div>
              <div className="text-sm font-bold">{game.name}</div>
              <div className="text-xs opacity-90">Download Now!</div>
            </div>
            <span className="text-lg animate-pulse">⬇️</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
