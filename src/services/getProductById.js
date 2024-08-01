export const getProductById = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  return response
}