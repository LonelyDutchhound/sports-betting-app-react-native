import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleBet } from '../../actions/betActions';
import { styles } from './styles';

const BetBtn = ({
  name, price, id, toggleBet: toggleABet, selections,
}) => {
  const selection = selections.filter((bet) => bet.id === id)[0];
  const handleBetPress = () => toggleABet(id);
  return (
    <TouchableOpacity
      style={selection.isSelected ? styles.btn_sel : styles.btn}
      onPress={handleBetPress}
    >
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}>{name}</Text>
        <Text style={styles.btnText}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({ selections: state.selections });

const mapDispatchToProps = (dispatch) => ({
  toggleBet: (id) => dispatch(toggleBet(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BetBtn);
