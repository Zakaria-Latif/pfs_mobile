import {gql} from 'graphql-tag';

export const GET_MATCHS = gql`
  query getMatchs($paginationInput: PaginationGroupInput!) {
    matches(paginationInput: $paginationInput) {
      id
      location
      name
      time
      prize
      playersNumber
      duration
    }
  }
`;
