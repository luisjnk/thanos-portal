import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super()

  }
  routeSignUp() {
    console.log('this', this.props)
    this.props.history.push({ pathname: 'signup' });
  }
  
  routeSignIn() {
    console.log('this', this.props)
    this.props.history.push({ pathname: 'signin' });
	}
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand"  rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank">
              Now Ui Kit
            </a>
            <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="./assets/img/blurred-image-1.jpg">
            <ul className="navbar-nav">
             
              <li className="nav-item">
                  <NavLink   className="nav-link btn btn-neutral" to="/signin"> SignIn</NavLink>
              </li>
                 <li className="nav-item">
                 <NavLink   className="nav-link btn btn-neutral" to="/signup"> SignUP</NavLink>

              </li>
 
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

/*<button className="nav-link btn btn-neutral" onClick={this.routeSignIn.bind(this)}>
                  <p>Login</p>
                </button> */
export default Navbar;
