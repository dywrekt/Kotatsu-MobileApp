import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
//import Feed from './tabs/Feed'; //Deze moeten nog aangemaakt worden wanneer we zover zijn
import Courses from './tabs/Courses';
//import Score from './tabs/Score';//Deze moeten nog aangemaakt worden wanneer we zover zijn
//import Achievements from './tabs/Achievements';//Deze moeten nog aangemaakt worden wanneer we zover zijn

class FeedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Feed!</Text>
      </View>
    )
  }
}


class CourseScreen extends React.Component {
  render() {
    return (
        <Courses />
    )
  }
}


class ScoreScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Scores!</Text>
      </View>
    )
  }
}


class AchievementScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Achievements!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Feed: {
      screen: FeedScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 style={[{color: tintColor}]} size={25} name={'home'} />
          </View>
        ),
      }
    },
    Courses: {
      screen: CourseScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <AntDesign style={[{color: tintColor}]} size={25} name={'profile'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { backgroundColor: '#2163f6' },
      }
    },
    Scores: {
      screen: ScoreScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 style={[{color: tintColor}]} size={22} name={'star'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: { backgroundColor: '#2c6d6a' },
      }
    },
    Achievements: {
      screen: AchievementScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 style={[{color: tintColor}]} size={25} name={'medal'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ebaabd',
        barStyle: { backgroundColor: '#d13560' },
      }
    },
  },
  {
    initialRouteName: 'Feed',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#6948f4' },
  }
);

export default createAppContainer(TabNavigator);