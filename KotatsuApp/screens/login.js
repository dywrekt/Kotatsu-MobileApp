import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput, 
  TouchableOpacity,
  Image, 
  // KeyboardAvoidingView,
  Keyboard,
  // ActivityIndicator,
  // StatusBar,
  // AsyncStorage,
} from 'react-native';
 


//Temporary password and username
const userInfo = {username: 'admin', password:'123456'};
export default class LoginScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {username:'',password:''}
  }

  //Login field
  render() {
    return (
      <View style={styles.container} behavior="padding">
        

        <View style={styles.logoContainer}>
          <Image style={styles.logo} 
        source={require('./assets/kotatsu.png')}
        />
        </View>
        <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(username)=>this.setState({username})}
        value={this.state.username}
        autoCapitalize="none"
        />
        <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(password)=>this.setState({password})}
        value={this.state.password}
        secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.btnEnter}
          onPress={this._login}
          >
          <Text style={styles.btnEnterText}>INLOGGEN</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _login = async () => {
      if(userInfo.username===this.state.username && userInfo.password===this.state.password){
        // alert('Logged');
        this.props.navigation.navigate('Home')
        Keyboard.dismiss(); 
        // await AsyncStorage.setItem('logged',true);
        // this.props.navigation.navigate('App');
      }else{
        alert('Username or Password wrong!');
      }
  }
  // _logout = async () => {
  //   await AsyncStorage.clear();
  //   this.props.navigation.navigate('Login');
  // }
}


//Styling for the login field
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    input: {
      margin: 15,
      height: 45,
      padding:5,
      fontSize:16,
      borderBottomWidth:1,
      borderBottomColor: '#FFAF5E'
    },
    btnEnter: {
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: '#FFAF5E',
      alignItems: 'center',
      marginLeft: 15,
      marginRight: 15,
      padding:10
    },
    btnEnterText: {
      color:'#FFFFFF',
      fontWeight: '700'
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      width: 120,
      height: 120,
    }
  });