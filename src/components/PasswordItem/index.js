import './index.css'
const PasswordItem = props => {
  const {deleteItem, passwordDetails, showPassword} = props
  const {id, website, username, password} = passwordDetails
  const deleteItemBtn = () => {
    deleteItem(id)
  }
  const firstLetterCapitalized = website.charAt(0).toUpperCase()
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 5) + 1
  }
  const randomClass = `bg${getRandomNumber()}`

  return (
    <li className="listItem">
      <div className="website-container">
        <div className={`profile-avatar ${randomClass}`}>
          {firstLetterCapitalized}
        </div>
        <div className="nameContainer">
          <p className="username">{website}</p>
          <p className="username">{username}</p>
          {showPassword ? (
            <p className="username">{password}</p>
          ) : (
            <img
              className="stars"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          )}
        </div>
      </div>
      <button data-testid="delete" className="btn2" onClick={deleteItemBtn}>
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
