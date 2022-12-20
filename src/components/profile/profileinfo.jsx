function ProfileInfo(props) {
	return(
		<div className="me">
				<img src={require(`../../img/${props.ava}`)} alt="" /> 
				{props.name}
			</div>
	)
}

export default ProfileInfo