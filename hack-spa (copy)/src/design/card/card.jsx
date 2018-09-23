import React from 'react'
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends React.Component {
	render () {
		return (
			<div className='app-card'>
				<img src={require('../bg.jpg')} className='app-card__img' alt=""/>
				<h5 className='card-title'>Titulo do card</h5>
			</div>
		)	
	}
}

export default Card
