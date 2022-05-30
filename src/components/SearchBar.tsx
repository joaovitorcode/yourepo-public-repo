import { useFirebase } from "../hooks/useFirebase"

export const SearchBar = () => {
  const { setQuery } = useFirebase()

  return (
    <input
      className="w-full h-12 px-8 outline-none rounded-full shadow-md text-lg"
      placeholder="Pesquise por repositórios"
      onChange={event => setQuery(event.target.value)}
    />
  )
}