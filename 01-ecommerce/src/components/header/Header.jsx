import { NavLink } from 'react-router-dom'
import './header.scss'
import logo from '@/assets/diamond.png'

const Header = () => {
  const linkIsActive = (isActive) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'

  return (
    <nav className='header'>
      <NavLink className='header__logo' to='/'>
        <img src={logo} alt='Logo' width='50px' />
      </NavLink>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/'>Home</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/dashboard'>Dashboard</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/secret'>Secret</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/login'>Login</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/signup'>Signup</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
