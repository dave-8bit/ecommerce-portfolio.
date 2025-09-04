import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#111', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '20px', color: 'cyan' }}>Home</Link>
      <Link to="/shop" style={{ color: 'cyan' }}>Shop</Link>
    </nav>
  )
}
