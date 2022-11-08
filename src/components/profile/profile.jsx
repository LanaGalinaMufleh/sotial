import ava from "../../img/Elon-Musk.webp"
import "./profile.css"
import Post from "./post"

function Profile(props) {
	return(
		<div className="profile">
			<div className="me">
				<img src={ava} alt="" /> 
				{props.name}
			</div>
			<div className="posts">
				<input type="text" placeholder="Write a text"/>
				<button>Add post</button>
				<Post name={props.name} message="hello"/>
				<Post name={props.name} message="i am Elon Musk"/>
				<Post name={props.name} message="i love mars"/>
				<Post name={props.name} message="tesla"/>
				<Post name={props.name} message="i am rich"/>
			</div>
		</div>
	)
}
export default Profile