import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { MarketCard} from '../components/MarketCard';

export const EventCard = ({ name }) =>{
  return(
    <View style={styles.eventContainer}>
      <View>
        <Text>
          { name }
        </Text>
      </View>
      <MarketCard />
    </View>
  )
};

const styles = StyleSheet.create({
  eventContainer:{
    height: 100,
    width: '97%',
    backgroundColor: 'white',
    margin: 5,
    borderWidth: 1,
    borderColor: 'lightgrey'
  }
});