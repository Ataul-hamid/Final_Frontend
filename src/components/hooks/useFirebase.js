import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAunthentication from "../../Firebase/firebase.initialize";

initializeAunthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    /* const createNewAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        /* .then(result => {
            const user = result.user;
            console.log(user);
            auth.getcurrentUser().reload()
            setUserName(name);
            setError('');
            setUser(user);
        })
        .catch(error => {
            setError(error.message);
        }) *
    } */
    const createNewAccount = (email, password, name, history, redirect_url) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                const newUser = { email, displayName: name };
                setUser(newUser);
                setUserName(name);
                setError('');
                saveUser(email, name);
                if (user.email) {
                    history.push(redirect_url);
                }
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const processLogin = (email, password, history, redirect_url) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
                if (user.email) {
                    history.push(redirect_url);
                }
            })
            .catch(error => {
                setError(error.message);
            })
    }
    /* const processLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        /* .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            setUser(user);
        })
        .catch(error => {
            setError(error.message);
        }) *
    } */

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                // Profile updated!
            }).catch((error) => {
                // An error occurred
            });
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            setError(error.message);
        })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        const url = `http://localhost:5000/users`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(() => { })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        admin,

        user,
        setUser,

        error,
        setError,

        isLoading,
        setIsLoading,

        createNewAccount,
        setUserName,
        processLogin,
        logOut
    }
}

export default useFirebase;