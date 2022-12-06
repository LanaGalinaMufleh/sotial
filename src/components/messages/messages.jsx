
import Message from "./message"
import "./messages.css"
import User from "./user"
let dialogNames = [
	{id:"1",name:"Donald Trump"},
	{id:"2" ,name:"Bill Gates"},
	{id:"3" ,name:"Joe Biden"},
	{id:"4" ,name:"Barak Obama"}
]
let messageItems = [
	{id:1, message:"Hello. I am great"},
	{id:2, message:"Hello. I am richer than you"},
	{id:3, message:"Where I am?"},
	{id:4, message:"Who is there? 8)"}
]
function Messages(props){
	return(
		<div className="messages">
			<div className="users">
				{dialogNames.map((e)=>
				<User id={e.id} name={e.name}/>
				)}
			</div>
			<div className="dialogs">
				{messageItems.map((e)=><Message message={e.message}/>)}
				<textarea></textarea><br />
				<button>Submit message</button>
			</div>
		</div>
	)
}

export default Messages