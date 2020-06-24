import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'native-base';
const GLOBAL = require('../../assets/Globals');
const lessondata = ("../../assets/json/" + global.currentLesson + ".json");

export default class App extends Component {
  state={
    selectedLang1:false,

  }

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  // renderSeparatorView = () => {
  //   return (
  //     <View style={{
  //         height: 1, 
  //         width: "100%",
  //         backgroundColor: "#CEDCCE",
  //       }}
  //     />
  //   );
  // };

  render() {
    const { data, isLoading, selectedLang1 } = this.state;

    return (
    <View style={styles.container}>
      <View style={styles.item}>
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            // ItemSeparatorComponent={this.renderSeparatorView}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (   
              <View style={{flexDirection: 'row'}}>    
               <Text style={ 
                {...styles.checkBoxTxt,
                  color:this.state.selectedLang1?"#fc5185":"gray",
                  fontWeight:this.state.selectedLang1? "bold" :"normal"
                }}>{item.title}</Text>
                <CheckBox checked={selectedLang1} color="#fc5185" onPress={()=>this.setState({selectedLang1:!selectedLang1})}/>
                </View>
            )}
            />
        )}
      </View>
          <TouchableOpacity 
            onPress={(data) => navigate('Screen2')}
            style={styles.submit}>
            <Text style={{color:"white"}}>SUBMIT</Text>
          </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40
  },
  item:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:100,
    flexDirection:"row",
  },
  checkBoxTxt:{
    marginLeft:20
  },
  submit:{
    width:"80%",
    backgroundColor:"#fc5185",
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:40
  }
});









