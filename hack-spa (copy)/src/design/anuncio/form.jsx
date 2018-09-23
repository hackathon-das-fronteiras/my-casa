import React from 'react'
import axiosClient from '../../config/axiosClient'
import {
	Container,
	Row,
	Label,
	Input,
	Col
} from 'reactstrap'

class AnuncioForm extends React.Component {

	state = {
	  title: '',
		price: '',
		wich: '',
		animal: '',
		avatar: '',
		description: ''
	}


  handleTitleChange(e) {
    this.setState({title: e.target.value})
  }



	handleSubmit = () => {
		const request = {
			immobile: {
				'title': this.state.title,
				'price': this.state.price,
				'wich': this.state.wich,
				'animal': this.state.animal,
				'avatar': this.state.avatar,
				'description': this.state.description
			}
		}
		axiosClient.post('/immobiles', request)
      .then(resp => this.props.history.push('/'))
	}

	render () {
		return (
			<div>
				<Container className="anuncio-form-container">
					<Row>
						<Col lg="4">
							<p>Título do anúncio</p>
							<input type="text" placeholder="Título do anúncio" className="form-control" />
						</Col>
						<Col lg="4">
							<p>Valor do Alugel</p>
							<input type="text" placeholder="Valor do Aluguel" className="form-control" />
						</Col>
						<Col lg="4">
							<p>Tipo de imóvel</p>
							<Input type="select" name="select" >
								<option value="0">Casa</option>
								<option value="1">Apartamento</option>
								<option value="2">Quarto</option>
							</Input> 
						</Col>
						<Col lg="4">
							<p>Aceita Animais</p>
							<Input type="select" name="select" >
								<option value="0">Não</option>
								<option value="1">Sim</option>
							</Input> 
						</Col>
						<Col lg="4">
							<p>Foto</p>
							<Input type="file" name="file" />
						</Col>
						<Col lg="12">
							<p>Descreva a hospedagem</p>
							<Input type="textarea" placeholder="Descrição" className="form-control" name="" />
						</Col>
						<Col lg="12">
							<button onClick={this.handleSubmit.bind(this)} className="btn btn-block btn-primary">Salvar</button>
						</Col>
					</Row>
				</Container>
			</div>
			)	
	}
}

export default AnuncioForm
