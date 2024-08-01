import GitHub from "./icons/GitHub"
import LinkedIn from "./icons/LinkedIn"


const Footer = () => {
  return (
    <footer className="w-full  text-white py-4">
      <nav className="w-full bg-opacity-70 p-4">
        <ul className="flex justify-center space-x-4 mb-4">
          <li>
            <a href="https://www.linkedin.com/in/cristian-rodriguezz/" target="_blank" rel="noreferrer" className="hover:underline">
              <LinkedIn/>
            </a>
          </li>
          <li>
            <a href="https://github.com/cristianrodriguezz" target="_blank" rel="noreferrer" className="hover:underline">
              <GitHub/>
            </a>
          </li>
        </ul>
        <div className="text-center">
          <p className="text-sm">&copy; 2024 My Store. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-sm hover:underline mx-2">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline mx-2">Terms of Service</a>
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
