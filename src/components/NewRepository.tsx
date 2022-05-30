import { useState, FormEvent } from 'react'
import { useFirebase } from "../hooks/useFirebase"

export const NewRepository = () => {
  const { addRepository } = useFirebase()
  const [url, setUrl] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await addRepository(url)
      setUrl('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={onSubmit}>
        <input
          className="max-w-[676px] w-full h-12 px-8 outline-none rounded-l-[4px] shadow-md text-lg"
          placeholder="Adicione um repositório"
          value={url}
          onChange={event => setUrl(event.target.value)}
        />
        <button
          className="p-3 bg-sky-500 hover:bg-sky-600 text-white rounded-r-[4px] shadow-md"
          type="submit"
        >
          Adicionar
        </button>
      </form>
    </div>
  )
}
