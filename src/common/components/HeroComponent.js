import React from 'react'

const HeroComponent = () => {
  return (
    <div className='w-full py-10 flex flex-col lg:flex-row items-center justify-center'>
        <div className='w-full lg:w-1/2 flex flex-col justify-center'>
            <h1 className='text-6xl lg:text-6xl text-center lg:text-left font-bold lg:pr-5 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-400'>
              Crea un discurso de boda inolvidable
            </h1>
            <h3 className='text-lg text-center lg:text-left text-black opacity-50 italic'>
              Haz de tu discurso un momento memorable con nuestra herramienta de creación de discursos de bodas
            </h3>
            <div className='mt-10 flex items-center justify-center lg:justify-start'>
              <p className='font-medium text-lg mr-5'>Powered by</p>
              <img 
                className='object-cover w-32 -rotate-3'
                src={require('../../assets/images/chatgpt-icon.png')}
                alt='wedding'/>
              
            </div>
        </div>
        <div className='w-full max-w-[500px] lg:w-1/2 mt-10'>
          <img 
            className='object-cover rounded-ss-[90px] rounded-ee-[90px]'
            src={require('../../assets/images/hero-image.jpg')}
            alt='wedding'/>
        </div>
    </div>
  )
}

export default HeroComponent