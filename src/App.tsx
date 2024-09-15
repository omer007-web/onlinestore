import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import CartContext from './store/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import News from './components/News'

function App () {
  return (
    <CartContext>
      <News news='🔥🔥 Sale Sale Sale Upto 75% OFF 🔥🔥' />
      <div className='flex flex-col gap-5 h-screen'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product-detail/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        <Footer />
      </div>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </CartContext>
  )
}

export default App
