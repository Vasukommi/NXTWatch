import Button from '@mui/material/Button'

import {AiOutlineClose} from 'react-icons/ai'

import './index.css'

const lightTheme =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

// const darkThem =
//   'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const NXTWatchBanner = props => {
  const onClickRemoveBanner = () => {
    const {removeBanner} = props
    removeBanner()
  }

  return (
    <div className="banner-container">
      <div className="banner-content-section">
        <img className="banner-logo" src={lightTheme} alt="logo" />
        <h1 className="banner-title">
          Buy Nxt Watch Premium Prepaid Plain With UPI
        </h1>
        <Button variant="outlined" id="buyButtonStyle">
          GET IT NOW
        </Button>
      </div>
      <button className="remove-button" type="button">
        <AiOutlineClose size={20} />
      </button>
    </div>
  )
}

export default NXTWatchBanner
