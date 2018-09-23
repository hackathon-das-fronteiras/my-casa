import React from 'react'
import {withRouter} from 'react-router-dom'
import axiosClient from '../../config/axiosClient'
import { 
    Button,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col
 } from 'reactstrap'
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.login = this.login.bind(this)
    }

    // Envia o objeto auth com as credenciais do login
    login = () => {
        const request = {auth: {'email': this.state.email, 'password': this.state.password}}
        axiosClient.post('/user_token', request)
            .then(resp => localStorage.setItem('jwt', resp.data.jwt))
                .catch(error => {
                    if (error.response === undefined) {
                        alert('Erro de conexão com o servidor')
                    } else {
                        alert('Verifique seu usuário e senha')
                    }
                })
            .then(resp => this.props.history.push('/'))
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <Container >
                <Row className='login-container'>
                    <Col lg='12'>
                        <FormGroup>
                            <Label for='exampleEmail'>Email</Label>
                            <Input onChange={this.handleEmailChange} type='email' name='email' id='email' placeholder='Email' />
                        </FormGroup>
                    </Col>

                    <Col lg='12'>
                        <FormGroup>
                            <Label for='exampleEmail'>Senha</Label> <Input onChange={this.handlePasswordChange} type='password' name='password' id='password' placeholder='Senha' />
                        </FormGroup>
                    </Col>
                
                    <Col>
                        <Button color='primary' onClick={this.login} block>Entrar</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Login)