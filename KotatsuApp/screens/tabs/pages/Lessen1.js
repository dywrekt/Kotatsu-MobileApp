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
          <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
              styles.item,
              { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
            ]}
          >
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
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
          backgroundColor: '#f9c2ff',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
        },
        title: {
          fontSize: 32,
        },
      });
      