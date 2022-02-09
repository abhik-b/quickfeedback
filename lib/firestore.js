import firebaseApp from './firebase';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

export async function createUser(uid, data) {
    await setDoc(doc(db, 'users', uid), {
        uid,
        ...data
    }).catch((e) => {
        console.error('Error adding document: ', e);
    });
}
