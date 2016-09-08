import React, {Component} from 'react';

export default class Comments extends Component {

	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderComment = this.renderComment.bind(this);
	}

	renderComment(comment, i){
		console.log(`this.props: ${this.props.params.postId}`);
		return (
			<div className="comment" key={i}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}className="remove-comment">&times;</button>
				</p>
			</div>
		);
	}

	handleSubmit(event){
		event.preventDefault();
		console.log("Submitting the form...");
		const {postId} = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		console.log(postId, author, comment);
		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	}

	render(){
		return (
			<div className="comments">
				{this.props.postComments.map(this.renderComment)}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="author"/>
					<input type="text" ref="comment" placeholder="comment"/>
					<input type="submit" hidden/>
				</form>
			</div>
		);
	}
}