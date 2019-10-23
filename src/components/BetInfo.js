import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {deleteBet, makeBet} from "../actions/betActions";

class BetInfo extends Component {
  render() {
    const { name, price,  deleteBet: deleteABet } = this.props;
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
          onPress={()=> {}}
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

// const mapDispatchToProps = dispatch => ({
//   deleteBet: (id)=> dispatch(deleteBet(id))
// });

export default connect(null, null)(BetInfo);