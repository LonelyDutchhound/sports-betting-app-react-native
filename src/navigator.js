import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import EventList from '../src/screens/EventList';
import BetSlip from '../src/screens/BetSlip';

const Navigator = createDrawerNavigator({
    Events: {
      screen: EventList
    },
    Bets: {
      screen: BetSlip
    }
  },
  {
    initialRouteName: 'Events',
    drawerType: 'front',
    drawerPosition: 'right',
    contentComponent: BetSlip
  }
);

const AppContainer = createAppContainer(Navigator);
export default AppContainer;