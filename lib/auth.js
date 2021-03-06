import React, {
    useState,
    useEffect,
    useContext,
    createContext,
    useCallback
} from 'react';
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GithubAuthProvider,
    getAuth
} from 'firebase/auth';
import firebaseApp from './firebase';
import { createUser } from './firestore';

//

const AuthContext = createContext();

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const auth = getAuth(firebaseApp);

    const formatUser = (user) => {
        if (user) {
            return {
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
                uid: user.uid,
                provider: user.providerData[0].providerId
            };
        }
        return null;
    };

    const handleUser = useCallback((user) => {
        if (user) {
            const formattedUser = formatUser(user);
            setUser(formattedUser);
            createUser(formattedUser.uid, formattedUser);
            return formattedUser;
        } else {
            setUser(null);
            return null;
        }
    }, []);

    const signinWithGithub = async () => {
        return signInWithPopup(auth, new GithubAuthProvider()).then(
            (response) => handleUser(response.user)
        );
    };

    const signout = async () => {
        return signOut(auth).then(() => handleUser(null));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) =>
            handleUser(user)
        );

        return () => unsubscribe();
    }, [auth, handleUser]);

    return {
        user,
        signinWithGithub,
        signout
    };
}

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
};
