import React from 'react'

const HeaderComponent = () => {
  return (
    <div className='w-full py-3'>
      <div className='flex items-center justify-center lg:justify-start'>
        <img
          src={require('../../assets/common/logo_500x500.png')}
          alt="Logo"
          width={200} />
      </div>
    </div>
  )
}

export default HeaderComponent