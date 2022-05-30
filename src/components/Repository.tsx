import { useFirebase } from '../hooks/useFirebase'

interface RepoProps {
  value: string
}

export const Repository = ({ value }: RepoProps) => {
  const { removeRepository } = useFirebase()
  return (
    <div className="w-full bg-white rounded-[4px] shadow-md py-3 px-4 flex items-center justify-between">
      <p>{value}</p>
      <button
        className="font-medium hover:underline"
        onClick={() => removeRepository(value)}
      >
        Remover
      </button>
    </div>
  )
}
