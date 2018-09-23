import React from 'react'
import './profile.css'
import Card from '../card/card'
import {Container, Row, Col } from 'reactstrap'

class Profile extends React.Component {
	render () {
		return (
			<div className="profile-container">
				<div className="profile-intro">
				<img src={require('../bg.jpg')} className='profile-img' alt=""/>
				<p className="locatario">Fulano de tal</p>
				<p className="profile-cidade">Rio Branco, Acre</p>
				</div>
				<Container>
					<Row>
						<Col lg="4" className="fromtop">
							<Card />
						</Col>
					</Row>
				</Container>
			</div>
		)	
	}
}

export default Profile
