import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link className='header__item' to='/'>Home Page</Link>
      <Link className='header__item' to='/react'>React Page</Link>
      <Link className='header__item' to='/react-query'>React Query Page</Link>
    </div>
  )
}

export default Header