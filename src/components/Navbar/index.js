import {withRouter} from 'react-router-dom'
import Button from '@mui/material/Button'
import {FaMoon} from 'react-icons/fa'

import './index.css'

const lightImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

// const darkImage = "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"

const Navbar = () => (
  <nav className="navbar-container">
    <img className="nav-bar-image" src={lightImage} alt="logo" />
    <ul className="nav-item-container">
      <li className="nav-item">
        <FaMoon size={22} />
      </li>
      <li className="nav-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
          className="nav-profile-icon"
        />
      </li>
      <li className="nav-item">
        <Button variant="outlined" id="logoutMobile">
          Logout
        </Button>
      </li>
    </ul>
  </nav>
)

export default withRouter(Navbar)
