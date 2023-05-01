import {gql,  useQuery} from '@apollo/client';

const LOG_IN = gql`
query login($loginInput: LoginInput!) {
  login (loginInput: $loginInput) {
    accessToken
  }
}
`;

export {LOG_IN};