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
  Cloud,
  Database,
  Code,
  CheckCircle,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function FeaturesPage() {
  return (
    <div className="w-full max-w-none">
      <div className="min-h-screen py-12">
        <div className="container-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              Technical Features
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Everything you need for
              <span className="text-blue-600 block">intelligent financial analysis</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DataMindAI combines the power of AI with the security of self-hosting to provide you with the best
              accounting analysis experience.
            </p>
          </div>

          {/* Feature Tabs */}
          <Tabs defaultValue="ai-analysis" className="mb-16">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="ai-analysis">AI Accounting</TabsTrigger>
              <TabsTrigger value="excel-integration">Excel</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="integrations">APIs</TabsTrigger>
              <TabsTrigger value="hosting">Hosting</TabsTrigger>
            </TabsList>

            {/* AI Accounting */}
            <TabsContent value="ai-analysis" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Brain className="h-8 w-8 text-blue-600 mr-3" />
                    AI Accounting Analysis
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our AI assistant understands accounting and finance. Ask complex questions in natural language
                    and get accurate answers based on your real data.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>"What was my profit margin last month?"</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>"Show me the expenses that grew the most this year"</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>"What categories can I optimize to save money?"</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>"Project my cash flow for the next 3 months"</span>
                    </li>
                  </ul>
                  <Link to="/register">
                    <Button size="lg">Try AI Chat Free</Button>
                  </Link>
                </div>
                <div className="bg-gray-100 rounded-lg p-8">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold">Chat with DataMindAI</span>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-sm">
                          <strong>You:</strong> What were my highest expenses in Q3?
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm">
                          <strong>AI:</strong> Based on your "expenses_q3.xlsx" file, your highest expenses were:
                        </p>
                        <ul className="text-sm mt-2 space-y-1">
                          <li>• Payroll: $45,230 (38%)</li>
                          <li>• Marketing: $12,450 (10%)</li>
                          <li>• Office: $8,900 (7%)</li>
                        </ul>
                        <p className="text-sm mt-2">Would you like me to analyze optimization opportunities?</p>
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
                      <span className="font-semibold">Supported Files</span>
                      <Upload className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-2 bg-green-50 rounded">
                        <FileSpreadsheet className="h-5 w-5 text-green-600" />
                        <span className="text-sm">balance_sheet.xlsx</span>
                        <Badge variant="outline" className="ml-auto">
                          ✓
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-3 p-2 bg-green-50 rounded">
                        <FileSpreadsheet className="h-5 w-5 text-green-600" />
                        <span className="text-sm">income_statement.csv</span>
                        <Badge variant="outline" className="ml-auto">
                          ✓
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-3 p-2 bg-green-50 rounded">
                        <FileSpreadsheet className="h-5 w-5 text-green-600" />
                        <span className="text-sm">cash_flow.xls</span>
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
                    Excel Reading and Writing
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    DataMindAI automatically understands the structure of your Excel files, identifies columns, detects
                    patterns and can generate new files with analysis.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Intelligent Reading</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Auto-header detection</li>
                          <li>• Recognizes dates and currencies</li>
                          <li>• Multiple worksheets</li>
                          <li>• Complex formats</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Advanced Writing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Automatic reports</li>
                          <li>• Integrated charts</li>
                          <li>• Professional formatting</li>
                          <li>• Dynamic formulas</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <Link to="/docs">
                    <Button variant="outline" size="lg">
                      View Documentation
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            {/* Reports */}
            <TabsContent value="reports" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
                  Professional Report Generation
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Generate professional financial reports automatically. From basic financial statements to advanced trend analysis.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <PieChart className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle>Income Statement</CardTitle>
                    <CardDescription>Automatic P&L with variance analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Income by category</li>
                      <li>• Detailed expenses</li>
                      <li>• Margins and ratios</li>
                      <li>• Previous period comparison</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <BarChart3 className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle>Cash Flow</CardTitle>
                    <CardDescription>Projections and liquidity analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Operating flow</li>
                      <li>• Investment flow</li>
                      <li>• Financing flow</li>
                      <li>• Future projections</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Database className="h-8 w-8 text-purple-600 mb-2" />
                    <CardTitle>Balance Sheet</CardTitle>
                    <CardDescription>Complete financial position</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• Current/non-current assets</li>
                      <li>• Liabilities and equity</li>
                      <li>• Liquidity ratios</li>
                      <li>• Vertical/horizontal analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Security */}
            <TabsContent value="security" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Shield className="h-8 w-8 text-red-600 mr-3" />
                    Data Security and Privacy
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Your financial data is extremely sensitive. DataMindAI is designed with security and
                    privacy as absolute priorities.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">End-to-End Encryption</h4>
                        <p className="text-gray-600 text-sm">All data is encrypted in transit and at rest</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Server className="w-6 h-6 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Self-Hosted</h4>
                        <p className="text-gray-600 text-sm">Your data never leaves your server</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Code className="w-6 h-6 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Open Source</h4>
                        <p className="text-gray-600 text-sm">Auditable and transparent</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Database className="w-6 h-6 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">No Vendor Lock-in</h4>
                        <p className="text-gray-600 text-sm">Your data is always yours</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-8 border border-red-200">
                  <h3 className="text-xl font-bold text-red-800 mb-4">🔒 Security Guarantees</h3>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">SOC 2 Type II Certification</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">GDPR Compliance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Regular security audits</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Encrypted automatic backups</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Two-factor authentication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Integrations */}
            <TabsContent value="integrations" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-orange-600 mr-3" />
                  External API Integrations
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  DataMindAI integrates with the best AI APIs and financial services to provide you with maximum
                  flexibility and power.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="h-6 w-6 text-blue-600 mr-2" />
                      AI Models
                    </CardTitle>
                    <CardDescription>Choose the model that best fits your needs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold text-sm">OpenAI GPT</h4>
                        <p className="text-xs text-gray-600">Most powerful and accurate</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold text-sm">Google Gemini</h4>
                        <p className="text-xs text-gray-600">Excellent for analysis</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold text-sm">Anthropic Claude</h4>
                        <p className="text-xs text-gray-600">Very secure and ethical</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold text-sm">Ollama Local</h4>
                        <p className="text-xs text-gray-600">100% private</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="h-6 w-6 text-green-600 mr-2" />
                      Financial Services
                    </CardTitle>
                    <CardDescription>Connect with banks and payment platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm font-medium">Plaid (Banks)</span>
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

            {/* Hosting */}
            <TabsContent value="hosting" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                  <Server className="h-8 w-8 text-indigo-600 mr-3" />
                  Self-Hosting vs Subscription
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Choose the option that best fits your needs: total control with self-hosting or convenience with
                  our SaaS.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-2 border-green-200 bg-green-50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Server className="h-6 w-6 text-green-600 mr-2" />
                        Self-Hosted
                      </CardTitle>
                      <Badge className="bg-green-600">FREE</Badge>
                    </div>
                    <CardDescription>Total control over your data and infrastructure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">100% free forever</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Data on your server</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Complete customization</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">No usage limits</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Docker installation</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Download Free</Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-200 bg-blue-50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Cloud className="h-6 w-6 text-blue-600 mr-2" />
                        Managed SaaS
                      </CardTitle>
                      <Badge className="bg-blue-600">$29/month</Badge>
                    </div>
                    <CardDescription>We take care of everything for you</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">No technical setup</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Automatic updates</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">24/7 technical support</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Premium APIs included</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Automatic backups</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Trial</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Final CTA */}
          <div className="text-center bg-gray-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to try all these features?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Start free with self-hosting or try our SaaS without commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="px-8">
                  Start Free
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="px-8">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
