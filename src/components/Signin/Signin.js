import React, {Component} from 'react';
import { connect } from "react-redux";
import { loginUser, loading } from "../../redux/actions/actions";
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
      }
    })
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
        <Spinner/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
    loading: bindActionCreators(loading, dispatch),
  }
};

export default connect(null, mapDispatchToProps)(withRouter(Signin));