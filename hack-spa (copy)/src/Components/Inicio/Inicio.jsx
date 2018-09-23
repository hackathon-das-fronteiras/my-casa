import React, {Component} from 'react'
import axiosClient from '../../config/axiosClient'
import {Jumbotron, Button} from 'reactstrap'
import {currentUser, getToken} from '../../config/Auth'

export default class Inicio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                email: '',
                password_digest: '',
                name: '',
                avatar: {
                    url: ''
                }
            }
        }
    }

    componentDidMount() {
        return getToken() ? this.getUser() : null // Verifica a existência de um usuário/token 
    }

    getUser = () => {
        const token = getToken() 
        const userId = currentUser()
        axiosClient.get(`/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((resp) => this.setState({user: resp.data}))
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Hello, {this.state.user.name}</h1>
                    <p className="lead">{this.state.user.email}</p>
                    <hr className="my-2" /><p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>
			    <img src={`http://localhost:5000${this.state.user.avatar.url}`} alt="" width="200" />
            </div>
        )
    }
}