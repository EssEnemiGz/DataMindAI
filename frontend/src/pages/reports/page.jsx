import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Brain, BarChart3, TrendingUp, DollarSign, FileText, Download, Share } from "lucide-react"
import { DashboardNavigation } from "../../components/dashboard-navigation"

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardNavigation></DashboardNavigation>

      <div className="w-full px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Reports & Analytics</h1>
          <p className="text-gray-600">AI-powered insights and comprehensive financial analysis reports.</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue Analysis</TabsTrigger>
            <TabsTrigger value="expenses">Expense Tracking</TabsTrigger>
            <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$847,392</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+12.5%</span> from last quarter
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$156,847</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+8.2%</span> from last quarter
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18.5%</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+2.1%</span> from last quarter
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cash Flow</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$234,567</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+15.3%</span> from last quarter
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5" />
                  <span>AI-Generated Insights</span>
                </CardTitle>
                <CardDescription>Key findings and recommendations from your financial data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2">Strong Revenue Growth</h4>
                        <p className="text-green-800 text-sm">
                          Revenue has increased by 12.5% this quarter, primarily driven by increased sales in the
                          technology and consulting segments.
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Positive</Badge>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Cost Optimization Opportunity</h4>
                        <p className="text-blue-800 text-sm">
                          Analysis shows potential savings of $23,000 annually by optimizing office supplies and
                          subscription services expenses.
                        </p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Opportunity</Badge>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-orange-900 mb-2">Seasonal Pattern Detected</h4>
                        <p className="text-orange-800 text-sm">
                          Historical data shows a 20% revenue dip in Q1. Consider adjusting marketing spend and
                          inventory levels accordingly.
                        </p>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">Alert</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Reports</CardTitle>
                    <CardDescription>Your latest generated financial reports</CardDescription>
                  </div>
                  <Button>
                    <FileText className="h-4 w-4 mr-2" />
                    Generate New Report
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Q4 2023 Financial Summary",
                      type: "Quarterly Report",
                      date: "2024-01-15",
                      status: "completed",
                    },
                    {
                      title: "Monthly P&L Analysis - December",
                      type: "Monthly Report",
                      date: "2024-01-10",
                      status: "completed",
                    },
                    {
                      title: "Cash Flow Projection 2024",
                      type: "Forecast Report",
                      date: "2024-01-08",
                      status: "completed",
                    },
                  ].map((report, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg gap-3">
                      <div className="flex items-center space-x-4 flex-1 min-w-0">
                        <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{report.title}</h4>
                          <p className="text-sm text-gray-500 truncate">
                            {report.type} • {report.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end space-x-2 flex-shrink-0">
                        <Badge variant="default">{report.status}</Badge>
                        <div className="flex items-center space-x-1">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analysis</CardTitle>
                <CardDescription>Detailed breakdown of revenue streams and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                  <p className="text-gray-500">Revenue charts and analysis would be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="expenses">
            <Card>
              <CardHeader>
                <CardTitle>Expense Tracking</CardTitle>
                <CardDescription>Monitor and analyze your business expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                  <p className="text-gray-500">Expense tracking charts would be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forecasting">
            <Card>
              <CardHeader>
                <CardTitle>Financial Forecasting</CardTitle>
                <CardDescription>AI-powered predictions and future projections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                  <p className="text-gray-500">Forecasting models and predictions would be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
