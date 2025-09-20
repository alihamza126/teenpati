import { LayoutDashboard, Shield, User, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GuestView({ router }: { router: any }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
            {/* Header */}
            <header className="w-full py-6 px-8 flex items-center justify-between bg-white shadow-sm">
                <div className="flex items-center gap-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold">TeamPortal</span>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" onClick={() => router.push("/about")}>
                        About
                    </Button>
                    <Button variant="ghost" onClick={() => router.push("/features")}>
                        Features
                    </Button>
                    <Button variant="ghost" onClick={() => router.push("/contact")}>
                        Contact
                    </Button>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 py-16 md:py-0 gap-12 max-w-7xl mx-auto">
                <div className="flex-1 max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Welcome to <span className="text-primary">TeamPortal</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Your team&#39;s centralized platform for collaboration, management, and productivity. Sign in to access your
                        personalized dashboard.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="gap-2 text-base" onClick={() => router.push("/auth/signin")}>
                            <User className="w-5 h-5" />
                            Sign In
                        </Button>
                        <Button variant="outline" size="lg" className="gap-2 text-base" onClick={() => router.push("/auth/signup")}>
                            <Shield className="w-5 h-5" />
                            Create Account
                        </Button>
                    </div>
                </div>
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/40 rounded-lg blur-lg"></div>
                        <div className="relative bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <LayoutDashboard className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Intuitive Dashboard</h3>
                                    <p className="text-sm text-gray-500">Manage all your tasks in one place</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Team Collaboration</h3>
                                    <p className="text-sm text-gray-500">Work together seamlessly</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">Role-Based Access</h3>
                                    <p className="text-sm text-gray-500">Secure and customized for each role</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-6 px-8 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">© 2025 TeamPortal. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
                            Terms
                        </Link>
                        <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                            Privacy
                        </Link>
                        <Link href="/help" className="text-sm text-gray-500 hover:text-gray-900">
                            Help
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}