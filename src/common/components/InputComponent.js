import React from 'react'


const InputComponent = ({inputName, titleInput, textInput, value, onWrite}) => {
  return (
    <div className='mb-3'>
        <h2 className='mb-3 text-lg'>{titleInput}</h2>
        <div className='p-3 rounded-2xl bg-white'>
          <input
            name={inputName}
            className='placeholder:italic w-full focus:outline-none bg-white pl-2 text-md md:text-base'
            placeholder={textInput}
            type={'text'}
            value={value}
            onChange={value => onWrite(value)}
          />
        </div>
    </div>
  )
}

export default InputComponent