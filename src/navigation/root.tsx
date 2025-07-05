import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ROUTES } from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { DetailScreen, HomeScreen, LoginScreen } from '../screens';

export type InitialNavigationStackParamList = {
    [ROUTES.LOGIN]: undefined;
    [ROUTES.HOME]: undefined;
    [ROUTES.DETAIL]: undefined;
};
const Stack = createNativeStackNavigator<InitialNavigationStackParamList>();

const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                animation: 'fade_from_bottom',
                animationDuration: 250
            }}>

                {/* <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} /> */}
                <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
                <Stack.Screen name={ROUTES.DETAIL} component={DetailScreen} />

            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Root