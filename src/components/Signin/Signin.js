import React, {Component} from 'react';
import { connect } from "react-redux";
import { loginUser, loading } from "../../redux/actions/sign-in";
import { showNotificationWithTimeout } from "../../redux/actions/notification";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import mockData from "../../data/MOCK_DATA"
import Spinner from "../Spinner/Spinner";
import './Signin.css'

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  changeHandle = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  submitHandler = async (event) => {
    event.preventDefault();
    this.props.loading(true);
    let data = await new Promise((resolve) => {
      setTimeout(() => resolve(mockData), 3000)
    });
    let { email, password } = this.state;
    await data.forEach(user => {
      if(email === user.email && password === user.password) {
        this.props.loginUser(user);
        this.props.history.push('/main');
        this.props.showNotificationWithTimeout('success', 'You logged in!')
      }
    });
    this.props.loading(false);
  };

  render() {
    return (
      <div className='sign-in flex-column'>
        <form onSubmit={this.submitHandler}
              className="sign-in-form">
          <h3>Login</h3>
          <div className='input-wrapper flex-column'>
            <label className='login-input-label' htmlFor='email'>Email</label>
            <input className='login-input'
                   type="email"
                   name='email'
                   onChange={this.changeHandle}/>
          </div>
          <div className='input-wrapper flex-column'>
            <label className='login-input-label' htmlFor='password'>Password</label>
            <input className='login-input'
                   type="password"
                   name='password'
                   onChange={this.changeHandle}/>
          </div>
          <button className='submit-button' type={'submit'}>Submit</button>
        </form>
        <Spinner/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
    loading: bindActionCreators(loading, dispatch),
    showNotificationWithTimeout: bindActionCreators(showNotificationWithTimeout, dispatch)
  }
};

export default connect(null, mapDispatchToProps)(withRouter(Signin));