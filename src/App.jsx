import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Service from './Pages/Service'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <div className='flex h-screen overflow-hidden'>
        {/* Sidebar */}
        <div className='xl:w-[20%] h-full px-6 pt-5'>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className='xl:w-[calc(100vw-20%)] w-[calc(100vw-10%)] overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/services' element={<Service />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
