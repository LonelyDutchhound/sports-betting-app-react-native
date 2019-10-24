import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { toggleBet } from "../actions/betActions";

class BetInfo extends Component {
  render() {
    const { name, price, id, toggleBet: toggleABet } = this.props;
    return (
      <View style={styles.infoContainer}>
        <Text>
          { name }
        </Text>
        <Text>
          { price }
        </Text>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={()=> toggleABet(id)}
        >
          <Text>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  infoContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '97%',
    backgroundColor: 'white',
    margin: 5,
    borderWidth: 1,
    borderColor: 'lightgrey'
  },
  deleteBtn:{
    height: 40,
    width: 100,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  }
});

const mapDispatchToProps = dispatch => ({
  toggleBet: (id)=> dispatch(toggleBet(id))
});

export default connect(null, mapDispatchToProps)(BetInfo);