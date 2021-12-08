import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LoginRoutes from './login.routes';
import HomeStack from "./home.routes"
import { useAuth } from '../hook/auth';

// ACHO QUE A FUNÇÃO DESTE É CHAMAR PRIEMIRO A PÁGINA LOGIN

export default function Routes() {
    const { access_token } = useAuth()
    return (
        <NavigationContainer>
            {access_token ? <HomeStack /> : <LoginRoutes />}
        </NavigationContainer>
    )
}