import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <ul className='nav'>
            <li className='nav-item'><Link className='nav-link'  to="/">Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/blog">Blog</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/create">add blog</Link></li>
        </ul>
    </header>
  )
}

export default Header