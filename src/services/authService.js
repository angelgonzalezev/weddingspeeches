import {auth, db} from '../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore';


class AuthService {

    signUp = async ({ email = '', password = ''}) => {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        await setDoc(doc(db, "users", user?.uid), 
        {
            email
        });
        return response;
    }

    signIn = async ({email, password}) => {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response;
    };

    signOut = async () => {
        const response = await signOut(auth);
        return response;
    }
}

const authService = new AuthService();
export default authService;