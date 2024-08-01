
import { useNavigate, useParams } from "react-router-dom"
import ListReview from "../components/ListReview"
import DescriptionProduct from "../components/DescriptionProduct"
import { useFetchData } from "../hooks/useFetchData"
import { getProductById } from "../services/getProductById"
import { useEffect, useState } from "react"
import AddReview from "../components/AddReview"


const Product = () => {

  const { id, name, category } = useParams()
  const navigate = useNavigate()
  const { data: product} = useFetchData(getProductById, id)
  const [reviews, setReviews] = useState([]) 
  
  useEffect(() => {
    if (product?.reviews) {
      setReviews(product.reviews)
    }
  }, [product])

  return (
    <section className="text-white/90 ">
      <article className="flex sm:flex-row flex-col mx-1 items-center gap-5 overflow-hidden rounded-lg bg-gradient-to-r from-slate-900 to-slate-700 p-4 shadow-xl relative">
        <div className="underline absolute top-5 left-5 cursor-pointer z-50" onClick={() => navigate(-1)}>
          Go back
        </div>
        <img
          style={{ viewTransitionName: `img-product-${id}` }}
          src={`https://cdn.dummyjson.com/products/images/${category}/${name}/thumbnail.png`}
          alt={product?.title}
          className="sm:w-96 w-48 sticky rounded aspect-square object-cover mb-2"
        />
        <DescriptionProduct product={product} />
      </article>
      <article className=" overflow-hidden rounded-lg bg-gradient-to-r from-slate-900 to-slate-700 p-4 shadow-xl mt-6 mx-1">
        <h2 className="text-2xl font-bold mb-5">Reviews</h2>
        <ListReview reviews={reviews} />
        <AddReview setReviews={setReviews}/>
      </article>
    </section>
  )
}

export default Product