import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import DummyComponent from "../DummyComponent/DummyComponent";

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/main">main</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Dashboard</Link>
            </li>
          </ul>
          <Switch>
            <Route path='/main'>
              <DummyComponent text={'Main Page'}/>
            </Route>
            <Route path='/about'>
              <DummyComponent text={'About Page'}/>
            </Route>
            <Route path='/team'>
              <DummyComponent text={'Team Page'}/>
            </Route>
          </Switch>
        </nav>
      </BrowserRouter>
    );
  }
}

export default Navigation;