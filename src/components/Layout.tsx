import { ReactNode } from "react"
import { Navbar } from './Navbar'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="max-w-3xl mx-auto py-4 flex flex-col gap-4 items-center">
        {children}
      </div>
    </div>
  )
}
