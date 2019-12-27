import React, {Component} from 'react';

class DummyComponent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default DummyComponent;