import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./src/reducers/reducer";
import AppContainer from "./src/navigator";
import { styles } from "./Styles";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <AppContainer />
    </View>
  </Provider>
);

export default App;


