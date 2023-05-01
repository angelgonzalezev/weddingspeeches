import React from 'react'
import HeaderComponent from '../../common/components/HeaderComponent'
import CreateSpeechComponent from './components/CreateSpeechComponent'
import HeroComponent from '../../common/components/HeroComponent'
import FooterComponent from '../../common/components/FooterComponent'

const HomeScreen = () => {
  return (
    <div className='max-w-[1024px] min-h-screen mx-auto px-3'>
      <HeaderComponent />
      <HeroComponent />
      <CreateSpeechComponent />
      <FooterComponent />
    </div>
  )
}

export default HomeScreen