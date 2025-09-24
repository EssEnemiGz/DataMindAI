import Header from './components/header.tsx'
import Button from './components/ui/button.tsx'
import ButtonBlack from './components/ui/button-black.tsx'
import { ArrowRight, Ban, Check, CircleCheckBig } from 'lucide-react'

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
            <div className='flex justify-center gap-4 mb-12'>
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
          <div className="flex text-center max-w-4xl mx-auto flex-col items-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Tired of excel and complex tools?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              DataMindAI deletes complexity in financial analyst
            </p>
          </div>
          <div className="grid grid-cols-2 max-w-4xl mx-auto items-center gap-4">
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
        </section>
      </main>
    </>
  )
}

export default Index
