import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import {
  LogoutAction,
  loggedIn,
} from '../config/Auth';
import './Navbar.css'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const logout = () => {
      LogoutAction()
      this.props.history.push('/login')
      
    }
    return (
      <div>
        <Navbar className="chamado-navbar" light expand="md">
          <NavbarBrand href="/" className="white">MICASA</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <Link to="/" className="nav-link">
                  Início
                </Link>
              </NavItem>

                <NavItem>
                <Link to="/teste" className="nav-link">
                 Pesquisa 
                </Link>
              </NavItem>

              {loggedIn() ? null : 
              <NavItem>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </NavItem>
              }

              {loggedIn() ? null : 
              <NavItem>
                <Link to="/cadastro" className="nav-link">
                  Cadastro 
                </Link>
              </NavItem>
              }

              {loggedIn() ?
                <NavItem>
                  <Link to="/user/edit" className="nav-link">Configurações</Link>
                </NavItem>
              : null
              }

             {loggedIn() ?
                <NavItem>
                  <Link to="/add" className="nav-link">Adicionar Anúncio</Link>
                </NavItem>
              : null
              }

              {loggedIn() ?
              <NavItem>
                <NavLink onClick={logout}>Sair</NavLink>
              </NavItem>
              : null
              }
              
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(Menu)
