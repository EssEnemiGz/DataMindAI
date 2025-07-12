import { Button } from "../components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Brain, Upload, BarChart3, Shield, Zap, Github, Play, CheckCircle, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="w-full text-center px-4">
          <Badge className="mb-6" variant="outline">
            🚀 Open Source • Free • Self-hosted
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">DataMindAI</span>
            <br />
            Your AI Accounting Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload your Excel files, ask questions in natural language, and get intelligent financial analysis. 100%
            open source and private.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/register">
              <Button size="lg" className="text-lg px-4 sm:px-6 md:px-8 py-3">
                Start Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://github.com/EssEnemiGz/datamindai" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="text-lg px-4 sm:px-6 md:px-8 py-3">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </a>
            <Button variant="ghost" size="lg" className="text-lg px-4 sm:px-6 md:px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-xs sm:max-w-md mx-auto">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
                0
              </div>
              <div className="text-xs sm:text-sm text-gray-600">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">0</div>
              <div className="text-xs sm:text-sm text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">1</div>
              <div className="text-xs sm:text-sm text-gray-600">Contributors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem it solves */}
      <section className="py-20 px-4 bg-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tired of Excel and complicated tools?</h2>
            <p className="text-xl text-gray-600">DataMindAI eliminates the complexity of financial analysis</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">❌ Current Problems</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Hours wasted creating complex formulas in Excel</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Expensive and difficult-to-use accounting software</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Sensitive data in third-party clouds</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Manual reports that take days</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">✅ With DataMindAI</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Upload Excel and ask questions in natural language</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Automatic analysis with advanced AI</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Your data never leaves your server</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Professional reports in seconds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Main Features</h2>
            <p className="text-xl text-gray-600">Everything you need for intelligent financial analysis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>AI Accounting Chat</CardTitle>
                <CardDescription>
                  Ask questions about your finances in natural language. "What were my highest expenses this month?"
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Upload className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Intelligent Excel Reading</CardTitle>
                <CardDescription>
                  Upload .xlsx, .xls, .csv files and the AI automatically understands your data structure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Automatic Reports</CardTitle>
                <CardDescription>
                  Generate professional P&L, cash flow, balance sheet reports and trend analysis.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>100% Private</CardTitle>
                <CardDescription>
                  Self-hosted on your server. Your financial data never leaves your control.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Flexible APIs</CardTitle>
                <CardDescription>
                  Integrate with OpenAI, Gemini, local Ollama, or any AI model you prefer.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Github className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Open Source</CardTitle>
                <CardDescription>
                  Open source, transparent and modifiable. Contribute and customize according to your needs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo/Screenshots */}
      <section className="py-20 px-4 bg-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See DataMindAI in Action</h2>
            <p className="text-xl text-gray-600">From uploading files to getting intelligent insights</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700">Interactive Demo</p>
                  <p className="text-gray-600">Click to see DataMindAI in action</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Upload your Excel</h3>
                <p className="text-sm text-gray-600">Drag and drop your accounting files</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Ask Questions</h3>
                <p className="text-sm text-gray-600">Natural chat with your AI assistant</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Get Insights</h3>
                <p className="text-sm text-gray-600">Automatic reports and analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why choose DataMindAI?</h2>
            <p className="text-xl text-gray-600">Comparison with traditional tools</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold text-blue-600">DataMindAI</th>
                    <th className="px-6 py-4 text-center font-semibold">Excel</th>
                    <th className="px-6 py-4 text-center font-semibold">QuickBooks</th>
                    <th className="px-6 py-4 text-center font-semibold">SAP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">AI Chat</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Self-hosted</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Price</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Free</td>
                    <td className="px-6 py-4 text-center">36$/month</td>
                    <td className="px-6 py-4 text-center">$30/month</td>
                    <td className="px-6 py-4 text-center">$150+/month</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Automatic reports</td>
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
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">We answer your questions about DataMindAI</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">Is it really free? What's the catch?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, it's 100% free if you self-host it. The code is open source and you can use it without limits. We also
                offer a paid SaaS plan for those who prefer not to manage servers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">How secure is it for my financial data?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Very secure. By self-hosting, your data never leaves your server. We use end-to-end encryption and
                you can review all the source code to verify security.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">What file formats does it support?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We support Excel (.xlsx, .xls), CSV, and we're working on PDF and other formats. The AI can understand
                most common financial data structures.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Do I need technical knowledge to install it?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Not necessarily. We offer Docker installation in one command, and our documentation is very
                detailed. There are also step-by-step tutorial videos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left">Can I use my own OpenAI API?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Absolutely! You can use OpenAI, Gemini, Claude, or even local models like Ollama. DataMindAI is
                agnostic to the AI provider.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="w-full text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to revolutionize your financial analysis?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies already using DataMindAI to make better financial decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-4 sm:px-6 md:px-8 py-3">
                Start Free Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://github.com/EssEnemiGz/datamindai" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-4 sm:px-6 md:px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Github className="mr-2 h-5 w-5" />
                Download from GitHub
              </Button>
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            ⭐ Give us a on GitHub • 🚀 Installation in 5 minutes • 🔒 100% private
          </p>
        </div>
      </section>
    </div>
  )
}
