function Friend(props) {
	return(
		<div className="friend">
			<img src={require(`../../img/${props.ava}`)} alt="" />
			<p>{props.name}</p>
		</div>
	)
}

export default Friend