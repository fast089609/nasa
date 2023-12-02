import React, { FC } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { PostImage, RootStackParams } from '../../types';
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>

const TodaysImage: FC<PostImage> = ({date, title, copyright, url, media_type, explanation}) => {

    const {navigate} = useNavigation<PostImageNavigationProps>();

    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation});
    }

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            {url && <Image source={{ uri: url }} style={styles.image}/>}
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.buttonContainer}>
            <Button title='view' color={'transparent'} onPress={handleViewPress}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c449d',
        marginVertical: 16,
        borderRadius: 32,
        padding: 16,
        marginHorizontal: 24,
    },
    imageContainer: {
    },
    image: {
        width: '100%',
        borderRadius: 32,
        height: 190,
        borderWidth: 2,
        borderColor: '#fff',

    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold'
    },
    date: {
        color: '#fff',
        fontSize: 16,
    },
    buttonContainer:{
        alignItems: 'flex-end',

    }
});

export default TodaysImage;