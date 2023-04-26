import {gql} from '@apollo/client';

const LOG_IN = gql`
query login($loginInput: LoginInput!) {
  login (loginInput: $loginInput) {
    token
  }
}
`;