import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const CreateRoom = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer}>
                <View style={styles.image}>
                <FontAwesome name="group" size={responsiveFontSize(3)} color="#999" />
                </View>
            </TouchableOpacity>
            <Text style={styles.name}>Create Room</Text>
        </View>
    )
}

export default CreateRoom

const styles = StyleSheet.create({
    container : {
        width : responsiveWidth(20),
        justifyContent : 'center',
        alignItems : 'center'
    },
    imageContainer : {
        height : responsiveHeight(7),
        width : responsiveHeight(7),
        margin : 2,
    },
    image : {
        width : '100%',
        height : '100%',
        borderRadius : 200,
        backgroundColor : 'rgba(211,211,211,0.3)',
        alignItems :'center',
        justifyContent : 'center',
    },
    name : {
        flex : 1,
        textAlign : 'center',
        fontSize : responsiveFontSize(1.5)
    },
})