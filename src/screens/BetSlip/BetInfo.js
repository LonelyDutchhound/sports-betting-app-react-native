import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { toggleBet } from '../../actions/betActions';
import { styles } from './styles';

const BetInfo = ({
  name, market, price, id, toggleBet: toggleABet,
}) => {
  const handleDeletePress = () => toggleABet(id);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <View style={styles.infoContainer}>
      <Text>
        {name}
        {' '}
        {market}
      </Text>
      <Text>{price}</Text>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={handleDeletePress}
      >
        <View style={styles.deleteBtn}>
          <Text>Delete</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleBet: (id) => dispatch(toggleBet(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BetInfo);
