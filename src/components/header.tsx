"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Header() {
    const pathname = usePathname()

    return (
        <header className=" bg-blue-900 top-0 z-50 text-white py-4 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    Rummy Nabob Apk
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

                <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">↓ Download Rummy</Button>
            </div>
            <nav className="flex text-sm font-semibold justify-center mt-8 md:hidden items-center space-x-8">
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
