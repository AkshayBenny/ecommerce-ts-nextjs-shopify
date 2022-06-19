import getAllProductsQuery from '../utils/queries/getAllProducts'
import fetchApi from '../utils/fetchApi'


const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchApi({ query: getAllProductsQuery })
  return products.data
}
export default getAllProducts
