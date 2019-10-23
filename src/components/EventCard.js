import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export const EventCard = ({ name }) =>{
  console.log( name );
  return(
    <View style={styles.container}>
      <Text>
        { name }
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    height: 30,
    width: 200,
    backgroundColor: 'lightgrey',
    margin: 5
  }
});