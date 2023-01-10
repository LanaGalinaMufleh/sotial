
import React from "react"
import Message from "./message"
import "./messages.css"
import User from "./user"
let messText = React.createRef()

function Messages(props){
	function addMessage() {
		props.addMessage(messText.current.value)
	}
	return(
		<div className="messages">
			<div className="users">
				{props.dialogesPage.dialogNames.map((e)=>
				<User id={e.id} name={e.name}/>
				)}
			</div>
			<div className="dialogs">
				{props.dialogesPage.messageItems.map((e)=><Message message={e.message}/>)}
				<textarea ref={messText}></textarea><br />
				<button onClick={addMessage}>Submit message</button>
			</div>
		</div>
	)
}

export default Messages