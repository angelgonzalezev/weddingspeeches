import React from 'react'
import HeaderComponent from '../../common/components/HeaderComponent'
import CreateSpeechComponent from './components/CreateSpeechComponent'
import HeroComponent from '../../common/components/HeroComponent'

const HomeScreen = () => {
  return (
    <div className='max-w-[1024px] min-h-screen mx-auto'>
      <HeaderComponent />
      <HeroComponent />
      <CreateSpeechComponent />
    </div>
  )
}

export default HomeScreen