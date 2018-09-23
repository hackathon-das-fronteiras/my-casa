import React, { Component } from 'react';
import './menu.css'

class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render () {
		return (
			<div className="main-nav">
				<h2>oi</h2>
        
			</div>
		)	
	}
}

export default Menu
