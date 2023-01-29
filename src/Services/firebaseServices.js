import firebase from '../Config/firebaseConfig'

export async function getMovies(){
    const querySnapshot = await firebase.firestore().collection('movies').get()
    return querySnapshot.docs
}

export async function getMoviesById(id){
    const querySnapshot = await firebase.firestore().doc(`movies/${id}`).get()
    return querySnapshot
}