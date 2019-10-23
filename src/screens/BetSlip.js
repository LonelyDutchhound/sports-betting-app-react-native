import React, { Component } from 'react';
import {View, StatusBar, FlatList, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import MenuBar from "../components/MenuBar";
import BetInfo from "../components/BetInfo";

class BetSlip extends Component {

  render(){
    const { bets, navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <MenuBar navigate={ navigation.toggleDrawer} isSlipOpened={true}/>
        <FlatList
          style={styles.listStyle}
          data={ bets }
          renderItem={({ item }) => <BetInfo name={ item.name } price={ item.price }/>}
          keyExtractor={ item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%'
  },
  listStyle:{
    flex: 1,
    flexDirection: 'column'
  }
});

const mapStateToProps = state => ({
  bets: state.bets
});

export default connect(mapStateToProps)(BetSlip);