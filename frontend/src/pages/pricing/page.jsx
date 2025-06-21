"use client"

import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Switch } from "../../components/ui/switch"
import { CheckCircle, Server, Cloud, CreditCard, Bitcoin, Zap, Shield, Headphones, Star } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Precios Transparentes
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Elige el plan perfecto
            <span className="text-blue-600 block">para tu negocio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Desde completamente gratis con auto-hospedaje hasta nuestro plan Pro con todas las características premium y
            soporte dedicado.
          </p>

          {/* Toggle anual/mensual */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isAnnual ? "text-gray-900 font-medium" : "text-gray-500"}`}>Mensual</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-sm ${isAnnual ? "text-gray-900 font-medium" : "text-gray-500"}`}>Anual</span>
            {isAnnual && <Badge className="bg-green-100 text-green-800">Ahorra 20%</Badge>}
          </div>
        </div>

        {/* Planes de precios */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Plan Gratuito */}
          <Card className="border-2 border-green-200 bg-green-50 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-green-600 text-white">MÁS POPULAR</Badge>
            </div>
            <CardHeader className="text-center pb-8 pt-6">
              <div className="flex items-center justify-center mb-4">
                <Server className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Plan Gratuito</CardTitle>
              <CardDescription>Auto-hospedado • Para siempre gratis</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-green-600">$0</span>
                <span className="text-gray-500">/mes</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Chat ilimitado con IA</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Subida de archivos Excel/CSV</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Reportes básicos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">API OpenAI/Gemini (tu clave)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Ollama local incluido</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Código fuente completo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Instalación Docker</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm">Soporte comunidad</span>
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                Descargar Gratis
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3">Sin tarjeta de crédito • Sin límites de tiempo</p>
            </CardContent>
          </Card>

          {/* Plan Pro */}
          <Card className="border-2 border-blue-500 bg-blue-50 relative transform scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-600 text-white">RECOMENDADO</Badge>
            </div>
            <CardHeader className="text-center pb-8 pt-6">
              <div className="flex items-center justify-center mb-4">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Plan Pro</CardTitle>
              <CardDescription>SaaS gestionado • Sin configuración</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-blue-600">${isAnnual ? "23" : "29"}</span>
                <span className="text-gray-500">/mes</span>
                {isAnnual && <div className="text-sm text-green-600 font-medium">Ahorra $72/año</div>}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Todo del plan gratuito +</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">APIs premium incluidas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Reportes avanzados con gráficos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Integraciones bancarias</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Backups automáticos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Actualizaciones automáticas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Headphones className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">Soporte prioritario 24/7</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm">SLA 99.9% uptime</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                Comenzar Prueba Gratis
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3">14 días gratis • Cancela cuando quieras</p>
            </CardContent>
          </Card>

          {/* Plan Enterprise */}
          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>Para grandes organizaciones</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-purple-600">Custom</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">Todo del plan Pro +</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">Usuarios ilimitados</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">Instalación on-premise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">Personalización completa</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">Integración SSO/LDAP</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">Auditoría y compliance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">Soporte dedicado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">SLA personalizado</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                size="lg"
              >
                Contactar Ventas
              </Button>
              <p className="text-xs text-center text-gray-500 mt-3">Cotización personalizada</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabla comparativa */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Comparativa Detallada</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Característica</th>
                  <th className="px-6 py-4 text-center font-semibold text-green-600">Gratuito</th>
                  <th className="px-6 py-4 text-center font-semibold text-blue-600">Pro</th>
                  <th className="px-6 py-4 text-center font-semibold text-purple-600">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Chat con IA</td>
                  <td className="px-6 py-4 text-center">✅ Ilimitado</td>
                  <td className="px-6 py-4 text-center">✅ Ilimitado</td>
                  <td className="px-6 py-4 text-center">✅ Ilimitado</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Subida de archivos</td>
                  <td className="px-6 py-4 text-center">✅ Sin límite</td>
                  <td className="px-6 py-4 text-center">✅ Sin límite</td>
                  <td className="px-6 py-4 text-center">✅ Sin límite</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">APIs de IA incluidas</td>
                  <td className="px-6 py-4 text-center">❌ Tu clave</td>
                  <td className="px-6 py-4 text-center">✅ Incluidas</td>
                  <td className="px-6 py-4 text-center">✅ Premium</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Reportes avanzados</td>
                  <td className="px-6 py-4 text-center">❌ Básicos</td>
                  <td className="px-6 py-4 text-center">✅ Completos</td>
                  <td className="px-6 py-4 text-center">✅ Personalizados</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Integraciones bancarias</td>
                  <td className="px-6 py-4 text-center">❌</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅ Avanzadas</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Soporte</td>
                  <td className="px-6 py-4 text-center">Comunidad</td>
                  <td className="px-6 py-4 text-center">24/7 Email</td>
                  <td className="px-6 py-4 text-center">Dedicado</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Usuarios</td>
                  <td className="px-6 py-4 text-center">Ilimitados</td>
                  <td className="px-6 py-4 text-center">Hasta 10</td>
                  <td className="px-6 py-4 text-center">Ilimitados</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">SLA</td>
                  <td className="px-6 py-4 text-center">❌</td>
                  <td className="px-6 py-4 text-center">99.9%</td>
                  <td className="px-6 py-4 text-center">Personalizado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Métodos de Pago</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Tarjetas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Visa, Mastercard, American Express</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-8 w-8 bg-purple-600 rounded mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">S</span>
                </div>
                <CardTitle className="text-lg">Stripe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Procesamiento seguro global</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Bitcoin className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Crypto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Bitcoin, Ethereum, USDC</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-8 w-8 bg-blue-500 rounded mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">PP</span>
                </div>
                <CardTitle className="text-lg">PayPal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Pago rápido y seguro</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ de precios */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas sobre Precios</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Puedo cambiar de plan en cualquier momento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplican inmediatamente y
                  se prorratea el costo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Hay descuentos para organizaciones sin fines de lucro?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sí, ofrecemos 50% de descuento en el plan Pro para organizaciones sin fines de lucro verificadas.
                  Contacta a nuestro equipo de ventas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Qué incluye el soporte 24/7?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Soporte por email con respuesta garantizada en menos de 4 horas, acceso a nuestra base de
                  conocimientos premium y chat en vivo durante horario comercial.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">¿Puedo usar mi propia infraestructura con el plan Pro?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  El plan Pro es SaaS gestionado por nosotros. Si necesitas usar tu propia infraestructura, el plan
                  Enterprise incluye instalación on-premise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a cientos de empresas que ya confían en DataMindAI para su análisis financiero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="px-8">
                Comenzar Gratis
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Hablar con Ventas
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Sin tarjeta de crédito para el plan gratuito • Cancela cuando quieras
          </p>
        </div>
      </div>
    </div>
  )
}
