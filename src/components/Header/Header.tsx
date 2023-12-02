import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={style.container}>
        <View style={style.leftContainer}>
            <Text style={style.title}>Explore</Text>
        </View>
        <View style={style.rigthContainer}>
            <Image source={require('../../assets/nasa-logo.png')} style={style.image}/>
        </View>
    </View>
  )
}


const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    rigthContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 20,
        color: '#fff'
    },
    image: {
        width: 60,
        height: 60
    },
});

export default Header