import { useNavigate } from "react-router-dom"
import { viewTransitionApi } from "../utils/viewTransitionApi"


const Home = () => {
  const navigate = useNavigate()  

  const handleClickNavigateToProduct = () => {
    viewTransitionApi(() => {
      navigate(`/products`)
    })
  } 
  return (
    <section className=" text-white text-center py-20 rounded">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to <span style={{viewTransitionName: `my-store`}} className="text-yellow-200">My Store!</span></h1>
        <p className="text-xl mb-6">Explore our latest products and deals.</p>
        <button onClick={handleClickNavigateToProduct} className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400">Shop Now</button>
      </div>
    </section>
  )
}

export default Home