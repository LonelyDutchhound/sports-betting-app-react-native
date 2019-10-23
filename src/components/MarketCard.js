import React from 'react';
import {Text, View, StyleSheet, FlatList} from "react-native";
import BetBtn from "./BetBtn";


export const MarketCard = ({ name, selections }) => {
  return (
    <View style={styles.textContainer}>
      <Text>
        { name }
      </Text>
        <FlatList
          style={styles.btnsContainer}
          data={ selections }
          renderItem={ ({ item }) =>
            <BetBtn
              name={ item.name }
              price ={ item.price }
              id={ item.id }/>
          }
          keyExtractor={ item => item.id }
        />
    </View>

  )
};

const styles = StyleSheet.create({
  textContainer:{
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
  },
  btnsContainer:{
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});