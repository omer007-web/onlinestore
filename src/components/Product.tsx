import { NavLink } from 'react-router-dom'
import { product } from '../modal'

const Product: React.FC<{ product: product }> = props => {
  return (
    <NavLink to={'/product-detail/' + props.product.id}>
      <div className='bg-white border border-blue-500 rounded-md p-3 sm:p-4 cursor-pointer relative before:w-full before:h-full before:bg-blue-500 before:absolute before:-top-[10px] before:-left-[10px] before:rounded-md before:-z-10 hover:before:top-0 hover:before:left-0 before:transition-all'>
        <img
          src={props.product.image}
          alt='product'
          className='h-[150px] aspect-video object-contain object-center rounded overflow-hidden mx-auto'
        />
        <div className='mt-3'>
          <span className='bold text-lg font-bold line-clamp-1'>
            {props.product.title}
          </span>
          <p className='text-base my-2 line-clamp-2'>
            {props.product.description}
          </p>
          <span className='block text-lg text-blue-500 font-bold'>
            {props.product.price}$
          </span>
        </div>
      </div>
    </NavLink>
  )
}

export default Product
