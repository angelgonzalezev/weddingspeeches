import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";



const ButtonComponent = ({text = 'Button Text', spinnerSize = 20, loading, onHandleButton}) => {
  return (
    <button
      onClick={onHandleButton}
      className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-400 text-lg text-white focus:outline-none focus:ring focus:ring-violet-300 flex items-center justify-center">
        {loading && (
            <AiOutlineLoading3Quarters className='animate-spin mr-3' size={spinnerSize}/>
        )}
        {text}
    </button>
  )
}

export default ButtonComponent