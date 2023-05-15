import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ButtonComponent from './ButtonComponent';
import AuthPopUp from './AuthPopUp';
import { useAuth } from '../../context/authContext';

const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const {user, loading} = useAuth();

  const onHandler = () => {
    setOpenPopUp(!openPopUp);
    setShowMenu(!showMenu);
  }
  return (
    <div className='w-full py-3'>
      <div className='flex flex-row w-full items-center justify-between px-3'>
        <div className='w-3/4 max-w-[200px]'>
          <img
            src={require('../../assets/common/logo_500x500.png')}
            alt="Logo"/>
        </div>
        <div className='sm:hidden'>
          {showMenu ? (
            <AiOutlineClose size={25} onClick={() => setShowMenu(false)}/>
            ) : (
            <AiOutlineMenu size={25} onClick={() => setShowMenu(true)}/>
          )}
        </div>
        <div className={showMenu ? 'sm:hidden bg-pink-100 p-5 pb-20 w-1/2 absolute top-32 right-0 duration-500' : 'bg-pink-100 p-5 pb-20 w-1/2 absolute top-32 hidden duration-500'}>
          <div className='py-3 hover:border-b hover:border-black' onClick={onHandler}>
            <p className='text-md font-semibold'>Iniciar sesión</p>
          </div>
        </div>
        {user && !loading ? (
          <p className='text-md font-medium hidden sm:block'>Hola 👋 {user.email}</p>
        ) : (
          <div className='hidden sm:block'>
            <ButtonComponent text={'Iniciar sesión'} onHandleButton={() => setOpenPopUp(!openPopUp)}/>
          </div>
        )}
      </div>
      {user && !loading ? (
        <p className='text-sm font-medium m-3 sm:hidden'>Hola 👋 {user.email}</p>
      ) : null}
      {openPopUp ? <AuthPopUp onClose={() => setOpenPopUp(!openPopUp)}/> : null}
    </div>
  )
}

export default HeaderComponent