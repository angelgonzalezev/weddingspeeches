import axios from 'axios';

const url = 'https://simple-chatgpt-api.p.rapidapi.com/ask';
const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

class FormService{
    getSpeech = async (data) => {
        const speechContent  = `Mi amigo se llama ${data.name}. ${data.whoIs}. ${data.relationship}. Se va a casar con ${data.partnerName}, ${data.partnerOpinion}. Hablando de ${data.name}, recuerdo cuando ${data.story}. <br/> Dado el texto anterior, escríbeme un discurso para la boda de ${data.name}:`

        const options = {
            method: 'POST',
            url: 'https://simple-chatgpt-api.p.rapidapi.com/ask',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': RAPID_API_KEY,
              'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com'
            },
            data: {
              question: speechContent
            }
          };
    
        try {
            const response = await axios(url, options);
            return response.data.answer;
        } catch (error) {
            console.error(error);
        }
    }
}

const formService = new FormService()
export default formService