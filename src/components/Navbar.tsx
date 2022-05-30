import { Logo } from './Logo'
import { useFirebase } from '../hooks/useFirebase'

export const Navbar = () => {
  const { signInWithGoogle, currentUser, logOut } = useFirebase()

  return (
    <div className="w-full h-14 bg-white shadow-md">
      <div className="max-w-3xl mx-auto h-full flex items-center justify-between">
        <Logo />
        { currentUser ? (
          <button
            className="font-medium hover:underline"
            onClick={logOut}
          >
            Sair
          </button>
        ) : (
          <button
            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-[4px]"
            onClick={signInWithGoogle}
          >
            Entre com o Google
          </button>
        ) }
      </div>
    </div>
  )
}
