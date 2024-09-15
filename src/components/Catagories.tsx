import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronRight
} from '@fortawesome/free-solid-svg-icons'
const initialConfig = {}
const Catagories: React.FC<{
  categoriesHandler: (c: string) => void
}> = props => {
  const { data: categories, isLoading } = useFetch(
    'https://fakestoreapi.com/products/categories',
    initialConfig,
    []
  )

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='mt-6'>
      <span className='block text-blue-500 text-lg font-bold mb-3'>
        Categories ({isLoading ? 0 : categories.length})
      </span>
      {isLoading ? (
        'Loading...'
      ) : (
        <div className='flex flex-col gap-4 items-start'>
          {['all', ...categories].map((category: string, index: number) => (
            <button
              key={index}
              className={`text-base hover:text-blue-500 uppercase transition-all ${
                activeIndex === index
                  ? 'text-blue-500 font-semibold'
                  : 'text-gray-500'
              }`}
              onClick={() => {
                props.categoriesHandler(category)
                setActiveIndex(index)
              }}
            >
              <FontAwesomeIcon icon={faCircleChevronRight} size='xs' />{' '}
              {category}
            </button>
          ))}
        </div>
      )}
      <ul></ul>
    </div>
  )
}

export default Catagories
