import { initializeApp, getApps, cert, getApp } from 'firebase-admin/app';

export const defaultApp = (() => {
    if (getApps().length > 0) return getApp(); // returns the existing default instance

    const credentials = {
        client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
        private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
        project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    };

    return initializeApp({
        credential: cert(credentials)
    });
})();

export default defaultApp;
