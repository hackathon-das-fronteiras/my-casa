import React from 'react';
import axiosClient from '../../config/axiosClient'
import { 
    Button,
    Input,
 } from 'reactstrap'

class NewUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name: '',
        }

        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.crateUser = this.createUser.bind(this)
    }

    componentDidMount() {

    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    createUser = () => {
        const request = {user:{'email': this.state.email, 'password': this.state.password, 'name': this.state.name}}
        axiosClient.post('/users', request)
            .then(resp => this.props.history.push('/'))
    } 


    render(){
        return(
            <div>
                            <label>Email</label>
                                <Input placeholder='Email' onChange={this.handleEmailChange} />
      <label>Senha</label>
      <Input placeholder='Senha' onChange={this.handlePasswordChange} />

      <label>Nome</label>
      <Input placeholder='Nome' onChange={this.handleNameChange} />
    <Button type='submit' onClick={this.createUser}>Submit</Button>
            </div>
        )
    }
}

export default NewUser
