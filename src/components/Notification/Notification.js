import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Notification.css'

class Notification extends Component {

  render() {
    let { message, type, visible } = this.props;
    if (!visible) return null;
    return (
      <div className={`notification flex-row ${type}`}>
        {message}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.notification.message,
    type: state.notification.type,
    visible: state.notification.visible,
  };
}

export default connect(mapStateToProps)(Notification);