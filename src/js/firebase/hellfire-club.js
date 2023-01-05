import app from './app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

export default async function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app)
    const hellfireCLubCollection = collection(db, 'hellfire-club')
    const docRef = await addDoc(hellfireCLubCollection, subscription)
    return docRef.id
}