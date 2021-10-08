import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TopTabs from '../tabs/TopTabs';
import ShowMovie from '../screens/ShowMovie';
import ShowTv from '../screens/ShowTv';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Index' component={TopTabs} options={{ headerShown: false }}
            />

            <Stack.Screen
                name='ShowMovie' component={ShowMovie} options={{ headerShown: true }}
            />

            <Stack.Screen
                name='ShowTv' component={ShowTv} options={{ headerShown: true }}
            />
        </Stack.Navigator>
    </NavigationContainer>)
}

export default AppStack;