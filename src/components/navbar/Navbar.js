import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../images/logo.jpg'

const Navbar = () => {
  const [show, setShow] = useState(false)

  const controlNavbar = () => {
      if (window.scrollY >= 100 ) {
          setShow(true)
      }else{
        setShow(false)
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])

  return (
    <header className={`act ${show && 'hid'}`}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
        <div className="container-fluid">
          <Link to='/'><img className='logo' src={logo} alt=''/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to='/' className="nav-link" aria-current="page">Characters</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/episodes' className="nav-link">Episodes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/location' className="nav-link">Location</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar