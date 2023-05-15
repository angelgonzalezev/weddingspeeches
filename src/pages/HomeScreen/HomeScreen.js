import React from 'react'
import CreateSpeechComponent from './components/CreateSpeechComponent'
import HeroComponent from '../../common/components/HeroComponent'
import FooterComponent from '../../common/components/FooterComponent'

const HomeScreen = () => {
  return (
    <div className='px-3 lg:p-0'>
      <HeroComponent />
      <CreateSpeechComponent />
      <FooterComponent />
    </div>
  )
}

export default HomeScreen