import { useEffect, useState } from "react"

export const useFetchData = (service, ...params) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await service(...params)

        const data = await response.json()
        
        setData(data)

      } catch (error) {
        console.error('Error al obtener los datos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  }, [...params])


  return { data, setData , loading }
}