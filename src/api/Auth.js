import firebase from 'firebase';

export const auth = (setUserAuthenticated) => {
    firebase.auth().signInAnonymously()
        .then(() => {
            setUserAuthenticated(true);
        })
        .catch((error) => {
            setUserAuthenticated(false);
            console.error(error);
        })
}

export const getUserId = (setUserId) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setUserId(user.uid);
        }
    });
}