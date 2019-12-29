import React, {Component} from 'react';
import {BrowserRouter, Switch, Link, Route, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import DummyComponent from "../DummyComponent/DummyComponent";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Signin from "../Signin/Signin";
import './Navigation.css'

class Navigation extends Component {

  render() {
    let {isLoggedIn, user} = this.props;
    return (
      <BrowserRouter>
        <nav>
        { isLoggedIn &&
          <div className="nav-bar flex-row">
            <div className="navigation flex-row">
              <div className="nav-link flex-row text-white">
                <Link to="/main">Main</Link>
              </div>
              <div className="nav-link flex-row text-white">
                <Link to="/about">About</Link>
              </div>
              <div className="nav-link flex-row text-white">
                <Link to="/team">Team</Link>
              </div>
            </div>
            <div className="user flex-row">
              <p className="username text-white">
                {`${user.first_name} ${user.last_name}`}
              </p>
            </div>
          </div>
        }
          <Switch>
            <Route path={'/sign-in'}>
              <Signin/>
            </Route>
            <ProtectedRoute path='/main'>
              <DummyComponent text={'Main Page'}/>
            </ProtectedRoute>
            <ProtectedRoute path='/about'>
              <DummyComponent text={'About Page'}/>
            </ProtectedRoute>
            <ProtectedRoute path='/team'>
              <DummyComponent text={'Team Page'}/>
            </ProtectedRoute>
            <Route path={'/'}>
              <Redirect to={'sign-in'}/>
            </Route>
          </Switch>
        </nav>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps)(Navigation);