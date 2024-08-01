
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CatalogProducts from './pages/CatalogProducts'
import Contact from './pages/Contact'
import Layout from './layouts/Layout'
import Product from './pages/Product'

function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<CatalogProducts />} />
          <Route path="/product/:id/:category/:name" element={<Product />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
