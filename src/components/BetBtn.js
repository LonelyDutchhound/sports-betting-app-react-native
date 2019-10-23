import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {makeBet, deleteBet} from "../actions/betActions";

class BetBtn extends Component {
  state = { isSelected: false };

  render() {
    const { name, price, id, makeBet: makeABet, deleteBet: deleteABet } = this.props;
    return (
      <TouchableOpacity
        style={ this.state.isSelected ? styles.btn_sel: styles.btn}
        onPress={()=> {
          if (this.state.isSelected) {
            this.setState({ isSelected: false });
            deleteABet(id);
          } else {
            this.setState({ isSelected: true });
            makeABet(id);
          }
        }}
      >
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
    bets: state.bets
  }
};

const mapDispatchToProps = dispatch => ({
    makeBet: (id)=> dispatch(makeBet(id)),
    deleteBet: (id)=> dispatch(deleteBet(id))
});

export default connect( mapStateToProps, mapDispatchToProps )(BetBtn);
