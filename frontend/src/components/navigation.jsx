"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Brain, Menu, X } from "lucide-react"
import { cn } from "../lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", to: "/" },
    { name: "Features", to: "/features" },
    { name: "Documentation", to: "/docs" },
    { name: "About", to: "/about" },
    { name: "Pricing", to: "/pricing" },
  ]
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/DataMindAI-logo 2 - Without white background.png" alt="DataMindAI Logo" className="h-12 w-12" />
            <span className="text-2xl font-bold text-gray-900">DataMindAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) =>
              item.to ? (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              ) : null
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

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
            {navigation.map((item) =>
              item.to ? (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : null
            )}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Sign In
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full">
                  Registrarse
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
