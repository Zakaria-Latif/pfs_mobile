import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {useQuery, useMutation, useSubscription} from '@apollo/client';
import {
  GET_NOTIFICATIONS,
  DELETE_NOTIFICATION,
  MARK_AS_READ,
  NOTIFICATION_CREATED_SUBSCRIPTION,
} from '../queries/notificationsQueries';
import {
  ACCEPT_MATCH_REQUEST,
  ACCEPT_MATCH_INVITATION,
  REFUSE_MATCH_REQUEST,
  REFUSE_MATCH_INVITATION,
} from '../queries/matchQueries';
import Spinner from '../components/Spinner';
import Error from '../components/Error';

const NotificationScreen = props => {
  const {loading, error, data, refetch} = useQuery(GET_NOTIFICATIONS);
  const [markAsRead] = useMutation(MARK_AS_READ);
  const [deleteNotification] = useMutation(DELETE_NOTIFICATION);

  const [acceptMatchRequest] = useMutation(ACCEPT_MATCH_REQUEST);
  const [acceptMatchInvitation] = useMutation(ACCEPT_MATCH_INVITATION);
  const [refuseMatchRequest] = useMutation(REFUSE_MATCH_REQUEST);
  const [refuseMatchInvitation] = useMutation(REFUSE_MATCH_INVITATION);

  /*const {dataSubscritpion} = useSubscription(NOTIFICATION_CREATED_SUBSCRIPTION);

  useEffect(() => {
    if (dataSubscritpion) {
      // A new notification was created, do something with the data
      console.log('New notification:', dataSubscritpion.notificationCreated);
      refetch();
    }
  }, [dataSubscritpion]);*/

  if (loading) return <Spinner />;
  if (error) return <Error />;

  const handleAction = async (action, type, id) => {
    try {
      switch (type) {
        case 'Request':
          if (action === 'accept') {
            await acceptMatchRequest({
              variables: {
                id,
              },
            });
            // Refetch the notifications to update the list
            refetch();
          } else if (action === 'refuse') {
            await refuseMatchRequest({
              variables: {
                id,
              },
            });
            // Refetch the notifications to update the list
            refetch();
          }
          break;
        case 'Invitation':
          if (action === 'accept') {
            await acceptMatchInvitation({
              variables: {
                id,
              },
            });
            // Refetch the notifications to update the list
            refetch();
          } else if (action === 'refuse') {
            await refuseMatchInvitation({
              variables: {
                id,
              },
            });
            // Refetch the notifications to update the list
            refetch();
          }
          break;
        default:
          console.log('Unknown notification type:', type);
          break;
      }
    } catch (error) {
      console.log('Error handling user action:', error);
    }
  };

  const handleMarkAsRead = async notificationId => {
    try {
      await markAsRead({
        variables: {
          notificationId: notificationId,
        },
      });
      // Refetch the notifications to update the list
      refetch();
    } catch (error) {
      console.log('Error marking notification as read:', error);
    }
  };

  const handleDeleteNotification = async notificationId => {
    try {
      await deleteNotification({
        variables: {
          notificationId: notificationId,
        },
      });
      // Refetch the notifications to update the list
      refetch();
    } catch (error) {
      console.log('Error deleting notification:', error);
    }
  };

  const renderNotification = ({item: notification}) => {
    if (notification.type === 'Request') {
      // Render a notification that requires user action
      return (
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <Text style={styles.notificationMessage}>{notification.message}</Text>
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={[styles.actionButton, {backgroundColor: 'green'}]}
              onPress={() =>
                handleAction('accept', notification.type, notification.entityId)
              }>
              <Text style={styles.actionButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, {backgroundColor: 'red'}]}
              onPress={() =>
                handleAction('refuse', notification.type, notification.entityId)
              }>
              <Text style={styles.actionButtonText}>Refuse</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (notification.type === 'Invitation') {
      return (
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <Text style={styles.notificationMessage}>{notification.message}</Text>
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={[styles.actionButton, {backgroundColor: 'green'}]}
              onPress={() =>
                handleAction('accept', notification.type, notification.entityId)
              }>
              <Text style={styles.actionButtonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, {backgroundColor: 'red'}]}
              onPress={() =>
                handleAction('refuse', notification.type, notification.entityId)
              }>
              <Text style={styles.actionButtonText}>Refuse</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      // Render a regular notification
      return (
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <Text style={styles.notificationMessage}>{notification.message}</Text>
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleMarkAsRead(notification.id)}>
              <Text style={styles.actionButtonText}>Mark as Read</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleDeleteNotification(notification.id)}>
              <Text style={styles.actionButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data.getUnreadNotifications}
        renderItem={renderNotification}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 14,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  actionButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
export default NotificationScreen;
