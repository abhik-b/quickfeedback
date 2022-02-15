import { initializeApp, getApps, cert, getApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const credentials = {
    client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
    private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
    project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

let defaultApp;

if (getApps().length > 0) {
    defaultApp = getApp().name === 'default' ? getApp() : getApps()[0];
} else {
    defaultApp = initializeApp({
        credential: cert(credentials)
    });
}

export const auth = getAuth();

export default defaultApp;
