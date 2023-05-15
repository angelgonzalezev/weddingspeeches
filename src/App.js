import React from 'react'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import HeaderComponent from './common/components/HeaderComponent'
import { Route, Routes } from 'react-router-dom'
import {AuthProvider} from './context/authContext'

const App = () => {
  return (
    <AuthProvider>
      <div className='max-w-[1024px] min-h-screen mx-auto'>
        <div className='w-full bg-orange-300 p-1'>
          <p className='text-xs text-center'>
            Esta página es un prototipo y puede presentar problemas de funcionamiento.
          </p>
        </div>
        <HeaderComponent />
          <Routes>
            <Route path='/' element={<HomeScreen/>} />
          </Routes>
      </div>
    </AuthProvider>
  )
}

export default App