export const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products')
  return response
}