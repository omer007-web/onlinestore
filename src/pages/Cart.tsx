import { useContext } from 'react'
import { CartCxt } from '../store/CartContext'
import CartItem from '../components/CartItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  const { cartItems } = useContext(CartCxt)
  const totalPrice = cartItems.reduce((price, item) => {
    return item.count ? item.price * item.count + price : item.price
  }, 0)

  const ShippingFee = 200
  const Tax = 250

  return (
    <div className='container'>
      <h1 className='text-3xl font-bold text-center mb-12'>Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className='overflow-auto'>
            <table className='w-full min-w-[900px] text-base text-left rtl:text-right'>
              <thead className='text-lg uppercase text-nowrap'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Item
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Price
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Image
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Quantity
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Sub Total
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Remove
                  </th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
          <div className='flex flex-col sm:flex-row sm:justify-between gap-5 mt-10'>
            <NavLink to='/'>
              <button className='min-w-60 p-4 bg-blue-200 text-blue-500 font-semibold text-lg rounded-md hover:bg-blue-500 hover:text-white transition-all'>
                Continue Shopping
                <FontAwesomeIcon icon={faShop} className='ml-3' />
              </button>
            </NavLink>
            <div className='w-64 bg-blue-100 rounded-md p-6 ml-auto'>
              <div className='flex items-center gap-6'>
                <span className='text-xl font-bold'>Tax:</span>
                <span className='text-xl font-bold'>{Tax}$</span>
              </div>
              <div className='flex items-center gap-6 my-4'>
                <span className='text-xl font-bold'>Shipping Fee:</span>
                <span className='text-xl font-bold'>{ShippingFee}$</span>
              </div>
              <div className='flex items-center gap-6'>
                <span className='text-xl font-bold'>Sub Total:</span>
                <span className='text-xl font-bold'>
                  {totalPrice.toFixed(2)}$
                </span>
              </div>
              <div className='flex items-center gap-6 mt-4'>
                <span className='text-xl font-bold'>Total:</span>
                <span className='text-xl font-bold'>
                  {(totalPrice + Tax + ShippingFee).toFixed(2)}$
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <span className='block text-5xl font-bold text-blue-500 text-center mt-14'>
          No Product Found
        </span>
      )}
    </div>
  )
}

export default Cart
