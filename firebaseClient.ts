import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

// Insira abaixo a configuração do Firebase do seu app da Web

// Cole na linha acima

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app) as any
export const db = getFirestore(app)