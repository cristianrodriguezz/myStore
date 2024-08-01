
import {  useLocation, useNavigate } from "react-router-dom"
import { viewTransitionApi } from "../utils/viewTransitionApi"

const NavBar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleNavigation = (to) => {
    viewTransitionApi(() => {
      navigate(to)
    })
  }

  const renderLink = (to, label) => (
    <li onClick={() => handleNavigation(to)} className="cursor-pointer ">
      <div className="relative">
        {pathname === to && <div style={{viewTransitionName: 'select-page'}} className="absolute inset-0 bg-yellow-400 rounded z-0"></div>}
        <div
          to={to}
          className={`rounded flex items-center justify-center w-20 relative z-10 transition-all ${
            pathname !== to ? 'hover:bg-yellow-100 hover:text-black' : 'text-black '
          }`}
        >
          {label}
        </div>
      </div>
    </li>
  )

  return (
    <nav className="h-10 flex justify-center items-center w-[50rem] mx-1 shadow text-white bg-black rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 p-1">
      <ul className="flex justify-around items-center w-full">
        {renderLink('/', 'Home')}
        {renderLink('/contact', 'Contact')}
        {renderLink('/products', 'Products')}
      </ul>
    </nav>
  )
}

export default NavBar
