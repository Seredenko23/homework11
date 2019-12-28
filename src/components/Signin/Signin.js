import React, {Component} from 'react';
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/actions";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
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

  submitHandler = (event) => {
    event.preventDefault();
    let { email, password } = this.state;
    if(email === 'admin@gmail.com' && password === 'admin') {
      this.props.history.push('/main');
      this.props.loginUser();
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}
              className="sign-in-form">
          <h3>Login</h3>
          <label>
            Email
            <input type="email"
                   name='email'
                   placeholder={'Enter your email...'}
                   onChange={this.changeHandle}/>
          </label>
          <label>
            Password
            <input type="password"
                   name='password'
                   placeholder={'Enter your password...'}
                   onChange={this.changeHandle}/>
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

export default connect(null, mapDispatchToProps)(withRouter(Signin));