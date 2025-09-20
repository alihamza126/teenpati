import { Avatar } from "@radix-ui/react-avatar";
import { Bell, ChevronRight, FileText, HelpCircle, LayoutDashboard, LogOut, Settings, Shield, Users } from "lucide-react";
import Link from "next/link";
import { AvatarFallback } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

interface UserData {
    email?: string
    role?: string
}

export default function AuthenticatedView(
    { user, handleLogout }: { user: UserData; handleLogout: () => Promise<void> }) {

    const isAdmin = user.role === "admin"

    const getInitials = (email = "") => {
        return email.slice(0, 2).toUpperCase()
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <Shield className={`h-6 w-6 ${isAdmin ? "text-red-600" : "text-primary"}`} />
                        <span className="text-lg font-bold">TeamPortal</span>
                    </div>
                    <div className={`text-xs mt-1 ${isAdmin ? "text-red-600" : "text-gray-500"}`}>
                        {isAdmin ? "Admin Portal" : "User Dashboard"}
                    </div>
                </div>

                <nav className="flex-1 p-4">
                    <div className="mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Main</div>
                    <Link
                        href={isAdmin ? "/admin/dashboard" : "/user/profile"}
                        className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 mb-1 group"
                    >
                        <LayoutDashboard className="w-5 h-5 text-gray-500 group-hover:text-primary" />
                        <span>{isAdmin ? "Admin Dashboard" : "Dashboard"}</span>
                    </Link>

                    <Link
                        href="/notifications"
                        className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 mb-1 group"
                    >
                        <Bell className="w-5 h-5 text-gray-500 group-hover:text-primary" />
                        <span>Notifications</span>
                    </Link>

                    {isAdmin && (
                        <Link
                            href="/admin/users"
                            className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 mb-1 group"
                        >
                            <Users className="w-5 h-5 text-gray-500 group-hover:text-primary" />
                            <span>Manage Users</span>
                        </Link>
                    )}

                    <Link
                        href="/documents"
                        className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 mb-1 group"
                    >
                        <FileText className="w-5 h-5 text-gray-500 group-hover:text-primary" />
                        <span>Documents</span>
                    </Link>

                    <div className="mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Account</div>

                    <Link
                        href={isAdmin ? "/admin/settings" : "/user/settings"}
                        className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 mb-1 group"
                    >
                        <Settings className="w-5 h-5 text-gray-500 group-hover:text-primary" />
                        <span>Settings</span>
                    </Link>

                    <Link
                        href="/help"
                        className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 mb-1 group"
                    >
                        <HelpCircle className="w-5 h-5 text-gray-500 group-hover:text-primary" />
                        <span>Help & Support</span>
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 mt-6 group"
                    >
                        <LogOut className="w-5 h-5 text-gray-500 group-hover:text-red-500" />
                        <span className="group-hover:text-red-500">Logout</span>
                    </button>
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border border-gray-200">
                            <AvatarFallback className={`${isAdmin ? "bg-red-100 text-red-800" : "bg-primary/10 text-primary"}`}>
                                {getInitials(user.email)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="overflow-hidden">
                            <div className="font-medium truncate">{user.email}</div>
                            <div className={`text-xs ${isAdmin ? "text-red-600" : "text-gray-500"}`}>
                                {isAdmin ? "Administrator" : "User"}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-2">
                        <Shield className={`h-6 w-6 ${isAdmin ? "text-red-600" : "text-primary"}`} />
                        <span className="text-lg font-bold">TeamPortal</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border border-gray-200">
                            <AvatarFallback className={`${isAdmin ? "bg-red-100 text-red-800" : "bg-primary/10 text-primary"}`}>
                                {getInitials(user.email)}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-8 pt-20 md:pt-8">
                <div className="max-w-7xl mx-auto">
                    {/* Welcome Header */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Welcome back, <span className="text-primary">{user.email?.split("@")[0]}</span>
                        </h1>
                        <p className="text-gray-500 mt-1">
                            {isAdmin
                                ? "Manage your organization and users from your admin dashboard"
                                : "Here's an overview of your recent activity and quick actions"}
                        </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <LayoutDashboard className="w-6 h-6 text-primary" />
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-medium mt-4">{isAdmin ? "Admin Dashboard" : "Your Dashboard"}</h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    {isAdmin ? "Manage site operations" : "View your personalized dashboard"}
                                </p>
                                <Button variant="link" className="px-0 mt-2" asChild>
                                    <Link href={isAdmin ? "/admin/dashboard" : "/user/profile"}>Go to Dashboard</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Settings className="w-6 h-6 text-primary" />
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-medium mt-4">Settings</h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    {isAdmin ? "Configure admin settings" : "Manage account preferences"}
                                </p>
                                <Button variant="link" className="px-0 mt-2" asChild>
                                    <Link href={isAdmin ? "/admin/settings" : "/user/settings"}>Go to Settings</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        {isAdmin ? <Users className="w-6 h-6 text-primary" /> : <Bell className="w-6 h-6 text-primary" />}
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-medium mt-4">{isAdmin ? "Manage Users" : "Notifications"}</h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    {isAdmin ? "View and manage user accounts" : "Check your recent notifications"}
                                </p>
                                <Button variant="link" className="px-0 mt-2" asChild>
                                    <Link href={isAdmin ? "/admin/users" : "/notifications"}>
                                        {isAdmin ? "View Users" : "View Notifications"}
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recent Activity Section */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-medium">Recent Activity</h2>
                        </div>
                        <div className="p-6">
                            <div className="text-center py-8 text-gray-500">
                                <p>Your recent activity will appear here</p>
                                <Button variant="outline" className="mt-4">
                                    Refresh
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
