import {gql} from '@apollo/client';

const GET_PLAYERS = gql`
  query players($paginationInput: PaginationGroupInput!) {
    players (paginationInput: $paginationInput) {
      id
      username
      password
      email
      location
      isVerified
      verificationToken
      resetToken
      resetExpiration
      description
      playerStatisticsId
      createdAt
      updatedAt
    }
  }
`;

const GET_PLAYER = gql`
  query getPlayer($id: ID!) {
    player(id: $id) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

export {GET_PLAYERS, GET_PLAYER};
