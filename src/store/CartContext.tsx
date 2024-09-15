import { createContext, ReactNode, useReducer } from 'react'
import { cartContextType, product } from '../modal'
import { toast } from 'react-toastify'

const CartCxt = createContext<cartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCart: () => {},
  deleteFromCart: () => {}
})

const CartContext: React.FC<{ children: ReactNode }> = props => {
  const ADD_TO_CART = 'ADD_TO_CART'
  const UPDATE_CART = 'UPDATE_CART'
  const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
  const DELETE_FROM_CART = 'DELETE_FROM_CART'

  const dispatchFunc = (state: cartContextType, action: any) => {
    let updateItems: product[] = [...state.cartItems]
    let existedIndex = state.cartItems.findIndex(
      (item: any) => item.id === action.payload.id
    )

    let existingCartItem = updateItems[existedIndex]

    if (action.type === ADD_TO_CART) {
      if (existingCartItem) {
        let updatedItem = {
          ...existingCartItem,
          count: existingCartItem.count + action.payload.count
        }
        updateItems[existedIndex] = updatedItem
      } else {
        updateItems.push({
          ...action.payload
        })
      }
    }

    if (action.type === UPDATE_CART) {
      let updatedItem = {
        ...existingCartItem,
        count: action.payload.count
      }
      updateItems[existedIndex] = updatedItem
    }

    if (action.type === REMOVE_FROM_CART) {
      if (
        existingCartItem &&
        existingCartItem.count &&
        existingCartItem.count > 1
      ) {
        updateItems[existedIndex] = {
          ...existingCartItem,
          count: existingCartItem.count - 1
        }
      }
    }

    if (action.type === DELETE_FROM_CART) {
      if (existingCartItem) {
        updateItems.splice(existedIndex, 1)
      }
    }

    return {
      ...state,
      cartItems: updateItems
    }
  }

  const addToCart = (item: product) => {
    dispatch({ type: ADD_TO_CART, payload: item })
    toast.success('Added to Cart')
  }

  const updateCart = (item: product) => {
    dispatch({ type: UPDATE_CART, payload: item })
  }

  const removeFromCart = (item: product) => {
    dispatch({ type: REMOVE_FROM_CART, payload: item })
  }

  const deleteFromCart = (item: product) => {
    dispatch({ type: DELETE_FROM_CART, payload: item })
    toast.warn('Removed From Cart')
  }

  const [cart, dispatch] = useReducer(dispatchFunc, {
    cartItems: [],
    addToCart,
    removeFromCart,
    updateCart,
    deleteFromCart
  })

  return <CartCxt.Provider value={cart}>{props.children}</CartCxt.Provider>
}

export default CartContext
export { CartCxt }
