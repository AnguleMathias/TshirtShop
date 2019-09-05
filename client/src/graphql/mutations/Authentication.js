import gql from 'graphql-tag';

const REGISTER_MUTATION = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      name
      email
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      name
      email
      token
    }

  }
`;

export {
  REGISTER_MUTATION as default,
  LOGIN_MUTATION,
};
