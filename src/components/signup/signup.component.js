import React, { Component } from 'react';
import { addUserMutation } from '../../querys/querys'
import { graphql, compose } from 'react-apollo';

class Signup extends Component {
	constructor() {
		super()
		this.state = { name: '', lastname: '', email: '', password: '' }
	}

	handleChangeName(event) {
		this.setState({ name: event.target.value });
	}

	handleChangeLastName(event) {
		this.setState({ lastname: event.target.value });
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
		this.props.addUserMutation({
			variables: {
				name: this.state.name, email: this.state.email, password: this.state.password
			}
		})
	}

	render() {
		const style = {
			'background-size': 'cover',
			'background-position': 'top center',
			'min-height': '700px'
		}

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
													<i className="now-ui-icons users_circle-08"></i>
												</span>
											</div>
											<input type="text" className="form-control" value={this.state.name} onChange={this.handleChangeName.bind(this)} placeholder="First Name..." />
										</div>
										<div className="input-group no-border">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="now-ui-icons text_caps-small"></i>
												</span>
											</div>
											<input type="text" placeholder="Last Name..." value={this.state.lastname} onChange={this.handleChangeLastName.bind(this)} className="form-control" />
										</div>
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
	graphql(addUserMutation, { name: "addUserMutation" })
)(Signup);

/*
<div className="container">
            <div className="row">
                <div className="card card-signup" data-background-color="orange">
                    <form className="form" method="" action="">
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
                    </form>
                </div>
            </div>
        </div> */