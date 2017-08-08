import React, { Component } from 'react';
import './App.css';
import Test from './test';

class App extends Component {
  constructor() {
    super();
    this.state = { isClicked: false };
  }

  isClicked() {
    this.setState({
      isClicked: true
    });
  }
  render() {
    return (
      <div>
        <div>Lolllllllll</div>
        <button onClick={this.isClicked.bind(this)}>Click</button>
        {this.state.isClicked ?
          <Test /> : null
        }

        <div>Laterrrrr</div>
      </div>
    );
  }
}


export default App;
