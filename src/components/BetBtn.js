import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { toggleBet } from "../actions/betActions";

class BetBtn extends Component {

  render() {
    const { name, price, id, toggleBet: toggleABet, selections } = this.props;
    const selection = selections.filter( bet => bet.id === id )[0];
    return (
      <TouchableOpacity
        style={ selection.isSelected ? styles.btn_sel: styles.btn}
        onPress={ () => toggleABet(id) }
      >
        <View style={ styles.btnContainer }>
          <Text style={ styles.btnText }>
            { name }
          </Text>
          <Text style={ styles.btnText }>
            { price }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn:{
    height: 40,
    width: 100,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  },
  btn_sel:{
    height: 40,
    width: 100,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgreen'
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
    selections: state.selections,
  }
};

const mapDispatchToProps = dispatch => ({
    toggleBet: (id) => dispatch(toggleBet(id))
});

export default connect( mapStateToProps, mapDispatchToProps )(BetBtn);
