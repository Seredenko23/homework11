import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import Notification from "./components/Notification/Notification";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import './App.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation/>
        <Notification/>
      </div>
    </Provider>
  );
}

// function mapStateToProps(state) {
//   return {
//
//   }
// }

export default App;
