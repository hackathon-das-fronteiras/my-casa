import React from 'react'
import './anuncios.css'
import {
	Container,
	Row,
	Col
} from 'reactstrap'
import Card from '../card/card'

class Anuncios extends React.Component {
	render () {
		return (
			<div className='anuncio-container'>
				<div className="anuncio-bar">
					<p>Encontre o seu novo lar!</p>
				</div>
				<div className="anuncios">
					<Container>
						<Row>
							<Col lg='4'>
								<Card />
							</Col>
							<Col lg='4'>
								<Card />
							</Col>
							<Col lg='4'>
								<Card />
							</Col>

						</Row>
					</Container>		
				</div>
			</div>
		)	
	}
} 

export default Anuncios 
