import React, {Component} from 'react';
import {BrowserRouter, Switch, Link, Route, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/sign-in"
import DummyComponent from "../DummyComponent/DummyComponent";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Signin from "../Signin/Signin";
import './Navigation.css'
import {bindActionCreators} from "redux";

class Navigation extends Component {

  logoutHandler = () => {
    sessionStorage.clear();
    this.props.logoutUser();
  };

  render() {
    let {isLoggedIn, user} = this.props;
    return (
      <BrowserRouter>
        <div>
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
              <button onClick={this.logoutHandler} className="log-out">
                Log out
              </button>
            </div>
          </div>
        }
          <Switch>
            <Route path={'/sign-in'}>
              {this.props.isLoggedIn ? <Redirect to={'/main'}/> : (<Signin/>)}
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
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.signIn.user,
    isLoggedIn: state.signIn.isLoggedIn,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: bindActionCreators(logoutUser, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
