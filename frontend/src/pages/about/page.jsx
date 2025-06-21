import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import {
  Brain,
  Github,
  Heart,
  Code,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Calendar,
  Shield,
  Zap,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            About DataMindAI
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Democratizing
            <span className="text-blue-600 block">Financial Intelligence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that intelligent financial analysis should be accessible to everyone, not just large corporations.
            DataMindAI is our mission to make this a reality.
          </p>
        </div>

        {/* Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Lightbulb className="h-8 w-8 text-yellow-500 mr-3" />
                The DataMindAI Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  DataMindAI was born out of a recurring problem I kept noticing: the lack of accessible, modern, and truly useful accounting
                  tools for small businesses and independent professionals. After years of building real-world systems
                  like a management platform for internet service providers
                  I understood how overwhelming financial data management can be without reliable tech support.
                </p>
                <p>
                  During this journey, I also launched Softkit Academy, my own coding academy where I taught programming through personalized
                  lessons. There, I saw firsthand how even highly motivated learners struggled to integrate AI and data analysis into their everyday work.
                </p>
                <p>
                  That's what led me to create DataMindAI a free, open source, self-hostable accounting agent powered by AI. It can generate, read,
                  and analyze Excel files, produce reports, make decisions, and provide feedback using APIs like OpenAI, Gemini, Anthropic, or Claude.
                  It's designed to be flexible: it works locally with Docker or via an optional subscription, including support for crypto, credit/debit cards and alternative payment methods like PayPal and Stripe.
                </p>
                <p>
                  My goal with DataMindAI is simple: to democratize access to AI-assisted accounting tools, giving users full control over their data and logic and helping those who
                  need it most grow with confidence and independence.
                </p>
              </div>

            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
              <div className="text-center">
                <Brain className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  Democratize intelligent financial analysis by making it accessible, private and free for everyone.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">0</div>
                    <div className="text-sm text-gray-600">GitHub Stars</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">0</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">1</div>
                    <div className="text-sm text-gray-600">Contributors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Philosophy */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              Open Source Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in transparency, collaboration and the power of community to create better tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Total Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All our code is public. You can review, audit and verify exactly how DataMindAI works.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Important decisions are made with the community. Your voice matters in DataMindAI's future.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Social Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our goal is not just profit, but to democratize access to intelligent financial tools.
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
              2024-2025 Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our development roadmap to build the most comprehensive AI-powered financial analysis platform.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Phase 1: Foundation */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold">Phase 1: Foundation (Q1 2024)</h3>
                  <Badge className="bg-green-100 text-green-800 !transition-none hover:bg-green-100 hover:opacity-100">Completed</Badge>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ Docker containerization</li>
                  <li>✅ Basic project structure</li>
                  <li>✅ Frontend React/Vite setup</li>
                  <li>✅ Backend FastAPI framework</li>
                  <li>✅ Open source release</li>
                </ul>
              </div>
            </div>

            {/* Phase 2: Core Features */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold">Phase 2: Core Features (Q2 2024)</h3>
                  <Badge className="bg-blue-100 text-blue-800 !transition-none hover:bg-blue-100 hover:opacity-100">In Progress</Badge>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>🔄 Backend API development (FastAPI/Python)</li>
                  <li>🔄 Database setup and configuration</li>
                  <li>🔄 User registration and authentication system</li>
                  <li>🔄 Excel file upload and parsing</li>
                  <li>🔄 Basic data analysis and financial metrics</li>
                </ul>
              </div>
            </div>

            {/* Phase 3: AI Integration */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold">Phase 3: AI Integration (Q3 2024)</h3>
                  <Badge className="bg-gray-100 text-gray-800 !transition-none hover:bg-gray-100 hover:opacity-100">Planned</Badge>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>⏳ OpenAI API integration</li>
                  <li>⏳ Google Gemini API integration</li>
                  <li>⏳ Anthropic API integration</li>
                  <li>⏳ Ollama local integration</li>
                  <li>⏳ AI-powered financial insights and recommendations</li>
                </ul>
              </div>
            </div>

            {/* Phase 4: Advanced Features */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold">Phase 4: Advanced Features (Q4 2024)</h3>
                  <Badge className="bg-gray-100 text-gray-800 !transition-none hover:bg-gray-100 hover:opacity-100">Planned</Badge>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>⏳ Advanced data visualization and charts</li>
                  <li>⏳ Report generation (PDF/Excel export)</li>
                  <li>⏳ Financial ratio calculations</li>
                  <li>⏳ Anomaly detection in financial data</li>
                  <li>⏳ Predictive analytics</li>
                </ul>
              </div>
            </div>

            {/* Phase 5: Enterprise Features */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold">Phase 5: Enterprise Features (Q1 2025)</h3>
                  <Badge className="bg-gray-100 text-gray-800 !transition-none hover:bg-gray-100 hover:opacity-100">Planned</Badge>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>⏳ Team collaboration features</li>
                  <li>⏳ Advanced security features</li>
                  <li>⏳ Integration with accounting software (QuickBooks)</li>
                  <li>⏳ Real-time collaboration features</li>
                </ul>
              </div>
            </div>

            {/* Phase 6: Future Vision */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-bold">Phase 6: Future Vision (Q2 2025+)</h3>
                  <Badge className="bg-gray-100 text-gray-800 !transition-none hover:bg-gray-100 hover:opacity-100">Planned</Badge>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>⏳ Mobile app development</li>
                  <li>⏳ Advanced AI analytics</li>
                  <li>⏳ Multi-currency support</li>
                  <li>⏳ Custom AI model training</li>
                  <li>⏳ Enterprise SSO/LDAP integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A small but passionate team dedicated to democratizing financial intelligence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="grid lg:grid-cols-3 gap-8 p-8">
                <div className="lg:col-span-1">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">B</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Biscen Fabián Pichardo Rosado</h3>
                    <p className="text-gray-600 mb-4">Founder & Lead Developer. Alias EssEnemiGz</p>
                    <div className="flex justify-center space-x-4">
                      <a href="https://github.com/EssEnemiGz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <h4 className="text-xl font-bold mb-4">My Story</h4>
                  <div className="space-y-4 text-gray-600">
                    <div className="space-y-4 text-gray-600">
                      <p>
                        I'm an 18 year old developer from the Dominican Republic, passionate about
                        using technology to help people and shape the future through AI. I believe
                        that artificial intelligence should be accessible, useful, and empowering for everyone.
                      </p>
                      <p>
                        In 2025, I started building DataMindAI as a personal project to learn React,
                        FastAPI, Azure, and contribute to open source. But more importantly, I wanted
                        to create a free, self-hostable assistant that helps individuals and small businesses
                        understand their finances through intelligent tools.
                      </p>
                      <p>
                        DataMindAI is designed to bring smart accounting to everyone no paywalls, no hidden fees, and
                        no data harvesting. Just powerful AI, under your control.
                      </p>
                    </div>

                    <div className="mt-6">
                      <h5 className="font-semibold mb-3">Experience</h5>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>Full-stack developer with 4+ years of experience</li>
                        <li>Self-learning developer since 2021</li>
                        <li>Expert in Linux, Flask and Python</li>
                        <li>Founder of DataMindAI (2025–present)</li>
                        <li>Developer of ISP Management System for local providers (2025–present)</li>
                        <li>Open source contributor in accounting & AI tools (2025–present)</li>
                        <li>Founder & Instructor at Softkit Academy (2024–2025)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Values and Principles */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at DataMindAI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your financial data is sacred. We believe in self-hosting and local processing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <CardTitle>Open Source</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transparency and collaboration. We believe in the power of community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We constantly explore new AI technologies to improve financial analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Financial intelligence should be available to everyone, not just corporations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Help us democratize financial intelligence. Contribute, use, or spread the word about DataMindAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/EssEnemiGz/datamindai" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="px-8">
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </Button>
            </a>
            <Link to="/register">
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Start Using Free
              </Button>
            </Link>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Together we can make financial intelligence accessible to everyone
          </p>
        </div>
      </div>
    </div>
  )
}
