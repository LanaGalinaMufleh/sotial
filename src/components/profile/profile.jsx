import ava from "../../img/Elon-Musk.webp"
import "./profile.css"
import Post from "./post"
import ProfileInfo from "./profileinfo"

function Profile(props) {
	return(
		<div className="profile">
			<ProfileInfo ava={ava} name={props.name}/>
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