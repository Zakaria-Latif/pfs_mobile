import {gql} from '@apollo/client';

const GET_PLAYERS = gql`
  query players($paginationInput: PaginationGroupInput!) {
    players(paginationInput: $paginationInput) {
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
      createdAt
      updatedAt
    }
  }
`;

const GET_PLAYER = gql`
  query getPlayer($id: Int!) {
    player(id: $id) {
      id
      username
      email
      image
      playerStatistics {
        rate
        matchesNumber
      }
    }
  }
`;

const UPDATE_PLAYER = gql`
  mutation updatePlayer($updatePlayerInput: UpdatePlayerInput!) {
    updatePlayer(updatePlayerInput: $updatePlayerInput) {
      id
      username
      email
      image
    }
  }
`;

export {GET_PLAYERS, GET_PLAYER, UPDATE_PLAYER};
