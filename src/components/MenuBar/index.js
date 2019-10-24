import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from "./styles";

const Index = (props) => {
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

export default Index;