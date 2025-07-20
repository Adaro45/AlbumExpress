import React from 'react'
import "./styles/Maintainment.css"
import ContactInfo from './ContactInfo'

const Maintainment = () => {
  return (
    <><div className='navbar'>
    <img src="/images/Logo.png" alt="AlbumExpress Logo" className='navbar-logo' />
    <h1 className='maintainment-title'>Estamos en mantenimiento</h1>
    </div>
    <div className='maintainment-container'>
    <div className='maintainment-overlay'>
    <img src="/images/maintainment.jpg" alt=" " className="background-photo" />

    <ContactInfo />
    </div>
    </div>
    </>
  )
}

export default Maintainment