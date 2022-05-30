import { useState, useEffect } from 'react'
import { Layout } from './components/Layout'
import { SearchBar } from './components/SearchBar'
import { Repository } from './components/Repository'
import { NewRepository } from './components/NewRepository'
import { doc, onSnapshot } from "firebase/firestore"
import { db } from '../firebaseClient'
import { useFirebase } from './hooks/useFirebase'

function App() {
  const { currentUser, query } = useFirebase()
  const [repositories, setRepositories] = useState<any>([])

  useEffect(() => {
    if (currentUser) {
      const favoriteRef = doc(db, 'favorites', currentUser?.uid)
      const unsub = onSnapshot(favoriteRef, (favorite: any) => {
        setRepositories(favorite.data().repos)
      })
      return unsub
    }
  }, [currentUser])

  if (!currentUser) {
    return (
      <Layout>
        Entre com sua conta do Google para utilizar o serviço.
      </Layout>
    )
  }

  return (
    <Layout>
      <SearchBar />
      { query && (
        repositories.filter((repository: string) => (
          repository.includes(query.toLowerCase())
        )).map((repository: string) => (
          <Repository key={repository} value={repository} />
        ))
      ) }
      <NewRepository />
    </Layout>
  )
}

export default App
