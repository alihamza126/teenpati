"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { GAMES } from "@/lib/games"

export function Header() {
    const pathname = usePathname()
    const [randomGame, setRandomGame] = useState<typeof GAMES[0] | null>(null)

    useEffect(() => {
        // Set random game on mount
        const random = GAMES[Math.floor(Math.random() * GAMES.length)]
        setRandomGame(random)
        
        // Change random game every 30 seconds
        const interval = setInterval(() => {
            const random = GAMES[Math.floor(Math.random() * GAMES.length)]
            setRandomGame(random)
        }, 30000)

        return () => clearInterval(interval)
    }, [])

    return (
        <header className="bg-blue-900 top-0 z-50 text-white py-4 px-3 md:px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-xl md:text-xl font-bold">
                    Rummy Gamer Apk
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/" className={pathname === "/" ? "text-yellow-400 hover:text-yellow-300 transition-colors" : "text-white hover:text-yellow-400 transition-colors"}>
                        Home
                    </Link>
                    <Link href="/all-apps" className={pathname === "/all-apps" ? "text-yellow-400 hover:text-yellow-300 transition-colors" : "text-white hover:text-yellow-400 transition-colors"}>
                        All Rummy Apps
                    </Link>
                    <Link href="/about" className={pathname === "/about" ? "text-yellow-400 hover:text-yellow-300 transition-colors" : "text-white hover:text-yellow-400 transition-colors"}>
                        About Us
                    </Link>
                    <Link href="/contact" className={pathname === "/contact" ? "text-yellow-400 hover:text-yellow-300 transition-colors" : "text-white hover:text-yellow-400 transition-colors"}>
                        Contact
                    </Link>
                </nav>

                {randomGame && (
                    <Link
                        href={randomGame.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white px-2 md:px-4 py-2 rounded transition-colors"
                    >
                        ↓ Download APK
                    </Link>
                )}
            </div>
            <nav className="flex text-sm font-semibold justify-center mt-8 md:hidden items-center sm:space-x-7 space-x-5 md:space-x-8">
                <Link href="/" className={pathname === "/" ? "text-yellow-400 hover:text-yellow-300 transition-colors" : "text-white hover:text-yellow-400 transition-colors"}>
                    Home
                </Link>
                <Link href="/all-apps" className={pathname === "/all-apps" ? "text-yellow-400 hover:text-yellow-300 transition-colors" : "text-white hover:text-yellow-400 transition-colors"}>
                    All Rummy Apps
                </Link>
                <Link href="/about" className={pathname === "/about" ? "text-yellow-400 hover:text-yellow-300 transition-colors" : "text-white hover:text-yellow-400 transition-colors"}>
                    About Us
                </Link>
                <Link href="/contact" className={pathname === "/contact" ? "text-yellow-400 hover:text-yellow-300 transition-colors" : "text-white hover:text-yellow-400 transition-colors"}>
                    Contact
                </Link>
            </nav>
        </header>
    )
}
