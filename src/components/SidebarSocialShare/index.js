import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {TiSocialLinkedin} from 'react-icons/ti'
import './index.css'

const SidebarSocialShare = () => (
  <div className="social-icons-section">
    <h1 className="social-heading">Contact Us</h1>
    <ul className="social-icon-container">
      <li className="icon">
        <FaFacebook className="icon-style facebook" />
      </li>
      <li className="icon">
        <AiFillTwitterCircle className="icon-style twitter" />
      </li>
      <li className="icon">
        <TiSocialLinkedin className="icon-style linkedin" />
      </li>
    </ul>
    <p className="side-bar-description">
      Enjoy! Now to see your channels and recommendations
    </p>
  </div>
)

export default SidebarSocialShare
