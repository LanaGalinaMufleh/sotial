import { NavLink } from "react-router-dom"
import Friend from "./friend"
import "./navbar.css"
function Navbar(props) {
	return(
		<nav>
			<NavLink to="/profile">Profile</NavLink>
			<NavLink to="/messages">Messages</NavLink>
			<NavLink to="/users">Users</NavLink>
			<div className="friends">
				<h4>Friends</h4>
				{props.sideBar.friends.map((e)=>
					<Friend id={e.id} name={e.name} ava={e.ava} />
				)}
			</div>
		</nav>
	)
}
export default Navbar