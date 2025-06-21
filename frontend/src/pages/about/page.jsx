import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import {
  Brain,
  Github,
  Twitter,
  Linkedin,
  Heart,
  Code,
  Users,
  Target,
  Lightbulb,
  Rocket,
  CheckCircle,
  Calendar,
  Star,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Nuestra Historia
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Sobre
            <span className="text-blue-600"> DataMindAI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nacimos de la frustración de usar herramientas contables complicadas y caras. Creemos que el análisis
            financiero inteligente debe ser accesible para todos.
          </p>
        </div>

        {/* Historia del proyecto */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Lightbulb className="h-8 w-8 text-yellow-500 mr-3" />
                La Historia de DataMindAI
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Todo comenzó en 2023 cuando, como muchos emprendedores, me encontré luchando con hojas de Excel
                  interminables y software contable que costaba una fortuna. Pasaba horas creando fórmulas complejas
                  solo para entender si mi negocio iba bien o mal.
                </p>
                <p>
                  La llegada de ChatGPT y los LLMs cambió todo. Me di cuenta de que podía crear un asistente que
                  entendiera mis datos financieros y me diera respuestas en lenguaje natural. Pero había un problema:
                  mis datos eran demasiado sensibles para enviarlos a la nube.
                </p>
                <p>
                  Así nació DataMindAI: un asistente contable con IA que puedes auto-hospedar, mantener tus datos
                  privados, y que sea completamente gratis y open source. Porque creemos que las herramientas
                  financieras inteligentes no deberían ser un privilegio de las grandes empresas.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
              <div className="text-center">
                <Brain className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                <p className="text-gray-600 mb-6">
                  Democratizar el análisis financiero inteligente haciendo que sea accesible, privado y gratuito para
                  todos.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">1.2k+</div>
                    <div className="text-sm text-gray-600">GitHub Stars</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-gray-600">Usuarios Activos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-gray-600">Contribuidores</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filosofía Open Source */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              Filosofía Open Source
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creemos en la transparencia, la colaboración y el poder de la comunidad para crear mejores herramientas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Transparencia Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Todo nuestro código es público. Puedes revisar, auditar y verificar exactamente cómo funciona
                  DataMindAI.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Comunidad Primero</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Las decisiones importantes se toman con la comunidad. Tu voz importa en el futuro de DataMindAI.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Propósito Social</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nuestro objetivo no es solo el beneficio, sino democratizar el acceso a herramientas financieras
                  inteligentes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
              <Rocket className="h-8 w-8 text-orange-500 mr-3" />
              Roadmap 2024-2025
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nuestros planes para hacer de DataMindAI la mejor herramienta de análisis financiero del mundo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Q1 2024 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">Q1 2024</h3>
                    <Badge className="bg-green-100 text-green-800">Completado</Badge>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>✅ Lanzamiento de la versión beta</li>
                    <li>✅ Integración con OpenAI y Gemini</li>
                    <li>✅ Lectura básica de archivos Excel</li>
                    <li>✅ Chat con IA contable</li>
                    <li>✅ Instalación Docker simplificada</li>
                  </ul>
                </div>
              </div>

              {/* Q2 2024 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">Q2 2024</h3>
                    <Badge className="bg-blue-100 text-blue-800">En Progreso</Badge>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>🔄 Reportes automáticos avanzados</li>
                    <li>🔄 Integración con Ollama local</li>
                    <li>🔄 Soporte para múltiples idiomas</li>
                    <li>🔄 API REST completa</li>
                    <li>🔄 Interfaz móvil optimizada</li>
                  </ul>
                </div>
              </div>

              {/* Q3 2024 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">Q3 2024</h3>
                    <Badge variant="outline">Planificado</Badge>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>📋 Integraciones bancarias (Plaid)</li>
                    <li>📋 Conectores para QuickBooks y Xero</li>
                    <li>📋 Análisis predictivo con ML</li>
                    <li>📋 Alertas inteligentes automáticas</li>
                    <li>📋 Colaboración en equipo</li>
                  </ul>
                </div>
              </div>

              {/* Q4 2024 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">Q4 2024</h3>
                    <Badge variant="outline">Futuro</Badge>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>🚀 Marketplace de plugins</li>
                    <li>🚀 IA especializada por industria</li>
                    <li>🚀 Certificaciones de compliance</li>
                    <li>🚀 Versión Enterprise completa</li>
                    <li>🚀 Expansión internacional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Conoce al Fundador</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La persona detrás de DataMindAI y su visión para democratizar el análisis financiero.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex flex-col items-center justify-center">
                  <Avatar className="w-32 h-32 mb-6">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Fundador" />
                    <AvatarFallback className="text-2xl">JD</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold mb-2">Juan Desarrollador</h3>
                  <p className="text-gray-600 text-center mb-4">Fundador & CEO</p>
                  <div className="flex space-x-4">
                    <a href="https://github.com" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://twitter.com" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <h4 className="text-xl font-bold mb-4">Mi Historia</h4>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Soy un desarrollador full-stack con más de 8 años de experiencia construyendo productos SaaS. He
                      trabajado en startups fintech y he visto de primera mano lo frustrante que puede ser el análisis
                      financiero para pequeñas y medianas empresas.
                    </p>
                    <p>
                      Después de fundar mi propia startup y luchar con herramientas contables caras y complicadas,
                      decidí que tenía que existir una mejor manera. DataMindAI es mi respuesta a ese problema.
                    </p>
                    <p>
                      Creo firmemente en el poder del open source y la IA para democratizar herramientas que antes solo
                      estaban al alcance de grandes corporaciones. Mi objetivo es que cualquier emprendedor pueda tener
                      acceso a análisis financiero de nivel enterprise.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h5 className="font-semibold mb-3">Experiencia</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Ex-CTO en FinTech Startup (2019-2023)</li>
                      <li>• Senior Developer en Google (2017-2019)</li>
                      <li>• Fundador de 2 startups exitosas</li>
                      <li>• Contribuidor activo en proyectos open source</li>
                      <li>• Speaker en conferencias de tecnología</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Valores y Principios */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos en DataMindAI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">Usuario Primero</h3>
              <p className="text-sm text-gray-600">
                Cada feature se diseña pensando en resolver problemas reales de nuestros usuarios.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold mb-2">Transparencia</h3>
              <p className="text-sm text-gray-600">
                Código abierto, decisiones públicas, y comunicación honesta siempre.
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">Comunidad</h3>
              <p className="text-sm text-gray-600">Construimos junto con nuestra comunidad, no solo para ella.</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Excelencia</h3>
              <p className="text-sm text-gray-600">
                No lanzamos nada que no usaríamos nosotros mismos en nuestros negocios.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">¿Quieres ser parte de la historia?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a nuestra comunidad y ayúdanos a construir el futuro del análisis financiero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/community">
              <Button size="lg" variant="secondary" className="px-8">
                Únete a la Comunidad
              </Button>
            </Link>
            <Link to="/contribute">
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contribuir al Proyecto
              </Button>
            </Link>
          </div>
          <p className="text-sm mt-6 opacity-75">🌟 Síguenos en GitHub • 💬 Únete a Discord • 📧 Newsletter mensual</p>
        </div>
      </div>
    </div>
  )
}
