import { createContext, ReactNode, useState, useEffect, useContext } from "react"
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"
import { auth, db } from '../../firebaseClient'

interface AuthProps {
  children: ReactNode
}

const AuthContext = createContext({} as any)

export const AuthContextProvider = ({ children }: AuthProps) => {
  const provider = new GoogleAuthProvider()
  const [currentUser, setCurrentUser] = useState<any>()
  const [query, setQuery] = useState('')

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user)
    })
    return unsub
  }, [])

  const addRepository = async (url: string) => {
    const reposRef = doc(db, 'favorites', auth.currentUser.uid)

    try {
      await updateDoc(reposRef, {
        repos: arrayUnion(url)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const removeRepository = async (url: string) => {
    const reposRef = doc(db, 'favorites', auth.currentUser.uid)

    try {
      await updateDoc(reposRef, {
        repos: arrayRemove(url)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider)
      createFavoritesDocument()
    } catch (error) {
      console.log(error)
    }
  }

  const createFavoritesDocument = async () => {
    const favoriteRef = doc(db, 'favorites', auth.currentUser.uid)
    const favoriteSnap = await getDoc(favoriteRef)

    if (!favoriteSnap.exists()) {
      try {
        await setDoc(favoriteRef, {
          repos: []
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  const logOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  const value = { 
    currentUser,
    signInWithGoogle,
    logOut,
    addRepository,
    removeRepository,
    query,
    setQuery
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useFirebase = () => {
  return useContext(AuthContext)
}