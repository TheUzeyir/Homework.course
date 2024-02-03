import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"

const Header = () => {
  return (
    <div className='nawbar'>
      <h1>Header</h1>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      <NavLink to="/contack">
        Contack
      </NavLink>
    </div>
  )
}

export default Header
