import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import Center from './components/Center';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      color: "green"
    };
  }

  render() {
    console.log(this.state.color);
    return (
      <div>
        <NavigationBar/>
        <Center/>
      </div>
    );
  }
}

export default App;
