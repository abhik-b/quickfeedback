import firebaseApp from './firebase';
import {
    getFirestore,
    collection,
    setDoc,
    doc,
    addDoc
} from 'firebase/firestore';

const db = getFirestore(firebaseApp);

export async function createUser(uid, data) {
    await setDoc(doc(db, 'users', uid), {
        uid,
        ...data
    }).catch((e) => {
        console.error('Error adding document: ', e);
    });
}
export async function createSite(data) {
    await addDoc(collection(db, 'sites'), {
        ...data
    })
        .then((doc) => {
            console.log('Doc created with id : ', doc.id);
        })
        .catch((e) => {
            console.error('Error adding document: ', e);
        });
}
