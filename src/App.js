import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./redux/reducers/reducer";
import './App.css';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation/>
      </div>
    </Provider>

  );
}

export default App;
