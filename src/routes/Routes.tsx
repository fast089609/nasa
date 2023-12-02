import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../views/Home';
import { RootStackParams } from '../types';
import Detail from '../views/Detail';

const Stack = createNativeStackNavigator<RootStackParams>();

const  routeScreenDefaultrOptions: NativeStackNavigationOptions = {
    headerTitleAlign: 'center'
}

const screenOptions: NativeStackNavigationOptions = {
    headerTitleStyle:{
        color:'#fff',
    },
    headerTintColor: '#fff',
    headerStyle:{
        backgroundColor: 'rgba(7,26,93,255)'
    },
}

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} options={routeScreenDefaultrOptions}/>
            <Stack.Screen name="Detail" component={Detail} options={routeScreenDefaultrOptions}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes