/*
	Componente responsável pela edição dos dados do usuário.
*/
import React from 'react'
import axiosClient from '../../config/axiosClient'
import { 
    Button,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
	Form,
 } from 'reactstrap'
 import {
	getToken,
	currentUser
} from '../../config/Auth'

export default class Edit extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			id: '',
			email: '',
			password_digest: '',
			name: '',
			created_at: '',
			admin: '',
			updated_at: '',
			avatar: {
				url: ''
			},
			user: {
				name: '',
				objectUrl: '',
				avatar: {
					url: ''
				},
				email: '',
				password: ''
			},
			country: {
				value: '',
				name: ''
			},
		}

		this.countryData = [
			{ value: 'USA', name: 'USA' },
			{ value: 'CANADA', name: 'CANADA' }            
		];

		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handleNameChange = this.handleNameChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.handleFileChange = this.handleFileChange.bind(this)
	}

	componentDidMount = () => {
		this.getUser()		
	}

	getUser = () => {
		const token = getToken() 
	  	let userId = currentUser()
	  	axiosClient.get(`/users/${userId}`, {
	    	headers: {
	      		Authorization: `Bearer ${token}`
	    	}
	  	})
		.then((resp) => this.setState({user: resp.data}))
	}

	updateAcc = () => {
	  	const token = getToken() 
		const formData = new FormData()
		formData.append(`user[avatar]`, this.state.user.avatar)
		formData.append(`user[email]`, this.state.user.email)
		formData.append(`user[name]`, this.state.user.name)
    formData.append(`user[password]`, this.state.user.password)

		// Decodifica o token para pegar o id do usuário
		let userId = currentUser()	

		// Envia uma requisição PUT com a URL, o objeto user e seus atributos e os cabeçalhos da requisição
		axiosClient.put(`/users/${userId}`, formData, {
			headers: { 
				Authorization: `Bearer ${token}`,
	      		'content-type': 'multipart/form-data'
			}
		})
		// Redireciona para a home
		.then(resp => this.props.history.push('/'))
	}

	handleEmailChange = (e) => {
		var user = {...this.state.user}
		user.email = e.target.value
		this.setState({user})
	}
	
	handleFileChange = (e) => {
		let user = {...this.state.user}
		user.avatar = e.target.files[0]
		// Pega o url do arquivo que ainda não foi enviado para que possa ser exibido uma prévia
		user.objectUrl = window.URL.createObjectURL(user.avatar)
		this.setState({user})
	}

	handleNameChange = (e) => {
		let user = {...this.state.user}
		user.name = e.target.value
     	this.setState({user})
	  }
	  
  	handlePasswordChange = (e) => {
		let user = {...this.state.user}
		user.password = e.target.value
		this.setState({user})
  	}

	render() {
		return (
			<Container>
				<Row>
					<Form>
        				<FormGroup row>
         					<Label for="exampleEmail" sm={2}>Email</Label>
          						<Col sm={10}>
									<input type="file" name="avatar" id="avatar" onChange={this.handleFileChange} />
        			    			<Input onChange={this.handleEmailChange}  type="email" name="email" id="email" value={this.state.user.email}   />
          						</Col>
        				</FormGroup>

						<img src={`${this.state.user.objectUrl}`} alt="" width="200"  /> 

						<FormGroup row>
     	 	    			<Label for="name" sm={2}>Nome</Label>
          					<Col sm={10}>
          						<Input onChange={this.handleNameChange}  type="" name="name" id="name" value={this.state.user.name}   />
          					</Col>
        				</FormGroup>

        				<FormGroup row>
          					<Label for="examplePassword" sm={2}>Password</Label>
          					<Col sm={10}>
            					<Input onChange={this.handlePasswordChange}  type="password"  name="password" id="password" placeholder="Mudar Senha" />
          					</Col>
        				</FormGroup>

            			<FormGroup check row>
          					<Col sm={{ size: 10, offset: 2 }}>
            					<Button onClick={this.updateAcc}>Submit</Button>
          		       		</Col>
        				</FormGroup>

      				</Form>
				</Row>
			</Container>
		)
	}
}
