import React from 'react'
import HeaderComponent from '../../common/components/HeaderComponent'
import CreateSpeechComponent from './components/CreateSpeechComponent'
import HeroComponent from '../../common/components/HeroComponent'
import FooterComponent from '../../common/components/FooterComponent'

const HomeScreen = () => {
  return (
    <div className='max-w-[1024px] min-h-screen mx-auto'>
      <div className='w-full bg-orange-300 p-1'>
        <p className='text-xs text-center'>Esta página es un prototipo y puede presentar problemas de funcionamiento.</p>
      </div>
      <div className='px-3'>
        <HeaderComponent />
        <HeroComponent />
        <CreateSpeechComponent />
        <FooterComponent />
      </div>
    </div>
  )
}

export default HomeScreen