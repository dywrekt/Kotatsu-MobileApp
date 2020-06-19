import React, {useState} from 'react';
import { StyleSheet, View, Text, ButtonSafeAreaView,TouchableOpacity,FlatList,SafeAreaView} from 'react-native';
import { globalStyles } from '../../../styles/global';
const GLOBAL = require('../../assets/Globals');
const lessondata = ("../../assets/json/" + global.currentLesson + ".json");
import jsondata from "../../assets/json/1.json";

export default function Lessen({ App, navigation }) {
     
    const DATA = jsondata["data"];
      
      function Item({ id, title, selected, onSelect }) {
        return (
          <View style={styles.container}>
        <TouchableOpacity 
        style={styles.button}
        title="Go to screen 2"
        onPress={() => this.props.navigation.navigate('Screen2')} />
          <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
              styles.item,
              { backgroundColor: selected ? '#829BC8' : '#a3c2fa' },
            ]}
          >
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
          </View>
        );
      }


        const [selected, setSelected] = React.useState(new Map());
      
        const onSelect = React.useCallback(
          id => {
            const newSelected = new Map(selected);
            newSelected.set(id, !selected.get(id));
      
            setSelected(newSelected);
          },
          [selected],
        );
      
        return (
          <SafeAreaView style={globalStyles.container}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Item
                  id={item.id}
                  title={item.title}
                  selected={!!selected.get(item.id)}
                  onSelect={onSelect}
                />
              )}
              keyExtractor={item => item.id}
              extraData={selected}
            />
          </SafeAreaView>
        );
      }
      

      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        item: {
          backgroundColor: '#a3c2fa',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
        },
        title: {
          fontSize: 15,
        },
        button: {
          alignItems: "baseline",
          backgroundColor: "red",
          width: '45%',
          
        }
      });
      