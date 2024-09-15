import { useEffect, useState } from 'react'
import Product from '../components/Product'
import Search from '../components/Search'
import useFetch from '../hooks/useFetch'
import Catagories from '../components/Catagories'
import Price from '../components/Price'
import Loader from '../components/Loader'
import { product } from '../modal'

const initialConfig = {}
const Home = () => {
  const { data, isLoading } = useFetch(
    'https://fakestoreapi.com/products',
    initialConfig,
    []
  )
  const [products, setProducts] = useState<product[]>([])

  const [selectCatagory, setSelectedCatagory] = useState('all')

  useEffect(() => {
    setProducts(data)
  }, [isLoading])

  const searchHandler = (search: string) => {
    setProducts(
      data.filter((p: product) => p.title.toLowerCase().includes(search.trim()))
    )
  }

  const categoriesHandler = (category: string) => {
    setSelectedCatagory(category)
    category === 'all'
      ? setProducts(data)
      : setProducts(
          data.filter((p: product) =>
            p.category.toLowerCase().includes(category.trim())
          )
        )
  }

  const priceRangeHandler = (range: number) => {
    setProducts(data.filter((p: product) => p.price <= range))
  }

  return isLoading ? (
    <Loader />
  ) : (
    <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8'>
        <div>
          <div className='sticky top-3'>
            <Search searchHandler={searchHandler} />
            <Catagories categoriesHandler={categoriesHandler} />
            {!isLoading && (
              <Price products={data} priceRangeHandler={priceRangeHandler} />
            )}
          </div>
        </div>
        <div>
          <h1 className='text-blue-500 text-4xl font-bold capitalize mb-10'>
            {selectCatagory === 'all'
              ? selectCatagory + ' Products'
              : selectCatagory}
          </h1>

          <div className='grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 row-auto gap-6 mt-5'>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
