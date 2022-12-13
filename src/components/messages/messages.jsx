
import Message from "./message"
import "./messages.css"
import User from "./user"

function Messages(props){
	return(
		<div className="messages">
			<div className="users">
				{props.dialogNames.map((e)=>
				<User id={e.id} name={e.name}/>
				)}
			</div>
			<div className="dialogs">
				{props.messageItems.map((e)=><Message message={e.message}/>)}
				<textarea></textarea><br />
				<button>Submit message</button>
			</div>
		</div>
	)
}

export default Messages