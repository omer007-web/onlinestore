import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartCxt } from '../store/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const { cartItems } = useContext(CartCxt)
  let totalCartItems = cartItems.reduce((count, item) => {
    return item.count ? item.count + count : count
  }, 0)
  return (
    <header className='bg-blue-100 py-5'>
      <nav className='container flex gap-3 justify-between items-center'>
        <NavLink to='/' className='text-3xl font-bold text-blue-500'>
          Online Store
        </NavLink>
        {/* <ul className='flex gap-5 items-center'>
          <li>
            <NavLink
              to='/'
              className='text-base sm:text-lg text-blue-500 font-semibold'
            >
              Home
            </NavLink>
          </li>
          <li>
            <a
              href='#'
              className='text-base sm:text-lg text-blue-500 font-semibold'
            >
              Categories
            </a>
          </li>
        </ul> */}
        <NavLink to='/cart'>
          <button className='text-xl font-semibold text-white relative'>
            <FontAwesomeIcon icon={faCartShopping} size='lg' color='#3b82f6' />
            <span className='flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full text-xs text-white absolute -top-2 -right-3 border border-blue-200'>
              {totalCartItems}
            </span>
          </button>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
