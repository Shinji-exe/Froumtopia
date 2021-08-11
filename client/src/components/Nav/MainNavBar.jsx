import { NavLink } from 'react-router-dom'
import "./Nav.css"

const authenticatedOptions = (
  <>
    <NavLink to="/threads-create">Create Thread</NavLink>
    <NavLink to ="/change-password">Change Password</NavLink>
    <NavLink to="/sign-out">Sign Out</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
    <NavLink to="/sign-in">Sign In</NavLink>
    <NavLink to="/sign-up">Sign Up</NavLink>
  </>
)

// maybe add posts and threads to here? not sure.
const alwaysOptions = (
  <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/categories">Categories</NavLink>
  </>
)

export default function MainNavBar(props) {
  return (
    <nav>
      <div className="nav-bar">
        <NavLink className="site-logo" to="/">Forumtopia</NavLink>
        <div className="nav-links">
          {props.user && <div className="user-welcome">Welcome, {props.user.username}</div>}
          {alwaysOptions}
          {props.user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}


