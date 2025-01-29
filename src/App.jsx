import { BrowserRouter, Routes, Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/products/:id' element={<ItemDetailContainer />} />
          <Route path='/cart/' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
