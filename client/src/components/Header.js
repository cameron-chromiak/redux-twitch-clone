import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>{
  return(
    <div>
      <div className='ui secondary pointing menu'>
          <Link to='/' className='item'>Stream</Link>
        <div className='right menu'>
          <Link to='/' className='item'>Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
