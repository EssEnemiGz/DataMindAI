import { Button } from "../components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Brain, Upload, BarChart3, Shield, Zap, Github, Play, CheckCircle, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6" variant="outline">
            🚀 Open Source • Gratis • Auto-hospedado
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">DataMindAI</span>
            <br />
            Tu Asistente Contable con IA
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sube tus archivos Excel, haz preguntas en lenguaje natural y obtén análisis financieros inteligentes. 100%
            open source y privado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/register">
              <Button size="lg" className="text-lg px-8 py-3">
                Comenzar Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://github.com/datamindai/datamindai" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Github className="mr-2 h-5 w-5" />
                Ver en GitHub
              </Button>
            </a>
            <Button variant="ghost" size="lg" className="text-lg px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Ver Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">1.2k+</div>
              <div className="text-sm text-gray-600">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Usuarios Activos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Contribuidores</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema que resuelve */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Cansado de Excel y herramientas complicadas?</h2>
            <p className="text-xl text-gray-600">DataMindAI elimina la complejidad del análisis financiero</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">❌ Problemas Actuales</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Horas perdidas creando fórmulas complejas en Excel</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Software contable caro y difícil de usar</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Datos sensibles en la nube de terceros</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Reportes manuales que toman días</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">✅ Con DataMindAI</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Sube Excel y haz preguntas en español</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Análisis automático con IA avanzada</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Tus datos nunca salen de tu servidor</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Reportes profesionales en segundos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Características principales */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Características Principales</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas para análisis financiero inteligente</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Chat con IA Contable</CardTitle>
                <CardDescription>
                  Haz preguntas sobre tus finanzas en lenguaje natural. "¿Cuáles fueron mis gastos más altos este mes?"
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Upload className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Lectura de Excel Inteligente</CardTitle>
                <CardDescription>
                  Sube archivos .xlsx, .xls, .csv y la IA entiende automáticamente la estructura de tus datos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Reportes Automáticos</CardTitle>
                <CardDescription>
                  Genera reportes profesionales de P&L, flujo de caja, balance general y análisis de tendencias.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>100% Privado</CardTitle>
                <CardDescription>
                  Auto-hospedado en tu servidor. Tus datos financieros nunca salen de tu control.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>APIs Flexibles</CardTitle>
                <CardDescription>
                  Integra con OpenAI, Gemini, Ollama local, o cualquier modelo de IA que prefieras.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Github className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Open Source</CardTitle>
                <CardDescription>
                  Código abierto, transparente y modificable. Contribuye y personaliza según tus necesidades.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo/Capturas */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ve DataMindAI en Acción</h2>
            <p className="text-xl text-gray-600">Desde subir archivos hasta obtener insights inteligentes</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700">Demo Interactivo</p>
                  <p className="text-gray-600">Haz clic para ver DataMindAI en acción</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Sube tu Excel</h3>
                <p className="text-sm text-gray-600">Arrastra y suelta tus archivos contables</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Haz Preguntas</h3>
                <p className="text-sm text-gray-600">Chat natural con tu asistente IA</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Obtén Insights</h3>
                <p className="text-sm text-gray-600">Reportes y análisis automáticos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparación */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir DataMindAI?</h2>
            <p className="text-xl text-gray-600">Comparación con herramientas tradicionales</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Característica</th>
                    <th className="px-6 py-4 text-center font-semibold text-blue-600">DataMindAI</th>
                    <th className="px-6 py-4 text-center font-semibold">Excel</th>
                    <th className="px-6 py-4 text-center font-semibold">QuickBooks</th>
                    <th className="px-6 py-4 text-center font-semibold">SAP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Chat con IA</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Auto-hospedado</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Precio</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Gratis</td>
                    <td className="px-6 py-4 text-center">$139/año</td>
                    <td className="px-6 py-4 text-center">$30/mes</td>
                    <td className="px-6 py-4 text-center">$150+/mes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Reportes automáticos</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Open Source</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">Resolvemos tus dudas sobre DataMindAI</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">¿Es realmente gratis? ¿Cuál es el truco?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Sí, es 100% gratis si lo auto-hospedas. El código es open source y puedes usarlo sin límites. También
                ofrecemos un plan SaaS de pago para quienes prefieren no gestionar servidores.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">¿Qué tan seguro es para mis datos financieros?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Muy seguro. Al auto-hospedarlo, tus datos nunca salen de tu servidor. Usamos encriptación end-to-end y
                puedes revisar todo el código fuente para verificar la seguridad.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">¿Qué formatos de archivo soporta?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Soportamos Excel (.xlsx, .xls), CSV, y estamos trabajando en PDF y otros formatos. La IA puede entender
                la mayoría de estructuras de datos financieros comunes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                ¿Necesito conocimientos técnicos para instalarlo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                No necesariamente. Ofrecemos instalación con Docker en un comando, y nuestra documentación es muy
                detallada. También hay videos tutoriales paso a paso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">¿Puedo usar mi propia API de OpenAI?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                ¡Absolutamente! Puedes usar OpenAI, Gemini, Claude, o incluso modelos locales como Ollama. DataMindAI es
                agnóstico al proveedor de IA.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-6">¿Listo para revolucionar tu análisis financiero?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a cientos de empresas que ya usan DataMindAI para tomar mejores decisiones financieras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Comenzar Gratis Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://github.com/datamindai/datamindai" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Github className="mr-2 h-5 w-5" />
                Descargar de GitHub
              </Button>
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            ⭐ 1,200+ estrellas en GitHub • 🚀 Instalación en 5 minutos • 🔒 100% privado
          </p>
        </div>
      </section>
    </div>
  )
}
