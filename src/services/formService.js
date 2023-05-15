import axios from 'axios';
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { auth, db } from '../firebase';

const url = 'https://chatgpt53.p.rapidapi.com/';
const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const user = auth.currentUser;

class FormService{
  getSpeech = async (data) => {
    const speechContent  = `Mi amigo se llama ${data.name}. ${data.whoIs}. ${data.relationship}. Se va a casar con ${data.partnerName}, ${data.partnerOpinion}. Hablando de ${data.name}, recuerdo cuando ${data.story}. <br/> Dado el texto anterior, escríbeme un discurso para la boda de ${data.name}:`

    const options = {
      method: 'POST',
      url: url,
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': 'chatgpt53.p.rapidapi.com'
      },
      data: {
        messages: [
          {
            role: 'user',
            content: speechContent
          }
        ]
      }
    };
  
      try {
          const response = await axios(options);
          const textSpeech = response.data.choices[0].message.content;
          this.postUserSpeech(textSpeech);
          return textSpeech;
      } catch (error) {
          console.error(error);
      }
  }

  getUserSpeeches = async () => {
    const q = query(collection(db, "speeches"), where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);

    console.log('SPEECHES', querySnapshot);
  }

  postUserSpeech = async (speech) => {
    const userUid = user?.uid ?? '000000000';
    const response = await addDoc(collection(db, "speeches"),{
        speech,
        userId: userUid
    });

    console.log(response);

    return response;
  }
}

const formService = new FormService()
export default formService