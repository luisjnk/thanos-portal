import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { isRegExp } from 'util';

const allUsersQuery = gql`
{
    allUsers {
        id,
        name,
        email
    }      
}`

class UserList extends Component {
	constructor() {
		super()
	}

	displayUsers() {
		var data = this.props.data;
		if (data.loading) {
			return (<div>loading users</div>)
		} else {
			return data.allUsers.map(user => {
				return (
					<li key={user.id}>
						{user.name}
					</li>
				)
			})
		}
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<ul id="book-list">
					{this.displayUsers()}
				</ul>
			</div>
		);
	}
}

export default graphql(allUsersQuery)(UserList);

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