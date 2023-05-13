import React, {useState} from 'react'
import InputComponent from '../../../common/components/InputComponent'
import formService from '../services/formService';
import PopupComponent from '../../../common/components/PopupComponent';
import ButtonComponent from '../../../common/components/ButtonComponent';

const CreateSpeechComponent = () => {
    const [form, setForm] = useState();
    const [loading, setLoading] = useState();
    const [response, setResponse] = useState();

    const changeForm = (field, data) => {
        const value = data.target.value;
        setForm({
            ...form,
            [field]: value,
        })
    }

    const getSpeech = () => {
        setLoading(true);
        formService.getSpeech(form).then(res=> {
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

    return (
        <div className='w-full'>
            <div className='p-10 rounded-2xl bg-rose-50'>
                <h1 className='text-2xl mb-6'>Crea tu discurso</h1>
                <InputComponent
                    titleInput={'¿Cómo se llama la persona especial?'}
                    textInput={'Nombre de la persona tan especial a la que le quieres hacer este discurso.'}
                    onWrite={(value) => changeForm('name', value)}
                />
                <InputComponent
                    titleInput={'¿Qué relación tienes con la persona?'}
                    textInput={'¿Es un familia? ¿una amiga del colegio? ¡No dejes detalles!'}
                    onWrite={(value) => changeForm('whoIs', value)}
                />
                <InputComponent
                    titleInput={'¿De qué os conocéis?'}
                    textInput={'¿Una amiga de la infancia? ¿Un compañero de trabajo? Cuéntanos...'}
                    onWrite={(value) => changeForm('relationship', value)}
                />
                <InputComponent
                    titleInput={'¿Cómo se llama la pareja?'}
                    textInput={'Nombre de la pareja...'}
                    onWrite={(value) => changeForm('partnerName', value)}
                />
                <InputComponent
                    titleInput={'¿Qué opinas de la pareja?'}
                    textInput={'Cuéntanos qué te parece su pareja....'}
                    onWrite={(value) => changeForm('partnerOpinion', value)}
                />
                <InputComponent
                    titleInput={'Añade una anécdota incluyendo año, época, edades y todo tipo de detalles que puedas.'}
                    textInput={'Recuerdo una vez cuando...'}
                    onWrite={(value) => changeForm('story', value)}
                />
                <div className='w-full flex items-center justify-center mt-8'>
                    <ButtonComponent text={'Obtener discurso'} onHandleButton={() => getSpeech()} loading={loading}/>
                </div>
            </div>
            {response && (
                <PopupComponent text={response} onClickButton={() => setResponse(undefined)} buttonText={'Cerrar'}/>
            )}
        </div>
    )
}

export default CreateSpeechComponent