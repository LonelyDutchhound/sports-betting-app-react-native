import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export const BetBtn = (props) =>{
  return (
    <TouchableOpacity
        onPress={()=>{
        console.log('hi') }}
        style={styles.btn}>
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}>
          Bet name
        </Text>
        <Text style={styles.btnText}>
          Bet value
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn:{
    height: 40,
    width: 100,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  },
  btnContainer:{
    height: 40,
    width: 100,
    borderWidth: 1,
    borderColor: 'lightgrey'
  },
  btnText:{
    color: 'white'
  }
});