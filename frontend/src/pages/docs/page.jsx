import { TabsContent } from "../../components/ui/tabs"
import { TabsTrigger } from "../../components/ui/tabs"
import { TabsList } from "../../components/ui/tabs"
import { Tabs } from "../../components/ui/tabs"
import { Button } from "../../components/ui/button"
import { CardContent } from "../../components/ui/card"
import { CardDescription } from "../../components/ui/card"
import { CardTitle } from "../../components/ui/card"
import { CardHeader } from "../../components/ui/card"
import { Card } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Link } from "react-router-dom"
import {
  Container,
  Play,
  FileText,
  HelpCircle,
  Code,
  Server,
  Database,
  Shield,
  Zap,
  Copy,
  ExternalLink,
} from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Documentación Completa
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Documentación de
            <span className="text-blue-600 block">DataMindAI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas saber para instalar, configurar y usar DataMindAI. Desde la instalación básica hasta
            configuraciones avanzadas.
          </p>
        </div>

        {/* Quick Start Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Container className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Instalación Rápida</CardTitle>
              <CardDescription>Ejecuta DataMindAI en 5 minutos con Docker</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full">Comenzar Instalación</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Play className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Guía de Uso</CardTitle>
              <CardDescription>Aprende a usar todas las características</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="w-full">
                Ver Tutorial
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>API Reference</CardTitle>
              <CardDescription>Documentación completa de la API REST</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="w-full">
                Ver API Docs
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Documentation Tabs */}
        <Tabs defaultValue="installation" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="installation">Instalación</TabsTrigger>
            <TabsTrigger value="usage">Uso</TabsTrigger>
            <TabsTrigger value="deployment">Despliegue</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          {/* Instalación */}
          <TabsContent value="installation" className="space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Container className="h-8 w-8 text-blue-600 mr-3" />
                Instalación con Docker
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                La forma más rápida de ejecutar DataMindAI es usando Docker. Solo necesitas tener Docker instalado en tu
                sistema.
              </p>
            </div>

            {/* Requisitos del Sistema */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="h-6 w-6 text-green-600 mr-2" />
                  Requisitos del Sistema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Mínimos</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• CPU: 2 cores</li>
                      <li>• RAM: 4GB</li>
                      <li>• Almacenamiento: 10GB</li>
                      <li>• Docker 20.10+</li>
                      <li>• Docker Compose 2.0+</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Recomendados</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• CPU: 4+ cores</li>
                      <li>• RAM: 8GB+</li>
                      <li>• Almacenamiento: 50GB+ SSD</li>
                      <li>• GPU (opcional para Ollama)</li>
                      <li>• Ubuntu 20.04+ / macOS / Windows</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instalación Paso a Paso */}
            <Card>
              <CardHeader>
                <CardTitle>Instalación Paso a Paso</CardTitle>
                <CardDescription>Sigue estos pasos para tener DataMindAI funcionando en minutos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Clona el repositorio</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                        <div className="flex items-center justify-between">
                          <code>git clone https://github.com/datamindai/datamindai.git</code>
                          <Button size="sm" variant="ghost">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Navega al directorio</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                        <div className="flex items-center justify-between">
                          <code>cd datamindai</code>
                          <Button size="sm" variant="ghost">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Copia el archivo de configuración</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                        <div className="flex items-center justify-between">
                          <code>cp .env.example .env</code>
                          <Button size="sm" variant="ghost">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">4</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Configura las variables de entorno</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm space-y-1">
                        <div>OPENAI_API_KEY=tu_clave_openai</div>
                        <div>GEMINI_API_KEY=tu_clave_gemini</div>
                        <div>DATABASE_URL=postgresql://...</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">5</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Ejecuta DataMindAI</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                        <div className="flex items-center justify-between">
                          <code>docker-compose up -d</code>
                          <Button size="sm" variant="ghost">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        ¡Listo! DataMindAI estará disponible en{" "}
                        <code className="bg-gray-100 px-1 rounded">http://localhost:3000</code>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Instalación con Ollama */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-6 w-6 text-orange-600 mr-2" />
                  Instalación con Ollama (Local)
                </CardTitle>
                <CardDescription>Para usar IA completamente local sin APIs externas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Si prefieres no usar APIs externas, puedes ejecutar modelos de IA localmente con Ollama:
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm space-y-2">
                    <div># Instala Ollama</div>
                    <div>curl -fsSL https://ollama.ai/install.sh | sh</div>
                    <div className="mt-2"># Descarga un modelo</div>
                    <div>ollama pull llama2</div>
                    <div className="mt-2"># Configura DataMindAI para usar Ollama</div>
                    <div>OLLAMA_BASE_URL=http://localhost:11434</div>
                    <div>AI_MODEL=ollama/llama2</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Uso */}
          <TabsContent value="usage" className="space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Play className="h-8 w-8 text-green-600 mr-3" />
                Cómo Usar DataMindAI
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Guía completa para aprovechar al máximo todas las características de DataMindAI.
              </p>
            </div>

            {/* Subida de Archivos */}
            <Card>
              <CardHeader>
                <CardTitle>1. Subir Archivos Contables</CardTitle>
                <CardDescription>Formatos soportados y mejores prácticas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Formatos Soportados</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        • <strong>Excel:</strong> .xlsx, .xls
                      </li>
                      <li>
                        • <strong>CSV:</strong> .csv (UTF-8, separado por comas)
                      </li>
                      <li>
                        • <strong>PDF:</strong> .pdf (próximamente)
                      </li>
                      <li>
                        • <strong>Tamaño máximo:</strong> 50MB por archivo
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Mejores Prácticas</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Usa headers claros en la primera fila</li>
                      <li>• Incluye fechas en formato YYYY-MM-DD</li>
                      <li>• Separa ingresos y gastos en columnas</li>
                      <li>• Evita celdas combinadas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chat con IA */}
            <Card>
              <CardHeader>
                <CardTitle>2. Chat con el Asistente IA</CardTitle>
                <CardDescription>Ejemplos de preguntas que puedes hacer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Análisis Básico</h4>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>• "¿Cuál fue mi ganancia neta el mes pasado?"</li>
                      <li>• "Muéstrame mis gastos más altos"</li>
                      <li>• "¿Cómo se compara este trimestre con el anterior?"</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Análisis Avanzado</h4>
                    <ul className="space-y-1 text-sm text-green-800">
                      <li>• "Identifica patrones estacionales en mis ventas"</li>
                      <li>• "¿Qué categorías de gastos puedo optimizar?"</li>
                      <li>• "Proyecta mi flujo de caja para los próximos 3 meses"</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Reportes</h4>
                    <ul className="space-y-1 text-sm text-purple-800">
                      <li>• "Genera un reporte de P&L para este año"</li>
                      <li>• "Crea un análisis de flujo de caja mensual"</li>
                      <li>• "Exporta un resumen ejecutivo en Excel"</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Generación de Reportes */}
            <Card>
              <CardHeader>
                <CardTitle>3. Generación de Reportes</CardTitle>
                <CardDescription>Tipos de reportes disponibles y cómo generarlos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <FileText className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold mb-2">Estado de Resultados</h4>
                    <p className="text-sm text-gray-600">P&L detallado con comparativas período anterior</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <Database className="h-8 w-8 text-green-600 mb-3" />
                    <h4 className="font-semibold mb-2">Balance General</h4>
                    <p className="text-sm text-gray-600">Situación patrimonial completa con ratios</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <Zap className="h-8 w-8 text-purple-600 mb-3" />
                    <h4 className="font-semibold mb-2">Flujo de Caja</h4>
                    <p className="text-sm text-gray-600">Análisis de liquidez y proyecciones</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Despliegue */}
          <TabsContent value="deployment" className="space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Server className="h-8 w-8 text-purple-600 mr-3" />
                Guía de Despliegue
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Opciones para desplegar DataMindAI en producción de forma segura y escalable.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">VPS/Servidor Dedicado</CardTitle>
                  <CardDescription>Para control total y máxima privacidad</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Ubuntu 20.04+ recomendado</li>
                    <li>• Nginx como reverse proxy</li>
                    <li>• SSL con Let's Encrypt</li>
                    <li>• Backups automáticos</li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Guía Completa
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Docker Swarm</CardTitle>
                  <CardDescription>Para alta disponibilidad y escalabilidad</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Múltiples nodos</li>
                    <li>• Load balancing automático</li>
                    <li>• Rolling updates</li>
                    <li>• Health checks</li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Configuración
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Kubernetes</CardTitle>
                  <CardDescription>Para empresas con infraestructura compleja</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Helm charts incluidos</li>
                    <li>• Auto-scaling</li>
                    <li>• Monitoring integrado</li>
                    <li>• Multi-tenant</li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">
                    Descargar Charts
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Configuración de Seguridad */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 text-red-600 mr-2" />
                  Configuración de Seguridad
                </CardTitle>
                <CardDescription>Mejores prácticas para un despliegue seguro</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Configuración Básica</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Cambiar contraseñas por defecto</li>
                      <li>• Configurar firewall (UFW)</li>
                      <li>• Deshabilitar root SSH</li>
                      <li>• Usar claves SSH</li>
                      <li>• Configurar fail2ban</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Configuración Avanzada</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Encriptación de base de datos</li>
                      <li>• VPN para acceso remoto</li>
                      <li>• Auditoría de logs</li>
                      <li>• Monitoreo de intrusiones</li>
                      <li>• Backups encriptados</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API */}
          <TabsContent value="api" className="space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Code className="h-8 w-8 text-orange-600 mr-3" />
                API Reference
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Documentación completa de la API REST de DataMindAI para integraciones personalizadas.
              </p>
            </div>

            {/* Autenticación */}
            <Card>
              <CardHeader>
                <CardTitle>Autenticación</CardTitle>
                <CardDescription>Cómo autenticarte con la API</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    DataMindAI usa API Keys para autenticación. Puedes generar una clave en tu panel de usuario.
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                    <div className="text-gray-500 mb-2"># Ejemplo de autenticación</div>
                    <div>curl -H "Authorization: Bearer YOUR_API_KEY" \</div>
                    <div className="ml-4">https://your-domain.com/api/v1/analyze</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Endpoints */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>POST /api/v1/upload</span>
                    <Badge className="bg-green-100 text-green-800">POST</Badge>
                  </CardTitle>
                  <CardDescription>Subir archivos para análisis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Parámetros</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                        <div>file: multipart/form-data (required)</div>
                        <div>name: string (optional)</div>
                        <div>category: string (optional)</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Respuesta</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                        <div>{"{"}</div>
                        <div className="ml-2">"id": "file_123",</div>
                        <div className="ml-2">"name": "balance_2024.xlsx",</div>
                        <div className="ml-2">"status": "uploaded",</div>
                        <div className="ml-2">"size": 1024000</div>
                        <div>{"}"}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>POST /api/v1/chat</span>
                    <Badge className="bg-blue-100 text-blue-800">POST</Badge>
                  </CardTitle>
                  <CardDescription>Enviar mensajes al asistente IA</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Body</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                        <div>{"{"}</div>
                        <div className="ml-2">"message": "¿Cuál fue mi ganancia neta?",</div>
                        <div className="ml-2">"file_ids": ["file_123"],</div>
                        <div className="ml-2">"context": "financial_analysis"</div>
                        <div>{"}"}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>GET /api/v1/reports</span>
                    <Badge className="bg-purple-100 text-purple-800">GET</Badge>
                  </CardTitle>
                  <CardDescription>Listar reportes generados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Query Parameters</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                        <div>limit: integer (default: 10)</div>
                        <div>offset: integer (default: 0)</div>
                        <div>type: string (pl, balance, cashflow)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* SDK */}
            <Card>
              <CardHeader>
                <CardTitle>SDKs Oficiales</CardTitle>
                <CardDescription>Librerías para diferentes lenguajes de programación</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">JavaScript/Node.js</h4>
                    <div className="bg-gray-100 rounded p-2 font-mono text-xs mb-3">npm install datamind-sdk</div>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Docs
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">Python</h4>
                    <div className="bg-gray-100 rounded p-2 font-mono text-xs mb-3">pip install datamind-python</div>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Docs
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">Go</h4>
                    <div className="bg-gray-100 rounded p-2 font-mono text-xs mb-3">go get datamind-go</div>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Docs
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Técnica */}
          <TabsContent value="faq" className="space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <HelpCircle className="h-8 w-8 text-red-600 mr-3" />
                FAQ Técnica
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Respuestas a las preguntas técnicas más frecuentes sobre DataMindAI.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>¿Cómo actualizo DataMindAI a la última versión?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-600">Para actualizar usando Docker:</p>
                    <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                      <div>docker-compose pull</div>
                      <div>docker-compose up -d</div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Esto descargará las últimas imágenes y reiniciará los contenedores automáticamente.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>¿Puedo usar múltiples modelos de IA simultáneamente?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sí, puedes configurar múltiples proveedores de IA y elegir cuál usar para cada consulta. Por
                    ejemplo, usar GPT-4 para análisis complejos y Llama2 local para consultas básicas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>¿Cómo configuro backups automáticos?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-600">Puedes configurar backups automáticos con cron:</p>
                    <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                      <div># Backup diario a las 2 AM</div>
                      <div>0 2 * * * /path/to/backup-script.sh</div>
                    </div>
                    <p className="text-sm text-gray-500">
                      El script de backup está incluido en el repositorio en <code>/scripts/backup.sh</code>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>¿Qué puertos necesito abrir en mi firewall?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-600">Puertos necesarios:</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        • <strong>80/443:</strong> HTTP/HTTPS para la aplicación web
                      </li>
                      <li>
                        • <strong>5432:</strong> PostgreSQL (solo si usas base de datos externa)
                      </li>
                      <li>
                        • <strong>11434:</strong> Ollama (solo si usas IA local)
                      </li>
                      <li>
                        • <strong>22:</strong> SSH para administración
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>¿Cómo migro mis datos de otra herramienta contable?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    DataMindAI incluye importadores para QuickBooks, Xero, y archivos CSV genéricos. También puedes usar
                    nuestra API para importar datos programáticamente. Consulta la sección "Migración de Datos" en la
                    documentación completa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>¿Puedo personalizar la interfaz de usuario?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sí, al ser open source puedes modificar completamente la interfaz. También ofrecemos temas
                    personalizables y la opción de white-labeling para clientes Enterprise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white mt-16">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas ayuda adicional?</h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestro equipo y comunidad están aquí para ayudarte con cualquier pregunta técnica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/community">
              <Button size="lg" variant="secondary" className="px-8">
                Únete a Discord
              </Button>
            </Link>
            <Link to="/support">
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-white text-white hover:bg-white hover:text-blue-600"
              >
                Contactar Soporte
              </Button>
            </Link>
          </div>
          <p className="text-sm mt-6 opacity-75">
            📚 Docs actualizadas semanalmente • 💬 Respuesta promedio: 2 horas • 🎥 Video tutoriales
          </p>
        </div>
      </div>
    </div>
  )
}
