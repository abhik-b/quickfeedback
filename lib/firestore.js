import firebaseApp from './firebase';
import {
    getFirestore,
    collection,
    setDoc,
    doc,
    addDoc,
    getDocs,
    query,
    where,
    deleteDoc
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
    const newSite = await addDoc(collection(db, 'sites'), {
        ...data
    })
        .then((doc) => {
            console.log('Doc created with id : ', doc.id);
            return doc.id;
        })
        .catch((e) => {
            console.error('Error adding document: ', e);
        });
    return newSite;
}

export async function getAllFeedbackSite(siteID) {
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
export async function getAuthorSites(authorID) {
    let sites = [];
    const q = query(collection(db, 'sites'), where('authorId', '==', authorID));
    await getDocs(q)
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
export async function getAuthorFeedbacks(authorID) {
    let sites = [];
    const q = query(
        collection(db, 'feedback'),
        where('authorID', '==', authorID)
    );
    await getDocs(q)
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
    const newFeedbackID = await addDoc(collection(db, 'feedback'), {
        ...data
    })
        .then((doc) => {
            console.log('Feedback Doc created with id : ', doc.id);
            return doc.id;
        })
        .catch((e) => {
            console.error('Error adding document to feedback: ', e);
        });
    return newFeedbackID;
}

export async function removeFeedback(feedbackID) {
    console.log('Feedback ID: ', feedbackID);
    await deleteDoc(doc(db, 'feedback', feedbackID))
        .then((doc) => {
            console.log('Feedback Doc removed ');
        })
        .catch((e) => {
            console.error('Error adding document to feedback: ', e);
        });
}
