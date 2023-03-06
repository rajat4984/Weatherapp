import React from 'react'
import {BiSearchAlt} from "react-icons/bi"
import {FaTemperatureHigh} from "react-icons/fa"
import "../scss/components/navbar.scss"

function Navbar({brandName}) {
  return (
    <div>
        <nav className='navbar'>
            <div className="brand-name">
                <p>{brandName} <FaTemperatureHigh/></p>
            </div>
            <div className="search-bar">
                <input type="text" placeholder='eg:Delhi' />
                <button><BiSearchAlt/></button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar