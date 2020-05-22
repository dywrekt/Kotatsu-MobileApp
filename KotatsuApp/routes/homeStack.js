import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/login';
import Home from '../screens/home';


const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Home',
            headerShown: false,
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerShown: false
    }
},
}



const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);