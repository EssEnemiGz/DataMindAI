import Header from './components/header.tsx'
import Button from './components/ui/button.tsx'
import ButtonBlack from './components/ui/button-black.tsx'
import FeatureCard from './components/ui/feature-card.tsx'
import {
  ArrowRight,
  Ban,
  Check,
  CircleCheckBig,
  Brain, Upload,
  ChartNoAxesCombined,
  Shield,
  Zap
} from 'lucide-react'

function Index() {
  return (
    <>
      <Header></Header>
      <main>
        <section className='py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 via-white'>
          <div className='flex text-center max-w-4xl mx-auto flex-col items-center'>
            <p className='py-1 px-3 border border-gray-300 font-semibold text-xs rounded-2xl mb-6 max-w-fit'>
              Open source | Free | Self-Hosted
            </p>
            <h1 className='text-6xl font-bold mb-6 text-gray-900'>
              <span className='text-blue-600'>DataMindAI</span><br />
              Your AI Accounter asistant
            </h1>
            <p className='max-w-2xl text-xl text-gray-600 mb-6'>
              Upload excel files, do questions in natural language and get smart financial analyst 100% free, open source and private
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
              <ButtonBlack className='text-lg flex gap-4 items-center px-8'>
                Start for free
                <ArrowRight className='size-5'></ArrowRight>
              </ButtonBlack>
              <Button className='text-lg flex gap-3 items-center px-8'>
                <img src="/github.svg" alt="GitHub Logo" className='w-5 h-5' />
                Check in GitHub
              </Button>
            </div>
            <div className='flex gap-12'>
              <div className='flex flex-col gap-1'>
                <p className='text-2xl text-blue-600 font-bold'>0</p>
                <p className='text-md text-gray-700'>GitHub Stars</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-2xl text-blue-600 font-bold'>0</p>
                <p className='text-md text-gray-700'>Active users</p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-2xl text-blue-600 font-bold'>0</p>
                <p className='text-md text-gray-700'>Contributors</p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20 px-4'>
          <div className='container mx-auto max-w-4xl'>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Tired of excel and complex tools?
              </h2>
              <p className="text-xl text-gray-600 mb-6 font-medium">
                DataMindAI deletes complexity in financial analyst
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2 mb-4">
                  <Ban className='stroke-3 text-red-700'></Ban>
                  <h3 className="text-2xl font-semibold text-red-600">Actual problems</h3>
                </div>
                <ul className='text-lg font-light text-gray-600 marker:text-red-600 list-disc list-inside'>
                  <li className='mb-2'>Hours wasted on excel complex formulas</li>
                  <li className='mb-2'>Espensive and hard to use accounting software</li>
                  <li className='mb-2'>Sensible data on third party clouds</li>
                  <li className='mb-2'>Manual reports taking days</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2 mb-4">
                  <Check className='stroke-3 text-green-700'></Check>
                  <h3 className="text-2xl font-semibold text-green-600">With DataMindAI</h3>
                </div>
                <ul className='text-lg font-light text-gray-600 marker:text-green-600 list-inside'>
                  <li className='flex flex-row gap-2 mb-2'>
                    <CircleCheckBig className='text-green-600'></CircleCheckBig>
                    Upload excel and ask in english
                  </li>
                  <li className='flex flex-row gap-2 mb-2'>
                    <CircleCheckBig className='text-green-600'></CircleCheckBig>
                    Automatic analyst with advanced AI
                  </li>
                  <li className='flex flex-row gap-2 mb-2'>
                    <CircleCheckBig className='text-green-600'></CircleCheckBig>
                    Data never out your server
                  </li>
                  <li className='flex flex-row gap-2 mb-2'>
                    <CircleCheckBig className='text-green-600'></CircleCheckBig>
                    Professional reports in seconds
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>Principal features</h2>
              <p className='text-xl text-gray-600 font-medium'>Every you need for your financial analyst</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Brain className='h-12 w-12 text-blue-600 mb-4'></Brain>}
                title={"Chat with accounter AI"}
                description={"Ask in natural language about your financial documents"}
              >
              </FeatureCard>
              <FeatureCard
                icon={<Upload className='h-12 w-12 text-green-600 mb-4'></Upload>}
                title={"Excel smart read"}
                description={"Upload .xlsx, .xls, .csv files and the AI automatically will understand the data structure"}
              >
              </FeatureCard>
              <FeatureCard
                icon={<ChartNoAxesCombined className='h-12 w-12 text-purple-600 mb-4'></ChartNoAxesCombined>}
                title={"Automatic reports"}
                description={"Create proffesional reports for cash flow, tendencies and more"}
              >
              </FeatureCard>
              <FeatureCard
                icon={<Shield className="h-12 w-12 text-red-600 mb-4"></Shield>}
                title={"100% Private"}
                description={"Self-hosted on your server. Your data never get out your control"}
              >
              </FeatureCard>
              <FeatureCard
                icon={<Zap className="h-12 w-12 text-orange-600 mb-4"></Zap>}
                title={"Flexible AI"}
                description={"Integrated with OpenAI, Gemini and Ollama for agnostic AI providers and models"}
              >
              </FeatureCard>
              <FeatureCard
                icon={<img src="/github.svg" alt="GitHub Logo" className='w-12 h-12 stroke-gray-600 mb-4' />}
                title={"Open Source"}
                description={"Open source, transparent and customizable. Contribute and customize for your requirements"}
              >
              </FeatureCard>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Index
