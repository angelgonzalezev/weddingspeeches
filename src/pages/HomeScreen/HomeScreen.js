import React, {useCallback, useEffect, useState} from 'react'
import CreateSpeechComponent from './components/CreateSpeechComponent'
import HeroComponent from '../../common/components/HeroComponent'
import FooterComponent from '../../common/components/FooterComponent'
import { auth } from '../../firebase'
import formService from '../../services/formService'

const HomeScreen = () => {
  const user = auth.currentUser;
  const [speeches, setSpeeches] = useState();

  const getSpeeches = useCallback(() => {

      formService.getUserSpeeches().then( res => {
        setSpeeches(res);
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    if (!user){
      return;
    }else {
      getSpeeches();
    }
  }, [user, getSpeeches])
  return (
    <div className='px-3 lg:p-0'>
      <HeroComponent />
      {speeches && (
        <div className='my-10'>
          <p className='text-2xl font-semibold mb-5'>Tus discursos 📝</p>
          <div className='flex flex-col md:flex-row gap-8'>
            {speeches.map((speech, idx) => (
              <div className='bg-green-50 h-96 w-full max-w-96 rounded-xl p-8'>
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