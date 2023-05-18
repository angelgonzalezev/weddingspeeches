import axios from 'axios';
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from '../firebase';

const url = 'https://chatgpt53.p.rapidapi.com/';
const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

class FormService{
  getSpeech = async (data, user) => {
    //const speechContent  = `Mi amigo se llama ${data.name}. ${data.whoIs}. ${data.relationship}. Se va a casar con ${data.partnerName}, ${data.partnerOpinion}. Hablando de ${data.name}, recuerdo cuando ${data.story}. <br/> Dado el texto anterior, escríbeme un discurso para la boda de ${data.name}:`
    const speechContent = this.generatePropmpt(data);

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
          this.postUserSpeech(textSpeech, user);
          return textSpeech;
      } catch (error) {
          console.error(error);
      }
  }

  generatePropmpt = (data) => {
    const header = 'Imagina que eres un amigo cercano de los novios y te han pedido que les dediques un discurso especial en su boda. Utilizando la siguiente información, crea un discurso que capture la esencia de su relación y transmita tus mejores deseos para su vida juntos: </br>';

    const firstName = `Tu familiar/amigo se llama: ${data.firstName}. </br>`;
    const secondName = `La pareja se llama: ${data.secondName}. </br>`;
    const relationShip = `Tu relación con los novios y cómo los conoces: ${data.relationship}. </br>`;
    const description = `Descripción de la relación de los novios y por qué los admiras: ${data.description}. ${data.admiration}. </br>`;
    const story = `Una anécdota especial o momento significativo que hayas compartido con los novios: ${data.story}. </br>`
    const wish = `Tu deseo principal para los novios en su vida juntos: ${data.wish}. </br>`
    const momments = `Momentos memorables o divertidos que hayas vivido con los novios: ${data.momments}. </br>`;
    const highlight = `Cualquier aspecto destacado de la relación de los novios que quieras resaltar: ${data.highlight}. </br>`
    const message = `Un mensaje especial o consejo que te gustaría transmitir a los novios en este día tan importante: ${data.message}. </br>`
    const sharing = `Lo que te gustaría que los invitados se lleven de tu discurso: ${data.sharing}. </br>`;
    const tone = `Tu preferencia por un tono más formal o informal para el discurso: ${data.tone}. </br>`;

    const footer = 'Ten en cuenta estos puntos al redactar tu discurso y asegúrate de que refleje tu relación con los novios y tus mejores deseos para su matrimonio. ¡Escribe un discurso único y conmovedor que los novios y los invitados recordarán durante mucho tiempo!'

    return header+firstName+secondName+relationShip+description+story+wish+momments+highlight+message+sharing+tone+footer;
  }

  getUserSpeeches = async (_user) => {
    const q = query(collection(db, "speeches"), where("userId", "==", _user?.uid));
    const querySnapshot = await getDocs(q);
    const speeches = [];
    querySnapshot.forEach((doc) => speeches.push(doc.data()));

    return speeches;
  }

  postUserSpeech = async (speech, user) => {
    const userUid = user?.uid ?? '000000000';
    const response = await addDoc(collection(db, "speeches"),{
        speech,
        userId: userUid
    });
    return response;
  }
}

const formService = new FormService()
export default formService