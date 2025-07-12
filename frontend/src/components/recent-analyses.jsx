import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { FileSpreadsheet, Eye, Download, MoreHorizontal } from "lucide-react"

const recentAnalyses = [
  {
    id: 1,
    name: "Q3 Financial Report",
    file: "q3_financials.xlsx",
    date: "2024-01-15",
    status: "completed",
    insights: 12,
    type: "P&L Analysis",
  },
  {
    id: 2,
    name: "Monthly Budget Review",
    file: "budget_december.xlsx",
    date: "2024-01-14",
    status: "completed",
    insights: 8,
    type: "Budget Analysis",
  },
  {
    id: 3,
    name: "Cash Flow Projection",
    file: "cashflow_2024.xlsx",
    date: "2024-01-13",
    status: "processing",
    insights: 0,
    type: "Cash Flow",
  },
  {
    id: 4,
    name: "Expense Analysis",
    file: "expenses_q4.xlsx",
    date: "2024-01-12",
    status: "completed",
    insights: 15,
    type: "Expense Report",
  },
]

export function RecentAnalyses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Analyses</CardTitle>
        <CardDescription>Your latest financial data analyses and reports</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentAnalyses.map((analysis) => (
            <div
              key={analysis.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors gap-3"
            >
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <FileSpreadsheet className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <h4 className="font-medium text-gray-900 truncate">{analysis.name}</h4>
                  <p className="text-sm text-gray-500 truncate">{analysis.file}</p>
                  <div className="flex items-center space-x-2 mt-1 flex-wrap space-y-1">
                    <Badge variant={analysis.status === "completed" ? "default" : "secondary"}>{analysis.status}</Badge>
                    <span className="text-xs text-gray-500">{analysis.type}</span>
                    {analysis.insights > 0 && (
                      <span className="text-xs text-blue-600">{analysis.insights} insights</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end space-x-2 flex-shrink-0">
                <span className="text-sm text-gray-500">{analysis.date}</span>
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
