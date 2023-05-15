import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ButtonComponent from './ButtonComponent';
import AuthPopUp from './AuthPopUp';
import { useAuth } from '../../context/authContext';

const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const {user, loading} = useAuth();
  
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
        {user && !loading ? (
          <p className='text-md font-medium'>Hola 👋 {user.email}</p>
        ) : (
          <div className='hidden sm:block'>
            <ButtonComponent text={'Iniciar sesión'} onHandleButton={() => setOpenPopUp(!openPopUp)}/>
          </div>
        )}
      </div>
      {openPopUp ? <AuthPopUp onClose={() => setOpenPopUp(!openPopUp)}/> : null}
    </div>
  )
}

export default HeaderComponent