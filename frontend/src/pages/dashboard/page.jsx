import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Upload, FileSpreadsheet, BarChart3, Brain, TrendingUp, User, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { FileUpload } from "../../components/file-upload"
import { RecentAnalyses } from "../../components/recent-analyses"
import { QuickStats } from "../../components/quick-stats"
import { useAuth } from "../../hooks/useAuth"
import { useEffect } from "react"
import { LoadingSpinner } from "../../components/loading-spinner"
import { DashboardNavigation } from "../../components/dashboard-navigation"

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate('/login')
    }
  }, [isAuthenticated, isLoading, navigate])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardNavigation></DashboardNavigation>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.username || user?.email || 'User'}!
          </h1>
          <p className="text-gray-600">Upload your financial data and get AI-powered insights in minutes.</p>
        </div>

        {/* User Info Card */}
        {user && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>User Information</CardTitle>
              <CardDescription>Your account details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Username</p>
                  <p className="text-lg">{user.username || 'Not set'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-lg">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">User ID</p>
                  <p className="text-lg">{user.user_id}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Stats */}
        <QuickStats />

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* File Upload Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Upload Financial Data</span>
                </CardTitle>
                <CardDescription>Upload your Excel spreadsheets to start analyzing your financial data</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUpload />
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <FileSpreadsheet className="h-4 w-4 mr-2" />
                  Sample Data
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Insights
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Trends Analysis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="recent" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recent">Recent Analyses</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="recent">
            <RecentAnalyses />
          </TabsContent>

          <TabsContent value="insights">
            <Card>
              <CardHeader>
                <CardTitle>AI-Generated Insights</CardTitle>
                <CardDescription>Latest insights from your financial data analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 mb-2">Revenue Trend Analysis</h4>
                    <p className="text-blue-800 text-sm">
                      Your revenue has increased by 15% compared to last quarter. The growth is primarily driven by
                      increased sales in Q3.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">Cost Optimization</h4>
                    <p className="text-green-800 text-sm">
                      Identified potential savings of $12,000 annually by optimizing operational expenses in the
                      marketing category.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-900 mb-2">Cash Flow Alert</h4>
                    <p className="text-orange-800 text-sm">
                      Cash flow projection shows a potential shortfall in month 3. Consider adjusting payment terms or
                      securing additional funding.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Profit & Loss Analysis</CardTitle>
                  <CardDescription>Comprehensive P&L statement analysis with AI insights</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-600 mb-2 sm:mb-0">Get detailed insights into your revenue, costs, and profitability trends.</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button className="w-full sm:w-auto">Use Template</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Cash Flow Forecast</CardTitle>
                  <CardDescription>Predict future cash flows and identify potential issues</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-600 mb-2 sm:mb-0">Forecast your cash position and identify potential shortfalls or surpluses.</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button className="w-full sm:w-auto">Use Template</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">Budget vs Actual</CardTitle>
                  <CardDescription>Compare budgeted amounts with actual spending</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-600 mb-2 sm:mb-0">Track budget performance and identify variances that need attention.</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button className="w-full sm:w-auto">Use Template</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
