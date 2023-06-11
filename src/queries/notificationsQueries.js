import {gql} from '@apollo/client';

export const GET_NOTIFICATIONS = gql`
  query getUnreadNotifications {
    getUnreadNotifications {
      id
      type
      title
      message
      isRead
      entityId
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
      entityId
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
