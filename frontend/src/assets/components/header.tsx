import { Link, BrowserRouter } from 'react-router-dom'
import Button from './ui/button.tsx'

function Header() {
  return (
    <>
      <header className='flex items-center p-2 px-8 w-full justify-between'>
        <div className='flex'>
          <BrowserRouter>
            <Link to="/" className="flex items-center gap-1">
              <img src={"/public/DataMindAI-logo.svg"} alt="DataMindAi Logo" className='h-8 w-8 sm:w-12 sm:h-12' />
              <span className="text-lg sm:text-2xl font-bold text-gray-900">DataMindAI</span>
            </Link>
          </BrowserRouter>
        </div>
        <div className='space-x-5'>
          <BrowserRouter>
            <Link to="/" className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'>Home</Link>
            <Link to="/features" className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'>Features</Link>
            <Link to="/docs" className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'>Documentation</Link>
            <Link to="/about" className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'>About</Link>
            <Link to="/pricing" className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'>Pricing</Link>
          </BrowserRouter>
        </div>
        <div className='flex space-x-1'>
          <BrowserRouter>
            <Link to="/login">
              <Button>Hola</Button>
            </Link>
            <Link to="/register"></Link>
          </BrowserRouter>
        </div>
      </header>
    </>
  )
}

export default Header
