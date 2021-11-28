import {Component} from 'react'
import Cookie from 'js-cookie'
import Button from '@mui/material/Button'

import './index.css'

const lightTheme =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
// const darkTheme =
//   'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
  }

  authorizeLoginFetch = async () => {
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const loginData = await response.json()
    if (response.ok === true) {
      const token = loginData.jwt_token
      Cookie.set('jwt_token', token, {expiry: 30})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onEnterUsername = event => {
    this.setState({username: event.target.value})
  }

  onEnterPassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <label className="login-label" htmlFor="username">
          USERNAME
        </label>
        <input
          id="username"
          value={username}
          onChange={this.onEnterUsername}
          className="user-input"
          type="username"
          placeholder="Username"
        />
      </>
    )
  }

  renderPassword = () => {
    const {password, showPassword} = this.state

    const show = showPassword ? 'text' : 'password'

    return (
      <>
        <label className="login-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          id="password"
          value={password}
          onChange={this.onEnterPassword}
          className="user-input"
          type={show}
          placeholder="Password"
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-app-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img className="login-logo-image" src={lightTheme} alt="Login" />
          {this.renderUsername()}
          {this.renderPassword()}
          <div className="show-password-container">
            <input
              className="checkbox-input"
              id="checkbox"
              onClick={this.onShowPassword}
              type="checkbox"
            />
            <label htmlFor="checkbox">Show Password</label>
          </div>
          <Button
            variant="contained"
            type="submit"
            style={{marginTop: '20PX', marginBottom: '20px'}}
          >
            Login
          </Button>
        </form>
      </div>
    )
  }
}

export default Login
