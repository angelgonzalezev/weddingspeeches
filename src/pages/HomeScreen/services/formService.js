import axios from 'axios';

const url = 'https://chatgpt53.p.rapidapi.com/';
const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

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
          return response.data.choices[0].message.content;
      } catch (error) {
          console.error(error);
      }
  }
}

const formService = new FormService()
export default formService