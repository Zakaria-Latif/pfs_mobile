import {gql} from '@apollo/client';

export const GET_NOTIFICATIONS = gql`
  query getUnreadNotificationsByRecipient($recipientId: Int!) {
    getUnreadNotificationsByRecipient(recipientId: $recipientId) {
      id
      type
      title
      message
      isRead
      invitationId
      requestId
    }
  }
`;

export const NOTIFICATION_CREATED_SUBSCRIPTION = gql`
  subscription notificationCreated {
    notificationCreated {
      id
      title
      message
      isRead
      type
    }
  }
`;

export const DELETE_NOTIFICATION = gql`
  mutation DeleteNotification($notificationId: Int!) {
    deleteNotification(notificationId: $notificationId) {
      id
    }
  }
`;

export const MARK_AS_READ = gql`
  mutation MarkNotificationAsRead($notificationId: Int!) {
    markNotificationAsRead(notificationId: $notificationId) {
      id
    }
  }
`;
