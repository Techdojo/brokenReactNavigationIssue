// Router.tsx
// Create the top level navigation routers.

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
// import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoadingScreen from './views/LoadingScreen';
import LoginScreen from './views/LoginScreen';
import HomeScreen from './views/HomeScreen';
import CauseDetails from './views/CauseDetails';

const AuthStack = createStackNavigator({
    Login: LoginScreen,
});

const AppStack = createStackNavigator({
    Home: HomeScreen,
    Cause: CauseDetails,
});

export default createAppContainer(
    createSwitchNavigator({
        Loading: LoadingScreen,

        // Login: LoginScreen,
        // Home: HomeScreen,
        // Cause: CauseDetails,
    
        RouteAuthStack: AuthStack,
        RouteAppStack: AppStack
    }, {
        initialRouteName: 'Loading'
    })
);