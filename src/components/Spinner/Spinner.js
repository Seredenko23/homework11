import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Spinner.css'

class Spinner extends Component {
  render() {
    return (
       <div className={`loader ${this.props.isLoading ? '' : 'display-none'}`}>
         Loading...
       </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
  };
}

export default connect(mapStateToProps)(Spinner);