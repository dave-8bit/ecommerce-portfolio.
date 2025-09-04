import React from 'react'

export default function Shop() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Shop Page 🛒</h1>
      <button style={{
        padding: '10px 20px',
        borderRadius: '10px',
        border: 'none',
        background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
        color: '#fff',
        cursor: 'pointer',
        boxShadow: '0 0 10px #00ffff'
      }}>
        Buy Now
      </button>
    </div>
  )
}
