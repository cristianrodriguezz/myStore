import Footer from "../components/Footer"
import Header from "../components/Header"
import NavBar from "../components/NavBar"


const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <main className="min-h-[calc(100dvh-212px)] sm:mx-auto mx-1 max-w-[50rem] ">
        { children }
      </main>
      <Footer/>
    </>
  )
}

export default Layout