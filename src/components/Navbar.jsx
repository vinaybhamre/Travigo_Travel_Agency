import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

// import logo
import logo from '../images/logo.png'
import menu from '../images/menu.svg'

import PopupMenu from './PopupMenu'

const Navbar = ({navlinks}) => {

  const [navState, setNavState] = useState(false)

  const [popupState, setPopupState] = useState(false);

  const onTriggerPopup = () => setPopupState(!popupState )

  const onNavScroll = () => {
    if(window.scrollY > 180){
      setNavState(true)
    }else {
      setNavState(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);

    return () => {
      window.removeEventListener('scroll', onNavScroll)
    }

  }, [])

  return (
    <>
    <header className={`nav-default ${navState && 'nav-sticky'}`}>
      <nav className='flex items-center justify-between travigo-container lg:pt-3'>
        <NavLink to={'/'} className="flex items-center">
          <img src={logo} alt="logo/img" className='w-22 h-9 object-fill' />
        </NavLink>
        <ul className='flex items-center lg:hidden gap-7'>
          {
            navlinks?.map((val, index) => (<li key={index}><NavLink to={'#'} className="text-lg text-slate-900">{val.link}</NavLink></li>))
          }
        </ul>
        <ul className='flex items-center lg:hidden'>
          <li>
            <button type='button' className='button-solid px-7 text-base'>Join Us</button>
          </li>
        </ul>
        <ul className='hidden lg:flex items-center'>
          <li>
            <button type='button' className='flex items-center justify-center transition-all duration-200 active:scale-90'>
              <img onClick={onTriggerPopup} src={menu} alt="menu/svg" className='object-cover shadow-sm filter' />
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <PopupMenu navlinks={navlinks} popupState={popupState} />
    </>
  )
}

export default Navbar