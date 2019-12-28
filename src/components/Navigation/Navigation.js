import React, {Component} from 'react';
import {BrowserRouter, Switch, Link} from "react-router-dom";
import { connect } from "react-redux";
import DummyComponent from "../DummyComponent/DummyComponent";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
        { this.props.isLoggedIn &&
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
        }
          <Switch>
            <ProtectedRoute path='/main'>
              <DummyComponent text={'Main Page'}/>
            </ProtectedRoute>
            <ProtectedRoute path='/about'>
              <DummyComponent text={'About Page'}/>
            </ProtectedRoute>
            <ProtectedRoute path='/team'>
              <DummyComponent text={'Team Page'}/>
            </ProtectedRoute>
          </Switch>
        </nav>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps)(Navigation);