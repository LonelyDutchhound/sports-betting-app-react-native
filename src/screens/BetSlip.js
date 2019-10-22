import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import MenuBar from "../components/MenuBar";

const BetSlip = (props) => {
  return(
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <MenuBar navigate={props.navigation.toggleDrawer} isSlipOpened={true}/>
      <Text>
        Bets
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%'
  }
});

export default BetSlip;