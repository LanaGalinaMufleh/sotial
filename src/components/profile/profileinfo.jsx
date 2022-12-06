function ProfileInfo(props) {
	return(
		<div className="me">
				<img src={props.ava} alt="" /> 
				{props.name}
			</div>
	)
}

export default ProfileInfo