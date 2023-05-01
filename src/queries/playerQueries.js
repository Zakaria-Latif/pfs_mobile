import {gql} from '@apollo/client';

const GET_PLAYERS = gql`
  query players($paginationInput: PaginationGroupInput!) {
    players (paginationInput: $paginationInput) {
      id,
      username,
      image,
      playerStatistics{
        rate
        position
      }
    }
  }
`;

const GET_PLAYER = gql`
  query getPlayer($id: ID!) {
    player(id: $id) {
      id
      username,
      image,
      playerStatistics{
        rate
        position
      }
    }
  }
`;

export {GET_PLAYERS, GET_PLAYER};
