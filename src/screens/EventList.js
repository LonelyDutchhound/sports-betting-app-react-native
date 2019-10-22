import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import MenuBar from "../components/MenuBar";

const EventList = (props) => {
  return(
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <MenuBar navigate={props.navigation.toggleDrawer} isSlipOpened={false}/>
      <Text>
        Events
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

export default EventList;