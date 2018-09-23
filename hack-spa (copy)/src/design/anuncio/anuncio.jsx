import React from 'react'
import './anuncio.css'
import Slider from "react-slick";

import {
	Container,
	Row,
	Col
} from 'reactstrap'

class Anuncio extends React.Component {
	render () {
		let settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className="anuncio-item-container">
				<Container>
					<Row>
						<Col lg="7">
							<Slider {...settings}>
								<div>
									<img src={require('../bg.jpg')} className="responsive-img" alt=""/>
								</div>
								<div>
									<img src={require('../bg.jpg')} className="responsive-img" alt=""/>
								</div>
								<div>
									<img src={require('../bg.jpg')} className="responsive-img" alt=""/>
								</div>
							</Slider>
						</Col>
						<Col lg="5">
							<h2 className="nome-imovel">Lindo apartamento em Brasiléia</h2>
							<h2 className="preco-imovel">R$ 400,00 / mês</h2>
						</Col>

						<Col lg="12" className="descricao-imovel">
							Descrição
						</Col>
					</Row>
				</Container>
			</div>
			)	
	}	
}

export default Anuncio
