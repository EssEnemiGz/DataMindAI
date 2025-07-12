import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button"
import { User, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "../hooks/useAuth"
import { cn } from "../lib/utils"
import { useState } from "react"

export function DashboardNavigation() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const navigation = [
        { name: "Dashboard", to: "/dashboard" },
        { name: "Reports", to: "/reports" },
        { name: "Chat", to: "/chat" },
        { name: "Settings", to: "/settings" },
    ]

    const handleLogout = async () => {
        await logout()
        navigate('/')
        setIsOpen(false)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/DataMindAI-logo 2 - Without white background.png" alt="DataMindAI Logo" className="h-8 w-8 sm:h-12 sm:w-12" />
                        <span className="text-lg sm:text-2xl font-bold text-gray-900">DataMindAI</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                className={({ isActive }) =>
                                    cn(
                                        "font-medium transition-colors",
                                        isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                                    )
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                                <Link className="flex items-center" to="/profile">
                                    <User className="h-4 w-4 mr-2" />
                                    {user?.username || user?.email || 'Account'}
                                </Link>
                            </Button>
                            <Button variant="outline" size="sm" onClick={handleLogout}>
                                <LogOut className="h-4 w-4" />
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile menu button */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={cn(
                        "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
                        isOpen ? "max-h-96 pb-4" : "max-h-0",
                    )}
                >
                    <nav className="flex flex-col space-y-4 pt-4">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                className={({ isActive }) =>
                                    cn(
                                        "text-sm font-medium transition-colors",
                                        isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                                    )
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                        <div className="flex flex-col space-y-2 pt-4 border-t">
                            <Link to="/profile" onClick={() => setIsOpen(false)}>
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                    <User className="mr-2 h-4 w-4" />
                                    {user?.username || user?.email || 'Account'}
                                </Button>
                            </Link>
                            <Button variant="outline" size="sm" className="w-full justify-start" onClick={handleLogout}>
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}