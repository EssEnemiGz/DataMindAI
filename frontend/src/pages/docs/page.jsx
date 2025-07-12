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
      <div className="w-screen px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Complete Documentation
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            DataMindAI
            <span className="text-blue-600 block">Documentation</span>
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Everything you need to know to install, configure and use DataMindAI. From basic installation to advanced configurations.
          </p>
        </div>

        {/* Quick Start Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Container className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Quick Installation</CardTitle>
              <CardDescription>Run DataMindAI in 5 minutes with Docker</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full">Start Installation</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Play className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Usage Guide</CardTitle>
              <CardDescription>Learn to use all the features</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="w-full">
                View Tutorial
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>API Reference</CardTitle>
              <CardDescription>Complete REST API documentation</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="w-full">
                View API Documentation
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Documentation Tabs */}
        <Tabs defaultValue="installation" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-full">
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          {/* Installation */}
          <TabsContent value="installation" className="space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Container className="h-8 w-8 text-blue-600 mr-3" />
                Installation with Docker
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                The fastest way to run DataMindAI is using Docker. You just need to have Docker installed on your system.
              </p>
            </div>

            {/* System Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="h-6 w-6 text-green-600 mr-2" />
                  System Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Minimum</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• CPU: 2 cores</li>
                      <li>• RAM: 4GB</li>
                      <li>• Storage: 10GB</li>
                      <li>• Docker 20.10+</li>
                      <li>• Docker Compose 2.0+</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Recommended</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• CPU: 4+ cores</li>
                      <li>• RAM: 8GB+</li>
                      <li>• Storage: 50GB+ SSD</li>
                      <li>• GPU (optional for Ollama)</li>
                      <li>• Ubuntu 20.04+ / macOS / Windows</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step by Step Installation */}
            <Card>
              <CardHeader>
                <CardTitle>Installation Step-by-Step</CardTitle>
                <CardDescription>Follow these steps to get DataMindAI up and running in minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div className="flex-1 min-h-full w-full">
                      <h4 className="font-semibold mb-2">Clone the repository</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm w-full overflow-x-auto">
                        <div className="flex items-center justify-between w-full">
                          <code className="break-all whitespace-pre-wrap">git clone https://github.com/EssEnemiGz/datamindai.git</code>
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
                      <h4 className="font-semibold mb-2">Navigate to the directory</h4>
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
                      <h4 className="font-semibold mb-2">Copy the configuration file</h4>
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
                    <div className="flex-1 min-h-full w-full">
                      <h4 className="font-semibold mb-2">Configure environment variables</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm w-full overflow-x-auto">
                        <div className="flex items-center justify-between w-full">
                          <code className="break-all whitespace-pre-wrap">
                            OPENAI_API_KEY=your_openai_key
                            GEMINI_API_KEY=your_gemini_key
                            OLLAMA_URL=ollama_url
                            ANTHROPIC_API=your_anthropic_key
                            CORS_ORIGINS=http://localhost:3000
                            POSTGRES_USER=root
                            POSTGRES_PASSWORD=your_password
                          </code>
                          <Button size="sm" variant="ghost">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">5</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Run DataMindAI</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                        <div className="flex items-center justify-between">
                          <code>docker-compose up -d</code>
                          <Button size="sm" variant="ghost">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Done! DataMindAI will be available at{" "}
                        <code className="bg-gray-100 px-1 rounded">http://localhost:3000</code>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ollama Installation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-6 w-6 text-orange-600 mr-2" />
                  Ollama Installation (Local)
                </CardTitle>
                <CardDescription>For using completely local AI without external APIs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    If you prefer not to use external APIs, you can run AI models locally with Ollama:
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm space-y-2 overflow-x-auto">
                    <div className="break-all"># Install Ollama</div>
                    <div className="break-all">curl -fsSL https://ollama.ai/install.sh | sh</div>
                    <div className="mt-2 break-all"># Download a model</div>
                    <div className="break-all">ollama pull llama2</div>
                    <div className="mt-2 break-all"># Configure DataMindAI to use Ollama</div>
                    <div className="break-all">OLLAMA_BASE_URL=http://localhost:11434</div>
                    <div className="break-all">AI_MODEL=ollama/llama2</div>
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
                How to Use DataMindAI
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Complete guide to get the most out of all DataMindAI features.
              </p>
            </div>

            {/* Subida de Archivos */}
            <Card>
              <CardHeader>
                <CardTitle>1. Upload Accounting Files</CardTitle>
                <CardDescription>Supported formats and best practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Supported Formats</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        • <strong>Excel:</strong> .xlsx, .xls
                      </li>
                      <li>
                        • <strong>CSV:</strong> .csv (UTF-8, comma-separated)
                      </li>
                      <li>
                        • <strong>PDF:</strong> .pdf (coming soon)
                      </li>
                      <li>
                        • <strong>Maximum Size:</strong> 50MB per file
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Best Practices</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Use clear headers in the first row</li>
                      <li>• Include dates in YYYY-MM-DD format</li>
                      <li>• Separate incomes and expenses in columns</li>
                      <li>• Avoid merged cells</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chat with IA */}
            <Card>
              <CardHeader>
                <CardTitle>2. Chat with the IA Assistant</CardTitle>
                <CardDescription>Examples of questions you can ask</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Basic Analysis</h4>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>• "What was my net income last month?"</li>
                      <li>• "Show me my highest expenses"</li>
                      <li>• "How does this quarter compare to the previous one?"</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Advanced Analysis</h4>
                    <ul className="space-y-1 text-sm text-green-800">
                      <li>• "Identify seasonal patterns in my sales"</li>
                      <li>• "What categories of expenses can I optimize?"</li>
                      <li>• "Project my cash flow for the next 3 months"</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Reports</h4>
                    <ul className="space-y-1 text-sm text-purple-800">
                      <li>• "Generate a P&L report for this year"</li>
                      <li>• "Create a monthly cash flow analysis"</li>
                      <li>• "Export an executive summary in Excel"</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Report Generation */}
            <Card>
              <CardHeader>
                <CardTitle>3. Report Generation</CardTitle>
                <CardDescription>Types of reports available and how to generate them</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <FileText className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold mb-2">Income Statement</h4>
                    <p className="text-sm text-gray-600">Detailed P&L with period comparison</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <Database className="h-8 w-8 text-green-600 mb-3" />
                    <h4 className="font-semibold mb-2">Balance Sheet</h4>
                    <p className="text-sm text-gray-600">Complete balance sheet with ratios</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <Zap className="h-8 w-8 text-purple-600 mb-3" />
                    <h4 className="font-semibold mb-2">Cash Flow</h4>
                    <p className="text-sm text-gray-600">Liquidity analysis and projections</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Despliegue */}
          <TabsContent value="deployment" className="space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6 flex items-center">Deployment Guide</h2>
              <p className="text-lg text-gray-600 mb-8">Options to deploy DataMindAI in production securely and at scale.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">VPS/Servidor Dedicado</CardTitle>
                  <CardDescription>For full control and maximum privacy</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Ubuntu 20.04+ recommended</li>
                    <li>• Nginx as reverse proxy</li>
                    <li>• SSL with Let's Encrypt</li>
                    <li>• Automatic backups</li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">View Full Guide</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Docker Swarm</CardTitle>
                  <CardDescription>For high availability and scalability</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Multiple nodes</li>
                    <li>• Automatic load balancing</li>
                    <li>• Rolling updates</li>
                    <li>• Health checks</li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">View Configuration</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Kubernetes</CardTitle>
                  <CardDescription>For companies with complex infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Helm charts included</li>
                    <li>• Auto-scaling</li>
                    <li>• Monitoring integrated</li>
                    <li>• Multi-tenant</li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">
                    Download Charts
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Configuración de Seguridad */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">Security Configuration</CardTitle>
                <CardDescription>Best practices for a secure deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Basic Configuration</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Change default passwords</li>
                      <li>• Configure firewall (UFW)</li>
                      <li>• Disable root SSH</li>
                      <li>• Use SSH keys</li>
                      <li>• Configure fail2ban</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Advanced Configuration</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Database encryption</li>
                      <li>• VPN for remote access</li>
                      <li>• Log auditing</li>
                      <li>• Intrusion monitoring</li>
                      <li>• Encrypted backups</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API */}
          <TabsContent value="api" className="space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6 flex items-center">Referencia de API</h2>
              <p className="text-lg text-gray-600 mb-8">Complete REST API documentation for custom integrations with DataMindAI.</p>
            </div>

            {/* Autenticación */}
            <Card>
              <CardHeader>
                <CardTitle>Authentication</CardTitle>
                <CardDescription>How to authenticate with the API</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">DataMindAI uses API Keys for authentication. You can generate a key in your user panel.</p>
                  <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                    <div className="text-gray-500 mb-2"># Authentication example</div>
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
                  <CardDescription>Upload files for analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Parameters</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                        <div>file: multipart/form-data (required)</div>
                        <div>name: string (optional)</div>
                        <div>category: string (optional)</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Response</h4>
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
                  <CardDescription>Send messages to the IA assistant</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Body</h4>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                        <div>{"{"}</div>
                        <div className="ml-2">"message": "What was my net income?",</div>
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
                  <CardDescription>List generated reports</CardDescription>
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
                <CardDescription>Libraries for different programming languages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">JavaScript/Node.js</h4>
                    <div className="bg-gray-100 rounded p-2 font-mono text-xs mb-3">npm install datamind-sdk</div>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Documentation
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">Python</h4>
                    <div className="bg-gray-100 rounded p-2 font-mono text-xs mb-3">pip install datamind-python</div>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Documentation
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">Go</h4>
                    <div className="bg-gray-100 rounded p-2 font-mono text-xs mb-3">go get datamind-go</div>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Documentation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Técnica */}
          <TabsContent value="faq" className="space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6 flex items-center">Technical FAQ</h2>
              <p className="text-lg text-gray-600 mb-8">Answers to the most frequently asked technical questions about DataMindAI.</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How do I update DataMindAI to the latest version?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-600">To update using Docker:</p>
                    <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                      <div>docker-compose pull</div>
                      <div>docker-compose up -d</div>
                    </div>
                    <p className="text-sm text-gray-500">This will download the latest images and restart containers automatically.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I use multiple AI models simultaneously?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Yes, you can configure multiple AI providers and choose which one to use for each query. For example, use GPT-4 for complex analysis and Llama2 local for basic queries.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How do I configure automatic backups?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-600">You can configure automatic backups with cron:</p>
                    <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                      <div># Daily backup at 2 AM</div>
                      <div>0 2 * * * /path/to/backup-script.sh</div>
                    </div>
                    <p className="text-sm text-gray-500">The backup script is included in the repository at <code>/scripts/backup.sh</code></p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What ports do I need to open in my firewall?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-600">Required ports:</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• <strong>80/443:</strong> HTTP/HTTPS for the web application</li>
                      <li>• <strong>5432:</strong> PostgreSQL (only if using external database)</li>
                      <li>• <strong>11434:</strong> Ollama (only if using local AI)</li>
                      <li>• <strong>22:</strong> SSH for administration</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How do I migrate my data from another accounting tool?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">DataMindAI includes importers for QuickBooks, Xero, and generic CSV files. You can also use our API to import data programmatically. See the "Data Migration" section in the full documentation.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can I customize the user interface?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Yes, as open source you can fully modify the interface. We also offer customizable themes and white-labeling for Enterprise clients.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white mt-16">
          <h2 className="text-3xl font-bold mb-4">Need additional help?</h2>
          <p className="text-xl mb-8 opacity-90">Our team and community are here to help you with any technical questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/community">
              <Button size="lg" variant="secondary" className="px-8">Join Discord</Button>
            </Link>
            <Link to="/support">
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Contact Support
              </Button>
            </Link>
          </div>
          <p className="text-sm mt-6 opacity-75">📚 Docs updated weekly • 💬 Average response time: 2 hours • 🎥 Video tutorials</p>
        </div>
      </div>
    </div>
  )
}
