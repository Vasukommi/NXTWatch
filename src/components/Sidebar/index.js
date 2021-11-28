import {Component} from 'react'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {FaGamepad} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'

import SidebarSocialShare from '../SidebarSocialShare'

import './index.css'

class Sidebar extends Component {
  //   state = {
  //     activeElement: '',
  //   }

  renderHomeItem = () => (
    <li className="side-bar-item active-tab">
      <button className="side-bar-item-button" type="button">
        <AiFillHome className="active-icon side-bar-item-icon" />
        <p className="side-bar-item-name">Home</p>
      </button>
    </li>
  )

  renderTrendingItem = () => (
    <li className="side-bar-item">
      <button className="side-bar-item-button" type="button">
        <AiFillFire className="side-bar-item-icon" />
        <p className="side-bar-item-name">Trending</p>
      </button>
    </li>
  )

  renderGameItem = () => (
    <li className="side-bar-item">
      <button className="side-bar-item-button" type="button">
        <FaGamepad className="side-bar-item-icon" />
        <p className="side-bar-item-name">Gaming</p>
      </button>
    </li>
  )

  renderPlaylistItem = () => (
    <li className="side-bar-item">
      <button className="side-bar-item-button" type="button">
        <MdPlaylistAdd className="side-bar-item-icon" />
        <p className="side-bar-item-name">Playlist</p>
      </button>
    </li>
  )

  render() {
    return (
      <div className="side-bar-container">
        <ul className="side-bar-items-container">
          {this.renderHomeItem()}
          {this.renderTrendingItem()}
          {this.renderGameItem()}
          {this.renderPlaylistItem()}
        </ul>
        <SidebarSocialShare />
      </div>
    )
  }
}

export default Sidebar
