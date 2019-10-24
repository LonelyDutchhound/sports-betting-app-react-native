import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import EventList from './screens/EventList/EventList';
import BetSlip from './screens/BetSlip/BetSlip';

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