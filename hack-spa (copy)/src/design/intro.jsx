import React from 'react'
import './main.css'
import Anuncios from './anuncios/anuncios'

class Intro extends React.Component {
	render () {
		return (
			<div>
		  <div className="intro">
				<img src={require('./micasa.png')} className='main-logo' alt=""/>
				<input type="text" className="main-input" placeholder="Pesquise aqui o seu próximo lar!" />
				<button className="search-button">Pesquisar</button>
			</div>
			<Anuncios />
		</div>
		)	
	}
} 

export default Intro
