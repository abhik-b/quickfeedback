import firebaseApp from './firebase';
import {
    getFirestore,
    collection,
    setDoc,
    doc,
    addDoc,
    getDocs,
    query,
    where
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

export async function getAllFeedback(siteID) {
    const feedbacks = [];
    const feedbackRef = collection(db, 'feedback');
    const q = query(feedbackRef, where('siteID', '==', siteID));
    await getDocs(q)
        .then((docs) => {
            docs.forEach((doc) => {
                feedbacks.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            return feedbacks;
        })
        .catch((e) => {
            console.error(e);
        });

    return feedbacks;
}
export async function getAllSites() {
    let sites = [];
    await getDocs(collection(db, 'sites'))
        .then((docs) => {
            docs.forEach((doc) => {
                sites.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            return docs;
        })
        .catch((e) => {
            console.error(e);
        });

    return sites;
}

export async function createFeedback(data) {
    await addDoc(collection(db, 'feedback'), {
        ...data
    })
        .then((doc) => {
            console.log('Feedback Doc created with id : ', doc.id);
        })
        .catch((e) => {
            console.error('Error adding document to feedback: ', e);
        });
}
