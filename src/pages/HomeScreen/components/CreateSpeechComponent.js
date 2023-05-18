import React, {useState} from 'react'
import InputComponent from '../../../common/components/InputComponent'
import formService from '../../../services/formService';
import PopupComponent from '../../../common/components/PopupComponent';
import ButtonComponent from '../../../common/components/ButtonComponent';
import { useAuth } from '../../../context/authContext';

const CreateSpeechComponent = () => {
    const [form, setForm] = useState();
    const [loading, setLoading] = useState();
    const [response, setResponse] = useState();
    const {user} = useAuth();

    const changeForm = (field, data) => {
        const value = data.target.value;
        setForm({
            ...form,
            [field]: value,
        })
    }

    const getSpeech = () => {
        setLoading(true);
        formService.getSpeech(form, user).then(res=> {
            setResponse(res);
            setLoading(false);
        }).catch(
            e => {
                console.log(e);
                setResponse('Lo sentimos, ha ocurrido un error. Inténtelo más tarde.');
                setLoading(false);
            }
        );
    }

    const onHandlerClose = () => {
        setResponse(undefined);
        window.location.reload(false);
    };

    return (
        <div className='w-full'>
            <div className='p-10 rounded-2xl bg-rose-50'>
                <h1 className='text-2xl mb-6'>Crea tu discurso</h1>
                <InputComponent
                    titleInput={'¿Cómo se llama la persona especial?'}
                    textInput={'Nombre de la persona tan especial a la que le quieres hacer este discurso..'}
                    onWrite={(value) => changeForm('firstName', value)}
                />
                <InputComponent
                    titleInput={'¿Cómo se llama la pareja?'}
                    textInput={'Nombre de la pareja...'}
                    onWrite={(value) => changeForm('secondName', value)}
                />
                <InputComponent
                    titleInput={'¿Cuál es tu relación con los novios? (padre/madre de la novia, amigo cercano, hermano/a, etc.)'}
                    textInput={'Tu relación con los novios y cómo los conoces...'}
                    onWrite={(value) => changeForm('relationship', value)}
                />
                <InputComponent
                    titleInput={'¿Cuánto tiempo has conocido a los novios y cómo describirías su relación?'}
                    textInput={'Cuéntanos hace cuánto tiempo que los conoces...'}
                    onWrite={(value) => changeForm('description', value)}
                />
                <InputComponent
                    titleInput={'¿Qué cualidades o características admiras en los novios?'}
                    textInput={'Escribe por qué admiras a la pareja...'}
                    onWrite={(value) => changeForm('admiration', value)}
                />
                <InputComponent
                    titleInput={'¿Hay alguna anécdota especial o momento significativo que quieras compartir sobre los novios?'}
                    textInput={'Una anécdota especial o momento significativo que hayas compartido con los novios...'}
                    onWrite={(value) => changeForm('story', value)}
                />
                <InputComponent
                    titleInput={'¿Cuál es tu deseo principal para los novios en su vida juntos?'}
                    textInput={'Tu deseo principal para los novios en su vida juntos...'}
                    onWrite={(value) => changeForm('wish', value)}
                />
                <InputComponent
                    titleInput={'¿Cuáles son los momentos más memorables o divertidos que has vivido con los novios?'}
                    textInput={'Momentos memorables o divertidos que hayas vivido con los novios...'}
                    onWrite={(value) => changeForm('momments', value)}
                />
                <InputComponent
                    titleInput={'¿Hay algún aspecto de la relación de los novios que te gustaría resaltar en tu discurso?'}
                    textInput={'Cualquier aspecto destacado de la relación de los novios que quieras resaltar...'}
                    onWrite={(value) => changeForm('highlight', value)}
                />
                <InputComponent
                    titleInput={'¿Hay algún mensaje especial o consejo que te gustaría transmitir a los novios en este día tan importante?'}
                    textInput={'Un mensaje especial o consejo que te gustaría transmitir...'}
                    onWrite={(value) => changeForm('message', value)}
                />
                <InputComponent
                    titleInput={'¿Qué te gustaría que los invitados se lleven de tu discurso?'}
                    textInput={'Lo que te gustaría que los invitados se lleven de tu disco...'}
                    onWrite={(value) => changeForm('sharing', value)}
                />
                <InputComponent
                    titleInput={'¿Prefieres un tono más formal o informal para tu discurso?'}
                    textInput={'En qué tono te gustaría transmitir el discurso...'}
                    onWrite={(value) => changeForm('tone', value)}
                />
                <div className='w-full flex items-center justify-center mt-8'>
                    <ButtonComponent text={'Obtener discurso'} onHandleButton={() => getSpeech()} loading={loading}/>
                </div>
            </div>
            {response && (
                <PopupComponent text={response} onClickButton={() => onHandlerClose()} buttonText={'Cerrar'}/>
            )}
        </div>
    )
}

export default CreateSpeechComponent