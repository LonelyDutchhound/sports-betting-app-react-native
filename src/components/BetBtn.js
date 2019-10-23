import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {makeBet, deleteBet} from "../actions/betActions";

class BetBtn extends Component {

  render() {
    console.log(this.props);
    const { name, price, id, bets, dispatch } = this.props;
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={(id)=> { makeBet(id);
          console.log(bets)}}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>
            { name }
          </Text>
          <Text style={styles.btnText}>
            { price }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
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
    textAlign: 'center',
    color: 'white'
  }
});

const mapStateToProps = state => {
  return {
    bets: state.bets
  }
};

const mapDispatchToProps = dispatch => {
  return {
    makeBet: ()=> dispatch(makeBet(id)),
    deleteBet: ()=> dispatch(deleteBet(id))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(BetBtn);
