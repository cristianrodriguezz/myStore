import { useFetchData } from "../hooks/useFetchData"
import CardProduct from "./CardProduct"
import { getProducts } from "../services/getProducts"

const ListCardProducts = () => {

  const { data } = useFetchData(getProducts)  

  return (
    <ul className="grid gap-4 grid-cols-auto-fit-200">
      {data?.products?.map((product) => (
        <CardProduct product={product} key={product.id} />
      ))}
    </ul> 
  )
}

export default ListCardProducts