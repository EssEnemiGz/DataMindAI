"use client"

import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Star, CheckCircle, Zap,  Github, Bitcoin, CreditCard } from "lucide-react"
import { Link } from "react-router-dom"

export default function PricingPage() {
  return (
    <div className="min-h-screen py-12 w-full">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Simple and Transparent
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Pricing Plans
            <span className="text-blue-600 block">for Every Business</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your needs. Start free with self-hosting or upgrade to our managed SaaS for convenience.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 w-full">
          {/* Free Plan */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center mb-4">
                <Github className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Free</CardTitle>
              <CardDescription>Perfect for individuals and small businesses</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-green-600">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Unlimited file uploads</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">AI Chat with <b>your own API Key</b></span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Financial reports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Community support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Self-hosted deployment</span>
                </li>
              </ul>
              <Link to="/register">
                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                  Start Free
                </Button>
              </Link>
              <p className="text-xs text-center text-gray-500 mt-3">No credit card required</p>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-2 border-blue-200 bg-blue-50 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-600 text-white px-3 py-1">Most Popular</Badge>
            </div>
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Pro</CardTitle>
              <CardDescription>For growing businesses and teams</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-blue-600">$50</span>
                <span className="text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Everything in Free</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">GPT-o4-mini, GPT-4.1, GPT-4o, Gemini 2.5 Pro Thinking and Claude 3.7 Sonnet</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Advanced reports and analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">API access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Team collaboration</span>
                </li>
              </ul>
              <Link to="/register">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Start Free Trial
                </Button>
              </Link>
              <p className="text-xs text-center text-gray-500 mt-3">14 days free • Cancel anytime</p>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-purple-600">Custom</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">GPT-o3, Claude 4 Opus and more powerful models</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">On-premise deployment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">24/7 dedicated support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">SLA guarantees</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Custom integrations</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="mb-16 w-full">
          <h2 className="text-2xl font-bold text-center mb-8">Secure Payment Methods</h2>
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              <Card className="text-center w-48">
                <CardHeader>
                  <div className="h-8 w-8 bg-blue-500 rounded mx-auto mb-2 flex items-center justify-center">
                    <CreditCard className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-lg">Credit Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Secure payment processing</p>
                </CardContent>
              </Card>

              <Card className="text-center w-48">
                <CardHeader>
                  <div className="h-8 w-8 bg-blue-600 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">PP</span>
                  </div>
                  <CardTitle className="text-lg">PayPal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Fast and secure payment</p>
                </CardContent>
              </Card>

              <Card className="text-center w-48">
                <CardHeader>
                  <div className="h-8 w-8 bg-blue-600 rounded mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">S</span>
                  </div>
                  <CardTitle className="text-lg">Stripe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Enterprise-grade payment processing</p>
                </CardContent>
              </Card>

              <Card className="text-center w-48">
                <CardHeader>
                  <div className="h-8 w-8 bg-orange-500 rounded mx-auto mb-2 flex items-center justify-center">
                    <Bitcoin className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-lg">Bitcoin</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Cryptocurrency payment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 w-full">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I change plans at any time?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes are applied immediately and
                  costs are prorated.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What does 24/7 support include?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Email support with guaranteed response in less than 4 hours, access to our premium knowledge base
                  and live chat during business hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I use my own infrastructure with the Pro plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The Pro plan is SaaS managed by us. If you need to use your own infrastructure, the Enterprise
                  plan includes on-premise installation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="w-full">
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies that already trust DataMindAI for their financial analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Free
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Talk to Sales
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              No credit card required for free plan • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
