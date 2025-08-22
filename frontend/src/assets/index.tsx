import Header from './components/header.tsx'
import Button from './components/ui/button.tsx'
import ButtonBlack from './components/ui/button-black.tsx'
import { ArrowRight } from 'lucide-react'

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
            <h1 className='text-6xl font-bold mb-6'>
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
                <img src="../../public/github.svg" alt="GitHub Logo" className='w-5 h-5' />
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
      </main>
    </>
  )
}

export default Index
