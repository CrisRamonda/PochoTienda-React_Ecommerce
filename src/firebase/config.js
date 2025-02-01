import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyCrx5rN6n_33gtOF4oWMuU42Ncp9twj6Ng",
    authDomain: "pochotiendadb.firebaseapp.com",
    projectId: "pochotiendadb",
    storageBucket: "pochotiendadb.firebasestorage.app",
    messagingSenderId: "770875769169",
    appId: "1:770875769169:web:2b09b83f0438719e519370",
    measurementId: "G-EFEED7FJRM"
}

export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)