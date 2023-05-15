import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import ReceivedMessage from '../../components/RecievedMessage';
import SendMessage from '../../components/SendMessage';

const ChatView = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.chatContainer}>
                <View style={{ flex: 1 }}>
                    <ReceivedMessage
                        msg="Hello there"
                        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
                    />
                    <SendMessage msg="Hello there"/>
                    <ReceivedMessage
                        msg="Hello there"
                        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
                    />
                    <SendMessage msg="Hello there"/>
                    <ReceivedMessage
                        msg="Hello there"
                        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
                    />
                    <SendMessage msg="Hello there"/>
                    <ReceivedMessage
                        msg="Hello there"
                        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
                    />
                    <SendMessage msg="Hello there"/>
                    <ReceivedMessage
                        msg="Hello there"
                        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
                    />
                    <SendMessage msg="Hello there"/>
                    <ReceivedMessage
                        msg="Hello there"
                        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
                    />
                    <SendMessage msg="Hello there"/>
                    <ReceivedMessage
                        msg="Hello there"
                        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
                    />
                    <SendMessage msg="Hello there"/>
                    <ReceivedMessage
                        msg="Hello there"
                        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
                    />
                    <SendMessage msg="Hello there"/>
                    <ReceivedMessage
                        msg="Hello there"
                        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
                    />
                    <SendMessage msg="Hello there"/>
                    <ReceivedMessage
                        msg="Hello there"
                        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
                    />
                    <SendMessage msg="Hello there"/>
                    <ReceivedMessage
                        msg="Hello there"
                        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
                    />
                    <SendMessage msg="Hello there"/>
                    <ReceivedMessage
                        msg="Hello there"
                        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
                    />
                    <SendMessage msg="Hello there"/>
                </View>
            </ScrollView>
            <View style={styles.inputContainer}>
                <View style={styles.sendMsgContainer}>
                    <TextInput placeholder="Send Message" style={styles.input} />
                </View>
            </View>
        </View>
    )
}

export default ChatView

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        flex: 1,
        alignItems: "center"
    },
    chatContainer : {

      paddingTop : responsiveHeight(2),
    },
    inputContainer : {
        height : responsiveHeight(7),
        flexDirection : 'row',
        alignItems : 'center',
        shadowOffset : { width : 2, height : 2 },
        shadowColor : 'black',
        shadowOpacity : 0.5,
        shadowRadius : 20,
        elevation : 3
    },
    input : {
        flex : 1,
        height : responsiveHeight(6),
        fontSize : responsiveFontSize(1.8)
    },
    sendMsgContainer : {
        width : '95%',
        backgroundColor : 'rgba(211,211,211,0.3)',
        borderRadius : 2,
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : 10,
        height : '80%'
    },
})