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
				<div className="logo">Logo</div>
        <div className="menu-itens">
					<div className="menu-item">Início</div>
					<div className="menu-item">Buscar</div>
					<div className="menu-item">Registre-se</div>
					<div className="menu-item">Login</div>
				</div>
			</div>
		)	
	}
}

export default Menu
