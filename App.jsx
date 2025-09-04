import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import products from './data/products'

export default function App(){
  const [cart, setCart] = useState([])

  function addToCart(product){
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id)
      if(existing) return prev.map(p => p.id === product.id ? {...p, qty: p.qty + 1} : p)
      return [...prev, {...product, qty: 1}]
    })
  }

  function removeFromCart(productId){
    setCart(prev => prev.filter(p => p.id !== productId))
  }

  function updateQty(productId, qty){
    setCart(prev => prev.map(p => p.id === productId ? {...p, qty} : p))
  }

  return (
    <div className="app-root">
      <Navbar cartCount={cart.reduce((s, p) => s + p.qty, 0)} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
          <Route path="/product/:id" element={<Product products={products} addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />} />
        </Routes>
      </main>
      <footer className="footer">Made with ❤️ — Frontend Demo</footer>
    </div>
  )
}