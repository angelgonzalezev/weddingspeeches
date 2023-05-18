import React, {useEffect, useState} from 'react'
import CreateSpeechComponent from './components/CreateSpeechComponent'
import HeroComponent from '../../common/components/HeroComponent'
import FooterComponent from '../../common/components/FooterComponent'
import formService from '../../services/formService'
import { useAuth } from '../../context/authContext'

const HomeScreen = () => {
  const [speeches, setSpeeches] = useState();
  const {user} = useAuth();

  useEffect(() => {
    if(!user){
      return;
    } else {
      formService.getUserSpeeches(user).then( res => {
        setSpeeches(res);
      })
      .catch(e => console.log(e));
    }
  }, [user]);

  return (
    <div className='px-3 lg:p-0'>
      <HeroComponent />
      {user && speeches && (
        <div className='my-10'>
          <p className='text-2xl font-semibold mb-5'>Tus discursos 📝</p>
          {speeches.length === 0 && <p className='text-gray-300 text-md font-light italic'>Aquí aparecerán tus discursos...</p>}
          <div className='flex flex-col md:flex-row gap-8'>
            {speeches.map((speech, idx) => (
              <div className='bg-green-50 h-96 w-full max-w-96 rounded-xl p-8' key={idx}>
                <p className='h-full overflow-auto scroll-smooth hover:scroll-auto'>
                  {speech.speech}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <CreateSpeechComponent />
      <FooterComponent />
    </div>
  )
}

export default HomeScreen