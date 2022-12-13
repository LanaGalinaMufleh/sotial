import ava_mini from "../../img/elon-musk-mini.webp"

function Post(props) {
	return(
		<div className="post">
					<img src={ava_mini} alt="" />
					<span>{props.name}</span>
					<p>{props.message}</p>
					<span className="like">❤ {props.likes}</span>
		</div>
	)
}

export default Post