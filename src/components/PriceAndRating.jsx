import { formatUSD } from "../utils/formatUSD"
import Star from "./Star"


const PriceAndRating = ({ product }) => {
  return (
    <div>
      <p className="line-through text-sm text-white/60">{formatUSD(product.price, 2)}</p>
      <p>{formatUSD(product.price - (product.price * ( product.discountPercentage / 100)), 2)}<span className="mx-3 text-sm text-green-500 font-medium">{product.discountPercentage}% OFF</span></p> 
      <p className="font-medium text-green-500">Free shipping</p>
      <Star rating={product?.rating} />
    </div>
  )
}

export default PriceAndRating