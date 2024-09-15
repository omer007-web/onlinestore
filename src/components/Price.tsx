import React, { useState } from 'react'
import { product } from '../modal'

const Price: React.FC<{
  products: product[]
  priceRangeHandler: (r: number) => void
}> = props => {
  let maxPrice = 0
  let minPrice = 1000
  props.products.forEach(
    p => maxPrice < p.price && (maxPrice = Math.ceil(p.price))
  )
  props.products.forEach(p => minPrice > p.price && (minPrice = p.price))

  const [range, setRange] = useState(maxPrice)
  const rangeHandler = (value: number) => {
    setRange(value)
    props.priceRangeHandler(value)
  }

  return (
    <div className='mt-6'>
      <span className='block text-blue-500 text-lg font-bold mb-3'>Price</span>

      <span className='block text-sm text-gray-500'>Rs. {range} </span>
      <input
        type='range'
        name=''
        id=''
        min={minPrice}
        max={maxPrice}
        value={range}
        onChange={e => rangeHandler(+e.target.value)}
        className='w-full'
      />
      <div className='flex items-center justify-between'>
        <span className='text-xs text-gray-500'>{minPrice}</span>
        <span className='text-xs text-gray-500'>{maxPrice}</span>
      </div>
    </div>
  )
}

export default Price
