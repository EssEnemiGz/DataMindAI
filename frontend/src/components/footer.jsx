import { Link } from "react-router-dom"
import { Brain, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-narrow py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/DataMindAI-logo-complete : Font is Nunito Sans - Without white background.png" alt="DataMindAI Logo" className="h-32 w-32" />
            </Link>
            <p className="text-gray-400 text-sm">
              Open-source AI assistant for financial data analysis and accounting.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/EssEnemiGz" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/@EssEnemiGz" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/biscen-fabian-pichardo-rosado-207b3336a" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="hover:text-white">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/community" className="hover:text-white">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/contribute" className="hover:text-white">
                  Contribute
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-white">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 DataMindAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
