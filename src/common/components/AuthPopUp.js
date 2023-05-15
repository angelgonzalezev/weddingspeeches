import React, {useState} from 'react';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import formService from '../../services/formService';


const AuthPopUp = ({onClose}) => {
    const [form, setForm] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    const changeForm = (field, data) => {
        const value = data.target.value;
        setForm({
            ...form,
            [field]: value,
        })
    }
    
    const signIn = async () => {
        setError(undefined);
        try{
            await authService.signUp(form);
            onClose();
            navigate('/');
        }
        catch( e ){
            if(e.code === 'auth/email-already-in-use'){
                try{
                    await authService.signIn(form);
                    onClose();
                    navigate('/');
                }
                catch(e){
                    setError(e.message);
                }
            }
            else {
                setError(e.code);
            }
            
        };
    }

    return (
        <div className='w-full h-full bg-black fixed top-0 left-0 px-3 bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-2xl p-5 lg:p-10 h-fit max-w-[930px]'>
                <div className='w-full mb-5 flex flex-row justify-end' onClick={() => onClose()}>
                    <div className='p-1 rounded-xl hover:border hover:border-rose-200'>
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <h1 className='text-2xl font-bold mb-5'>Empieza a usar WeSpeech 😊</h1>
                <InputComponent
                    titleInput={'Email'}
                    inputName={'email'}
                    textInput={'Introduce tu email'}
                    type={'email'}
                    onWrite={(value) => changeForm('email', value)}
                    border
                />
                <InputComponent
                    titleInput={'Password'}
                    inputName={'password'}
                    textInput={'Introduce una contraseña'}
                    type={'password'}
                    onWrite={(value) => changeForm('password', value)}
                    border
                />
                {error && <p className='text-xs italic text-red-500'>{error}</p>}
                <div className='w-full flex items-center justify-center my-5'>
                    <ButtonComponent text={'Iniciar sesión'} onHandleButton={() => signIn()}/>
                </div>
                <p className='text-xs italic text-gray-400'>
                    Si no tienes una cuenta, se creará automáticamente.
                </p>
            </div>
        </div>
    )
  }

export default AuthPopUp