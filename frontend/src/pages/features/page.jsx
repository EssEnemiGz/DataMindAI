import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import {
  Brain,
  Upload,
  BarChart3,
  Shield,
  Zap,
  Server,
  MessageSquare,
  FileSpreadsheet,
  PieChart,
  Lock,
  Cloud,
  Database,
  Code,
  CheckCircle,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Características Técnicas
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Todo lo que necesitas para
            <span className="text-blue-600 block">análisis financiero inteligente</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DataMindAI combina la potencia de la IA con la seguridad del auto-hospedaje para ofrecerte la mejor
            experiencia de análisis contable.
          </p>
        </div>

        {/* Tabs de características */}
        <Tabs defaultValue="ai-analysis" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="ai-analysis">IA Contable</TabsTrigger>
            <TabsTrigger value="excel-integration">Excel</TabsTrigger>
            <TabsTrigger value="reports">Reportes</TabsTrigger>
            <TabsTrigger value="security">Seguridad</TabsTrigger>
            <TabsTrigger value="integrations">APIs</TabsTrigger>
            <TabsTrigger value="hosting">Hospedaje</TabsTrigger>
          </TabsList>

          {/* IA Contable */}
          <TabsContent value="ai-analysis" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Brain className="h-8 w-8 text-blue-600 mr-3" />
                  Análisis Contable con IA
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Nuestro asistente de IA entiende contabilidad y finanzas. Haz preguntas complejas en lenguaje natural
                  y obtén respuestas precisas basadas en tus datos reales.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>"¿Cuál fue mi margen de ganancia el mes pasado?"</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>"Muéstrame los gastos que más crecieron este año"</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>"¿Qué categorías puedo optimizar para ahorrar?"</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>"Proyecta mi flujo de caja para los próximos 3 meses"</span>
                  </li>
                </ul>
                <Link to="/register">
                  <Button size="lg">Probar Chat IA Gratis</Button>
                </Link>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold">Chat con DataMindAI</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm">
                        <strong>Tú:</strong> ¿Cuáles fueron mis gastos más altos en Q3?
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm">
                        <strong>IA:</strong> Basándome en tu archivo "gastos_q3.xlsx", tus gastos más altos fueron:
                      </p>
                      <ul className="text-sm mt-2 space-y-1">
                        <li>• Nómina: $45,230 (38%)</li>
                        <li>• Marketing: $12,450 (10%)</li>
                        <li>• Oficina: $8,900 (7%)</li>
                      </ul>
                      <p className="text-sm mt-2">¿Te gustaría que analice oportunidades de optimización?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Excel Integration */}
          <TabsContent value="excel-integration" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold">Archivos Soportados</span>
                    <Upload className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-2 bg-green-50 rounded">
                      <FileSpreadsheet className="h-5 w-5 text-green-600" />
                      <span className="text-sm">balance_general.xlsx</span>
                      <Badge variant="outline" className="ml-auto">
                        ✓
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-green-50 rounded">
                      <FileSpreadsheet className="h-5 w-5 text-green-600" />
                      <span className="text-sm">estado_resultados.csv</span>
                      <Badge variant="outline" className="ml-auto">
                        ✓
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-green-50 rounded">
                      <FileSpreadsheet className="h-5 w-5 text-green-600" />
                      <span className="text-sm">flujo_caja.xls</span>
                      <Badge variant="outline" className="ml-auto">
                        ✓
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <FileSpreadsheet className="h-8 w-8 text-green-600 mr-3" />
                  Lectura y Escritura de Excel
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  DataMindAI entiende automáticamente la estructura de tus archivos Excel, identifica columnas, detecta
                  patrones y puede generar nuevos archivos con análisis.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Lectura Inteligente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Auto-detección de headers</li>
                        <li>• Reconoce fechas y monedas</li>
                        <li>• Múltiples hojas de cálculo</li>
                        <li>• Formatos complejos</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Escritura Avanzada</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Reportes automáticos</li>
                        <li>• Gráficos integrados</li>
                        <li>• Formato profesional</li>
                        <li>• Fórmulas dinámicas</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <Link to="/docs">
                  <Button variant="outline" size="lg">
                    Ver Documentación
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          {/* Reportes */}
          <TabsContent value="reports" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
                Generación de Reportes Profesionales
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Genera reportes financieros profesionales automáticamente. Desde estados financieros básicos hasta
                análisis avanzados de tendencias.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <PieChart className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Estado de Resultados</CardTitle>
                  <CardDescription>P&L automático con análisis de variaciones</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Ingresos por categoría</li>
                    <li>• Gastos detallados</li>
                    <li>• Márgenes y ratios</li>
                    <li>• Comparativas período anterior</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>Flujo de Caja</CardTitle>
                  <CardDescription>Proyecciones y análisis de liquidez</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Flujo operativo</li>
                    <li>• Flujo de inversión</li>
                    <li>• Flujo de financiamiento</li>
                    <li>• Proyecciones futuras</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Database className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Balance General</CardTitle>
                  <CardDescription>Situación patrimonial completa</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Activos corrientes/no corrientes</li>
                    <li>• Pasivos y patrimonio</li>
                    <li>• Ratios de liquidez</li>
                    <li>• Análisis vertical/horizontal</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Seguridad */}
          <TabsContent value="security" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Shield className="h-8 w-8 text-red-600 mr-3" />
                  Seguridad y Privacidad de Datos
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Tus datos financieros son extremadamente sensibles. DataMindAI está diseñado con seguridad y
                  privacidad como prioridades absolutas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Lock className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Encriptación End-to-End</h4>
                      <p className="text-gray-600 text-sm">Todos los datos se encriptan en tránsito y en reposo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Server className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Auto-hospedado</h4>
                      <p className="text-gray-600 text-sm">Tus datos nunca salen de tu servidor</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Code className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Código Abierto</h4>
                      <p className="text-gray-600 text-sm">Auditable y transparente</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Database className="w-6 h-6 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Sin Vendor Lock-in</h4>
                      <p className="text-gray-600 text-sm">Tus datos siempre son tuyos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-8 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4">🔒 Garantías de Seguridad</h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Certificación SOC 2 Type II</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Cumplimiento GDPR</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Auditorías de seguridad regulares</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Backups automáticos encriptados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Autenticación de dos factores</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Integraciones */}
          <TabsContent value="integrations" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <Zap className="h-8 w-8 text-orange-600 mr-3" />
                Integraciones API Externas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                DataMindAI se integra con las mejores APIs de IA y servicios financieros para ofrecerte máxima
                flexibilidad y potencia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-6 w-6 text-blue-600 mr-2" />
                    Modelos de IA
                  </CardTitle>
                  <CardDescription>Elige el modelo que mejor se adapte a tus necesidades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold text-sm">OpenAI GPT-4</h4>
                      <p className="text-xs text-gray-600">Más potente y preciso</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold text-sm">Google Gemini</h4>
                      <p className="text-xs text-gray-600">Excelente para análisis</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold text-sm">Anthropic Claude</h4>
                      <p className="text-xs text-gray-600">Muy seguro y ético</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <h4 className="font-semibold text-sm">Ollama Local</h4>
                      <p className="text-xs text-gray-600">100% privado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-6 w-6 text-green-600 mr-2" />
                    Servicios Financieros
                  </CardTitle>
                  <CardDescription>Conecta con bancos y plataformas de pago</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm font-medium">Plaid (Bancos)</span>
                      <Badge variant="outline">API</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm font-medium">Stripe</span>
                      <Badge variant="outline">API</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm font-medium">QuickBooks</span>
                      <Badge variant="outline">API</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <span className="text-sm font-medium">Xero</span>
                      <Badge variant="outline">API</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Hospedaje */}
          <TabsContent value="hosting" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <Server className="h-8 w-8 text-indigo-600 mr-3" />
                Auto Hospedaje vs Suscripción
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Elige la opción que mejor se adapte a tus necesidades: control total con auto-hospedaje o comodidad con
                nuestro SaaS.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Server className="h-6 w-6 text-green-600 mr-2" />
                      Auto-hospedado
                    </CardTitle>
                    <Badge className="bg-green-600">GRATIS</Badge>
                  </div>
                  <CardDescription>Control total sobre tus datos y infraestructura</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">100% gratis para siempre</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Datos en tu servidor</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Personalización completa</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Sin límites de uso</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Instalación con Docker</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Descargar Gratis</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Cloud className="h-6 w-6 text-blue-600 mr-2" />
                      SaaS Gestionado
                    </CardTitle>
                    <Badge className="bg-blue-600">$29/mes</Badge>
                  </div>
                  <CardDescription>Nosotros nos encargamos de todo por ti</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Sin configuración técnica</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Actualizaciones automáticas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Soporte técnico 24/7</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">APIs premium incluidas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Backups automáticos</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Comenzar Prueba</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Final */}
        <div className="text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Listo para probar todas estas características?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Comienza gratis con auto-hospedaje o prueba nuestro SaaS sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="px-8">
                Comenzar Gratis
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="px-8">
                Ver Precios
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
