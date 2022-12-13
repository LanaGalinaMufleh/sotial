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
				{props.postData.map((e)=>
				<Post id={e.id} name={props.name} message={e.message} likes={e.likes}/>
				)}
			</div>
		</div>
	)
}
export default Profile

