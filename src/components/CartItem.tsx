import React, { useContext } from 'react'
import { CartCxt } from '../store/CartContext'
import { product } from '../modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMinus,
  faPlus,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons'

const CartItem: React.FC<{ item: product }> = props => {
  const { updateCart, removeFromCart, deleteFromCart } = useContext(CartCxt)

  return (
    <tr className='even:bg-blue-100 even:rounded-lg'>
      <td className='px-6 py-4'>
        <img
          src={props.item.image}
          alt='product'
          className='w-28 h-14 object-contain'
        />
      </td>
      <td className='px-6 py-4'>
        <span className='text-lg'>{props.item.title}</span>
      </td>
      <td className='px-6 py-4'>
        <span className='text-lg'>{props.item.price.toFixed(2)}$</span>
      </td>
      <td className='px-6 py-4'>
        <div className='flex gap-2 items-center'>
          <button
            className='w-10 h-10 flex items-center justify-center text-lg font-bold rounded-md bg-blue-200 hover:bg-blue-500 text-blue-500 hover:text-white transition-all'
            onClick={() => removeFromCart(props.item)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className='w-10 text-xl text-center'>{props.item.count}</span>
          <button
            className='w-10 h-10 flex items-center justify-center text-lg font-bold rounded-md bg-blue-200 hover:bg-blue-500 text-blue-500 hover:text-white transition-all'
            onClick={() =>
              updateCart({
                ...props.item,
                count: props.item.count ? props.item.count + 1 : 1
              })
            }
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </td>
      <td className='px-6 py-4'>
        <span className='text-lg'>
          {props.item.count && (props.item.price * props.item.count).toFixed(2)}
          $
        </span>
      </td>
      <td className='px-6 py-4'>
        <button
          className='bg-red-500 hover:bg-red-600 text-lg transition-all text-white text-center px-2 py-1 rounded'
          onClick={() => deleteFromCart(props.item)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  )
}

export default CartItem
