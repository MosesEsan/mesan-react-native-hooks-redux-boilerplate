import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './welcome'
import HomeScreen from './home'

const AppStack = createStackNavigator({
    Welcome:{
        screen: WelcomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Welcome`,
        }),
    },
    Home:{
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Home`,
        }),
    } });

const Router = createAppContainer(AppStack);

export default Router;

