import React, { Component } from 'react';
import { createToken } from '../../querys/querys'
import { graphql, compose } from 'react-apollo';

class Signin extends Component {
  constructor() {
    super()
    this.state = { email: '', password: ''}
  }

  handleChangeEmail(event) {
		this.setState({ email: event.target.value });
	}

	handleChangePassword(event) {
		this.setState({ password: event.target.value });
  }
  
  submitForm(e) {
		e.preventDefault();
    console.log(this.state)
    
    this.props.createToken({
			variables: {
			   email: this.state.email, password: this.state.password
			}
    }).then(res => {
      console.log(res)
    })
    
    /*var data = this.props.data
    console.log(data)
    if(data.loading) {
      console.log('loading')
    } else {
      console.log('acabou', data)
    }*/
	}

  render() {

    return (
			<div className="section section-signup" style={this.style} >
				<div className="container">
					<div className="row">
						<div className="card card-signup" data-background-color="blue">
							<form className="form" onSubmit={this.submitForm.bind(this)}>

								<div className="form">
									<div className="card-header text-center">
										<h3 className="card-title title-up">Sign Up</h3>
										<div className="social-line">
											<a href="#pablo" className="btn btn-neutral btn-facebook btn-icon btn-round">
												<i className="fab fa-facebook-square"></i>
											</a>
											<a href="#pablo" className="btn btn-neutral btn-twitter btn-icon btn-lg btn-round">
												<i className="fab fa-twitter"></i>
											</a>
											<a href="#pablo" className="btn btn-neutral btn-google btn-icon btn-round">
												<i className="fab fa-google-plus"></i>
											</a>
										</div>
									</div>
									<div className="card-body">
									
						
										<div className="input-group no-border">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="now-ui-icons ui-1_email-85"></i>
												</span>
											</div>
											<input type="text" className="form-control" value={this.state.email} onChange={this.handleChangeEmail.bind(this)} placeholder="Email..." />
										</div>
										<div className="input-group no-border">
											<div className="input-group-prepend">
												<span className="input-group-text">
												</span>
											</div>
											<input type="text" className="form-control" value={this.state.password} onChange={this.handleChangePassword.bind(this)} placeholder="password" />
										</div>
									</div>
									<div className="card-footer text-center">
										<button className="btn btn-neutral btn-round btn-lg">Get Started</button>
									</div>
								</div>
							</form>
						</div>

					</div>
				</div>
			</div>
    );
  }
}

export default compose(
	graphql(createToken, { name: "createToken" })
)(Signin);