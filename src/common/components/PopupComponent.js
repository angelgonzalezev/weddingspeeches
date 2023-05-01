import React from 'react'

const PopupComponent = ({text, onClickButton, buttonText}) => {
  return (
    <div className='w-full h-full bg-black fixed top-0 left-0 px-3 bg-opacity-50 flex items-center justify-center z-50'>
        <div className='bg-white rounded-2xl p-3 lg:p-10 h-4/5 lg:h-fit max-w-[930px]'>
            <h1 className='text-2xl font-bold'>Aquí tienes tu discurso 😊</h1>
            <h2 className='text-xl font-semibold pt-3 mb-10'>¡Hasta la próxima!</h2>
            <div className='h-3/5 overflow-auto'>
                <span>
                    {text}
                </span>
            </div>
            <div className='w-full flex items-center justify-center mt-8'>
                <button
                    onClick={onClickButton}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-400 text-lg text-white focus:outline-none focus:ring focus:ring-violet-300 flex items-center justify-center">
                        {buttonText}
                </button>
            </div>
        </div>
    </div>
  )
}

export default PopupComponent