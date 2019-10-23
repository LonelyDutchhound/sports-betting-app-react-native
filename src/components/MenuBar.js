import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const MenuBar = (props) => {
  let navBtn;
  if (props.isSlipOpened) {
    navBtn = <Text style={styles.navBtnText}>X</Text>
  } else {
    navBtn = <Text style={styles.navBtnText}>Bets</Text>
  }
  return(
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.navBtn}
        onPress={() => props.navigate(props.route)}
      >
        {navBtn}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu:{
    flex: 0.08,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  navBtn:{
    width: 40,
    height: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  },
  navBtnText:{
    margin: 5,
    fontWeight: '900',
    color: 'white'
  }
});

export default MenuBar;