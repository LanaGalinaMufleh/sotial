import "./profile.css"
import Post from "./post"
import ProfileInfo from "./profileinfo"
import React from "react"
let postText = React.createRef()

function Profile(props) {
	function addPost() {
		props.addPost()
	}
	function onChange() {
		props.onPostChange(postText.current.value)
	}
	return(
		<div className="profile">
			<ProfileInfo ava={props.profilePage.profileInfo[0].ava} name={props.profilePage.profileInfo[0].name}/>
			<div className="posts">
				<input ref={postText} value={props.newPostText} onChange={onChange} type="text" placeholder="Write a text"/>
				<button onClick={addPost}>Add post</button>
				{props.profilePage.postData.map((e)=>
				<Post id={e.id} name={props.name} message={e.message} likes={e.likes}/>
				)}
			</div>
		</div>
	)
}
export default Profile

