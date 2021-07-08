import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LoginRoutes from './login.routes';

// ACHO QUE A FUNÇÃO DESTE É CHAMAR PRIEMIRO A PÁGINA LOGIN

export default function Routes() {
    return(
        <NavigationContainer>
            <LoginRoutes/>
        </NavigationContainer>
    )
}