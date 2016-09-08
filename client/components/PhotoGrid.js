import React, {Component} from 'react';
import {Link} from 'react-router';
import Photo from './Photo'; 

export default class PhotoGrid extends Component {

	constructor(props){
		super(props)
		console.log(props);
	}

	render(){
		console.log(this.props.posts);
		return (
			<div className="photo-grid">
				{this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
			</div>
		);
	}
}