import { createAppContainer, createSwitchNavigator } from 'react-navigation'; // No curso importa o 'react-native'

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main,
    })
);

