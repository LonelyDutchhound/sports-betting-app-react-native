import React, { useCallback } from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import MenuBar from '../../components/MenuBar';
import BetInfo from './BetInfo';
import { styles } from './styles';

const BetSlip = ({ selections, navigation }) => {
  const shownSelections = selections.filter(
    (selection) => selection.isSelected === true,
  );

  const renderItem = useCallback(({ item }) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <BetInfo
      name={item.name}
      market={item.market}
      price={item.price}
      id={item.id}
    />
  ), []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <MenuBar
        navigate={navigation.toggleDrawer}
        isSlipOpened
      />
      <FlatList
        style={styles.listStyle}
        data={shownSelections}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  selections: state.selections,
});

export default connect(mapStateToProps)(BetSlip);
