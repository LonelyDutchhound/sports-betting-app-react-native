import React from 'react';
import {View, Text, FlatList, StyleSheet } from 'react-native';
import { MarketCard} from '../components/MarketCard';

export const EventCard = ({ name, markets }) =>{
  if ( markets == false ) {
    return null;
  } else {
    return (
      <View style={styles.eventContainer}>
        <View>
          <Text>
            {name}
          </Text>
        </View>
        <FlatList
          style={ styles.list }
          data={ markets }
          renderItem={ ({ item }) => <MarketCard name={ item.name } selections ={ item.selections }/>}
          keyExtractor={ item => item.id }
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  eventContainer:{
    width: '97%',
    backgroundColor: 'white',
    margin: 5,
    borderWidth: 1,
    borderColor: 'lightgrey'
  }
});