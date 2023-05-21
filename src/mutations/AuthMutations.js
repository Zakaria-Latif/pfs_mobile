
import {gql} from '@apollo/client';

const SIGN_UP = gql`
  mutation signup($signUpInput: SignUpInput!) {
    signup(signUpInput: $signUpInput) {
        accessToken
    }
  }
`;

export {SIGN_UP};


