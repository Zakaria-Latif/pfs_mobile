import {gql} from '@apollo/client';

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

export const ACCEPT_MATCH_REQUEST = gql`
  mutation acceptMatchRequest($id: Int!) {
    acceptMatchRequest(id: $id) {
      id
      isAccepted
      creator {
        id
        username
      }
      match {
        id
        location
        playersNumber
      }
      recipient {
        id
        username
      }
    }
  }
`;

export const REFUSE_MATCH_REQUEST = gql`
  mutation refuseMatchRequest($id: Int!) {
    refuseMatchRequest(id: $id) {
      id
      isAccepted
      creator {
        id
        username
      }
      match {
        id
        location
        playersNumber
      }
      recipient {
        id
        username
      }
    }
  }
`;

export const ACCEPT_MATCH_INVITATION = gql`
  mutation acceptInvitation($id: Int!) {
    acceptInvitation(id: $id) {
      id
      isAccepted
      match {
        id
        location
        playersNumber
      }
      recipient {
        id
        username
      }
    }
  }
`;

export const REFUSE_MATCH_INVITATION = gql`
  mutation refuseInvitation($id: Int!) {
    refuseInvitation(id: $id) {
      id
      isAccepted
      match {
        id
        location
        playersNumber
      }
      recipient {
        id
        username
      }
    }
  }
`;
