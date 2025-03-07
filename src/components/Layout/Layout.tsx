import Header from "../Header/Header"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="container">
        {children}
      </div>
    </>
  )
}

export default Layout