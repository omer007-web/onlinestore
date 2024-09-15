import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useContext, useState } from 'react'
import { CartCxt } from '../store/CartContext'
import Loader from '../components/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMinus,
  faPlus,
  faStar,
  faStarHalf
} from '@fortawesome/free-solid-svg-icons'

const initialConfig = {}

const ProductDetail = () => {
  const { addToCart } = useContext(CartCxt)

  const params = useParams()

  const { data: singleProduct, isLoading } = useFetch(
    `https://fakestoreapi.com/products/${params.id}`,
    initialConfig,
    []
  )

  const [count, setCount] = useState(1)

  const productCountHandler = (value: string) => {
    if (value === 'decrement' && count > 1) setCount(s => s - 1)
    if (value === 'increment' && count < 10) setCount(s => s + 1)
  }

  return (
    <div className='container'>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex flex-col md:flex-row gap-10'>
          <img
            src={singleProduct.image}
            alt='product'
            className='w-60 min-[400px]:w-80 object-contain object-center mx-auto'
          />
          <div className=''>
            <span className='inline-block bg-blue-500 text-white text-sm mb-2 px-2 py-1'>
              {singleProduct.category}
            </span>
            <h1 className='text-2xl sm:text-3xl font-bold'>
              {singleProduct.title}
            </h1>
            <p className='text-base sm:text-lg mt-2'>
              {singleProduct.description}
            </p>
            <span className='block text-orange-500 text-2xl font-semibold mt-3'>
              {singleProduct.price}$
            </span>
            <span className='block text-base text-orange-500 mt-2'>
              <span className='text-gray-600'>
                {Array.from({
                  length: singleProduct.rating?.rate
                }).map(() => (
                  <>
                    <FontAwesomeIcon icon={faStar} color='#eab308' />
                  </>
                ))}
                {singleProduct.rating?.rate % 1 !== 0 ? (
                  <FontAwesomeIcon icon={faStarHalf} color='#eab308' />
                ) : (
                  ''
                )}
              </span>
            </span>
            <div className='flex gap-2 items-center mt-5'>
              <button
                className='w-10 h-10 flex items-center justify-center text-lg font-bold rounded-md bg-blue-200 hover:bg-blue-500 text-blue-500 hover:text-white transition-all'
                onClick={() => productCountHandler('decrement')}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className='w-10 text-xl text-center'>{count}</span>
              <button
                className='w-10 h-10 flex items-center justify-center text-lg font-bold rounded-md bg-blue-200 hover:bg-blue-500 text-blue-500 hover:text-white transition-all'
                onClick={() => productCountHandler('increment')}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className='flex gap-4 mt-10'>
              <button className='hidden min-w-60 p-4 bg-green-500 text-white font-semibold text-lg hover:bg-green-600 transition-all'>
                Buy Now
              </button>
              <button
                onClick={() => addToCart({ ...singleProduct, count: count })}
                className='min-w-60 p-4 bg-blue-200 text-blue-500 font-semibold text-lg rounded-md hover:bg-blue-500 hover:text-white transition-all'
              >
                Add to Cart
                <FontAwesomeIcon icon={faPlus} className='ml-3' />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
