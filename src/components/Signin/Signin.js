import React, {Component} from 'react';
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/actions";
import './Signin.css'
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";

class Signin extends Component {

  submitHandler = (event) => {
    event.preventDefault();
    this.props.history.push('/main');
    this.props.loginUser(true);
  };

  render() {
    return (
      <div className={'form-wrapper'}>
        <form className='sign-in-form' onSubmit={this.submitHandler}>
          <h3>Sign in</h3>
          <label>
            Email
           <input placeholder={'Enter your email...'}/>
          </label>
          <label>
            Password
            <input placeholder={'Enter yor password...'}/>
          </label>
          <button type={'submit'}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: bindActionCreators(loginUser, dispatch)
  }
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signin));