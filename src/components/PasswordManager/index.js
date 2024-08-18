import {Component} from 'react'
import PasswordItem from '../PasswordItem'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordsList: [],
    showPasswords: false,
    searchInput: '',
  }

  onChangewebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeusername = event => {
    this.setState({username: event.target.value})
  }
  onChangepassword = event => {
    this.setState({password: event.target.value})
  }
  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  onChangeCheckboxInput = event => {
    this.setState({
      showPasswords: event.target.checked,
    })
  }
  onAdd = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }
  onDeleteItem = id => {
    const {passwordsList} = this.state

    const newpasswordsList = passwordsList.filter(each => each.id !== id)
    this.setState({
      passwordsList: newpasswordsList,
    })
  }

  render() {
    const {
      website,
      username,
      searchInput,
      password,
      passwordsList,
      showPasswords,
    } = this.state
    const searchpasswordsList = passwordsList.filter(eachitem =>
      eachitem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="appContainer">
        <div className="bgContainer">
          <div className="logoContainer">
            <img
              alt="app logo"
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            />
          </div>
          <div className="formBgContainer">
            <div className="formContainer">
              <h1 className="heading">Add New Password</h1>
              <form className="form" onSubmit={this.onAdd}>
                <div className="inputContainer">
                  <div className="inputImgConatiner">
                    <img
                      className="inputImg"
                      alt="website"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    />
                  </div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Website"
                    value={website}
                    onChange={this.onChangewebsite}
                  />
                </div>
                <div className="inputContainer">
                  <div className="inputImgConatiner">
                    <img
                      className="inputImg"
                      alt="username"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    />
                  </div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={this.onChangeusername}
                  />
                </div>
                <div className="inputContainer">
                  <div className="inputImgConatiner">
                    <img
                      className="inputImg"
                      alt="password"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    />
                  </div>
                  <input
                    className="input"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={this.onChangepassword}
                  />
                </div>
                <div className="btnContainer">
                  <button type="submit" className="btn">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="formImgContainer">
              <img
                srcSet="
                          https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png 767w,
                          https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png 1200w,
                "
                sizes="
        (max-width: 767px) 100%,
        (min-width: 768px) 100%"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                className="formImg"
                alt="password manager"
              />
            </div>
          </div>
          <div className="passwordBgContainer">
            <div className="header">
              <div className="leftHeader">
                <h1 className="headerHeading">Your Passwords</h1>
                <p className="passwordCount">{searchpasswordsList.length}</p>
              </div>
              <div className="inputContainer2">
                <div className="inputImgConatiner2">
                  <img
                    className="inputImg2"
                    alt="search"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  />
                </div>
                <input
                  value={searchInput}
                  className="input2"
                  type="search"
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
            <div className="passwordsContainer">
              <div className="showPasswordContainer">
                <div className="showpassword">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="showpassword"
                    checked={showPasswords}
                    onChange={this.onChangeCheckboxInput}
                    id="showpassword"
                  />
                  <label className="showpasswords" htmlFor="showpassword">
                    {' '}
                    Show Passwords
                  </label>{' '}
                </div>
              </div>
              {searchpasswordsList.length === 0 ? (
                <div className="noPasswordContainer">
                  <img
                    className="noPasswordImg"
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                  />
                  <p className="headerHeading">No Passwords</p>
                </div>
              ) : (
                <ul className="list">
                  {searchpasswordsList.map(eachPassword => (
                    <PasswordItem
                      key={eachPassword.id}
                      deleteItem={this.onDeleteItem}
                      passwordDetails={eachPassword}
                      showPassword={showPasswords}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
