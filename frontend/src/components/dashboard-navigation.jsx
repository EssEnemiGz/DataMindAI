import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button"
import { Brain, User, LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth"
import { cn } from "../lib/utils"

export function DashboardNavigation() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate('/')
    }

    return (
        <header className="bg-white border-b">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <Brain className="h-8 w-8 text-blue-600" />
                    <span className="text-2xl font-bold text-gray-900">DataMindAI</span>
                </Link>
                <nav className="flex items-center space-x-6">
                    <NavLink 
                        to="/dashboard" 
                        className={({ isActive }) =>
                            cn(
                                "font-medium transition-colors",
                                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                            )
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink 
                        to="/reports" 
                        className={({ isActive }) =>
                            cn(
                                "font-medium transition-colors",
                                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                            )
                        }
                    >
                        Reports
                    </NavLink>
                    <NavLink 
                        to="/chat" 
                        className={({ isActive }) =>
                            cn(
                                "font-medium transition-colors",
                                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                            )
                        }
                    >
                        Chat
                    </NavLink>
                    <NavLink 
                        to="/settings" 
                        className={({ isActive }) =>
                            cn(
                                "font-medium transition-colors",
                                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                            )
                        }
                    >
                        Settings
                    </NavLink>
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
            </div>
        </header>
    )
}