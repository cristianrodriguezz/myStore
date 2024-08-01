import PriceAndRating from "./PriceAndRating"


const DescriptionProduct = ({ product }) => {
  return (
    <div className="flex flex-col justify-between gap-4 h-full p-4">
      <h1 className="sm:text-2xl font-bold mb-10">{product?.title}</h1>
      <p className="sm:text-lg text-pretty">{product?.description}</p>
      <PriceAndRating product={product} />
    </div>
  )
}

export default DescriptionProduct