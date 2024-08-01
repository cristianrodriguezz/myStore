import { useNavigate } from "react-router-dom";
import { formatUSD } from "../utils/formatUSD";
import { viewTransitionApi } from "../utils/viewTransitionApi";
import Star from "./Star";

const CardProduct = ({ product }) => {
  const navigate = useNavigate()

  const handleClickNavigateToProduct = (product) => {
    const imageUrlParts = product.thumbnail.split("/")
    imageUrlParts.pop()

    viewTransitionApi(() => {
      navigate(`/product/${product.id}/${imageUrlParts.slice(-2).join('/')}`)
    })
  }

  return (
    <li onClick={() => handleClickNavigateToProduct(product)} key={product.id} className="w-full text-white/90 hover:bg-slate-900  p-4 border border-gray-800 to-yellow-700 rounded-lg shadow-md overflow-hidden flex flex-col justify-between gap-2 cursor-pointer group">
      <div>
        <img
          style={{ viewTransitionName: `img-product-${product.id}` }}
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded aspect-square object-cover mb-2"
        />
        <p className="font-bold mb-2 group-hover:text-blue-400">{product.title}</p>
      </div>
      <div>
        <p className="line-through text-sm text-white/60">{formatUSD(product.price, 2)}</p>
        <p>{formatUSD(product.price - (product.price * ( product.discountPercentage / 100)), 2)}<span className="mx-3 text-sm text-green-500 font-medium">{product.discountPercentage}% OFF</span></p> 
        <p className="font-medium text-green-500">Free shipping</p>
      </div>
      <Star rating={product?.rating} count={product?.reviews?.length} />
    </li>
  )
}

export default CardProduct