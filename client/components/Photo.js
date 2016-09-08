import React, {Component} from 'React';
import Link from 'react-router';

export default class Photo extends Component {
	render(){
		// const { post, i, comments } = this.props;
		// const { post, i, comments } = JSON.stringify(this.props);
		// console.log(`this.props.post: ${JSON.stringify(this.props.post)}`)
		console.log(this.props.post)
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					{<Link to={"view/" + this.props }></Link>}
				</div>
			</figure>
		);
	}
}

