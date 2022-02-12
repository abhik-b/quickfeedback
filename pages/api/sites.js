// import defaultApp from '@/lib/admin';
import firebaseApp from '@/lib/firebase';
import {
    getFirestore,
    collection,
    setDoc,
    doc,
    addDoc,
    getDocs,
    getDocsFromServer
} from 'firebase/firestore';

const db = getFirestore(firebaseApp);

export default async function handler(_, res) {
    let sites = [];
    const sitesRef = await getDocs(collection(db, 'sites'))
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

    res.status(200).json({ sites });
}
