import "./messages.css"

function Messages(props){
	return(
		<div className="messages">
			<div className="users">
				<a>Donald Trump</a>
				<a>Bill Gates</a>
				<a>Joe Biden</a>
			</div>
			<div className="dialogs">
				<p>Hello. I am great</p>
				<p>Hello. I am richer than you</p>
				<p>Where I am?</p> 
				<textarea></textarea><br />
				<button>Submit message</button>
			</div>
		</div>
	)
}

export default Messages