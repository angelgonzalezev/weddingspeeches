import React from 'react'

const PopupComponent = ({text, onClickButton, buttonText}) => {
  return (
    <div className='w-full h-full bg-black fixed top-0 left-0 bg-opacity-50 flex items-center justify-center'>
        <div className='bg-white opacity-100 rounded-2xl p-10 w-[930px]'>
            <h1 className='text-2xl font-bold'>Aquí tienes tu discurso 😊</h1>
            <h2 className='text-xl font-semibold pt-3 mb-10'>¡Hasta la próxima!</h2>
            <span>
                {text}
            </span>
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