import { NavLink } from "react-router-dom"
import "./navbar.css"
function Navbar() {
	return(
		<nav>
			<NavLink to="/profile">Profile</NavLink>
			<NavLink to="/messages">Messages</NavLink>
			<NavLink to="/users">Users</NavLink>
		</nav>
	)
}
export default Navbar