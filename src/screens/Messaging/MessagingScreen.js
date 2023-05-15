import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import ActiveUserOnHome from '../../components/ActiveUserOnHome';
import CreateRoom from '../../components/CreateRoom';
import Chat from '../../components/Chat';

const MessagingScreen = ({navigation}) => {
    return (
        <View contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchIconContainer}>
                    <Ionicons name="ios-search" size={responsiveFontSize(3)} color="#999" />
                </View>
                <TextInput style={styles.searchInput} placeholder="Search"/>
            </View>
            <View style={styles.activeUsersContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginVertical : 10 }}>
                    <CreateRoom/>
                    <ActiveUserOnHome
                    navigation={navigation}
                        name='Zakaria'
                        picture='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__340.jpg'
                    />
                    <ActiveUserOnHome
                    navigation={navigation}
                        name='Zakaria'
                        picture='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    />
                    <ActiveUserOnHome
                    navigation={navigation}
                        name='Mohamed'
                        picture='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                    />
                    <ActiveUserOnHome
                    navigation={navigation}
                        name='Nizar'
                        picture='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__340.jpg'
                    />
                    <ActiveUserOnHome
                    navigation={navigation}
                        name='Zakaria'
                        picture='https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__340.jpg'
                    />
                </ScrollView>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Chat
                navigation={navigation}
                profilePicture='https://iso.500px.com/wp-content/uploads/2020/02/The-Life-Time-of-Wyatt-Terrazas-By-Estevan-Trujillo-1500x1000.jpeg'
                seenPicture='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                name="Mohamed El Ouali"
                isLastMessageYours={true}
                hasSeen={false}
                time="19:55"
                message="Okay"
            />
            <Chat
                navigation={navigation}
                profilePicture="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                name="Zakaria Latif"
                isLastMessageYours={false}
                hasSeen={true}
                time="21:00"
                message="Hello there"
            />
            <Chat
                navigation={navigation}
                profilePicture='https://cdn.photographypro.com/wp-content/uploads/2020/06/Children-Photography-51.jpg'
                seenPicture='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                name="Nizar El Hilali"
                isLastMessageYours={true}
                hasSeen={true}
                time="21:55"
                message="I'm doing well!"
            />
            <Chat
                navigation={navigation}
                profilePicture='https://iso.500px.com/wp-content/uploads/2020/02/The-Life-Time-of-Wyatt-Terrazas-By-Estevan-Trujillo-1500x1000.jpeg'
                seenPicture='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                name="Mohamed El Ouali"
                isLastMessageYours={true}
                hasSeen={true}
                time="19:55"
                message="Okay"
            />
            <Chat
                navigation={navigation}
                profilePicture="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                name="Zakaria Latif"
                isLastMessageYours={false}
                hasSeen={false}
                time="21:00"
                message="Hello there"
            />
            <Chat
                navigation={navigation}
                profilePicture='https://cdn.photographypro.com/wp-content/uploads/2020/06/Children-Photography-51.jpg'
                seenPicture='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                name="Nizar El Hilali"
                isLastMessageYours={true}
                hasSeen={true}
                time="21:55"
                message="I'm doing well!"
            />
            <Chat
                navigation={navigation}
                profilePicture='https://iso.500px.com/wp-content/uploads/2020/02/The-Life-Time-of-Wyatt-Terrazas-By-Estevan-Trujillo-1500x1000.jpeg'
                seenPicture='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                name="Mohamed El Ouali"
                isLastMessageYours={true}
                hasSeen={true}
                time="19:55"
                message="Okay"
            />
            <Chat
                navigation={navigation}
                profilePicture="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                name="Zakaria Latif"
                isLastMessageYours={false}
                hasSeen={false}
                time="21:00"
                message="Hello there"
            />
            <Chat
                navigation={navigation}
                profilePicture='https://cdn.photographypro.com/wp-content/uploads/2020/06/Children-Photography-51.jpg'
                seenPicture='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                name="Nizar El Hilali"
                isLastMessageYours={true}
                hasSeen={true}
                time="21:55"
                message="I'm doing well!"
            />
            </ScrollView>
        </View>
    )
}

export default MessagingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop : responsiveHeight(2),
        marginHorizontal: responsiveWidth(2.5)
    },
    searchContainer : {
        width : responsiveWidth(95),
        height : responsiveHeight(5),
        backgroundColor : 'rgba(211, 211, 211, 0.2)',
        borderRadius : 3,
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
    },
    searchInput : {
      height : responsiveHeight(6),
    },
    searchIconContainer : {
        paddingHorizontal : 10
    },
    activeUsersContainer : {
        height : responsiveHeight(13),
        width : responsiveWidth(95),
        marginVertical : 5
    }
})
