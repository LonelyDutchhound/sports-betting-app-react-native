import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import {BetBtn} from "./BetBtn";


export const MarketCard = (props) => {
  return (
    <View style={styles.textContainer}>
      <Text>
        Market
      </Text>
      <View style={styles.btnsContainer}>
        <BetBtn />
        <BetBtn />
      </View>
    </View>

  )
};

const styles = StyleSheet.create({
  textContainer:{
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
  },
  btnsContainer:{
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});