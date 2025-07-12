"use client"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Switch } from "../../components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Badge } from "../../components/ui/badge"
import { Separator } from "../../components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog"
import {
  Brain,
  User,
  Settings,
  Shield,
  Bell,
  Palette,
  Database,
  Key,
  Download,
  Upload,
  Trash2,
  Save,
  Eye,
  EyeOff,
  Copy,
  Check,
  Info,
  Moon,
  Sun,
  Monitor,
  Globe,
  Zap,
  HardDrive,
  Cpu,
  MemoryStick,
  Activity,
} from "lucide-react"
import { Link } from "react-router-dom"
import { DashboardNavigation } from "../../components/dashboard-navigation"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [showApiKey, setShowApiKey] = useState({ openai: false, gemini: false, claude: false })
  const [copied, setCopied] = useState({ openai: false, gemini: false, claude: false })
  const [settings, setSettings] = useState({
    // Profile
    name: "John Doe",
    email: "john@example.com",
    company: "My Company LLC",
    bio: "Entrepreneur passionate about technology and finance.",

    // Preferences
    language: "en",
    timezone: "America/New_York",
    theme: "system",
    currency: "USD",
    dateFormat: "MM/DD/YYYY",

    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    weeklyReports: true,
    securityAlerts: true,
    marketingEmails: false,

    // AI Settings
    aiModel: "gpt-4",
    temperature: 0.7,
    maxTokens: 2000,
    autoAnalysis: true,
    smartSuggestions: true,

    // Privacy
    dataRetention: "1year",
    shareAnalytics: false,
    allowTelemetry: true,

    // API Keys
    openaiKey: "sk-proj-1234567890abcdef",
    geminiKey: "",
    claudeKey: "",
  })

  const handleSettingChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    // Simulate save
    console.log("Settings saved:", settings)
  }

  const handleCopyApiKey = (keyName) => {
    navigator.clipboard.writeText(settings[keyName])
    setCopied((prev) => ({ ...prev, [keyName]: true }))
    setTimeout(() => setCopied((prev) => ({ ...prev, [keyName]: false })), 2000)
  }

  const handleExportData = () => {
    // Simulate export
    console.log("Exporting data...")
  }

  const handleDeleteAccount = () => {
    // Simulate account deletion
    console.log("Deleting account...")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardNavigation></DashboardNavigation>

      <div className="container mx-auto px-4 py-8 pb-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Customize your experience with DataMindAI</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Preferences</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">AI</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center space-x-2">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">System</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Personal Information</span>
                </CardTitle>
                <CardDescription>Update your profile and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Avatar" />
                    <AvatarFallback className="text-lg">JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Change photo
                    </Button>
                    <p className="text-sm text-gray-500">JPG, PNG or GIF. Max 2MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      value={settings.name}
                      onChange={(e) => handleSettingChange("name", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleSettingChange("email", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={settings.company}
                      onChange={(e) => handleSettingChange("company", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+1 555 123 4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us a bit about yourself..."
                    value={settings.bio}
                    onChange={(e) => handleSettingChange("bio", e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>Information about your subscription</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">Free Plan</Badge>
                      <span className="text-sm text-gray-500">Self-hosted</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Full access to all basic features</p>
                  </div>
                  <Link to="/pricing">
                    <Button variant="outline">Upgrade Plan</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Language & Region</span>
                </CardTitle>
                <CardDescription>Set your language, timezone, and data format</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select value={settings.language} onValueChange={(value) => handleSettingChange("language", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="pt">Portuguese</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select value={settings.timezone} onValueChange={(value) => handleSettingChange("timezone", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/New_York">New York (GMT-5)</SelectItem>
                        <SelectItem value="America/Bogota">Bogotá (GMT-5)</SelectItem>
                        <SelectItem value="America/Mexico_City">Mexico City (GMT-6)</SelectItem>
                        <SelectItem value="Europe/Madrid">Madrid (GMT+1)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select value={settings.currency} onValueChange={(value) => handleSettingChange("currency", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">US Dollar (USD)</SelectItem>
                        <SelectItem value="COP">Colombian Peso (COP)</SelectItem>
                        <SelectItem value="EUR">Euro (EUR)</SelectItem>
                        <SelectItem value="MXN">Mexican Peso (MXN)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Date format</Label>
                    <Select
                      value={settings.dateFormat}
                      onValueChange={(value) => handleSettingChange("dateFormat", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                        <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="h-5 w-5" />
                  <span>Appearance</span>
                </CardTitle>
                <CardDescription>Customize the interface appearance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Theme</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => handleSettingChange("theme", "light")}
                      className={`p-4 border rounded-lg flex flex-col items-center space-y-2 transition-colors ${settings.theme === "light" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"
                        }`}
                    >
                      <Sun className="h-6 w-6" />
                      <span className="text-sm font-medium">Light</span>
                    </button>
                    <button
                      onClick={() => handleSettingChange("theme", "dark")}
                      className={`p-4 border rounded-lg flex flex-col items-center space-y-2 transition-colors ${settings.theme === "dark" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"
                        }`}
                    >
                      <Moon className="h-6 w-6" />
                      <span className="text-sm font-medium">Dark</span>
                    </button>
                    <button
                      onClick={() => handleSettingChange("theme", "system")}
                      className={`p-4 border rounded-lg flex flex-col items-center space-y-2 transition-colors ${settings.theme === "system" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"
                        }`}
                    >
                      <Monitor className="h-6 w-6" />
                      <span className="text-sm font-medium">System</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </CardTitle>
                <CardDescription>Set how and when you want to receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email notifications</Label>
                      <p className="text-sm text-gray-500">Receive important updates by email</p>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push notifications</Label>
                      <p className="text-sm text-gray-500">Real-time notifications in your browser</p>
                    </div>
                    <Switch
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) => handleSettingChange("pushNotifications", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly reports</Label>
                      <p className="text-sm text-gray-500">Weekly summary of your financial activity</p>
                    </div>
                    <Switch
                      checked={settings.weeklyReports}
                      onCheckedChange={(checked) => handleSettingChange("weeklyReports", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Security alerts</Label>
                      <p className="text-sm text-gray-500">Notifications about suspicious activity</p>
                    </div>
                    <Switch
                      checked={settings.securityAlerts}
                      onCheckedChange={(checked) => handleSettingChange("securityAlerts", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Marketing emails</Label>
                      <p className="text-sm text-gray-500">News, updates, and special offers</p>
                    </div>
                    <Switch
                      checked={settings.marketingEmails}
                      onCheckedChange={(checked) => handleSettingChange("marketingEmails", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notification frequency</CardTitle>
                <CardDescription>Control the frequency of automatic notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Activity summary</Label>
                    <Select defaultValue="weekly">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Tab */}
          <TabsContent value="ai" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5" />
                  <span>AI Settings</span>
                </CardTitle>
                <CardDescription>Customize the behavior of the AI assistant</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="aiModel">Default AI Model</Label>
                    <Select value={settings.aiModel} onValueChange={(value) => handleSettingChange("aiModel", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpt-4">GPT-4o (Recommended)</SelectItem>
                        <SelectItem value="gemini-pro">Gemini 2.5 Pro</SelectItem>
                        <SelectItem value="claude-3">Claude 3.7 Sonnet</SelectItem>
                        <SelectItem value="llama2">Llama 2 (Local)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="temperature">Creativity (Temperature: {settings.temperature})</Label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={settings.temperature}
                      onChange={(e) => handleSettingChange("temperature", Number.parseFloat(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Conservative</span>
                      <span>Creative</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Automatic analysis</Label>
                      <p className="text-sm text-gray-500">Automatically analyze uploaded files</p>
                    </div>
                    <Switch
                      checked={settings.autoAnalysis}
                      onCheckedChange={(checked) => handleSettingChange("autoAnalysis", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Smart suggestions</Label>
                      <p className="text-sm text-gray-500">Receive proactive optimization suggestions</p>
                    </div>
                    <Switch
                      checked={settings.smartSuggestions}
                      onCheckedChange={(checked) => handleSettingChange("smartSuggestions", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Key className="h-5 w-5" />
                  <span>API Keys</span>
                </CardTitle>
                <CardDescription>Set your API keys for AI services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="openaiKey">OpenAI API Key</Label>
                    <div className="flex space-x-2">
                      <div className="relative flex-1">
                        <Input
                          id="openaiKey"
                          type={showApiKey.openai ? "text" : "password"}
                          value={settings.openaiKey}
                          onChange={(e) => handleSettingChange("openaiKey", e.target.value)}
                          placeholder="sk-proj-..."
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowApiKey((prev) => ({ ...prev, openai: !prev.openai }))}
                        >
                          {showApiKey.openai ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleCopyApiKey("openaiKey")}>
                        {copied.openaiKey ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="geminiKey">Google Gemini API Key</Label>
                    <div className="flex space-x-2">
                      <div className="relative flex-1">
                        <Input
                          id="geminiKey"
                          type={showApiKey.gemini ? "text" : "password"}
                          value={settings.geminiKey}
                          onChange={(e) => handleSettingChange("geminiKey", e.target.value)}
                          placeholder="AIza..."
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowApiKey((prev) => ({ ...prev, gemini: !prev.gemini }))}
                        >
                          {showApiKey.gemini ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleCopyApiKey("geminiKey")}>
                        {copied.geminiKey ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="claudeKey">Anthropic Claude API Key</Label>
                    <div className="flex space-x-2">
                      <div className="relative flex-1">
                        <Input
                          id="claudeKey"
                          type={showApiKey.claude ? "text" : "password"}
                          value={settings.claudeKey}
                          onChange={(e) => handleSettingChange("claudeKey", e.target.value)}
                          placeholder="sk-ant-..."
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowApiKey((prev) => ({ ...prev, claude: !prev.claude }))}
                        >
                          {showApiKey.claude ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleCopyApiKey("claudeKey")}>
                        {copied.claudeKey ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">API Key Information</h4>
                      <p className="text-sm text-blue-800 mt-1">
                        Your API keys are stored securely and encrypted. They are only used to communicate with AI services and are never shared with third parties.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Account Security</span>
                </CardTitle>
                <CardDescription>Protect your account with advanced security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-factor authentication (2FA)</Label>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Set up
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Active sessions</Label>
                      <p className="text-sm text-gray-500">Manage devices connected to your account</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View sessions
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Change password</Label>
                      <p className="text-sm text-gray-500">Update your password regularly</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Privacy</CardTitle>
                <CardDescription>Control how your personal data is handled</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Data retention</Label>
                    <Select
                      value={settings.dataRetention}
                      onValueChange={(value) => handleSettingChange("dataRetention", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3months">3 months</SelectItem>
                        <SelectItem value="6months">6 months</SelectItem>
                        <SelectItem value="1year">1 year</SelectItem>
                        <SelectItem value="2years">2 years</SelectItem>
                        <SelectItem value="forever">Indefinite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Share anonymous analytics</Label>
                      <p className="text-sm text-gray-500">Help improve DataMindAI by sharing anonymous data</p>
                    </div>
                    <Switch
                      checked={settings.shareAnalytics}
                      onCheckedChange={(checked) => handleSettingChange("shareAnalytics", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>System telemetry</Label>
                      <p className="text-sm text-gray-500">Send performance data to improve the app</p>
                    </div>
                    <Switch
                      checked={settings.allowTelemetry}
                      onCheckedChange={(checked) => handleSettingChange("allowTelemetry", checked)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export & Delete Data</CardTitle>
                <CardDescription>Manage your personal data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Export my data</Label>
                    <p className="text-sm text-gray-500">Download a copy of all your data</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleExportData}>
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-red-600">Delete account</Label>
                    <p className="text-sm text-gray-500">Permanently delete your account and all data</p>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. Your account and all associated data will be permanently deleted.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700">
                          Delete account
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Tab */}
          <TabsContent value="system" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5" />
                  <span>System Status</span>
                </CardTitle>
                <CardDescription>Information about system performance and resources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Cpu className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">CPU</span>
                    </div>
                    <div className="text-2xl font-bold">23%</div>
                    <div className="text-sm text-gray-500">Current usage</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <MemoryStick className="h-5 w-5 text-green-600" />
                      <span className="font-medium">RAM</span>
                    </div>
                    <div className="text-2xl font-bold">4.2GB</div>
                    <div className="text-sm text-gray-500">of 8GB used</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <HardDrive className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Storage</span>
                    </div>
                    <div className="text-2xl font-bold">156GB</div>
                    <div className="text-sm text-gray-500">of 500GB used</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-5 w-5" />
                  <span>Database</span>
                </CardTitle>
                <CardDescription>Database management and maintenance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Optimize database</Label>
                    <p className="text-sm text-gray-500">Improve performance by removing unnecessary data</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Zap className="h-4 w-4 mr-2" />
                    Optimize
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Create backup</Label>
                    <p className="text-sm text-gray-500">Create a backup of all data</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Backup
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Restore backup</Label>
                    <p className="text-sm text-gray-500">Restore the database from a backup</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Restore
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Information</CardTitle>
                <CardDescription>Technical details of the installation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Version:</span> DataMindAI v1.2.3
                  </div>
                  <div>
                    <span className="font-medium">Docker:</span> 24.0.7
                  </div>
                  <div>
                    <span className="font-medium">Node.js:</span> 18.17.0
                  </div>
                  <div>
                    <span className="font-medium">PostgreSQL:</span> 15.4
                  </div>
                  <div>
                    <span className="font-medium">Last update:</span> Jan 15, 2024
                  </div>
                  <div>
                    <span className="font-medium">Uptime:</span> 7 days, 14 hours
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Button */}
        <div className="flex justify-end px-32">
          <Button onClick={handleSave} className="m-8">
            <Save className="h-4 w-4 mr-2" />
            Save changes
          </Button>
        </div>
        <div className="h-32" />
      </div>
    </div>
  )
}
