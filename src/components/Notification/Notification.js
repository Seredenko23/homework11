import React, {Component} from 'react';
import {connect} from 'react-redux';

class Notification extends Component {
  render() {
    return (
      <div className='notification'>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps,)(Notification);