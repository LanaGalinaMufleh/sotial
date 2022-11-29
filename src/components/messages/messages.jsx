
import Message from "./message"
import "./messages.css"
import User from "./user"

function Messages(props){
	return(
		<div className="messages">
			<div className="users">
				<User id="1" name="Donald Trump"/>
				<User id="2" name="Bill Gates"/>
				<User id="3" name="Joe Biden"/>
			</div>
			<div className="dialogs">
				<Message message="Hello. I am great"/>
				<Message message="Hello. I am richer than you"/>
				<Message message="Where I am?"/>
				<textarea></textarea><br />
				<button>Submit message</button>
			</div>
		</div>
	)
}

export default Messages