import React from 'react'
import { Link } from "react-router-dom"

const Button = () => {
  return (
    <li>
      <Link to="/add" className="btn">
        + add
      </Link>
    </li>
  )
}

export default Button