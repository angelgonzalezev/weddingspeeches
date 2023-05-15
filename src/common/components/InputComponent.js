import React from 'react'


const InputComponent = ({inputName, titleInput, textInput, value, onWrite, border = false, type = 'text'}) => {
  return (
    <div className='mb-3'>
        <h2 className='text-lg'>{titleInput}</h2>
        <div className={border ? 'p-3 rounded-2xl bg-white border border-gray-300' : 'p-3 rounded-2xl bg-white'}>
          <input
            name={inputName}
            className='placeholder:italic w-full focus:outline-none bg-white pl-2 text-md md:text-base'
            placeholder={textInput}
            type={type}
            value={value}
            onChange={value => onWrite(value)}
          />
        </div>
    </div>
  )
}

export default InputComponent