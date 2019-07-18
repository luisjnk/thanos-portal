import { gql } from 'apollo-boost';

export const allUsersQuery = gql`
{
    allUsers {
        id,
        name,
        email
    }      
}`

export const createToken = gql`
mutation {
    createToken (email: "luisjnk@gmail.com", password: "123456") {
      token,
      success
    }
  }`

export const addUserMutation = gql`
    mutation($name: String!, $email: String!, $password: String!) {
        createUser(name:$name, email:$email, password:$password){
            name,
            id
        }}`
