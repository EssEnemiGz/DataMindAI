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
              <Brain className="h-6 w-6" />
              <span className="text-xl font-bold">DataMindAI</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Asistente de IA open-source para análisis de datos financieros y contabilidad.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/features" className="hover:text-white">
                  Características
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Precios
                </Link>
              </li>
              <li>
                <Link to="/docs" className="hover:text-white">
                  Documentación
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="hover:text-white">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Comunidad */}
          <div>
            <h4 className="font-semibold mb-4">Comunidad</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/community" className="hover:text-white">
                  Comunidad
                </Link>
              </li>
              <li>
                <Link to="/contribute" className="hover:text-white">
                  Contribuir
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white">
                  Soporte
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-white">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 DataMindAI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
