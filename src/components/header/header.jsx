import { NavLink } from "react-router-dom"
import logo from "../../img/logo.png"
import "./header.css"
function Header() {
	return(
		<header>
			<NavLink to="/"><img src= {logo} alt="" /></NavLink>
			My socials
		</header>
	)
}
export default Header