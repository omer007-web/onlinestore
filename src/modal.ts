export type product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
  count?: number
}

export type cartContextType = {
  cartItems: product[]
  addToCart: (item: product) => void
  removeFromCart: (item: product) => void
  updateCart: (item: product) => void
  deleteFromCart: (item: product) => void
}
