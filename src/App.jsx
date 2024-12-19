import NavBar from './components/NavBar'
import Home from './components/Home'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/item-list' element={<ItemListContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
